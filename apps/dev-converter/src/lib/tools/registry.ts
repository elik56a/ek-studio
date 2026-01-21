import * as allToolConfigs from "@/tools/configs"

import { sortToolsByOrder } from "./categories"
import { getToolComponent } from "./component-loader"
import { Tool } from "./types"

const toolConfigs = Object.values(allToolConfigs).filter(
  (config): config is Tool => typeof config === "object" && "id" in config
)

const toolsWithComponents: Tool[] = toolConfigs.map(tool => ({
  ...tool,
  component: getToolComponent(tool.componentId ?? tool.id) || undefined,
}))

export const tools: Tool[] = toolsWithComponents

export const getToolBySlug = (slug: string): Tool | undefined => {
  return tools.find(tool => tool.slug === slug)
}

export const getToolById = (id: string): Tool | undefined => {
  return tools.find(tool => tool.id === id)
}

export const getToolsByCategory = (categoryId: string): Tool[] => {
  const tools = toolsWithComponents.filter(tool => tool.category === categoryId)
  return sortToolsByOrder(tools)
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


export const getToolsCount = (): number => {
  return Math.floor(tools.length / 5) * 5
}
