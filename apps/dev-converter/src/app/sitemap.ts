import { BlogContentManager } from "@ek-studio/blog"

import { categories } from "@/lib/tools/categories"
import { getAllTools } from "@/lib/tools/registry"

import { blogConfig } from "../config/blog.config"

export default async function sitemap() {
  const baseUrl = "https://devconverter.dev"
  const tools = getAllTools()

  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
  ]

  // Add tool pages
  tools.forEach(tool => {
    routes.push({
      url: `${baseUrl}/${tool.slug}`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.8,
    })
  })

  // Add category pages
  categories.forEach(category => {
    routes.push({
      url: `${baseUrl}/categories/${category.id}`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.6,
    })
  })

  // Add blog listing page
  routes.push({
    url: `${baseUrl}${blogConfig.basePath}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: 0.9,
  })

  // Add blog posts
  const contentManager = new BlogContentManager(blogConfig)
  const posts = await contentManager.getAllPosts()

  posts.forEach(post => {
    routes.push({
      url: `${baseUrl}${blogConfig.basePath}/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })
  })

  // Add blog tag pages
  const tags = await contentManager.getAllTags()

  tags.forEach(tag => {
    routes.push({
      url: `${baseUrl}${blogConfig.basePath}/tag/${tag}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })
  })

  return routes
}
