import { Tool } from "@/lib/tools/types"

export const formatJsonOnlineTool: Tool = {
  id: "format-json-online",
  slug: "format-json-online",
  name: "Format JSON Online",
  description: "Format JSON online with instant validation and beautification",
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
    "format json online",
    "online json formatter",
    "json format tool",
  ],

  metadata: {
    title: "Format JSON Online - Free JSON Formatting Tool",
    description:
      "Format JSON online instantly. Beautify, validate, and fix JSON syntax with proper indentation. Free online JSON formatter.",
    keywords: [
      "format json online",
      "online json formatter",
      "json formatting tool",
    ],
  },

  info: {
    description:
      "Format JSON online with this free tool. Instantly beautify minified JSON, validate syntax, and add proper indentation for better readability.",
    howToUse: [
      "Paste JSON to format",
      "View formatted output instantly",
      "Copy the beautified JSON",
      "Use in your projects",
    ],
    useCases: [
      "Format minified JSON",
      "Beautify API responses",
      "Validate JSON syntax",
      "Prepare JSON for documentation",
    ],
    features: [
      "Instant formatting",
      "Syntax validation",
      "Proper indentation",
      "Client-side processing",
    ],
  },

  examples: [
    {
      title: "Format compact JSON",
      input: '{"name":"John","age":30}',
      description: "Add proper formatting",
    },
  ],

  faq: [
    {
      question: "How do I format JSON online?",
      answer:
        "Paste your JSON into the tool and it will automatically format it with proper indentation and line breaks.",
    },
  ],

  relatedTools: [
    "json-formatter",
    "beautify-json",
    "json-validator",
  ],

  ui: {
    inputPlaceholder: "Paste JSON here...",
    outputPlaceholder: "Formatted JSON...",
    inputLabel: "JSON Input",
    outputLabel: "Formatted Output",
    convertLabel: "Format",
  },
}
