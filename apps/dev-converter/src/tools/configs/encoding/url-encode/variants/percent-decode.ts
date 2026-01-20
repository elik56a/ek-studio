import { Tool } from "@/lib/tools/types"

/**
 * Percent Decode Tool Configuration (SEO Variant)
 *
 * Alternative SEO-focused page for percent-decoding.
 * Targets "percent decode" keyword variations.
 */
export const percentDecodeTool: Tool = {
  id: "percent-decode",
  slug: "percent-decode",
  name: "Percent Decode",
  description:
    "Percent-decode URLs and text by converting %XX hexadecimal sequences back to characters",
  category: "encoding",
  type: "converter",

  // Hide from header dropdown
  nav: {
    showInHeader: false,
  },

  // Reuse url-encode-decode component
  componentId: "url-encode-decode",

  // Preset for decode mode
  preset: {
    mode: "decode",
  },

  keywords: [
    "percent decode",
    "percent decoding",
    "percent decoder",
    "url percent decode",
    "percent decode online",
    "decode percent encoding",
  ],

  metadata: {
    title: "Percent Decode Tool - Decode %XX Sequences Online",
    description:
      "Percent-decode URLs and text by converting %XX hexadecimal sequences back to readable characters. Free online percent decoder.",
    keywords: [
      "percent decode",
      "percent decoding",
      "percent decoder",
      "decode percent encoding",
      "url decode",
    ],
  },

  info: {
    description:
      "This Percent Decode tool converts percent-encoded text back to readable characters by decoding %XX hexadecimal sequences. When URLs, query parameters, or API responses contain encoded characters like %20 (space), %3A (colon), or %2F (slash), this tool decodes them back to their original form. Essential for debugging web applications, analyzing URLs, reading encoded data, and understanding percent-encoded content from logs, APIs, and tracking systems.",
    howToUse: [
      "Paste percent-encoded text or URL",
      "Click Decode to convert %XX sequences to characters",
      "Copy the decoded, readable output",
      "Use for debugging, analysis, or documentation",
    ],
    useCases: [
      "Decode percent-encoded URLs from logs and error messages",
      "Read query parameters with %XX encoded values",
      "Debug API responses with percent-encoded data",
      "Analyze tracking URLs and UTM parameters",
      "Decode OAuth callback URLs and redirects",
      "Convert encoded file names and paths",
    ],
    features: [
      "RFC 3986 compliant percent-decoding",
      "Converts %XX hexadecimal to characters",
      "Handles ASCII and Unicode sequences",
      "One-click copy to clipboard",
      "Client-side processing - privacy-friendly",
    ],
  },

  examples: [
    {
      title: "Decode %20 to space",
      input: "hello%20world",
      description: "Convert %20 back to space",
    },
    {
      title: "Decode special characters",
      input: "value%3D100%25%26status%3Dok",
      description: "Decode %XX to symbols",
    },
    {
      title: "Decode URL path",
      input: "/api/users/John%20Doe",
      description: "Decode spaces in URL path",
    },
    {
      title: "Decode query string",
      input: "search=coffee%20%26%20tea",
      description: "Decode ampersand and space",
    },
    {
      title: "Decode Unicode",
      input: "caf%C3%A9%20r%C3%A9sum%C3%A9",
      description: "Decode accented characters",
    },
  ],

  faq: [
    {
      question: "What is percent-decoding?",
      answer:
        "Percent-decoding is the reverse of percent-encoding. It converts %XX sequences back to their original characters. For example, %20 becomes a space, %3A becomes a colon.",
    },
    {
      question: "When should I decode percent-encoded text?",
      answer:
        "Decode percent-encoded text when you need to read or analyze URLs, debug query parameters, inspect API responses, or convert encoded data for display or documentation.",
    },
    {
      question: "What do the numbers after % mean?",
      answer:
        "The two digits after % are hexadecimal (base-16) numbers representing the byte value of the character in UTF-8. For example, %20 is hex 20, which is decimal 32, the ASCII code for space.",
    },
    {
      question: "Can I decode multiple times?",
      answer:
        "Yes, if text is double or triple encoded, you may need to decode multiple times. However, be careful with text that legitimately contains percent signs—they shouldn't be decoded.",
    },
    {
      question: "Why are some characters encoded as multiple %XX?",
      answer:
        "Unicode characters outside ASCII are encoded as multiple bytes in UTF-8. Each byte becomes a %XX sequence. For example, é (U+00E9) is encoded as %C3%A9 (two bytes).",
    },
    {
      question: "Can I decode Unicode and emoji?",
      answer:
        "Yes! This tool properly decodes all Unicode characters including emoji, Chinese, Arabic, Hebrew, and other non-ASCII text that was percent-encoded.",
    },
    {
      question: "What if decoding fails?",
      answer:
        "Decoding can fail if the %XX sequences are malformed or incomplete. Make sure the encoded text is valid percent-encoding with proper hexadecimal digits after each %.",
    },
    {
      question: "Is this tool safe for sensitive data?",
      answer:
        "Yes, this tool runs entirely in your browser. No data is sent to any server, making it safe for decoding sensitive URLs and parameters.",
    },
  ],

  relatedTools: [
    "url-encode-decode",
    "url-decode",
    "percent-encode",
    "querystring-decode",
    "base64-encode-decode",
    "html-escape-unescape",
    "json-escape-unescape",
  ],

  ui: {
    inputPlaceholder: "Enter percent-encoded text to decode (e.g., hello%20world)...",
    outputPlaceholder: "Decoded text will appear here...",
    inputLabel: "Text (Percent-Encoded)",
    outputLabel: "Text (Decoded)",
    convertLabel: "Decode",
  },
}
