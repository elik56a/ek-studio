import { Tool } from "@/lib/tools/types"

export const base64urlToTextTool: Tool = {
  id: "base64url-to-text",
  slug: "base64url-to-text",
  name: "Base64URL to Text",
  description: "Convert Base64URL from JWTs and URLs back to readable text",
  category: "encoding",
  type: "converter",

  nav: {
    showInHeader: false,
  },

  componentId: "base64-encode-decode",

  preset: {
    direction: "decode",
    urlSafe: true,
    noPadding: false,
    encoding: "utf8",
  },

  keywords: [
    "base64url to text",
    "convert base64url to text",
    "jwt to text",
    "decode base64url",
    "base64url decoder",
  ],

  metadata: {
    title: "Base64URL to Text Converter - Decode JWT and URL-Safe Base64",
    description:
      "Convert Base64URL from JWTs and URLs back to readable text. Decodes URL-safe Base64 with - and _ characters.",
    keywords: [
      "base64url to text",
      "jwt to text",
      "decode base64url",
      "base64url decoder",
    ],
  },

  info: {
    description:
      "Convert Base64URL-encoded strings back to readable plain text. Base64URL is the URL-safe encoding used in JWT tokens, OAuth flows, and URL parameters. This tool decodes Base64URL strings (with - and _ characters) and displays the original text content. Perfect for inspecting JWT token contents, debugging OAuth tokens, and extracting readable information from URL-safe encoded data.",
    howToUse: [
      "Paste your Base64URL-encoded string",
      "The tool converts it to text instantly",
      "View the decoded readable text",
      "Copy the plain text result",
    ],
    useCases: [
      "Decode JWT token header and payload to JSON",
      "Extract text from Base64URL-encoded URLs",
      "Inspect OAuth and SAML token contents",
      "Debug URL-safe encoded parameters",
      "Convert JWT segments to readable JSON",
    ],
    features: [
      "Instant Base64URL to text conversion",
      "Handles - and _ characters",
      "Works with or without padding",
      "Full UTF-8 Unicode support",
      "One-click copy to clipboard",
    ],
  },

  faq: [
    {
      question: "How do I decode a JWT token to text?",
      answer:
        "JWT tokens have three parts separated by dots. Copy the first part (header) or second part (payload) and paste it here. The tool will decode it to show the JSON text.",
    },
    {
      question: "What if my Base64URL string has no padding?",
      answer:
        "That's normal for JWT tokens and many Base64URL uses. This tool handles Base64URL strings with or without padding (=) characters automatically.",
    },
    {
      question: "Why does my decoded JWT show JSON?",
      answer:
        "JWT headers and payloads are JSON objects that have been Base64URL-encoded. When you decode them, you see the original JSON text.",
    },
    {
      question: "Can I decode regular Base64 with this tool?",
      answer:
        "This tool is optimized for Base64URL (with - and _). For standard Base64 (with + and /), use the Base64 to text converter.",
    },
    {
      question: "Is Base64URL to text the same as Base64URL decode?",
      answer:
        "Yes. 'Base64URL to text' is just a more search-friendly way to describe Base64URL decoding.",
    },
  ],

  relatedTools: [
    "base64-encode-decode",
    "text-to-base64url",
    "base64url-decode",
    "base64-to-text",
    "jwt-decoder",
    "json-formatter",
  ],

  ui: {
    inputPlaceholder: "Enter Base64URL to convert...",
    outputPlaceholder: "Plain text will appear here...",
    inputLabel: "Base64URL (Encoded)",
    outputLabel: "Text (Plain)",
    convertLabel: "Convert to Text",
    showSwapButton: true,
    autoDetect: {
      enabled: true,
      emptyLabel: "paste Base64URL to convert",
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
