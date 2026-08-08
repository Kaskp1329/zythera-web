import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, role } = body;

    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required' }, { status: 400 });
    }

    // Initialize nodemailer transporter
    // User needs to set SMTP_USER and SMTP_PASS in .env file
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER || 'placeholder@gmail.com',
        pass: process.env.SMTP_PASS || 'placeholder-password',
      },
    });

    const mailOptions = {
      from: process.env.SMTP_USER || 'placeholder@gmail.com',
      to: 'ap3435189@gmail.com', // User's requested email
      subject: `Zythera Waitlist: New entry from ${name}`,
      text: `
        A new user has joined the Zythera waitlist:
        
        Name: ${name}
        Email: ${email}
        Role/Company: ${role || 'Not provided'}
      `,
      html: `
        <h2>New Zythera Waitlist Entry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Role/Company:</strong> ${role || 'Not provided'}</p>
      `,
    };

    // If environment variables are not set, we'll log it and return success for the demo
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.warn('SMTP credentials not configured. Mocking email send to ap3435189@gmail.com:', body);
      // Wait for a simulated network delay
      await new Promise((resolve) => setTimeout(resolve, 800));
      return NextResponse.json({ success: true, mocked: true });
    }

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending waitlist email:', error);
    return NextResponse.json({ error: 'Failed to process waitlist request' }, { status: 500 });
  }
}
