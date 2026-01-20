import { Tool } from "@/lib/tools/types"

/**
 * JSON Unescape Tool Configuration (SEO Variant)
 *
 * Dedicated page for unescaping JSON strings back to readable text.
 * Converts escape sequences like \n, \t, \" back to actual characters.
 */
export const jsonUnescapeTool: Tool = {
  id: "json-unescape",
  slug: "json-unescape",
  name: "JSON Unescape",
  description:
    "Unescape JSON strings back to readable text by converting escape sequences to actual characters",
  category: "encoding",
  type: "converter",

  // Hide from header dropdown
  nav: {
    showInHeader: false,
  },

  // Reuse json-escape-unescape component
  componentId: "json-escape-unescape",

  // Preset for unescape mode
  preset: {
    mode: "unescape",
  },

  keywords: [
    "json unescape",
    "unescape json",
    "json string unescape",
    "unescape json string",
    "json decoder",
    "unescape json online",
    "json string decoder",
  ],

  metadata: {
    title: "JSON Unescape Tool - Decode JSON Strings Online",
    description:
      "Unescape JSON strings back to readable text by converting escape sequences (\\n, \\t, \\\") to actual characters. Decode JSON strings from APIs instantly.",
    keywords: [
      "json unescape",
      "unescape json",
      "json string unescape",
      "json decoder",
      "unescape json string",
    ],
  },

  info: {
    description:
      'This JSON Unescape tool converts JSON escape sequences back into readable text. When you receive JSON strings from APIs or databases containing sequences like \\n, \\t, \\", or \\\\, this tool decodes them back to newlines, tabs, quotes, and backslashes. This is essential for debugging API responses, reading JSON logs, converting escaped strings from databases, and making JSON content human-readable.',
    howToUse: [
      "Paste JSON string containing escape sequences (e.g., \\n, \\t, \\\")",
      "Click Unescape to convert sequences back to actual characters",
      "Copy the unescaped, readable text for use in your application",
      "Use for debugging APIs, parsing responses, or reading JSON logs",
    ],
    useCases: [
      "Decode JSON strings from API responses and web services",
      "Convert escaped JSON from database query results",
      "Debug JSON content that shows escape sequences",
      "Read JSON log files with escaped messages",
      "Parse JSON configuration files with escaped values",
      "Convert legacy JSON data with escape sequences",
    ],
    features: [
      "Unescapes all JSON escape sequences (\\n, \\t, \\\", \\\\, etc.)",
      "Handles Unicode escape sequences (\\u0000)",
      "Instant conversion with real-time preview",
      "One-click copy to clipboard",
      "Runs locally in your browser - privacy-friendly",
    ],
  },

  examples: [
    {
      title: "Unescape JSON string",
      input: 'Hello \\"World\\"\\nNew line here',
      description: "Convert escape sequences back to readable text",
    },
    {
      title: "Unescape file path",
      input: "C:\\\\Users\\\\Documents\\\\file.txt",
      description: "Convert escaped backslashes to normal path",
    },
    {
      title: "Unescape multiline JSON",
      input: "Line 1\\nLine 2\\nLine 3",
      description: "Convert \\n sequences to actual newlines",
    },
  ],

  faq: [
    {
      question: "What does JSON unescaping do?",
      answer:
        "JSON unescaping converts escape sequences like \\n, \\t, \\\", and \\\\ back into their actual characters (newline, tab, quote, backslash). This reverses the escaping process and makes JSON strings readable and usable as normal text.",
    },
    {
      question: "When should I unescape JSON strings?",
      answer:
        "You should unescape JSON strings when you need to read or use the actual content, such as when parsing API responses, debugging JSON logs, displaying JSON data to users, or converting escaped database values back to readable text.",
    },
    {
      question: "What's the difference between escaping and unescaping?",
      answer:
        'Escaping converts special characters to sequences (newline becomes \\n) to make text JSON-safe. Unescaping does the reverse, converting sequences back to characters (\\n becomes newline) so you can read and use the actual text.',
    },
    {
      question: "Can I unescape Unicode sequences?",
      answer:
        "Yes, this tool handles Unicode escape sequences like \\u0041 (which represents 'A'). JSON uses Unicode escapes for characters outside the basic ASCII range, and this tool will decode them back to their actual characters.",
    },
    {
      question: "Why does my JSON show escape sequences?",
      answer:
        "If you see sequences like \\n or \\\" in your JSON output, it means the string was properly escaped for JSON format. To read the actual content, you need to unescape it. This is common when viewing raw API responses or JSON logs.",
    },
    {
      question: "Is unescaping safe for user-generated content?",
      answer:
        "Unescaping itself is safe, but be careful how you use the unescaped content. If you're displaying it in a web page, make sure to properly escape it for HTML to prevent XSS attacks. Only unescape content from trusted sources.",
    },
    {
      question: "Can I unescape JSON in JavaScript?",
      answer:
        "Yes, you can unescape JSON in JavaScript using JSON.parse() for complete JSON objects, or by manually replacing escape sequences. This tool provides a quick way to unescape JSON strings without writing code.",
    },
    {
      question: "Is this tool safe for sensitive data?",
      answer:
        "Yes, this tool runs entirely in your browser using JavaScript. Your data is never uploaded to any server, making it safe for sensitive or confidential JSON content.",
    },
  ],

  relatedTools: [
    "json-escape-unescape",
    "json-escape",
    "escape-json-string",
    "unescape-json-string",
    "json-formatter",
    "base64-encode-decode",
    "url-encode-decode",
  ],

  ui: {
    inputPlaceholder: "Enter JSON string to unescape (e.g., Hello\\nWorld)...",
    outputPlaceholder: "Unescaped text will appear here...",
    inputLabel: "JSON (Escaped)",
    outputLabel: "Text (Unescaped)",
    convertLabel: "Unescape",
  },
}
