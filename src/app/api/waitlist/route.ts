import { NextResponse } from 'next/server';

export const runtime = 'edge'; // Ensure compatibility with Cloudflare Pages

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, role } = body;

    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required' }, { status: 400 });
    }

    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey) {
      console.warn('RESEND_API_KEY not configured. Mocking email send to support@zythera.co.in:', body);
      // Wait for a simulated network delay
      await new Promise((resolve) => setTimeout(resolve, 800));
      return NextResponse.json({ success: true, mocked: true });
    }

    // Send email using Resend REST API
    // Note: If you haven't verified your domain in Resend, you MUST use 'onboarding@resend.dev' as the 'from' address
    // and you can only send emails TO the email address you registered your Resend account with.
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Zythera Waitlist <onboarding@resend.dev>',
        to: ['support@zythera.co.in'], 
        subject: `Zythera Waitlist: New entry from ${name}`,
        html: `
          <h2>New Zythera Waitlist Entry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Role/Company:</strong> ${role || 'Not provided'}</p>
        `,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Resend API Error:', errorData);
      return NextResponse.json({ error: 'Failed to process waitlist request via Resend' }, { status: response.status });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending waitlist email:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
