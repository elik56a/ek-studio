import { Category } from "./types"
import { categoryConfigs } from "./category-config"

// Convert CategoryConfig to Category (for backward compatibility)
export const categories: Category[] = categoryConfigs.map(config => ({
  id: config.id,
  name: config.name,
  description: config.description,
  icon: config.icon,
  tools: config.tools,
}))

export const getCategoryById = (id: string): Category | undefined => {
  return categories.find(cat => cat.id === id)
}

export const getCategoryByToolId = (toolId: string): Category | undefined => {
  return categories.find(cat => cat.tools.includes(toolId))
}
