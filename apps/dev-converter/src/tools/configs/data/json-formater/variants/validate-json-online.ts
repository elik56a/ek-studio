import { Tool } from "@/lib/tools/types"

export const validateJsonOnlineTool: Tool = {
  id: "validate-json-online",
  slug: "validate-json-online",
  name: "Validate JSON Online",
  description: "Validate JSON online with instant error detection",
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
    "validate json online",
    "online json validator",
    "json validation tool",
  ],

  metadata: {
    title: "Validate JSON Online - Free JSON Validation Tool",
    description:
      "Validate JSON online instantly. Check JSON syntax, detect errors, and get clear error messages. Free online JSON validator.",
    keywords: [
      "validate json online",
      "online json validator",
      "json validation tool",
    ],
  },

  info: {
    description:
      "Validate JSON online with instant error detection. Check JSON syntax, find errors, and ensure your JSON is properly formatted before use.",
    howToUse: [
      "Paste JSON to validate",
      "View validation results",
      "Fix any errors shown",
      "Copy valid JSON",
    ],
    useCases: [
      "Validate API responses",
      "Check JSON configuration files",
      "Debug JSON syntax errors",
      "Verify JSON before sending",
    ],
    features: [
      "Instant validation",
      "Clear error messages",
      "Syntax checking",
      "Client-side processing",
    ],
  },

  examples: [
    {
      title: "Validate JSON",
      input: '{"name":"John","age":30}',
      description: "Check if JSON is valid",
    },
  ],

  faq: [
    {
      question: "How do I validate JSON online?",
      answer:
        "Paste your JSON into the validator and it will instantly check for syntax errors and show any issues.",
    },
  ],

  relatedTools: [
    "json-validator",
    "json-formatter",
    "json-parser",
  ],

  ui: {
    inputPlaceholder: "Paste JSON to validate...",
    outputPlaceholder: "Validation result...",
    inputLabel: "JSON Input",
    outputLabel: "Validated JSON",
    convertLabel: "Validate",
  },
}
