import { Tool } from "./types"
import { jsonDataTools } from "./tool-configs/json-data-tools"
import { encodingTools } from "./tool-configs/encoding-tools"
import { securityTools } from "./tool-configs/security-tools"
import { textTools } from "./tool-configs/text-tools"
import { timeTools } from "./tool-configs/time-tools"
import { utilityTools } from "./tool-configs/utility-tools"

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
