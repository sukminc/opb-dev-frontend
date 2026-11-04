import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  turbopack: {
    // The report imports its canonical snapshot from the standalone project folder.
    root: path.resolve(__dirname, ".."),
  },
};

export default nextConfig;
