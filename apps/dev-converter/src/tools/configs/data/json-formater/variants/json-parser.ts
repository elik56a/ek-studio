import { Tool } from "@/lib/tools/types"

export const jsonParserTool: Tool = {
  id: "json-parser",
  slug: "json-parser",
  name: "JSON Parser",
  description: "Parse and validate JSON strings with error detection",
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
    "json parser",
    "parse json",
    "json parsing",
    "json.parse",
  ],

  metadata: {
    title: "JSON Parser Online - Parse and Validate JSON",
    description:
      "Parse JSON strings and validate syntax. Detect errors instantly with clear messages. Free online JSON parser tool.",
    keywords: [
      "json parser",
      "parse json online",
      "json parsing tool",
      "validate json",
    ],
  },

  info: {
    description:
      "The JSON Parser validates and parses JSON strings, checking for syntax errors and ensuring proper formatting. Essential for debugging JSON data from APIs, files, or user input.",
    howToUse: [
      "Paste JSON string to parse",
      "View parsing results instantly",
      "Fix any syntax errors shown",
      "Copy the validated JSON",
    ],
    useCases: [
      "Parse JSON from API responses",
      "Validate JSON before processing",
      "Debug JSON syntax errors",
      "Test JSON.parse() behavior",
    ],
    features: [
      "Instant JSON parsing",
      "Clear error messages",
      "Syntax validation",
      "Handles large JSON",
      "Client-side processing",
    ],
  },

  examples: [
    {
      title: "Parse JSON string",
      input: '{"name":"John","age":30}',
      description: "Parse and validate JSON",
    },
  ],

  faq: [
    {
      question: "What does a JSON parser do?",
      answer:
        "A JSON parser reads JSON text and converts it into a structured format, validating syntax and detecting errors.",
    },
  ],

  relatedTools: [
    "json-validator",
    "json-formatter",
    "json-to-yaml",
    "json-to-csv",
  ],

  ui: {
    inputPlaceholder: "Paste JSON to parse...",
    outputPlaceholder: "Parsed JSON...",
    inputLabel: "JSON Input",
    outputLabel: "Parsed Output",
    convertLabel: "Parse JSON",
  },
}
