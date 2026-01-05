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
}

export interface ToolSwitcherGroup {
  label: string
  tools: string[] // tool IDs
}

export interface ToolSwitcherConfig {
  enabled: boolean
  mode?: 'category' | 'custom'
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
  examples: ToolExample[]
  faq: ToolFAQ[]
  relatedTools?: string[] // tool IDs
  ui: ToolUI
  component: React.ComponentType
  switcher?: ToolSwitcherConfig
}

export interface Category {
  id: string
  name: string
  description: string
  icon: LucideIcon
  tools: string[] // tool IDs
}
