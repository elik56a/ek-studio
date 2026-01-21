import { Tool } from "@/lib/tools/types"

export const jsonMinifyTool: Tool = {
  id: "json-minify",
  slug: "json-minify",
  name: "JSON Minify",
  description: "Minify JSON by removing whitespace and reducing file size",
  category: "json-data",
  type: "converter",

  nav: {
    showInHeader: false,
  },

  componentId: "json-formatter",

  preset: {
    mode: "minify",
  },

  keywords: [
    "json minify",
    "minify json",
    "compress json",
    "json compressor",
    "reduce json size",
  ],

  metadata: {
    title: "JSON Minify Tool - Compress JSON Online",
    description:
      "Minify JSON by removing whitespace and newlines. Reduce JSON file size for faster network transfers. Free online JSON minifier.",
    keywords: [
      "json minify",
      "minify json online",
      "compress json",
      "json minifier",
    ],
  },

  info: {
    description:
      "The JSON Minify tool removes all unnecessary whitespace, newlines, and indentation from JSON, creating a compact version perfect for production use. Minified JSON reduces file size and improves network transfer speeds.",
    howToUse: [
      "Paste formatted JSON into the input",
      "Click Minify to remove whitespace",
      "Copy the compact JSON output",
      "Use in production for faster loading",
    ],
    useCases: [
      "Reduce JSON file size for production",
      "Optimize API responses for faster transfers",
      "Compress JSON configuration files",
      "Minimize JSON before storage or transmission",
    ],
    features: [
      "Removes all unnecessary whitespace",
      "Validates JSON while minifying",
      "One-click copy to clipboard",
      "Handles large JSON files",
      "Client-side processing (no uploads)",
    ],
  },

  examples: [
    {
      title: "Minify formatted JSON",
      input: '{\n  "name": "John",\n  "age": 30\n}',
      description: "Remove whitespace and newlines",
    },
    {
      title: "Compress nested JSON",
      input: '{\n  "users": [\n    {\n      "id": 1\n    }\n  ]\n}',
      description: "Compact nested structures",
    },
  ],

  faq: [
    {
      question: "What does JSON minify do?",
      answer:
        "JSON minify removes all whitespace, newlines, and indentation to create the smallest possible JSON file while maintaining validity.",
    },
    {
      question: "Does minifying affect JSON validity?",
      answer:
        "No. Minified JSON is functionally identical to formatted JSON, just more compact.",
    },
  ],

  relatedTools: [
    "json-formatter",
    "json-validator",
    "beautify-json",
    "json-to-yaml",
  ],

  ui: {
    inputPlaceholder: "Paste formatted JSON here...",
    outputPlaceholder: "Minified JSON output...",
    inputLabel: "JSON Input",
    outputLabel: "Minified JSON",
    convertLabel: "Minify JSON",
  },
}
