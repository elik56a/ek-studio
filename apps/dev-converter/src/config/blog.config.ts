import type { BlogConfig } from "@ek-studio/blog"

/**
 * Blog configuration for DevConverter
 *
 * This configuration defines how the blog system operates for this app,
 * including content location, URL structure, SEO settings, and styling.
 */
export const blogConfig: BlogConfig = {
  // Content directory (relative to app root)
  contentDir: "content/blog",

  // URL base path for blog routes
  basePath: "/blog",

  // Number of posts per page
  postsPerPage: 12,

  // Site information for SEO and RSS
  siteName: "DevConverter",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://devconverter.dev",

  // Default author information
  author: {
    name: "DevConverter Team",
    email: "hello@devconverter.dev",
  },

  // Optional theme customization
  theme: {
    colors: {
      primary: "#3b82f6", // blue-500
      secondary: "#8b5cf6", // violet-500
    },
  },
}
