import { Tool } from "@/lib/tools/types"

export const jsonValidatorTool: Tool = {
  id: "json-validator",
  slug: "json-validator",
  name: "JSON Validator",
  description: "Validate JSON syntax and check for errors instantly",
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
    "json validator",
    "validate json",
    "json validation",
    "check json",
    "json syntax checker",
  ],

  metadata: {
    title: "JSON Validator Online - Check JSON Syntax Instantly",
    description:
      "Validate JSON syntax online. Instantly detect errors, check JSON validity, and get clear error messages. Free JSON validation tool.",
    keywords: [
      "json validator",
      "validate json online",
      "json syntax checker",
      "check json validity",
    ],
  },

  info: {
    description:
      "The JSON Validator checks your JSON syntax instantly and highlights any errors. Perfect for debugging API responses, validating configuration files, and ensuring your JSON is properly formatted before use.",
    howToUse: [
      "Paste your JSON into the input editor",
      "The tool validates syntax automatically",
      "View validation results and error messages",
      "Fix any errors highlighted by the validator",
    ],
    useCases: [
      "Validate API responses before processing",
      "Check JSON configuration files for errors",
      "Debug malformed JSON from external sources",
      "Verify JSON before sending API requests",
    ],
    features: [
      "Real-time JSON validation",
      "Clear error messages with line numbers",
      "Syntax highlighting",
      "Handles large JSON files",
      "Client-side validation (no uploads)",
    ],
  },

  examples: [
    {
      title: "Validate simple JSON",
      input: '{"name":"John","age":30}',
      description: "Check if JSON syntax is valid",
    },
    {
      title: "Validate nested JSON",
      input: '{"users":[{"id":1,"name":"Alice"}]}',
      description: "Validate complex nested structures",
    },
  ],

  faq: [
    {
      question: "What does a JSON validator do?",
      answer:
        "A JSON validator checks if your JSON syntax is correct and highlights any errors like missing commas, brackets, or quotes.",
    },
    {
      question: "Is my data safe?",
      answer:
        "Yes. All validation happens locally in your browser. Your data is never uploaded.",
    },
  ],

  relatedTools: [
    "json-formatter",
    "json-minify",
    "json-to-yaml",
    "json-to-csv",
  ],

  ui: {
    inputPlaceholder: "Paste JSON here to validate...",
    outputPlaceholder: "Validation result...",
    inputLabel: "JSON Input",
    outputLabel: "Validated JSON",
    convertLabel: "Validate JSON",
  },
}
