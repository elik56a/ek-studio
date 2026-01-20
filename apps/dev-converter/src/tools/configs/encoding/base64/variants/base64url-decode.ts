import { Tool } from "@/lib/tools/types"

export const base64urlDecodeTool: Tool = {
  id: "base64url-decode",
  slug: "base64url-decode",
  name: "Base64URL Decode",
  description: "Decode Base64URL strings from JWTs and URLs to readable text",
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
    "base64url decode",
    "decode base64url",
    "jwt decode",
    "base64url to text",
    "base64url decoder",
  ],

  metadata: {
    title: "Base64URL Decode - Decode JWT and URL-Safe Base64",
    description:
      "Decode Base64URL strings from JWTs and URLs to readable text. Handles URL-safe Base64 with - and _ characters.",
    keywords: [
      "base64url decode",
      "jwt decode",
      "base64url to text",
      "base64url decoder",
    ],
  },

  info: {
    description:
      "Decode Base64URL-encoded strings back to readable text. Base64URL is the URL-safe variant used in JWT tokens, OAuth flows, and URL parameters. This tool handles the - and _ characters used in Base64URL and works with or without padding. Perfect for inspecting JWT token contents, debugging OAuth tokens, and decoding URL-safe encoded data.",
    howToUse: [
      "Paste the Base64URL-encoded string",
      "The tool automatically decodes to text",
      "View the decoded readable output",
      "Copy the decoded text for inspection",
    ],
    useCases: [
      "Decode JWT token header and payload segments",
      "Inspect Base64URL-encoded URL parameters",
      "Debug OAuth and SAML tokens",
      "Decode URL-safe encoded data",
      "Extract information from encoded tokens",
    ],
    features: [
      "Instant Base64URL decoding",
      "Handles - and _ characters",
      "Works with or without padding",
      "UTF-8 character decoding support",
      "One-click copy to clipboard",
    ],
  },

  faq: [
    {
      question: "How do I decode a JWT token?",
      answer:
        "JWT tokens have three parts separated by dots. Copy the first part (header) or second part (payload) and paste it here. The tool will decode the Base64URL to show the JSON content.",
    },
    {
      question: "What if my Base64URL string has no padding?",
      answer:
        "That's normal for JWT tokens. This tool handles Base64URL strings with or without padding (=) characters automatically.",
    },
    {
      question: "Why does my JWT decode show JSON?",
      answer:
        "JWT headers and payloads are JSON objects that have been Base64URL-encoded. When you decode them, you see the original JSON structure.",
    },
    {
      question: "Can I decode regular Base64 with this tool?",
      answer:
        "This tool is optimized for Base64URL (with - and _). For standard Base64 (with + and /), use the regular Base64 decoder.",
    },
    {
      question: "Is it safe to decode JWT tokens?",
      answer:
        "Yes, decoding is safe. JWT tokens are not encrypted - they're just encoded. However, never share the full JWT token as it may contain sensitive information or be used for authentication.",
    },
  ],

  examples: [
    {
      title: "Decode JWT header",
      input: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
      description: "Decode JWT header segment to JSON",
    },
    {
      title: "Decode JWT payload",
      input: "eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ",
      description: "Decode JWT payload to see claims",
    },
    {
      title: "Decode URL parameter",
      input: "dXNlcjoxMjM0NXxyb2xlOmFkbWlu",
      description: "Decode Base64URL from URL parameter",
    },
  ],

  relatedTools: [
    "base64-encode-decode",
    "base64url-encode",
    "base64-decode",
    "base64url-to-text",
    "jwt-decoder",
    "json-formatter",
  ],

  ui: {
    inputPlaceholder: "Enter Base64URL to decode...",
    outputPlaceholder: "Decoded text will appear here...",
    inputLabel: "Base64URL (Encoded)",
    outputLabel: "Text (Decoded)",
    convertLabel: "Decode Base64URL",
    showSwapButton: true,
    autoDetect: {
      enabled: true,
      emptyLabel: "paste Base64URL to decode",
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
