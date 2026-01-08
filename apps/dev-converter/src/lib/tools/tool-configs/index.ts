import { Tool } from "../types"
import { encodingTools } from "./encoding-tools"
import { jsonDataTools } from "./json-data-tools"
import { securityTools } from "./security-tools"
import { textTools } from "./text-tools"
import { timeTools } from "./time-tools"
import { utilityTools } from "./utility-tools"

export { jsonDataTools } from "./json-data-tools"
export { encodingTools } from "./encoding-tools"
export { securityTools } from "./security-tools"
export { textTools } from "./text-tools"
export { timeTools } from "./time-tools"
export { utilityTools } from "./utility-tools"

export const allTools: Tool[] = [
  ...jsonDataTools,
  ...encodingTools,
  ...securityTools,
  ...textTools,
  ...timeTools,
  ...utilityTools,
]

// Export tool slugs for category configuration
export const jsonDataToolSlugs = jsonDataTools.map(tool => tool.slug)
export const encodingToolSlugs = encodingTools.map(tool => tool.slug)
export const securityToolSlugs = securityTools.map(tool => tool.slug)
export const textToolSlugs = textTools.map(tool => tool.slug)
export const timeToolSlugs = timeTools.map(tool => tool.slug)
export const utilityToolSlugs = utilityTools.map(tool => tool.slug)
