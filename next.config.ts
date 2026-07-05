import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Next.js 16 defaults this to 4 hours, which makes swapped images
    // (same filename, new content) appear stale for a long time.
    minimumCacheTTL: 60,
  },
};

export default nextConfig;
