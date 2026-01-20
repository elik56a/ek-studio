import { Tool } from "@/lib/tools/types"

export const jsonFileToBase64Tool: Tool = {
  id: "json-file-to-base64",
  slug: "json-file-to-base64",
  name: "JSON File to Base64 Converter",
  description:
    "Convert JSON files to Base64 data URLs for embedding in web applications and APIs",
  category: "encoding",
  type: "converter",

  nav: {
    showInHeader: false,
  },

  componentId: "file-to-base64",

  preset: {
    accept: [".json"],
    label: "JSON",
  },

  keywords: [
    "json to base64",
    "json file to base64",
    "convert json to base64",
    "base64 json encoder",
    "json data url",
  ],

  metadata: {
    title: "JSON File to Base64 Converter - Encode JSON Files Online",
    description:
      "Convert JSON files to Base64 data URLs for embedding in web apps and API payloads. Perfect for configuration and data files.",
    keywords: [
      "json to base64",
      "json file to base64",
      "convert json to base64",
      "base64 json",
      "json encoder",
    ],
  },

  info: {
    description:
      "Convert JSON files to Base64 data URLs for embedding in web applications, API payloads, or configuration systems. This is useful when you need to transmit JSON data as a string, store configuration files in databases, or embed JSON in HTML data attributes. The tool generates a data URL with the data:application/json;base64,... prefix.",
    howToUse: [
      "Upload a JSON file",
      "The tool automatically converts it to Base64",
      "Copy the Base64 data URL output",
      "Use it in API requests, data attributes, or configuration",
      "Decode when needed to access the original JSON data",
    ],
    useCases: [
      "Send JSON configuration in API payloads",
      "Store JSON data in HTML data attributes",
      "Embed JSON files in database records",
      "Package JSON configuration with web applications",
      "Transmit JSON through text-only systems",
      "Create self-contained HTML with embedded data",
    ],
    features: [
      "Optimized for JSON file conversion",
      "Generates valid data:application/json;base64,... URLs",
      "Fast browser-based conversion (no upload required)",
      "One-click copy to clipboard",
      "Perfect for configuration and data files",
      "Privacy-first: files stay on your device",
    ],
  },

  faq: [
    {
      question: "Why convert JSON files to Base64?",
      answer:
        "Converting JSON to Base64 is useful for transmitting JSON data through text-only systems, storing configuration in databases, or embedding JSON in HTML data attributes.",
    },
    {
      question: "How do I decode a Base64 JSON file?",
      answer:
        "Use a Base64 decoder to convert the string back to JSON text, then parse it with JSON.parse() in JavaScript or equivalent in other languages.",
    },
    {
      question: "Should I use Base64 for large JSON files?",
      answer:
        "No. Base64 increases file size by ~33%. For large JSON files, use compression (gzip) or send the JSON directly. Base64 is best for small config files.",
    },
    {
      question: "Does Base64 preserve JSON structure?",
      answer:
        "Yes. Base64 encoding is lossless and preserves the exact JSON content including all formatting, keys, values, and structure.",
    },
    {
      question: "Is my JSON file uploaded to a server?",
      answer:
        "No. All conversion happens locally in your browser. Your JSON files never leave your device.",
    },
  ],

  relatedTools: [
    "file-to-base64",
    "json-formatter",
    "json-escape-unescape",
    "base64-encode-decode",
  ],

  ui: {
    inputPlaceholder: "Upload a JSON file...",
    outputPlaceholder: "Base64 data URL will appear here...",
    inputLabel: "JSON Upload",
    outputLabel: "Base64 Data URL",
    convertLabel: "Convert to Base64",
  },
}
