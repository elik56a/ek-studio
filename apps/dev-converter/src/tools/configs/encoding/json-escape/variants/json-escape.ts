import { Tool } from "@/lib/tools/types"

/**
 * JSON Escape Tool Configuration (SEO Variant)
 *
 * Dedicated page for escaping text into JSON-safe strings.
 * Converts quotes, backslashes, newlines, tabs into escape sequences.
 */
export const jsonEscapeTool: Tool = {
  id: "json-escape",
  slug: "json-escape",
  name: "JSON Escape",
  description:
    "Escape text into JSON-safe strings by converting quotes, backslashes, and newlines into escape sequences",
  category: "encoding",
  type: "converter",

  // Hide from header dropdown
  nav: {
    showInHeader: false,
  },

  // Reuse json-escape-unescape component
  componentId: "json-escape-unescape",

  // Preset for escape mode
  preset: {
    mode: "escape",
  },

  keywords: [
    "json escape",
    "escape json",
    "json string escape",
    "escape json string",
    "json encoder",
    "escape json online",
    "json string encoder",
  ],

  metadata: {
    title: "JSON Escape Tool - Escape Strings for JSON Online",
    description:
      "Escape text for JSON strings by converting quotes, backslashes, newlines (\\n, \\t, \\\") into proper escape sequences. Fix JSON parse errors instantly.",
    keywords: [
      "json escape",
      "escape json",
      "json string escape",
      "json encoder",
      "escape json string",
    ],
  },

  info: {
    description:
      'This JSON Escape tool converts plain text into JSON-safe strings by escaping special characters. JSON requires characters like quotes, backslashes, newlines, and tabs to be escaped using sequences such as \\", \\\\, \\n, and \\t. If you\'ve encountered "Unexpected token" or "Invalid JSON" errors, proper string escaping is often the solution—especially critical for multiline text, file paths, and user-generated content in JSON payloads.',
    howToUse: [
      "Paste plain text that needs to be used in a JSON string",
      "Click Escape to convert special characters to escape sequences",
      "Copy the escaped output and use it in your JSON payload",
      "Validate your JSON using a JSON formatter to ensure it's valid",
    ],
    useCases: [
      "Fix JSON parse errors caused by unescaped quotes and newlines",
      "Escape multiline text for JSON API requests and responses",
      "Convert Windows file paths with backslashes for JSON configs",
      "Prepare user input for safe storage in JSON format",
      "Escape log messages and error text for JSON logging systems",
      "Create valid JSON strings for configuration files",
    ],
    features: [
      "Escapes quotes, backslashes, newlines, tabs, and control characters",
      "Instant conversion with real-time preview",
      "One-click copy to clipboard",
      "Prevents JSON parse errors and syntax issues",
      "Runs locally in your browser - privacy-friendly",
    ],
  },

  examples: [
    {
      title: "Escape quotes and newlines",
      input: 'Hello "World"\nNew line here',
      description: "Convert quotes and newlines to JSON escape sequences",
    },
    {
      title: "Escape Windows file path",
      input: "C:\\Users\\Documents\\file.txt",
      description: "Escape backslashes for valid JSON",
    },
    {
      title: "Escape multiline text",
      input: "Line 1\nLine 2\nLine 3",
      description: "Convert multiline text to single-line JSON string",
    },
  ],

  faq: [
    {
      question: "What does JSON escaping do?",
      answer:
        'JSON escaping converts special characters into escape sequences that JSON parsers can understand. For example, a newline becomes \\n, a quote becomes \\", and a backslash becomes \\\\. This ensures your text can be safely included in JSON strings without breaking the syntax.',
    },
    {
      question: "Why do I need to escape JSON strings?",
      answer:
        'JSON uses quotes and backslashes for its syntax, so these characters must be escaped when they appear in string values. Without escaping, you\'ll get "Unexpected token" or "Invalid JSON" errors. Escaping is essential for multiline text, file paths, and any content with special characters.',
    },
    {
      question: "What characters need to be escaped in JSON?",
      answer:
        'Common characters that need escaping include: double quotes ("), backslash (\\), newline (\\n), tab (\\t), carriage return (\\r), backspace (\\b), and form feed (\\f). Control characters also need to be escaped using Unicode sequences.',
    },
    {
      question: "How is JSON escaping different from JSON.stringify?",
      answer:
        "JSON.stringify converts entire JavaScript objects/values into JSON format. JSON escaping focuses specifically on converting raw text into a JSON-safe string value. Use this tool when you need to escape text that will be inserted into a JSON string, not when converting objects.",
    },
    {
      question: "Can JSON escaping prevent security issues?",
      answer:
        "JSON escaping helps prevent broken payloads and parsing errors, which can indirectly improve security. However, for injection prevention and XSS protection, you should also validate inputs, use proper content types, and follow security best practices when handling user data.",
    },
    {
      question: "Will escaping work for JSON in APIs?",
      answer:
        "Yes, this tool is perfect for preparing strings for JSON APIs. When you need to send multiline text, file paths, or user input in a JSON request body, escape the text first to ensure the JSON is valid and parseable by the API server.",
    },
    {
      question: "Can I escape JSON for configuration files?",
      answer:
        "Absolutely! JSON configuration files often contain file paths, connection strings, and multiline values that need proper escaping. Use this tool to escape those values before adding them to your config files.",
    },
    {
      question: "Is this tool safe for sensitive data?",
      answer:
        "Yes, this tool runs entirely in your browser using JavaScript. Your data is never uploaded to any server, making it safe for sensitive or confidential content.",
    },
  ],

  relatedTools: [
    "json-escape-unescape",
    "json-unescape",
    "escape-json-string",
    "unescape-json-string",
    "json-formatter",
    "base64-encode-decode",
    "url-encode-decode",
  ],

  ui: {
    inputPlaceholder: "Enter text to escape for JSON...",
    outputPlaceholder: "Escaped JSON string will appear here...",
    inputLabel: "Text (Plain)",
    outputLabel: "JSON (Escaped)",
    convertLabel: "Escape",
  },
}
