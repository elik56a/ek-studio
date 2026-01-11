import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/admin/",
          "/icon",
          "/apple-icon",
          "/manifest.webmanifest",
        ],
      },
    ],
    sitemap: "https://devconverter.dev/sitemap.xml",
  }
}
