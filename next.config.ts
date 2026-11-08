import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the project root so Turbopack doesn't pick up the stray
  // lockfile in the home directory and treat ~ as the workspace.
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;
