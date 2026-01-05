import { categories } from "@/lib/tools/categories"
import { getAllTools } from "@/lib/tools/registry"

export default function sitemap() {
  const baseUrl = "https://devconverter.com"
  const tools = getAllTools()

  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1,
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

  return routes
}
