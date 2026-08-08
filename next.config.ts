import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/admin/zythera-os/:path*',
        // TODO: Replace this destination with your actual internal Z Core API URL
        destination: 'https://zythera-api.onrender.com/:path*', 
      },
    ];
  },
};

export default nextConfig;
