import { Tool } from "@/lib/tools/types"

/**
 * URL Decode Tool Configuration (SEO Variant)
 *
 * Dedicated page for decoding percent-encoded URLs back to readable text.
 * Converts %XX sequences back to actual characters.
 */
export const urlDecodeTool: Tool = {
  id: "url-decode",
  slug: "url-decode",
  name: "URL Decode",
  description:
    "Decode percent-encoded URLs back to readable text by converting %XX sequences",
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
    "url decode",
    "decode url",
    "url decoder",
    "percent decode",
    "decode uri",
    "url decode online",
    "decodeURIComponent",
  ],

  metadata: {
    title: "URL Decode Tool - Decode Percent-Encoded URLs Online",
    description:
      "Decode percent-encoded URLs back to readable text. Convert %20, %3A, and other %XX sequences to actual characters. Free online URL decoder.",
    keywords: [
      "url decode",
      "decode url",
      "url decoder",
      "percent decode",
      "decodeURIComponent",
    ],
  },

  info: {
    description:
      "This URL Decode tool converts percent-encoded URLs back into readable text. When you encounter URLs with %20 (space), %3A (colon), or other %XX sequences, this tool decodes them back to their original characters. This is essential for debugging URLs, reading query parameters, inspecting UTM tracking links, analyzing API responses, and understanding encoded redirect URLs. Perfect for developers, marketers, and anyone working with web URLs.",
    howToUse: [
      "Paste the percent-encoded URL or text",
      "Click Decode to convert %XX sequences to characters",
      "Copy the decoded, readable output",
      "Use for debugging, analysis, or documentation",
    ],
    useCases: [
      "Decode UTM tracking links to inspect parameters",
      "Debug encoded URLs from logs and error messages",
      "Read query parameters with encoded values",
      "Decode redirect URLs and callback parameters",
      "Inspect API responses with encoded URLs",
      "Convert encoded URLs from analytics tools",
    ],
    features: [
      "Instant percent-decoding conversion",
      "Handles all %XX encoded sequences",
      "Decodes Unicode characters and emoji",
      "One-click copy to clipboard",
      "Client-side processing - your data stays private",
    ],
  },

  examples: [
    {
      title: "Decode URL with %20",
      input: "https://example.com/search?q=hello%20world",
      description: "Convert %20 back to spaces",
    },
    {
      title: "Decode query parameters",
      input: "name=John%20Doe&email=john%40example.com",
      description: "Decode special characters in query string",
    },
    {
      title: "Decode fully encoded URL",
      input: "https%3A%2F%2Fexample.com%2Fsearch%3Fq%3Dhello%20world",
      description: "Decode entire URL structure",
    },
    {
      title: "Decode Unicode text",
      input: "https://example.com/search?q=%D7%A9%D7%9C%D7%95%D7%9D",
      description: "Decode Hebrew text from URL",
    },
    {
      title: "Decode UTM parameters",
      input: "utm_source=google&utm_medium=cpc&utm_campaign=summer%202024",
      description: "Decode tracking parameters for analysis",
    },
  ],

  faq: [
    {
      question: "What is URL decoding?",
      answer:
        "URL decoding (also called percent-decoding) converts encoded characters back to their original form. It replaces %XX sequences with the actual characters they represent, making URLs readable and usable.",
    },
    {
      question: "When should I decode URLs?",
      answer:
        "Decode URLs when you need to read or analyze them, such as debugging query parameters, inspecting UTM links, reading API responses, analyzing logs, or converting encoded URLs for documentation.",
    },
    {
      question: "What do the %XX codes mean?",
      answer:
        "Each %XX represents a character in hexadecimal format. For example, %20 is a space, %3A is a colon, %2F is a forward slash. The numbers are the UTF-8 byte values of the characters.",
    },
    {
      question: "Can I decode multiple times?",
      answer:
        "Yes, some URLs are double or triple encoded. If your decoded output still contains %XX sequences, you may need to decode again. However, be careful not to decode URLs that legitimately contain percent signs.",
    },
    {
      question: "Why does my URL have %20 instead of spaces?",
      answer:
        "URLs cannot contain literal spaces, so they must be encoded as %20 (or sometimes + in query strings). This ensures the URL works correctly across all browsers and servers.",
    },
    {
      question: "Can I decode Unicode and emoji?",
      answer:
        "Yes! This tool properly decodes all Unicode characters including emojis, Chinese, Arabic, Hebrew, and other non-ASCII text that was encoded as %XX sequences.",
    },
    {
      question: "What's the difference between decodeURI and decodeURIComponent?",
      answer:
        "decodeURIComponent decodes all encoded characters, making it ideal for query parameters. decodeURI preserves certain characters like :, /, ?, and # that are part of URL structure. This tool uses decodeURIComponent for complete decoding.",
    },
    {
      question: "Is this tool safe for sensitive data?",
      answer:
        "Yes, this tool runs entirely in your browser using JavaScript. Your data is never uploaded to any server, making it safe for sensitive URLs and parameters.",
    },
  ],

  relatedTools: [
    "url-encode-decode",
    "url-encode",
    "percent-decode",
    "querystring-decode",
    "base64-encode-decode",
    "html-escape-unescape",
    "json-escape-unescape",
  ],

  ui: {
    inputPlaceholder: "Enter encoded URL to decode (e.g., hello%20world)...",
    outputPlaceholder: "Decoded text will appear here...",
    inputLabel: "URL (Encoded)",
    outputLabel: "Text (Decoded)",
    convertLabel: "Decode",
  },
}
