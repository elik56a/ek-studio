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
}

export interface Category {
  id: string
  name: string
  description: string
  icon: string
  tools: string[] // tool IDs
}
