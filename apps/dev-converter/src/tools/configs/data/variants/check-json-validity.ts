import { Tool } from "@/lib/tools/types"

export const checkJsonValidityTool: Tool = {
  id: "check-json-validity",
  slug: "check-json-validity",
  name: "Check JSON Validity",
  description: "Check JSON validity and syntax errors instantly",
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
    "check json validity",
    "json validity checker",
    "is json valid",
  ],

  metadata: {
    title: "Check JSON Validity - JSON Syntax Checker",
    description:
      "Check JSON validity instantly. Verify JSON syntax, detect errors, and ensure your JSON is valid. Free JSON validity checker.",
    keywords: [
      "check json validity",
      "json validity checker",
      "is json valid",
    ],
  },

  info: {
    description:
      "Check JSON validity with instant syntax verification. Quickly determine if your JSON is valid and identify any syntax errors that need fixing.",
    howToUse: [
      "Paste JSON to check",
      "View validity status",
      "Fix any errors",
      "Confirm JSON is valid",
    ],
    useCases: [
      "Check if JSON is valid",
      "Verify JSON syntax",
      "Debug invalid JSON",
      "Validate before processing",
    ],
    features: [
      "Instant validity check",
      "Error detection",
      "Syntax verification",
      "Client-side processing",
    ],
  },

  examples: [
    {
      title: "Check validity",
      input: '{"name":"John","age":30}',
      description: "Verify JSON is valid",
    },
  ],

  faq: [
    {
      question: "How do I check if JSON is valid?",
      answer:
        "Paste your JSON into the checker and it will instantly tell you if it's valid or show any syntax errors.",
    },
  ],

  relatedTools: [
    "json-validator",
    "validate-json-online",
    "json-formatter",
  ],

  ui: {
    inputPlaceholder: "Paste JSON to check...",
    outputPlaceholder: "Validity result...",
    inputLabel: "JSON Input",
    outputLabel: "Checked JSON",
    convertLabel: "Check Validity",
  },
}
