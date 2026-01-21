import { Tool } from "@/lib/tools/types"

export const jsonPrettyPrintTool: Tool = {
  id: "json-pretty-print",
  slug: "json-pretty-print",
  name: "JSON Pretty Print",
  description: "Pretty print JSON with beautiful formatting",
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
    "json pretty print",
    "pretty print json",
    "json pretty printer",
  ],

  metadata: {
    title: "JSON Pretty Print - Beautiful JSON Formatting",
    description:
      "Pretty print JSON with beautiful formatting and indentation. Make JSON readable and easy to understand. Free JSON pretty printer.",
    keywords: [
      "json pretty print",
      "pretty print json",
      "json pretty printer",
    ],
  },

  info: {
    description:
      "Pretty print JSON with beautiful formatting, proper indentation, and syntax highlighting. Transform minified JSON into readable, well-structured output.",
    howToUse: [
      "Paste JSON to pretty print",
      "View beautifully formatted output",
      "Copy the pretty printed JSON",
      "Use in documentation or code",
    ],
    useCases: [
      "Pretty print minified JSON",
      "Format JSON for readability",
      "Beautify API responses",
      "Prepare JSON for sharing",
    ],
    features: [
      "Beautiful formatting",
      "Proper indentation",
      "Syntax highlighting",
      "Client-side processing",
    ],
  },

  examples: [
    {
      title: "Pretty print JSON",
      input: '{"name":"John","age":30}',
      description: "Format with beautiful indentation",
    },
  ],

  faq: [
    {
      question: "What is JSON pretty print?",
      answer:
        "JSON pretty print formats JSON with proper indentation and line breaks to make it beautiful and easy to read.",
    },
  ],

  relatedTools: [
    "pretty-print-json",
    "beautify-json",
    "json-formatter",
  ],

  ui: {
    inputPlaceholder: "Paste JSON here...",
    outputPlaceholder: "Pretty printed JSON...",
    inputLabel: "JSON Input",
    outputLabel: "Pretty Printed",
    convertLabel: "Pretty Print",
  },
}
