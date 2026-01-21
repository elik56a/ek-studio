import { Tool } from "@/lib/tools/types"

export const jsonTreeViewerTool: Tool = {
  id: "json-tree-viewer",
  slug: "json-tree-viewer",
  name: "JSON Tree Viewer",
  description: "View JSON as a collapsible tree structure",
  category: "json-data",
  type: "converter",

  nav: {
    showInHeader: false,
  },

  componentId: "json-formatter",

  preset: {
    mode: "viewer",
    expandAll: false,
  },

  keywords: [
    "json tree viewer",
    "json tree",
    "collapsible json",
    "json hierarchy",
  ],

  metadata: {
    title: "JSON Tree Viewer - Collapsible JSON Structure",
    description:
      "View JSON as a collapsible tree structure. Navigate hierarchical data with expand/collapse controls. Free JSON tree viewer.",
    keywords: [
      "json tree viewer",
      "json tree",
      "collapsible json viewer",
      "json hierarchy",
    ],
  },

  info: {
    description:
      "The JSON Tree Viewer displays JSON data as a collapsible hierarchical tree, making it easy to navigate and understand complex nested structures. Start with collapsed nodes and expand only what you need to see.",
    howToUse: [
      "Paste JSON into the input",
      "View the collapsible tree structure",
      "Click to expand/collapse nodes",
      "Navigate the hierarchy efficiently",
    ],
    useCases: [
      "Navigate large JSON files efficiently",
      "Understand JSON hierarchy visually",
      "Explore API responses with many levels",
      "Debug nested JSON structures",
    ],
    features: [
      "Collapsible tree structure",
      "Expand/collapse individual nodes",
      "Syntax highlighting",
      "Search within JSON",
      "Client-side processing",
    ],
  },

  examples: [
    {
      title: "View as tree",
      input: '{"users":[{"id":1,"profile":{"name":"Alice"}}]}',
      description: "Navigate nested JSON as a tree",
    },
  ],

  faq: [
    {
      question: "What is a JSON tree viewer?",
      answer:
        "A JSON tree viewer displays JSON as a hierarchical tree with collapsible nodes, making complex structures easier to navigate.",
    },
  ],

  relatedTools: [
    "json-viewer",
    "json-formatter",
    "json-validator",
    "json-to-yaml",
  ],

  ui: {
    inputPlaceholder: "Paste JSON here...",
    outputPlaceholder: "JSON tree...",
    inputLabel: "JSON Input",
    outputLabel: "Tree View",
    convertLabel: "View Tree",
  },
}
