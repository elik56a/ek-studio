import { Category } from "./types"

export const categories: Category[] = [
  {
    id: "json-data",
    name: "JSON & Data",
    description: "Convert and format JSON, YAML, CSV data",
    icon: "📊",
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
    icon: "🔐",
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
    icon: "🔒",
    tools: ["jwt-decoder", "hash-generator", "uuid-generator"],
  },
  {
    id: "text",
    name: "Text Utilities",
    description: "Text manipulation and formatting",
    icon: "📝",
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
    icon: "⏰",
    tools: ["unix-timestamp-converter"],
  },
  {
    id: "utility",
    name: "Utilities",
    description: "General utility tools",
    icon: "🛠️",
    tools: ["color-converter", "mime-type-lookup"],
  },
]

export const getCategoryById = (id: string): Category | undefined => {
  return categories.find(cat => cat.id === id)
}

export const getCategoryByToolId = (toolId: string): Category | undefined => {
  return categories.find(cat => cat.tools.includes(toolId))
}
