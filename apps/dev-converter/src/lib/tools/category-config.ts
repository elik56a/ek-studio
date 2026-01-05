import { Database, Lock, Shield, FileText, Clock, Palette, LucideIcon } from "lucide-react"

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
    tools: [
      "json-formatter",
      "json-to-yaml",
      "yaml-to-json",
      "json-to-csv",
      "csv-to-json",
    ],
  },
  {
    id: "encoding",
    name: "Encoding & Decoding",
    description: "Encode and decode various formats",
    icon: Lock,
    tools: [
      "base64-encode-decode",
      "url-encode-decode",
      "html-escape-unescape",
      "json-escape-unescape",
    ],
  },
  {
    id: "security",
    name: "Security & Crypto",
    description: "JWT, hashing, and security tools",
    icon: Shield,
    tools: ["jwt-decoder", "hash-generator", "uuid-generator"],
  },
  {
    id: "text",
    name: "Text Utilities",
    description: "Text manipulation and formatting",
    icon: FileText,
    tools: [
      "case-converter",
      "diff-checker",
      "regex-tester",
      "markdown-html-converter",
    ],
  },
  {
    id: "time",
    name: "Time & Date",
    description: "Time conversion and formatting",
    icon: Clock,
    tools: ["unix-timestamp-converter"],
  },
  {
    id: "utility",
    name: "Utilities",
    description: "General utility tools",
    icon: Palette,
    tools: ["color-converter", "mime-type-lookup"],
  },
]

// Helper function to get category config by ID
export const getCategoryConfigById = (id: string): CategoryConfig | undefined => {
  return categoryConfigs.find(cat => cat.id === id)
}

// Helper function to get category config by tool ID
export const getCategoryConfigByToolId = (toolId: string): CategoryConfig | undefined => {
  return categoryConfigs.find(cat => cat.tools.includes(toolId))
}

// Helper function to get icon component by category ID
export const getCategoryIcon = (categoryId: string): LucideIcon => {
  const config = getCategoryConfigById(categoryId)
  return config?.icon || Database // fallback to Database icon
}