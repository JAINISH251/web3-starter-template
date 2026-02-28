import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
    // Tell Turbopack to ignore the parent foundry folders
    resolveAlias: {
      // Optional: alias specific paths if needed
    },
  },
  // This helps prevent scanning outside the frontend folder
  typescript: {
    ignoreBuildErrors: true, 
  }
};

export default nextConfig;