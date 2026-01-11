import { BlogContentManager } from "@ek-studio/blog"

import { categories } from "@/lib/tools/categories"
import { getAllTools } from "@/lib/tools/registry"

import { blogConfig } from "../config/blog.config"

// Stable dates for static content - only update when content actually changes
const STATIC_CONTENT_DATES = {
  homepage: new Date("2024-01-01"),
  about: new Date("2024-01-01"),
  privacy: new Date("2024-01-01"),
  terms: new Date("2024-01-01"),
  contact: new Date("2024-01-01"),
  faq: new Date("2024-01-01"),
  toolsRegistry: new Date("2024-01-01"), // Update when tools are added/removed
  categoriesIndex: new Date("2024-01-01"), // Update when categories change
}

export default async function sitemap() {
  const baseUrl = "https://devconverter.dev"
  const tools = getAllTools()

  // Use Set to prevent duplicate URLs
  const urlSet = new Set<string>()
  const routes: Array<{
    url: string
    lastModified: Date
    changeFrequency:
      | "always"
      | "hourly"
      | "daily"
      | "weekly"
      | "monthly"
      | "yearly"
      | "never"
    priority: number
  }> = []

  // Helper function to add route with duplicate prevention and trailing slash consistency
  const addRoute = (
    url: string,
    lastModified: Date,
    changeFrequency:
      | "always"
      | "hourly"
      | "daily"
      | "weekly"
      | "monthly"
      | "yearly"
      | "never",
    priority: number
  ) => {
    // Ensure consistent trailing slash handling (no trailing slash)
    const normalizedUrl =
      url.endsWith("/") && url !== baseUrl ? url.slice(0, -1) : url

    if (!urlSet.has(normalizedUrl)) {
      urlSet.add(normalizedUrl)
      routes.push({
        url: normalizedUrl,
        lastModified,
        changeFrequency,
        priority,
      })
    }
  }

  // Add static pages with stable dates
  addRoute(baseUrl, STATIC_CONTENT_DATES.homepage, "daily", 1)
  addRoute(`${baseUrl}/about`, STATIC_CONTENT_DATES.about, "monthly", 0.7)
  addRoute(`${baseUrl}/privacy`, STATIC_CONTENT_DATES.privacy, "monthly", 0.5)
  addRoute(`${baseUrl}/terms`, STATIC_CONTENT_DATES.terms, "monthly", 0.5)
  addRoute(`${baseUrl}/contact`, STATIC_CONTENT_DATES.contact, "monthly", 0.6)
  addRoute(`${baseUrl}/faq`, STATIC_CONTENT_DATES.faq, "monthly", 0.7)

  // Add tool pages with stable date based on tool registry updates
  tools.forEach(tool => {
    addRoute(
      `${baseUrl}/${tool.slug}`,
      STATIC_CONTENT_DATES.toolsRegistry,
      "weekly",
      0.8
    )
  })

  // Add categories index page
  addRoute(
    `${baseUrl}/categories`,
    STATIC_CONTENT_DATES.categoriesIndex,
    "monthly",
    0.7
  )

  // Add category pages with stable date based on category updates
  categories.forEach(category => {
    addRoute(
      `${baseUrl}/categories/${category.id}`,
      STATIC_CONTENT_DATES.categoriesIndex,
      "weekly",
      0.6
    )
  })

  // Add blog listing page
  addRoute(
    `${baseUrl}${blogConfig.basePath}`,
    STATIC_CONTENT_DATES.homepage,
    "daily",
    0.9
  )

  // Add blog posts with actual post dates
  const contentManager = new BlogContentManager(blogConfig)
  const posts = await contentManager.getAllPosts()

  posts.forEach(post => {
    addRoute(
      `${baseUrl}${blogConfig.basePath}/${post.slug}`,
      new Date(post.date),
      "monthly",
      0.8
    )
  })

  // Add blog tag pages with stable date
  const tags = await contentManager.getAllTags()

  tags.forEach(tag => {
    addRoute(
      `${baseUrl}${blogConfig.basePath}/tag/${tag}`,
      STATIC_CONTENT_DATES.homepage,
      "weekly",
      0.7
    )
  })

  return routes
}
