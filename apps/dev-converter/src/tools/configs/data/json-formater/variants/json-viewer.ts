import { Tool } from "@/lib/tools/types"

export const jsonViewerTool: Tool = {
  id: "json-viewer",
  slug: "json-viewer",
  name: "JSON Viewer",
  description: "View and explore JSON data with expandable tree structure",
  category: "json-data",
  type: "converter",

  nav: {
    showInHeader: false,
  },

  componentId: "json-formatter",

  preset: {
    mode: "viewer",
    expandAll: true,
  },

  keywords: [
    "json viewer",
    "view json",
    "json explorer",
    "json tree viewer",
    "explore json",
  ],

  metadata: {
    title: "JSON Viewer Online - Explore JSON Tree Structure",
    description:
      "View and explore JSON data with an interactive tree viewer. Expand/collapse nodes, search, and navigate complex JSON structures easily.",
    keywords: [
      "json viewer",
      "json tree viewer",
      "view json online",
      "json explorer",
    ],
  },

  info: {
    description:
      "The JSON Viewer provides an interactive tree view for exploring JSON data. Expand and collapse nodes, search for specific values, and navigate complex nested structures with ease. Perfect for understanding large JSON files and API responses.",
    howToUse: [
      "Paste JSON into the input",
      "View the interactive tree structure",
      "Expand/collapse nodes to explore data",
      "Use search to find specific values",
    ],
    useCases: [
      "Explore large JSON API responses",
      "Navigate deeply nested JSON structures",
      "Understand complex JSON data visually",
      "Debug JSON with interactive exploration",
    ],
    features: [
      "Interactive tree view with expand/collapse",
      "Search functionality",
      "Syntax highlighting",
      "Handles large and deeply nested JSON",
      "Client-side processing",
    ],
  },

  examples: [
    {
      title: "View nested JSON",
      input: '{"users":[{"id":1,"name":"Alice","address":{"city":"NYC"}}]}',
      description: "Explore nested structures interactively",
    },
  ],

  faq: [
    {
      question: "What is a JSON viewer?",
      answer:
        "A JSON viewer displays JSON data in an interactive tree format, making it easy to explore and understand complex structures.",
    },
  ],

  relatedTools: [
    "json-formatter",
    "json-tree-viewer",
    "json-validator",
    "json-to-yaml",
  ],

  ui: {
    inputPlaceholder: "Paste JSON here to view...",
    outputPlaceholder: "JSON tree view...",
    inputLabel: "JSON Input",
    outputLabel: "JSON Viewer",
    convertLabel: "View JSON",
  },
}
