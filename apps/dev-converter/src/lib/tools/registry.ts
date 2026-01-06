import {
  encodingTools,
  jsonDataTools,
  securityTools,
  textTools,
  timeTools,
  utilityTools,
} from "./tool-configs"
import { Tool } from "./types"

export const tools: Tool[] = [
  ...jsonDataTools,
  ...encodingTools,
  ...securityTools,
  ...textTools,
  ...timeTools,
  ...utilityTools,
]

export const getToolBySlug = (slug: string): Tool | undefined => {
  return tools.find(tool => tool.slug === slug)
}

export const getToolById = (id: string): Tool | undefined => {
  return tools.find(tool => tool.id === id)
}

export const getToolsByCategory = (categoryId: string): Tool[] => {
  return tools.filter(tool => tool.category === categoryId)
}

export const getAllTools = (): Tool[] => {
  return tools
}

export const searchTools = (query: string): Tool[] => {
  const lowercaseQuery = query.toLowerCase()
  return tools.filter(
    tool =>
      tool.name.toLowerCase().includes(lowercaseQuery) ||
      tool.description.toLowerCase().includes(lowercaseQuery) ||
      tool.keywords.some(keyword =>
        keyword.toLowerCase().includes(lowercaseQuery)
      )
  )
}
