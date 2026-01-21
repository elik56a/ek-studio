import { Tool } from "@/lib/tools/types"

export const prettyPrintJsonTool: Tool = {
  id: "pretty-print-json",
  slug: "pretty-print-json",
  name: "Pretty Print JSON",
  description: "Pretty print JSON with proper formatting and indentation",
  category: "json-data",
  type: "converter",

  nav: {
    showInHeader: false,
  },

  componentId: "json-formatter",

  preset: {
    mode: "format",
  },

  keywords: [
    "pretty print json",
    "json pretty print",
    "format json",
    "json formatter",
  ],

  metadata: {
    title: "Pretty Print JSON Online - Format JSON Beautifully",
    description:
      "Pretty print JSON with proper indentation and formatting. Make JSON readable and easy to understand. Free JSON pretty printer.",
    keywords: [
      "pretty print json",
      "json pretty print",
      "format json online",
      "beautify json",
    ],
  },

  info: {
    description:
      "The Pretty Print JSON tool formats JSON with proper indentation, line breaks, and spacing, making it easy to read and understand. Perfect for debugging, documentation, and code reviews.",
    howToUse: [
      "Paste compact or minified JSON",
      "Click Pretty Print to format",
      "View the formatted output",
      "Copy for use in your project",
    ],
    useCases: [
      "Format minified JSON for readability",
      "Pretty print API responses",
      "Prepare JSON for documentation",
      "Make JSON easier to debug",
    ],
    features: [
      "Proper indentation (2 spaces)",
      "Syntax highlighting",
      "Validates while formatting",
      "Handles large JSON files",
      "Client-side processing",
    ],
  },

  examples: [
    {
      title: "Pretty print compact JSON",
      input: '{"name":"John","age":30,"city":"New York"}',
      description: "Add formatting and indentation",
    },
  ],

  faq: [
    {
      question: "What is pretty print JSON?",
      answer:
        "Pretty printing JSON means formatting it with proper indentation and line breaks to make it human-readable.",
    },
  ],

  relatedTools: [
    "json-formatter",
    "beautify-json",
    "json-minify",
    "json-validator",
  ],

  ui: {
    inputPlaceholder: "Paste JSON here...",
    outputPlaceholder: "Pretty printed JSON...",
    inputLabel: "JSON Input",
    outputLabel: "Pretty Printed JSON",
    convertLabel: "Pretty Print",
  },
}
