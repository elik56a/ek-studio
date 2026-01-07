import {
  encodingTools,
  jsonDataTools,
  securityTools,
  textTools,
  timeTools,
  utilityTools,
} from "./tool-configs"
import { getToolComponent } from "./component-loader"
import { Tool } from "./types"

// Add components dynamically to avoid circular dependencies
const toolsWithComponents: Tool[] = [
  ...jsonDataTools,
  ...encodingTools,
  ...securityTools,
  ...textTools,
  ...timeTools,
  ...utilityTools,
].map(tool => ({
  ...tool,
  component: getToolComponent(tool.id) || undefined,
}))

export const tools: Tool[] = toolsWithComponents

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
