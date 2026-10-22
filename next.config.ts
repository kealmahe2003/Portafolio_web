import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  // 90 is used for the profile portrait so it keeps detail; 75 (default) for everything else.
  images: { qualities: [75, 90] },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return [
      { source: "/", destination: "/es", permanent: false },
      // Spanish URLs use /proyectos; keep a single canonical URL per page.
      { source: "/es/projects/:path*", destination: "/es/proyectos/:path*", permanent: true },
    ];
  },
  async rewrites() {
    return [{ source: "/es/proyectos/:path*", destination: "/es/projects/:path*" }];
  },
};

export default nextConfig;
