import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
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
