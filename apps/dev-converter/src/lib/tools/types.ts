import { LucideIcon } from "lucide-react"

export interface ToolExample {
  title: string
  input: string
  output?: string
  description?: string
}

export interface ToolFAQ {
  question: string
  answer: string
}

export interface ToolInfo {
  description: string // What is this tool?
  howToUse: string[] // Step-by-step instructions
  useCases: string[] // Common use cases
  features: string[] // Key features
}

export interface ToolMetadata {
  title: string
  description: string
  keywords: string[]
  ogImage?: string
}

export interface ToolUI {
  inputPlaceholder: string
  outputPlaceholder: string
  inputLabel: string
  outputLabel: string
  convertLabel: string
  showSwapButton?: boolean
  autoDetect?: {
    enabled: boolean
    emptyLabel: string // Label when no input (e.g., "paste text or Base64")
    labels: {
      detected: string // Label when encoded/escaped format is detected (e.g., "Base64 → Decoding")
      plain: string // Label when plain format is detected (e.g., "Plain text → Encoding")
    }
    // Dynamic input/output labels based on detected state
    inputLabels?: {
      detected: string // Input label when detected format (e.g., "Base64 (Encoded)")
      plain: string // Input label when plain format (e.g., "Text (Plain)")
    }
    outputLabels?: {
      detected: string // Output label when detected format (e.g., "Text (Decoded)")
      plain: string // Output label when plain format (e.g., "Base64 (Encoded)")
    }
  }
}

export interface ToolSwitcherGroup {
  label: string
  tools: string[] // tool IDs
}

export interface ToolSwitcherConfig {
  enabled: boolean
  mode?: "category" | "custom"
  customTools?: string[]
  groups?: ToolSwitcherGroup[]
  showAllLink?: boolean
  preserveInput?: boolean
}

export interface Tool {
  id: string
  slug: string
  name: string
  description: string
  category: string
  keywords: string[]
  metadata: ToolMetadata
  examples?: ToolExample[]
  faq: ToolFAQ[]
  relatedTools?: string[]
  ui: ToolUI
  component?: React.ComponentType
  switcher?: ToolSwitcherConfig
  type: "converter" | "generator"
  info?: ToolInfo
  order?: number
}

export interface Category {
  id: string
  name: string
  description: string
  icon: LucideIcon
  tools: string[] // tool IDs
}
