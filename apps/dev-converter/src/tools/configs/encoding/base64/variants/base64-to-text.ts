import { Tool } from "@/lib/tools/types"

export const base64ToTextTool: Tool = {
  id: "base64-to-text",
  slug: "base64-to-text",
  name: "Base64 to Text",
  description: "Convert Base64 encoding back to readable plain text",
  category: "encoding",
  type: "converter",

  nav: {
    showInHeader: false,
  },

  componentId: "base64-encode-decode",

  preset: {
    direction: "decode",
    urlSafe: false,
    noPadding: false,
    encoding: "utf8",
  },

  keywords: [
    "base64 to text",
    "convert base64 to text",
    "base64 to string",
    "decode base64",
    "base64 decoder",
  ],

  metadata: {
    title: "Base64 to Text Converter - Decode Base64 to Plain Text",
    description:
      "Convert Base64 encoding back to readable plain text instantly. Free online Base64 to text decoder with UTF-8 support.",
    keywords: [
      "base64 to text",
      "convert base64 to text",
      "base64 to string",
      "decode base64",
    ],
  },

  info: {
    description:
      "Convert Base64-encoded strings back to readable plain text. This tool decodes Base64 data and displays the original text content, whether it's a simple string, JSON data, or other text-based content. Perfect for inspecting Base64-encoded values in API responses, debugging encoded data, and extracting readable information from Base64 strings.",
    howToUse: [
      "Paste your Base64-encoded string",
      "The tool converts it to text instantly",
      "View the decoded readable text",
      "Copy the plain text result",
    ],
    useCases: [
      "Decode Base64 strings from API responses",
      "Extract text from Base64-encoded data",
      "Inspect Base64 values in configuration files",
      "Debug Base64-encoded HTTP headers",
      "Convert Base64 back to readable JSON",
    ],
    features: [
      "Instant Base64 to text conversion",
      "Full UTF-8 Unicode support",
      "Handles emojis and special characters",
      "Works with standard Base64 format",
      "One-click copy to clipboard",
    ],
  },

  faq: [
    {
      question: "How do I convert Base64 to text?",
      answer:
        "Simply paste your Base64-encoded string and the tool will automatically decode it to readable text. The result appears instantly.",
    },
    {
      question: "What if my Base64 string shows gibberish after decoding?",
      answer:
        "This usually means the Base64 was encoded with a different character encoding or contains binary data. Try switching between UTF-8 and Binary modes.",
    },
    {
      question: "Can I decode Base64URL with this tool?",
      answer:
        "This tool is optimized for standard Base64. For Base64URL (used in JWTs with - and _ characters), use the Base64URL to text converter.",
    },
    {
      question: "Is Base64 to text the same as Base64 decode?",
      answer:
        "Yes. 'Base64 to text' is just a more search-friendly way to describe Base64 decoding.",
    },
    {
      question: "Why do I see an error when decoding?",
      answer:
        "The string might not be valid Base64. Ensure it only contains A-Z, a-z, 0-9, +, /, and = characters. Any other characters will cause an error.",
    },
  ],

  examples: [
    {
      title: "Convert Base64 to text",
      input: "SGVsbG8sIFdvcmxkIQ==",
      description: "Convert Base64 back to readable text",
    },
    {
      title: "Extract JSON from Base64",
      input: "eyJuYW1lIjoiSm9obiIsImFnZSI6MzB9",
      description: "Convert Base64 to JSON text",
    },
    {
      title: "Decode API response",
      input: "QVBJIHJlc3BvbnNlIGRhdGE=",
      description: "Convert Base64 API data to text",
    },
  ],

  relatedTools: [
    "base64-encode-decode",
    "text-to-base64",
    "base64-decode",
    "base64url-to-text",
    "url-encode-decode",
    "json-formatter",
  ],

  ui: {
    inputPlaceholder: "Enter Base64 to convert...",
    outputPlaceholder: "Plain text will appear here...",
    inputLabel: "Base64 (Encoded)",
    outputLabel: "Text (Plain)",
    convertLabel: "Convert to Text",
    showSwapButton: false,
    autoDetect: {
      enabled: true,
      emptyLabel: "paste Base64 to convert",
      labels: {
        detected: "Base64 → Decoding",
        plain: "Plain text → Encoding",
      },
      inputLabels: {
        detected: "Base64 (Encoded)",
        plain: "Text (Plain)",
      },
      outputLabels: {
        detected: "Text (Decoded)",
        plain: "Base64 (Encoded)",
      },
    },
  },
}
