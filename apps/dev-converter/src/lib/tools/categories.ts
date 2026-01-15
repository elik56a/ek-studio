import {
  Clock,
  Database,
  FileText,
  Lock,
  LucideIcon,
  Palette,
  Shield,
} from "lucide-react"

import { Category } from "./types"
import * as encodingConfigs from "@/tools/configs/encoding"
import * as securityConfigs from "@/tools/configs/security"
import * as dataConfigs from "@/tools/configs/data"
import * as textConfigs from "@/tools/configs/text"
import * as timeConfigs from "@/tools/configs/time"
import * as utilityConfigs from "@/tools/configs/utility"

const extractSlugs = (configs: Record<string, any>): string[] => {
  return Object.values(configs)
    .filter((config): config is { slug: string } => 
      typeof config === "object" && config !== null && "slug" in config
    )
    .map(config => config.slug)
}

const encodingToolSlugs = extractSlugs(encodingConfigs)
const securityToolSlugs = extractSlugs(securityConfigs)
const jsonDataToolSlugs = extractSlugs(dataConfigs)
const textToolSlugs = extractSlugs(textConfigs)
const timeToolSlugs = extractSlugs(timeConfigs)
const utilityToolSlugs = extractSlugs(utilityConfigs)

export interface CategoryConfig {
  id: string
  name: string
  description: string
  icon: LucideIcon
  tools: string[]
}

export const categoryConfigs: CategoryConfig[] = [
  {
    id: "json-data",
    name: "JSON & Data",
    description: "Convert and format JSON, YAML, CSV data",
    icon: Database,
    tools: jsonDataToolSlugs,
  },
  {
    id: "encoding",
    name: "Encoding & Decoding",
    description: "Encode and decode various formats",
    icon: Lock,
    tools: encodingToolSlugs,
  },
  {
    id: "security",
    name: "Security & Crypto",
    description: "JWT, hashing, and security tools",
    icon: Shield,
    tools: securityToolSlugs,
  },
  {
    id: "text",
    name: "Text Utilities",
    description: "Text manipulation and formatting",
    icon: FileText,
    tools: textToolSlugs,
  },
  {
    id: "time",
    name: "Time & Date",
    description: "Time conversion and formatting",
    icon: Clock,
    tools: timeToolSlugs,
  },
  {
    id: "utility",
    name: "Utilities",
    description: "General utility tools",
    icon: Palette,
    tools: utilityToolSlugs,
  },
]

// Convert CategoryConfig to Category (for backward compatibility)
export const categories: Category[] = categoryConfigs.map(config => ({
  id: config.id,
  name: config.name,
  description: config.description,
  icon: config.icon,
  tools: config.tools,
}))

// Helper function to get category by ID
export const getCategoryById = (id: string): Category | undefined => {
  return categories.find(cat => cat.id === id)
}

// Helper function to get category by tool ID
export const getCategoryByToolId = (toolId: string): Category | undefined => {
  return categories.find(cat => cat.tools.includes(toolId))
}

// Helper function to get category config by ID
export const getCategoryConfigById = (
  id: string
): CategoryConfig | undefined => {
  return categoryConfigs.find(cat => cat.id === id)
}

// Helper function to get category config by tool ID
export const getCategoryConfigByToolId = (
  toolId: string
): CategoryConfig | undefined => {
  return categoryConfigs.find(cat => cat.tools.includes(toolId))
}

// Helper function to get icon component by category ID
export const getCategoryIcon = (categoryId: string): LucideIcon => {
  const config = getCategoryConfigById(categoryId)
  return config?.icon || Database // fallback to Database icon
}
