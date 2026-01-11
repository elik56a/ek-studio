import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/"],
      },
      {
        userAgent: "Googlebot",
        allow: ["/", "/_next/static/"],
        disallow: ["/api/", "/admin/"],
      },
    ],
    sitemap: "https://devconverter.dev/sitemap.xml",
    host: "https://devconverter.dev",
  }
}
