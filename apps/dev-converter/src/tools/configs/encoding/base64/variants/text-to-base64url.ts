import { Tool } from "@/lib/tools/types"

export const textToBase64urlTool: Tool = {
  id: "text-to-base64url",
  slug: "text-to-base64url",
  name: "Text to Base64URL",
  description: "Convert text to URL-safe Base64URL format for JWTs and URLs",
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
    "text to base64url",
    "convert text to base64url",
    "text to jwt",
    "url safe encoding",
    "text to url safe base64",
  ],

  metadata: {
    title: "Text to Base64URL Converter - URL-Safe Base64 Encoding",
    description:
      "Convert text to URL-safe Base64URL format for JWTs and URLs. Encodes text with - and _ for URL safety.",
    keywords: [
      "text to base64url",
      "text to jwt",
      "url safe encoding",
      "text to url safe base64",
    ],
  },

  info: {
    description:
      "Convert plain text to Base64URL format, the URL-safe variant of Base64 used in JWT tokens, OAuth flows, and URL parameters. Base64URL replaces + with - and / with _ to ensure the encoded string is safe for use in URLs, query parameters, and filenames. This tool is essential for creating JWT token segments, URL-safe identifiers, and any encoded data that needs to work in web contexts.",
    howToUse: [
      "Type or paste your plain text",
      "The tool converts it to Base64URL instantly",
      "Copy the URL-safe Base64URL result",
      "Use in JWTs, URLs, or query parameters",
    ],
    useCases: [
      "Create JWT token header and payload segments",
      "Encode text for URL query parameters",
      "Generate URL-safe tokens and identifiers",
      "Create safe filenames from text",
      "Encode data for OAuth and SAML flows",
    ],
    features: [
      "Instant text to Base64URL conversion",
      "URL-safe output with - and _",
      "Full UTF-8 Unicode support",
      "Optional padding control",
      "One-click copy to clipboard",
    ],
  },

  faq: [
    {
      question:
        "What's the difference between text to Base64 and text to Base64URL?",
      answer:
        "Base64URL replaces + with - and / with _ to make the output URL-safe. Use Base64URL when the encoded text will appear in URLs, JWTs, or filenames.",
    },
    {
      question: "How do I create a JWT token?",
      answer:
        "JWT tokens consist of three Base64URL-encoded parts: header, payload, and signature. This tool helps you encode the header and payload. The signature requires cryptographic signing.",
    },
    {
      question: "Should I include padding in my Base64URL output?",
      answer:
        "JWT specifications typically omit padding (=) from Base64URL strings. However, some systems require it. This tool lets you choose based on your needs.",
    },
    {
      question: "Can I use Base64URL in regular URLs?",
      answer:
        "Yes, that's the point. Base64URL is specifically designed to be URL-safe, so you can use it in query parameters, path segments, and anywhere in a URL.",
    },
    {
      question: "Will this encode my text securely?",
      answer:
        "No. Base64URL is encoding, not encryption. Anyone can decode it. Never use Base64URL alone to protect sensitive information.",
    },
  ],

  relatedTools: [
    "base64-encode-decode",
    "base64url-to-text",
    "base64url-encode",
    "text-to-base64",
    "jwt-decoder",
    "url-encode-decode",
  ],

  ui: {
    inputPlaceholder: "Enter text to convert...",
    outputPlaceholder: "Base64URL result will appear here...",
    inputLabel: "Text (Plain)",
    outputLabel: "Base64URL (Encoded)",
    convertLabel: "Convert to Base64URL",
    showSwapButton: true,
    autoDetect: {
      enabled: true,
      emptyLabel: "paste text to convert",
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
