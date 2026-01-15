import { Tool } from "@/lib/tools/types";

/**
 * JSON Escape/Unescape Tool Configuration
 * 
 * Escapes special characters for JSON strings and unescapes JSON-encoded strings.
 * Handles quotes, backslashes, newlines, tabs, and control characters.
 * Essential for fixing JSON parse errors and preparing multiline text for JSON payloads.
 */
export const jsonEscapeUnescapeTool: Tool = {
  id: "json-escape-unescape",
  slug: "json-escape-unescape",
  name: "JSON Escape & Unescape",
  description:
    "Escape text for JSON strings (quotes, slashes, newlines) or unescape JSON-encoded strings back to readable text",
  category: "encoding",
  type: "converter",
  keywords: [
    "json escape",
    "json unescape",
    "escape json string",
    "json string encoder",
    "unescape json",
  ],
  metadata: {
    title: "JSON Escape & Unescape Tool (JSON String Encoder)",
    description:
      "Escape text for JSON strings (\\n, \\t, \\, \\\\) or unescape JSON back to readable text. Fix invalid JSON payloads fast.",
    keywords: [
      "json escape",
      "json unescape",
      "escape json string",
      "json string encoder",
      "unescape json string",
    ],
  },
  info: {
    description:
      "This JSON Escape & Unescape tool helps you convert raw text into JSON-safe strings and decode escaped JSON strings back into readable text. JSON requires special characters like quotes, backslashes, and newlines to be escaped using sequences such as \\\", \\\\, and \\n. If you've ever hit a \"Unexpected token\" error in a JSON parser, escaping strings correctly is often the fix—especially for multiline text, Windows file paths, and user-generated content.",
    howToUse: [
      "Paste plain text (to escape) or an escaped JSON string (to unescape)",
      "Click Escape/Unescape",
      "Copy the output and paste it into your JSON payload, config, or logs",
      "Use a JSON validator/formatter to confirm the final JSON is valid",
    ],
    useCases: [
      "Fix JSON parse errors caused by quotes and newlines",
      "Escape multiline text to store inside JSON fields",
      "Escape Windows paths and backslashes for JSON configs",
      "Unescape API responses that contain JSON-encoded strings",
      "Prepare safe string values for logs and configuration files",
    ],
    features: [
      "Escapes quotes, backslashes, newlines, tabs, and control characters",
      "Unescapes JSON sequences back into readable text",
      "Instant conversion with one-click copy",
      "Useful for debugging APIs and JSON config files",
      "Runs locally in your browser (privacy-friendly)",
    ],
  },
  examples: [
    {
      title: "Escape quotes and newlines",
      input: 'Hello "World"\nNew line here',
      description: "Convert raw text into JSON-safe escape sequences",
    },
    {
      title: "Unescape a JSON string",
      input: 'Hello \\"World\\"\\nNew line here',
      description: "Turn escaped JSON text back into readable text",
    },
    {
      title: "Escape Windows path",
      input: "C:\\Users\\Documents\\file.txt",
      description: "Escape backslashes to avoid invalid JSON",
    },
  ],
  faq: [
    {
      question: "Why do JSON strings need escaping?",
      answer:
        "Because JSON uses quotes and backslashes for syntax. Characters like newlines or quotes inside a string must be represented as escape sequences to keep JSON valid.",
    },
    {
      question: "What characters are escaped in JSON?",
      answer:
        'Common escapes include \\\\ for backslash, \\" for quotes, \\n for newline, \\t for tab, \\r for carriage return, \\b and \\f.',
    },
    {
      question: "How do I unescape JSON text?",
      answer:
        "Paste the escaped string (containing sequences like \\n or \\\"), click unescape, and you'll get readable text back.",
    },
    {
      question: "Is JSON escaping the same as JSON.stringify?",
      answer:
        "JSON.stringify converts full values/objects into JSON. Escaping focuses on safely encoding raw text to be used inside a JSON string value.",
    },
    {
      question: "Can JSON escaping prevent security issues?",
      answer:
        "Escaping helps prevent broken payloads and parsing errors. For security (like injection prevention), also validate inputs and use safe rendering patterns.",
    },
  ],
  relatedTools: [
    "json-formatter",
    "html-escape-unescape",
    "base64-encode-decode",
    "url-encode-decode",
    "file-to-base64",
    "jwt-decoder",
  ],
  ui: {
    inputPlaceholder: "Enter text to escape or JSON string to unescape...",
    outputPlaceholder: "Result will appear here...",
    inputLabel: "Input",
    outputLabel: "Output",
    convertLabel: "Escape/Unescape",
    showSwapButton: true,
    autoDetect: {
      enabled: true,
      emptyLabel: "paste text or JSON",
      labels: {
        detected: "Escaped → Unescaping",
        plain: "Plain text → Escaping",
      },
      inputLabels: {
        detected: "JSON (Escaped)",
        plain: "Text (Plain)",
      },
      outputLabels: {
        detected: "Text (Unescaped)",
        plain: "JSON (Escaped)",
      },
    },
  },
};
