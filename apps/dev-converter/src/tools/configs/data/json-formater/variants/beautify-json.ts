import { Tool } from "@/lib/tools/types"

export const beautifyJsonTool: Tool = {
  id: "beautify-json",
  slug: "beautify-json",
  name: "Beautify JSON",
  description: "Beautify and format JSON with proper indentation",
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
    "beautify json",
    "json beautifier",
    "pretty print json",
    "format json",
  ],

  metadata: {
    title: "Beautify JSON Online - JSON Beautifier Tool",
    description:
      "Beautify and format JSON with proper indentation. Make JSON readable and easy to debug. Free online JSON beautifier.",
    keywords: [
      "beautify json",
      "json beautifier",
      "pretty print json",
      "format json online",
    ],
  },

  info: {
    description:
      "The JSON Beautifier formats compact or minified JSON into a clean, readable structure with proper indentation and line breaks. Perfect for debugging and understanding JSON data.",
    howToUse: [
      "Paste compact or minified JSON",
      "Click Beautify to format with indentation",
      "View the readable, formatted output",
      "Copy for documentation or debugging",
    ],
    useCases: [
      "Make minified JSON readable",
      "Format API responses for debugging",
      "Beautify JSON for documentation",
      "Improve JSON readability in code reviews",
    ],
    features: [
      "Proper indentation and formatting",
      "Syntax highlighting",
      "Validates while beautifying",
      "Handles large JSON files",
      "Client-side processing",
    ],
  },

  examples: [
    {
      title: "Beautify compact JSON",
      input: '{"name":"John","age":30,"city":"New York"}',
      description: "Add indentation and line breaks",
    },
  ],

  faq: [
    {
      question: "What does beautify JSON mean?",
      answer:
        "Beautifying JSON means formatting it with proper indentation, line breaks, and spacing to make it human-readable.",
    },
  ],

  relatedTools: [
    "json-formatter",
    "json-minify",
    "pretty-print-json",
    "json-validator",
  ],

  ui: {
    inputPlaceholder: "Paste compact JSON here...",
    outputPlaceholder: "Beautified JSON output...",
    inputLabel: "JSON Input",
    outputLabel: "Beautified JSON",
    convertLabel: "Beautify",
  },
}
