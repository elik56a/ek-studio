import { Tool } from "@/lib/tools/types"

export const jsonLintTool: Tool = {
  id: "json-lint",
  slug: "json-lint",
  name: "JSONLint",
  description: "Lint and validate JSON with detailed error messages",
  category: "json-data",
  type: "converter",

  nav: {
    showInHeader: false,
  },

  componentId: "json-formatter",

  preset: {
    mode: "validate",
  },

  keywords: [
    "jsonlint",
    "json lint",
    "json linter",
    "lint json",
  ],

  metadata: {
    title: "JSONLint - JSON Validator and Linter",
    description:
      "Lint and validate JSON with detailed error messages. Check JSON syntax and format with JSONLint. Free online JSON linter.",
    keywords: [
      "jsonlint",
      "json lint",
      "json linter",
      "validate json",
    ],
  },

  info: {
    description:
      "JSONLint is a JSON validator and linter that checks your JSON syntax and provides detailed error messages. Perfect for debugging and ensuring your JSON is properly formatted.",
    howToUse: [
      "Paste JSON to lint",
      "View linting results",
      "Fix any errors shown",
      "Copy valid JSON",
    ],
    useCases: [
      "Lint JSON files",
      "Validate JSON syntax",
      "Debug JSON errors",
      "Check JSON formatting",
    ],
    features: [
      "Detailed error messages",
      "Syntax validation",
      "JSON formatting",
      "Client-side processing",
    ],
  },

  examples: [
    {
      title: "Lint JSON",
      input: '{"name":"John","age":30}',
      description: "Check JSON with linter",
    },
  ],

  faq: [
    {
      question: "What is JSONLint?",
      answer:
        "JSONLint is a tool that validates JSON syntax and provides detailed error messages to help you fix issues.",
    },
  ],

  relatedTools: [
    "json-validator",
    "json-formatter",
    "json-parser",
  ],

  ui: {
    inputPlaceholder: "Paste JSON to lint...",
    outputPlaceholder: "Linting result...",
    inputLabel: "JSON Input",
    outputLabel: "Linted JSON",
    convertLabel: "Lint JSON",
  },
}
