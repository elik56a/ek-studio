import { Tool } from "@/lib/tools/types"

/**
 * Escape JSON String Tool Configuration (SEO Variant)
 *
 * Alternative SEO-focused page for escaping JSON strings.
 * Targets "escape json string" keyword variations.
 */
export const escapeJsonStringTool: Tool = {
  id: "escape-json-string",
  slug: "escape-json-string",
  name: "Escape JSON String",
  description:
    "Escape strings for JSON by converting special characters into escape sequences for valid JSON syntax",
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
    "escape json string",
    "json string escape",
    "escape string for json",
    "json string escaper",
    "escape text for json",
    "json string escape tool",
  ],

  metadata: {
    title: "Escape JSON String - Convert Text to JSON-Safe Strings",
    description:
      "Escape strings for JSON format by converting quotes, newlines, and backslashes to escape sequences. Free online JSON string escaper tool.",
    keywords: [
      "escape json string",
      "json string escape",
      "escape string for json",
      "json string escaper",
    ],
  },

  info: {
    description:
      'This Escape JSON String tool helps you convert plain text into valid JSON string values by escaping special characters. When building JSON payloads, API requests, or configuration files, strings must have their quotes, backslashes, newlines, and tabs properly escaped. This tool automatically converts these characters to their escape sequence equivalents (\\", \\\\, \\n, \\t), preventing "Unexpected token" errors and ensuring your JSON is syntactically valid.',
    howToUse: [
      "Paste the text you want to use as a JSON string value",
      "Click Escape to convert special characters to escape sequences",
      "Copy the escaped string and insert it into your JSON",
      "Test your JSON with a validator to confirm it's properly formatted",
    ],
    useCases: [
      "Prepare text for JSON API request bodies",
      "Escape user input before storing in JSON format",
      "Convert multiline strings for JSON configuration files",
      "Fix JSON syntax errors caused by unescaped characters",
      "Escape file paths and URLs for JSON payloads",
      "Prepare log messages for JSON logging systems",
    ],
    features: [
      "Escapes all JSON special characters automatically",
      "Handles quotes, backslashes, newlines, tabs, and control characters",
      "Real-time conversion as you type",
      "One-click copy for quick workflow",
      "Client-side processing - your data stays private",
    ],
  },

  examples: [
    {
      title: "Escape text with quotes",
      input: 'She said "Hello World"',
      description: "Escape quotes for valid JSON string",
    },
    {
      title: "Escape multiline message",
      input: "Error occurred:\nFile not found\nPlease check the path",
      description: "Convert multiline text to single-line JSON string",
    },
    {
      title: "Escape path with backslashes",
      input: "D:\\Projects\\app\\config.json",
      description: "Escape Windows path for JSON",
    },
  ],

  faq: [
    {
      question: "Why do I need to escape JSON strings?",
      answer:
        'JSON strings must be enclosed in quotes, so any quotes, backslashes, or control characters within the string need to be escaped. Without escaping, the JSON parser will encounter syntax errors like "Unexpected token" because it can\'t distinguish between string delimiters and string content.',
    },
    {
      question: "What characters are escaped in JSON strings?",
      answer:
        'The main characters that need escaping are: double quotes ("), backslash (\\), newline (\\n), tab (\\t), carriage return (\\r), backspace (\\b), and form feed (\\f). Some tools also escape forward slashes and Unicode control characters.',
    },
    {
      question: "How do I use escaped strings in JSON?",
      answer:
        'After escaping your string, wrap it in double quotes and use it as a JSON value. For example: {"message": "Hello\\nWorld"} where \\n is the escaped newline. The escaped string becomes a valid JSON string value.',
    },
    {
      question: "Can I escape strings for JSON arrays?",
      answer:
        "Yes, this tool works for any JSON string value, whether it's in an object, array, or nested structure. Escape each string value individually before adding it to your JSON structure.",
    },
    {
      question: "Is escaping the same as JSON.stringify?",
      answer:
        "Not quite. JSON.stringify converts entire JavaScript values (objects, arrays, primitives) into JSON format. This tool focuses specifically on escaping raw text to be used as a JSON string value. Use this when you have text that needs to go inside a JSON string.",
    },
    {
      question: "Will this fix my JSON parse errors?",
      answer:
        'If your JSON parse errors are caused by unescaped quotes, newlines, or backslashes in string values, then yes! Properly escaping strings is one of the most common fixes for "Unexpected token" and "Invalid JSON" errors.',
    },
    {
      question: "Can I escape JSON strings in my code?",
      answer:
        "Yes, most programming languages have built-in functions for JSON escaping (like JSON.stringify in JavaScript). This tool is useful for quick manual escaping, testing, or when you don't have access to code.",
    },
    {
      question: "Is my data secure when using this tool?",
      answer:
        "Yes, this tool runs entirely in your browser. No data is sent to any server, so your content remains private and secure on your device.",
    },
  ],

  relatedTools: [
    "json-escape-unescape",
    "json-escape",
    "json-unescape",
    "unescape-json-string",
    "json-formatter",
    "base64-encode-decode",
    "url-encode-decode",
  ],

  ui: {
    inputPlaceholder: "Enter text to escape for JSON string...",
    outputPlaceholder: "Escaped JSON string will appear here...",
    inputLabel: "Text (Plain)",
    outputLabel: "JSON String (Escaped)",
    convertLabel: "Escape",
  },
}
