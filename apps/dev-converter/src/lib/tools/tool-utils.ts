import { Tool } from "./types"

export function isConverterTool(tool: Tool | undefined): boolean {
  if (!tool) return false
  return tool.type === "converter"
}

export function isGeneratorTool(tool: Tool | undefined): boolean {
  if (!tool) return false
  return tool.type === "generator"
}
