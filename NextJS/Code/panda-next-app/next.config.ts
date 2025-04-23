import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        domains: ['fakestoreapi.com'], // ✅ Add this line
      }
};

export default nextConfig;