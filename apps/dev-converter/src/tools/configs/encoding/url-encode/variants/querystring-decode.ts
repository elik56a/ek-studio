import { Tool } from "@/lib/tools/types"

/**
 * Query String Decode Tool Configuration (SEO Variant)
 *
 * Alternative SEO-focused page for decoding query strings.
 * Targets "querystring decode" keyword variations.
 */
export const querystringDecodeTool: Tool = {
  id: "querystring-decode",
  slug: "querystring-decode",
  name: "Query String Decode",
  description:
    "Decode percent-encoded query string parameters back to readable text",
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
    "querystring decode",
    "query string decode",
    "decode query string",
    "query parameter decode",
    "decode url parameters",
    "querystring decoder",
  ],

  metadata: {
    title: "Query String Decode Tool - Decode URL Parameters Online",
    description:
      "Decode percent-encoded query string parameters back to readable text. Convert %20, %26, and other %XX sequences in URL parameters.",
    keywords: [
      "querystring decode",
      "query string decode",
      "decode query parameters",
      "url parameter decoder",
    ],
  },

  info: {
    description:
      "This Query String Decode tool converts percent-encoded URL parameters back to readable text. When analyzing URLs, debugging API requests, or inspecting tracking links, query strings often contain encoded characters like %20 (space), %26 (ampersand), or %3D (equals). This tool decodes these %XX sequences back to their original characters, making it easy to read and understand query parameters, UTM tracking data, search queries, and API parameters.",
    howToUse: [
      "Paste encoded query string or URL parameters",
      "Click Decode to convert %XX sequences to characters",
      "Copy the decoded, readable output",
      "Use for debugging, analysis, or documentation",
    ],
    useCases: [
      "Decode UTM tracking parameters for campaign analysis",
      "Debug API query parameters with encoded values",
      "Read search queries from analytics tools",
      "Inspect form submission data in URLs",
      "Decode filter and sort parameters from web apps",
      "Analyze encoded parameters in server logs",
    ],
    features: [
      "Decodes all percent-encoded sequences in query strings",
      "Handles %20, %26, %3D, and all other %XX codes",
      "Supports Unicode and emoji in parameters",
      "One-click copy to clipboard",
      "Client-side processing - privacy-friendly",
    ],
  },

  examples: [
    {
      title: "Decode search query",
      input: "q=coffee%20%26%20tea",
      description: "Decode %20 and %26 to space and ampersand",
    },
    {
      title: "Decode multiple parameters",
      input: "name=John%20Doe&city=New%20York",
      description: "Decode spaces in parameter values",
    },
    {
      title: "Decode UTM parameters",
      input: "utm_campaign=Summer%20Sale%202024&utm_source=email",
      description: "Decode campaign name for analysis",
    },
    {
      title: "Decode special characters",
      input: "filter=price%3E100&sort=name",
      description: "Decode comparison operators",
    },
    {
      title: "Decode Unicode query",
      input: "search=caf%C3%A9%20r%C3%A9sum%C3%A9",
      description: "Decode accented characters",
    },
  ],

  faq: [
    {
      question: "What is query string decoding?",
      answer:
        "Query string decoding converts percent-encoded characters in URL parameters back to their original form. It replaces %XX sequences with actual characters, making query strings readable and usable.",
    },
    {
      question: "When should I decode query strings?",
      answer:
        "Decode query strings when analyzing URLs, debugging API requests, reading UTM parameters, inspecting form data, or converting encoded parameters for documentation and reporting.",
    },
    {
      question: "What do the %XX codes in query strings mean?",
      answer:
        "Each %XX represents a character in hexadecimal format. Common examples: %20 (space), %26 (ampersand), %3D (equals), %3F (question mark), %2F (slash). The numbers are UTF-8 byte values.",
    },
    {
      question: "Should I decode + as space?",
      answer:
        "In query strings, + traditionally represents a space in application/x-www-form-urlencoded format. This tool handles both + and %20 as spaces for maximum compatibility.",
    },
    {
      question: "Can I decode array parameters?",
      answer:
        "Yes! This tool decodes array parameters in formats like 'tags[]=value1&tags[]=value2' or 'tags=value1,value2', converting any encoded characters in the values.",
    },
    {
      question: "How do I decode nested parameters?",
      answer:
        "Nested parameters like 'user[name]=John%20Doe' or 'filter[price][min]=100' are decoded the same way—the tool converts any %XX sequences in keys or values back to characters.",
    },
    {
      question: "Why are some characters encoded multiple times?",
      answer:
        "Double or triple encoding can happen when URLs are processed multiple times. If your decoded output still contains %XX sequences, you may need to decode again.",
    },
    {
      question: "Is this tool safe for sensitive data?",
      answer:
        "Yes, this tool runs entirely in your browser. No data is sent to any server, making it safe for decoding sensitive query parameters.",
    },
  ],

  relatedTools: [
    "url-encode-decode",
    "url-decode",
    "querystring-encode",
    "percent-decode",
    "base64-encode-decode",
    "json-escape-unescape",
  ],

  ui: {
    inputPlaceholder: "Enter encoded query string to decode (e.g., name=John%20Doe)...",
    outputPlaceholder: "Decoded query string will appear here...",
    inputLabel: "Query String (Encoded)",
    outputLabel: "Query String (Decoded)",
    convertLabel: "Decode",
  },
}
