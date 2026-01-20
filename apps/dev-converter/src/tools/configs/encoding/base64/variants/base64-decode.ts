import { Tool } from "@/lib/tools/types"

export const base64DecodeTool: Tool = {
  id: "base64-decode",
  slug: "base64-decode",
  name: "Base64 Decode",
  description:
    "Decode Base64 strings to readable text instantly with UTF-8 support",
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
    "base64 decode",
    "decode base64",
    "base64 to text",
    "base64 decoder",
    "convert base64",
  ],

  metadata: {
    title: "Base64 Decode - Convert Base64 to Text Online",
    description:
      "Decode Base64 strings to readable text instantly. Free online Base64 decoder with UTF-8 support for decoding encoded data.",
    keywords: [
      "base64 decode",
      "decode base64",
      "base64 to text",
      "base64 decoder",
    ],
  },

  info: {
    description:
      "Decode Base64-encoded strings back to readable text. This tool converts Base64 ASCII text back into its original format, whether it's plain text, JSON, or other data. Perfect for inspecting Base64-encoded values in API responses, configuration files, HTTP headers, and debugging encoded data.",
    howToUse: [
      "Paste the Base64-encoded string",
      "The tool automatically decodes to text",
      "View the decoded readable output",
      "Copy the decoded text for use",
    ],
    useCases: [
      "Decode Base64 values from API responses",
      "Inspect Base64-encoded HTTP headers",
      "Debug Base64-encoded configuration values",
      "Decode Base64 strings from logs",
      "Extract data from Base64-encoded JSON",
    ],
    features: [
      "Instant Base64 decoding",
      "UTF-8 character decoding support",
      "Handles standard Base64 with padding",
      "One-click copy to clipboard",
      "Works offline in your browser",
    ],
  },

  faq: [
    {
      question: "How do I decode Base64?",
      answer:
        "Simply paste your Base64-encoded string and the tool will automatically decode it to readable text. The tool handles standard Base64 format with padding (=).",
    },
    {
      question: "What if my Base64 string won't decode?",
      answer:
        "Ensure the string is valid Base64. It should only contain A-Z, a-z, 0-9, +, /, and = for padding. If it contains - or _, try the Base64URL decoder instead.",
    },
    {
      question: "Can I decode Base64URL with this tool?",
      answer:
        "This tool is optimized for standard Base64. For Base64URL (used in JWTs), use the Base64URL decode tool or enable Base64URL mode.",
    },
    {
      question: "Is Base64 decoding safe?",
      answer:
        "Yes, decoding Base64 is safe. However, be cautious with the decoded content - it could contain malicious code or sensitive data. Never execute decoded content without verification.",
    },
    {
      question: "Why do I see strange characters after decoding?",
      answer:
        "This usually means the Base64 string was encoded with a different character encoding. Try switching between UTF-8 and Binary modes.",
    },
  ],

  examples: [
    {
      title: "Decode simple Base64 text",
      input: "SGVsbG8sIFdvcmxkIQ==",
      description: "Decode Base64 back to readable text",
    },
    {
      title: "Decode Base64 JSON",
      input: "eyJuYW1lIjoiSm9obiIsImFnZSI6MzB9",
      description: "Decode Base64-encoded JSON data",
    },
    {
      title: "Decode HTTP header value",
      input: "QmFzaWMgdXNlcm5hbWU6cGFzc3dvcmQ=",
      description: "Decode Base64 from HTTP Authorization header",
    },
  ],

  relatedTools: [
    "base64-encode-decode",
    "base64-encode",
    "base64url-decode",
    "base64-to-text",
    "url-encode-decode",
    "jwt-decoder",
  ],

  ui: {
    inputPlaceholder: "Enter Base64 to decode...",
    outputPlaceholder: "Decoded text will appear here...",
    inputLabel: "Base64 (Encoded)",
    outputLabel: "Text (Decoded)",
    convertLabel: "Decode Base64",
    showSwapButton: true,
    autoDetect: {
      enabled: true,
      emptyLabel: "paste Base64 to decode",
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
