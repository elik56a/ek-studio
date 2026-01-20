import { Tool } from "@/lib/tools/types"

/**
 * Percent Encode Tool Configuration (SEO Variant)
 *
 * Alternative SEO-focused page for percent-encoding.
 * Targets "percent encode" keyword variations.
 */
export const percentEncodeTool: Tool = {
  id: "percent-encode",
  slug: "percent-encode",
  name: "Percent Encode",
  description:
    "Percent-encode text and URLs by converting characters to %XX hexadecimal format",
  category: "encoding",
  type: "converter",

  // Hide from header dropdown
  nav: {
    showInHeader: false,
  },

  // Reuse url-encode-decode component
  componentId: "url-encode-decode",

  // Preset for encode mode
  preset: {
    mode: "encode",
  },

  keywords: [
    "percent encode",
    "percent encoding",
    "percent encoder",
    "url percent encode",
    "percent encode online",
    "rfc 3986",
  ],

  metadata: {
    title: "Percent Encode Tool - RFC 3986 Percent Encoding Online",
    description:
      "Percent-encode text using RFC 3986 standard. Convert characters to %XX hexadecimal format for URLs, URIs, and web applications.",
    keywords: [
      "percent encode",
      "percent encoding",
      "rfc 3986",
      "percent encoder",
      "url encoding",
    ],
  },

  info: {
    description:
      "This Percent Encode tool implements RFC 3986 percent-encoding standard, converting characters into %XX hexadecimal format for use in URLs and URIs. Percent-encoding is the official name for URL encoding—it replaces unsafe characters with a percent sign (%) followed by two hexadecimal digits. This is essential for web development, API integration, and ensuring data can be safely transmitted in URLs without breaking syntax or causing parsing errors.",
    howToUse: [
      "Paste text that needs percent-encoding",
      "Click Encode to convert to %XX format",
      "Copy the percent-encoded output",
      "Use in URLs, query strings, or API requests",
    ],
    useCases: [
      "Encode data for URL query parameters and form submissions",
      "Implement RFC 3986 compliant URL encoding",
      "Encode path segments and query values for REST APIs",
      "Prepare data for OAuth callbacks and redirects",
      "Encode file names and paths for web applications",
      "Create valid URIs with special characters",
    ],
    features: [
      "RFC 3986 compliant percent-encoding",
      "Converts characters to %XX hexadecimal format",
      "Handles ASCII and Unicode characters",
      "One-click copy to clipboard",
      "Client-side processing - privacy-friendly",
    ],
  },

  examples: [
    {
      title: "Percent-encode spaces",
      input: "hello world",
      description: "Convert space to %20",
    },
    {
      title: "Encode special characters",
      input: "value=100%&status=ok",
      description: "Encode symbols to %XX format",
    },
    {
      title: "Encode path segment",
      input: "/api/users/John Doe",
      description: "Encode spaces in URL path",
    },
    {
      title: "Encode query string",
      input: "search=coffee & tea",
      description: "Encode ampersand and space",
    },
    {
      title: "Encode Unicode",
      input: "café résumé",
      description: "Encode accented characters",
    },
  ],

  faq: [
    {
      question: "What is percent-encoding?",
      answer:
        "Percent-encoding is the official term for URL encoding defined in RFC 3986. It converts characters to %XX format where XX is the hexadecimal representation of the character's byte value in UTF-8.",
    },
    {
      question: "Why is it called percent-encoding?",
      answer:
        "It's called percent-encoding because encoded characters are represented with a percent sign (%) followed by hexadecimal digits. For example, a space becomes %20.",
    },
    {
      question: "What is RFC 3986?",
      answer:
        "RFC 3986 is the internet standard that defines URI (Uniform Resource Identifier) syntax, including the percent-encoding mechanism. It specifies which characters are allowed in URIs and how to encode others.",
    },
    {
      question: "Which characters need percent-encoding?",
      answer:
        "Characters outside the unreserved set (A-Z, a-z, 0-9, -, ., _, ~) should be percent-encoded. This includes spaces, most punctuation, and all non-ASCII characters. Reserved characters (:, /, ?, #, [, ], @, !, $, &, ', (, ), *, +, ,, ;, =) are encoded when used outside their reserved purpose.",
    },
    {
      question: "Is percent-encoding the same as URL encoding?",
      answer:
        "Yes, percent-encoding and URL encoding are the same thing. Percent-encoding is the formal technical term, while URL encoding is the common name developers use.",
    },
    {
      question: "When should I use percent-encoding?",
      answer:
        "Use percent-encoding whenever you include user data, special characters, or non-ASCII text in URLs, query parameters, form data, or API requests. It ensures data is transmitted safely without breaking URL syntax.",
    },
    {
      question: "Does percent-encoding work for all languages?",
      answer:
        "Yes, percent-encoding works for all Unicode characters including Chinese, Arabic, Hebrew, emoji, and other non-ASCII text. Each character is converted to its UTF-8 byte sequence and then percent-encoded.",
    },
    {
      question: "Is this tool safe for sensitive data?",
      answer:
        "Yes, this tool runs entirely in your browser. No data is sent to any server, making it safe for encoding sensitive information.",
    },
  ],

  relatedTools: [
    "url-encode-decode",
    "url-encode",
    "percent-decode",
    "querystring-encode",
    "base64-encode-decode",
    "html-escape-unescape",
    "json-escape-unescape",
  ],

  ui: {
    inputPlaceholder: "Enter text to percent-encode...",
    outputPlaceholder: "Percent-encoded output will appear here...",
    inputLabel: "Text (Plain)",
    outputLabel: "Text (Percent-Encoded)",
    convertLabel: "Encode",
  },
}
