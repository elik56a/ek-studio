import { Tool } from "@/lib/tools/types"

/**
 * Unescape JSON String Tool Configuration (SEO Variant)
 *
 * Alternative SEO-focused page for unescaping JSON strings.
 * Targets "unescape json string" keyword variations.
 */
export const unescapeJsonStringTool: Tool = {
  id: "unescape-json-string",
  slug: "unescape-json-string",
  name: "Unescape JSON String",
  description:
    "Unescape JSON strings by converting escape sequences back to readable characters for easy reading",
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
    "unescape json string",
    "json string unescape",
    "unescape string from json",
    "json string unescaper",
    "decode json string",
    "json string unescape tool",
  ],

  metadata: {
    title: "Unescape JSON String - Decode JSON Escape Sequences",
    description:
      "Unescape JSON strings by converting escape sequences (\\n, \\t, \\\") back to readable characters. Free online JSON string unescaper tool.",
    keywords: [
      "unescape json string",
      "json string unescape",
      "unescape string from json",
      "json string unescaper",
    ],
  },

  info: {
    description:
      'This Unescape JSON String tool converts JSON escape sequences back into their original characters, making JSON strings readable and usable. When you extract strings from JSON APIs, databases, or log files, they often contain escape sequences like \\n (newline), \\t (tab), \\" (quote), and \\\\ (backslash). This tool decodes these sequences back to actual characters, helping you debug API responses, read JSON logs, and work with JSON data more effectively.',
    howToUse: [
      "Paste a JSON string containing escape sequences",
      "Click Unescape to convert sequences to actual characters",
      "Copy the readable, unescaped text",
      "Use the text in your application, logs, or for debugging",
    ],
    useCases: [
      "Decode JSON strings from REST API responses",
      "Read JSON log files with escaped messages",
      "Convert JSON database values to readable text",
      "Debug JSON payloads with escape sequences",
      "Extract readable text from JSON configuration files",
      "Parse JSON strings in development and testing",
    ],
    features: [
      "Unescapes all JSON escape sequences automatically",
      "Handles \\n, \\t, \\\", \\\\, and Unicode sequences",
      "Real-time conversion as you type",
      "One-click copy for quick workflow",
      "Client-side processing - your data stays private",
    ],
  },

  examples: [
    {
      title: "Unescape quotes and newlines",
      input: 'She said \\"Hello World\\"\\nHow are you?',
      description: "Convert escape sequences to readable text",
    },
    {
      title: "Unescape multiline message",
      input: "Error occurred:\\nFile not found\\nPlease check the path",
      description: "Convert \\n to actual newlines",
    },
    {
      title: "Unescape Windows path",
      input: "D:\\\\Projects\\\\app\\\\config.json",
      description: "Convert escaped backslashes to normal path",
    },
  ],

  faq: [
    {
      question: "What does unescaping JSON strings do?",
      answer:
        "Unescaping converts JSON escape sequences back to their original characters. For example, \\n becomes a newline, \\t becomes a tab, and \\\" becomes a quote. This makes JSON strings readable and usable as normal text.",
    },
    {
      question: "When do I need to unescape JSON strings?",
      answer:
        "You need to unescape JSON strings when you want to read or use the actual content from JSON data. This is common when working with API responses, reading JSON logs, displaying JSON data to users, or debugging JSON payloads.",
    },
    {
      question: "What escape sequences can be unescaped?",
      answer:
        "This tool unescapes all standard JSON escape sequences including: \\\" (quote), \\\\ (backslash), \\n (newline), \\t (tab), \\r (carriage return), \\b (backspace), \\f (form feed), and \\uXXXX (Unicode sequences).",
    },
    {
      question: "How do I extract strings from JSON?",
      answer:
        "First, parse your JSON to extract the string value. If the string contains escape sequences (like \\n or \\\"), use this tool to unescape it and convert it to readable text. Most JSON parsers automatically unescape strings, but this tool is useful for manual inspection or debugging.",
    },
    {
      question: "Why does my JSON string show \\n instead of newlines?",
      answer:
        "In JSON format, newlines are represented as \\n escape sequences to keep the JSON on a single line. When you unescape the string, \\n is converted back to an actual newline character, making the text readable with proper line breaks.",
    },
    {
      question: "Can I unescape Unicode sequences?",
      answer:
        "Yes, this tool handles Unicode escape sequences like \\u0041 (which represents 'A'). JSON uses these sequences for characters outside basic ASCII, and this tool will decode them to their actual characters.",
    },
    {
      question: "Is unescaping safe for user data?",
      answer:
        "Unescaping itself is safe, but be careful how you use the unescaped content. If displaying in HTML, make sure to properly escape it for HTML to prevent XSS attacks. Only unescape and use content from trusted sources.",
    },
    {
      question: "Is my data secure when using this tool?",
      answer:
        "Yes, this tool runs entirely in your browser. No data is sent to any server, so your JSON content remains private and secure on your device.",
    },
  ],

  relatedTools: [
    "json-escape-unescape",
    "json-escape",
    "json-unescape",
    "escape-json-string",
    "json-formatter",
    "base64-encode-decode",
    "url-encode-decode",
  ],

  ui: {
    inputPlaceholder: "Enter JSON string to unescape (e.g., Hello\\nWorld)...",
    outputPlaceholder: "Unescaped text will appear here...",
    inputLabel: "JSON String (Escaped)",
    outputLabel: "Text (Unescaped)",
    convertLabel: "Unescape",
  },
}
