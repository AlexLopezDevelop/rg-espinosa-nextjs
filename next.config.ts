import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "rygespinosa.com",
      },
      {
        protocol: "https",
        hostname: "www.abptech.com",
      },
    ],
  },
};

export default nextConfig;
