import { Tool } from "@/lib/tools/types"

/**
 * JSON Formatter & Validator Tool Configuration
 *
 * Formats, validates, beautifies, and minifies JSON with instant error detection.
 * Essential for debugging API responses, validating JSON syntax, and improving readability.
 * Supports large and deeply nested JSON files with syntax highlighting.
 */
export const jsonFormatterTool: Tool = {
  id: "json-formatter",
  slug: "json-formatter",
  name: "JSON Formatter & Validator",
  description:
    "Format, validate, beautify, and minify JSON with instant error detection",
  category: "json-data",
  type: "converter",
  order: 1,
  keywords: [
    "json formatter",
    "json validator",
    "json beautifier",
    "json minify",
  ],
  metadata: {
    title: "JSON Formatter & Validator Online (Free & Fast)",
    description:
      "Format, validate, beautify, or minify JSON online. Instantly detect errors, improve readability, and debug JSON data safely in your browser.",
    keywords: [
      "json formatter",
      "json validator online",
      "json beautifier",
      "json minifier",
      "format json",
    ],
  },
  info: {
    description:
      "The JSON Formatter & Validator helps you format, validate, and debug JSON data instantly. JSON is widely used in APIs, web apps, and configuration files, but raw or minified JSON is hard to read and error-prone. This tool automatically validates your JSON, highlights syntax errors, and converts compact JSON into a clean, human-readable structure with proper indentation.",
    howToUse: [
      "Paste or type your JSON into the input editor",
      "The tool validates JSON syntax automatically",
      "View formatted JSON with indentation and highlighting",
      "Fix errors if validation fails",
      "Copy or minify the JSON for production use",
    ],
    useCases: [
      "Debugging API responses and webhook payloads",
      "Validating JSON before sending API requests",
      "Beautifying JSON for documentation and tutorials",
      "Minifying JSON for faster network transfers",
      "Learning JSON structure and nesting visually",
    ],
    features: [
      "Real-time JSON validation with clear error messages",
      "Readable JSON formatting with proper indentation",
      "Minify JSON for production environments",
      "Syntax highlighting for better readability",
      "Handles large and deeply nested JSON files",
      "Runs entirely in your browser (no uploads)",
    ],
  },
  examples: [
    {
      title: "Format compact JSON",
      input: '{"name":"John","age":30,"city":"New York"}',
      description: "Convert compact JSON into readable format",
    },
    {
      title: "Validate nested JSON",
      input: '{"users":[{"id":1,"name":"Alice"},{"id":2,"name":"Bob"}]}',
      description: "Validate and format nested JSON arrays",
    },
    {
      title: "Minify formatted JSON",
      input: '{\n  "name": "John",\n  "age": 30\n}',
      description: "Reduce JSON size by removing whitespace",
    },
  ],
  faq: [
    {
      question: "What does a JSON formatter do?",
      answer:
        "A JSON formatter restructures JSON with proper spacing and indentation, making it easier to read, debug, and validate.",
    },
    {
      question: "Does this tool validate JSON?",
      answer:
        "Yes. Invalid JSON syntax is detected instantly with helpful error messages.",
    },
    {
      question: "Can I minify JSON here?",
      answer:
        "Yes. You can convert formatted JSON into compact, minified output for production.",
    },
    {
      question: "Is JSON formatting done securely?",
      answer:
        "Yes. All processing happens locally in your browser. Your data is never uploaded.",
    },
    {
      question: "Who should use a JSON validator?",
      answer:
        "Developers, backend engineers, frontend developers, and anyone working with APIs or config files.",
    },
  ],
  relatedTools: [
    "json-validator",
    "json-minify",
    "beautify-json",
    "json-viewer",
    "json-to-yaml",
    "json-to-csv",
    "yaml-to-json",
    "csv-to-json",
  ],
  ui: {
    inputPlaceholder: "Paste JSON here...",
    outputPlaceholder: "Formatted JSON output...",
    inputLabel: "JSON Input",
    outputLabel: "Formatted JSON",
    convertLabel: "Format JSON",
  },
}
