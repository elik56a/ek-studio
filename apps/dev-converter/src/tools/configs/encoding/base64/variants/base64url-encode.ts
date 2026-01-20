import { Tool } from "@/lib/tools/types"

export const base64urlEncodeTool: Tool = {
  id: "base64url-encode",
  slug: "base64url-encode",
  name: "Base64URL Encode",
  description: "Encode text to URL-safe Base64URL format for JWTs and URLs",
  category: "encoding",
  type: "converter",

  nav: {
    showInHeader: false,
  },

  componentId: "base64-encode-decode",

  preset: {
    direction: "encode",
    urlSafe: true,
    noPadding: false,
    encoding: "utf8",
  },

  keywords: [
    "base64url encode",
    "encode to base64url",
    "jwt encode",
    "url safe base64",
    "base64url encoder",
  ],

  metadata: {
    title: "Base64URL Encode - URL-Safe Base64 Encoder for JWT",
    description:
      "Encode text to Base64URL format for JWTs and URLs. URL-safe Base64 encoder that replaces + and / with - and _.",
    keywords: [
      "base64url encode",
      "jwt encode",
      "url safe base64",
      "base64url encoder",
    ],
  },

  info: {
    description:
      "Encode text to Base64URL format, a URL-safe variant of Base64 used in JWTs (JSON Web Tokens), URLs, and filenames. Base64URL replaces + with - and / with _ to avoid issues in URLs and file systems. This format is essential for creating JWT tokens, URL parameters, and any Base64 data that needs to be URL-safe.",
    howToUse: [
      "Paste or type the text you want to encode",
      "The tool encodes to Base64URL format",
      "Copy the URL-safe Base64URL output",
      "Use in JWTs, URLs, or filenames safely",
    ],
    useCases: [
      "Create JWT token segments (header and payload)",
      "Encode data for URL query parameters",
      "Generate URL-safe tokens and identifiers",
      "Create safe filenames from encoded data",
      "Encode data for OAuth and SAML flows",
    ],
    features: [
      "Instant Base64URL encoding",
      "URL-safe output (- and _ instead of + and /)",
      "UTF-8 character encoding support",
      "Optional padding control",
      "One-click copy to clipboard",
    ],
  },

  faq: [
    {
      question: "What is Base64URL?",
      answer:
        "Base64URL is a URL-safe variant of Base64 that replaces + with - and / with _ to avoid issues in URLs, filenames, and HTTP headers. It's the standard encoding for JWT tokens.",
    },
    {
      question: "When should I use Base64URL instead of Base64?",
      answer:
        "Use Base64URL when the encoded data will appear in URLs, query parameters, filenames, or JWT tokens. Use standard Base64 for other cases like HTTP headers or JSON payloads.",
    },
    {
      question: "Do JWTs use Base64URL?",
      answer:
        "Yes. JWT tokens use Base64URL encoding for the header and payload segments. This ensures the token can be safely transmitted in URLs and HTTP headers.",
    },
    {
      question: "Should I include padding in Base64URL?",
      answer:
        "JWT specifications typically omit padding (=) from Base64URL strings. However, some systems require it. This tool lets you choose.",
    },
    {
      question: "Can I decode Base64URL with a regular Base64 decoder?",
      answer:
        "Not reliably. You need a Base64URL decoder that handles - and _ characters. Regular Base64 decoders expect + and / instead.",
    },
  ],

  examples: [
    {
      title: "Encode JWT header",
      input: '{"alg":"HS256","typ":"JWT"}',
      description: "Create JWT header segment",
    },
    {
      title: "Encode for URL parameter",
      input: "user:12345|role:admin",
      description: "Create URL-safe encoded parameter",
    },
    {
      title: "Encode token data",
      input: "session-token-abc123",
      description: "Create URL-safe token identifier",
    },
  ],

  relatedTools: [
    "base64-encode-decode",
    "base64url-decode",
    "base64-encode",
    "text-to-base64url",
    "jwt-decoder",
    "url-encode-decode",
  ],

  ui: {
    inputPlaceholder: "Enter text to encode...",
    outputPlaceholder: "Base64URL encoded result will appear here...",
    inputLabel: "Text (Plain)",
    outputLabel: "Base64URL (Encoded)",
    convertLabel: "Encode to Base64URL",
    showSwapButton: true,
    autoDetect: {
      enabled: true,
      emptyLabel: "paste text to encode",
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
