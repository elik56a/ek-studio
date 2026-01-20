import { Tool } from "@/lib/tools/types"

export const base64urlNoPaddingTool: Tool = {
  id: "base64url-no-padding",
  slug: "base64url-no-padding",
  name: "Base64URL Without Padding",
  description: "Encode text to Base64URL without padding for JWT tokens",
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
    "base64url no padding",
    "base64url without padding",
    "jwt no padding",
    "unpadded base64url",
    "base64url encode no padding",
  ],

  metadata: {
    title: "Base64URL Without Padding - JWT-Compatible Base64URL Encoder",
    description:
      "Encode text to Base64URL without padding for JWT tokens. Creates URL-safe Base64 without = characters.",
    keywords: [
      "base64url no padding",
      "jwt no padding",
      "unpadded base64url",
      "base64url without padding",
    ],
  },

  info: {
    description:
      "Encode text to Base64URL format without padding characters, the standard format for JWT tokens. This tool creates URL-safe Base64 strings (using - and _ instead of + and /) and omits the trailing = padding characters. This is the exact format used in JWT token headers and payloads, making it perfect for creating JWT-compatible encoded strings, OAuth tokens, and any URL-safe encoded data that should not include padding.",
    howToUse: [
      "Type or paste your text or JSON",
      "The tool encodes to Base64URL without padding",
      "Copy the JWT-compatible result",
      "Use in JWT tokens, URLs, or OAuth flows",
    ],
    useCases: [
      "Create JWT token header and payload segments",
      "Generate OAuth and SAML token components",
      "Encode data for URL parameters without padding",
      "Create compact URL-safe identifiers",
      "Match JWT specification requirements",
    ],
    features: [
      "Instant Base64URL encoding without padding",
      "JWT-compatible output format",
      "URL-safe with - and _ characters",
      "Full UTF-8 Unicode support",
      "One-click copy to clipboard",
    ],
  },

  faq: [
    {
      question: "Why do JWT tokens not have padding?",
      answer:
        "The JWT specification (RFC 7519) requires Base64URL encoding without padding. This creates cleaner tokens and avoids issues with = characters in URLs.",
    },
    {
      question: "Is this the correct format for JWT tokens?",
      answer:
        "Yes. JWT tokens use Base64URL encoding without padding for both the header and payload segments. This tool produces exactly that format.",
    },
    {
      question: "Can I decode Base64URL without padding?",
      answer:
        "Yes. Decoders can infer the padding length from the string length. Most Base64URL decoders handle unpadded strings automatically.",
    },
    {
      question:
        "What's the difference between Base64URL and Base64URL without padding?",
      answer:
        "Base64URL without padding is the same as Base64URL but with = characters removed. JWT tokens specifically require this format.",
    },
    {
      question: "Should I always use Base64URL without padding for JWTs?",
      answer:
        "Yes. The JWT specification requires Base64URL encoding without padding. Using padding would create non-standard JWT tokens.",
    },
  ],

  examples: [
    {
      title: "Create JWT header",
      input: '{"alg":"HS256","typ":"JWT"}',
      description: "Encode JWT header without padding",
    },
    {
      title: "Create JWT payload",
      input: '{"sub":"1234567890","name":"John Doe","iat":1516239022}',
      description: "Encode JWT payload in standard format",
    },
    {
      title: "Encode for OAuth token",
      input: "client_id:app123|scope:read",
      description: "Create OAuth-compatible encoded string",
    },
  ],

  relatedTools: [
    "base64-encode-decode",
    "base64url-encode",
    "base64-no-padding",
    "text-to-base64url",
    "jwt-decoder",
    "json-formatter",
  ],

  ui: {
    inputPlaceholder: "Enter text to encode...",
    outputPlaceholder: "Base64URL without padding will appear here...",
    inputLabel: "Text (Plain)",
    outputLabel: "Base64URL (No Padding)",
    convertLabel: "Encode for JWT",
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
