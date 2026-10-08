import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // Required for Netlify Static Export
  output: "export",

  outputFileTracingRoot: path.resolve(__dirname),

  images: {
    // Required for static export
    unoptimized: true,

    formats: ["image/avif", "image/webp"],

    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },

  trailingSlash: true,
};

export default nextConfig;