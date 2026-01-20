import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  // Performance optimizations
  reactStrictMode: true,

  // Transpile packages from monorepo
  transpilePackages: ["@ek-studio/blog"],

  // Optimize images
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    minimumCacheTTL: 31536000,
  },

  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // Compress responses
  compress: true,

  // Production source maps (disable for faster builds)
  productionBrowserSourceMaps: false,

  // Experimental features for better performance
  experimental: {
    optimizePackageImports: [
      "@ek-studio/ui",
      "lucide-react",
      "@vercel/analytics",
      "@vercel/speed-insights",
    ],
    optimizeCss: true,
  },

  // Turbopack configuration (Next.js 16+)
  turbopack: {},

  // URL Canonicalization - Redirect www to non-www
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.(?<domain>.*)",
          },
        ],
        destination: "https://:domain/:path*",
        permanent: true,
      },
      // Redirect image routes with .png extension to without extension
      {
        source: "/opengraph-image.png",
        destination: "/opengraph-image",
        permanent: true,
      },
      {
        source: "/icon.png",
        destination: "/icon",
        permanent: true,
      },
      {
        source: "/apple-icon.png",
        destination: "/apple-icon",
        permanent: true,
      },
    ]
  },

  // Headers for better caching and security
  async headers() {
    const oneYearInSeconds = 31536000
    const oneYearFromNow = new Date()
    oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1)
    const isProduction = process.env.NODE_ENV === "production"

    return [
      {
        source: "/ads.txt",
        headers: [
          {
            key: "Content-Type",
            value: "text/plain; charset=utf-8",
          },
        ],
      },
      {
        source: "/:all*(svg|jpg|jpeg|png|gif|ico|webp|avif|woff|woff2)",
        headers: [
          {
            key: "Cache-Control",
            value: `public, max-age=${oneYearInSeconds}, immutable`,
          },
          {
            key: "Expires",
            value: oneYearFromNow.toUTCString(),
          },
        ],
      },
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/manifest.webmanifest",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, must-revalidate",
          },
        ],
      },
      {
        source: "/_next/static/chunks/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/:path*.(js|css)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
        ],
      },
    ]
  },

  // Optimize output
  output: "standalone",

  // Reduce bundle size
  modularizeImports: {
    "lucide-react": {
      transform: "lucide-react/dist/esm/icons/{{kebabCase member}}",
    },
  },
}

export default nextConfig
