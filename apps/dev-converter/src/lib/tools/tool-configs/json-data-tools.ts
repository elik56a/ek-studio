import CsvToJsonTool from "@/components/tools/csv-to-json"
import JsonFormatterTool from "@/components/tools/json-formatter"
import JsonToCsvTool from "@/components/tools/json-to-csv"
import JsonToYamlTool from "@/components/tools/json-to-yaml"
import YamlToJsonTool from "@/components/tools/yaml-to-json"

import { Tool } from "../types"

export const jsonDataTools: Tool[] = [
  {
    id: "json-formatter",
    slug: "json-formatter",
    name: "JSON Formatter & Validator",
    description:
      "Format, validate, beautify, and minify JSON with instant error detection",
    category: "json-data",
    type: "converter",
    keywords: ["json formatter", "json validator", "json beautifier", "json minify"],
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
      "json-to-yaml",
      "json-to-csv",
      "yaml-to-json",
      "csv-to-json",
      "base64-encode",
      "url-encode",
    ],
    ui: {
      inputPlaceholder: "Paste JSON here...",
      outputPlaceholder: "Formatted JSON output...",
      inputLabel: "JSON Input",
      outputLabel: "Formatted JSON",
      convertLabel: "Format JSON",
    },
  },

  {
    id: "json-to-yaml",
    slug: "json-to-yaml",
    name: "JSON to YAML Converter",
    description:
      "Convert JSON to YAML for Kubernetes, DevOps, and configuration files",
    category: "json-data",
    type: "converter",
    keywords: ["json to yaml", "convert json to yaml", "yaml converter"],
    metadata: {
      title: "JSON to YAML Converter Online (Fast & Free)",
      description:
        "Convert JSON to YAML instantly. Perfect for Kubernetes, Docker Compose, CI/CD pipelines, and configuration files.",
      keywords: ["json to yaml", "yaml converter online", "json yaml convert"],
    },
    info: {
      description:
        "The JSON to YAML Converter transforms JSON data into clean, human-readable YAML. YAML is commonly used in DevOps tools such as Kubernetes, Docker Compose, and CI/CD pipelines. This tool preserves structure, nesting, and data types while converting JSON into valid YAML syntax.",
      howToUse: [
        "Paste your JSON into the input editor",
        "Ensure the JSON is valid",
        "Click convert to generate YAML",
        "Review indentation and structure",
        "Copy YAML into your config files",
      ],
      useCases: [
        "Convert API JSON into Kubernetes YAML manifests",
        "Create YAML configs from JSON payloads",
        "Prepare Docker Compose and CI files",
        "Improve readability of configuration data",
        "Documentation and infrastructure examples",
      ],
      features: [
        "Accurate JSON to YAML conversion",
        "Preserves arrays, objects, and nesting",
        "Validates JSON before conversion",
        "Readable YAML output with indentation",
        "Runs fully in the browser",
      ],
    },
    examples: [
      {
        title: "Convert JSON object",
        input: '{"name":"App","replicas":3}',
        description: "Convert basic JSON to YAML",
      },
    ],
    faq: [
      {
        question: "Why convert JSON to YAML?",
        answer:
          "YAML is easier to read and edit, making it ideal for configuration and DevOps workflows.",
      },
      {
        question: "Is this JSON to YAML converter safe?",
        answer:
          "Yes. All conversion is done locally in your browser.",
      },
    ],
    relatedTools: [
      "yaml-to-json",
      "json-formatter",
      "json-to-csv",
      "csv-to-json",
    ],
    ui: {
      inputPlaceholder: "Paste JSON here...",
      outputPlaceholder: "YAML output...",
      inputLabel: "JSON Input",
      outputLabel: "YAML Output",
      convertLabel: "Convert to YAML",
    },
  },

  {
    id: "yaml-to-json",
    slug: "yaml-to-json",
    name: "YAML to JSON Converter",
    description:
      "Convert YAML configuration files into structured JSON data",
    category: "json-data",
    type: "converter",
    keywords: ["yaml to json", "convert yaml to json"],
    metadata: {
      title: "YAML to JSON Converter Online (Free Tool)",
      description:
        "Convert YAML to JSON instantly. Ideal for APIs, automation scripts, and JavaScript applications.",
      keywords: ["yaml to json", "yaml json converter"],
    },
    info: {
      description:
        "The YAML to JSON Converter transforms YAML configuration files into valid JSON. JSON is widely used in APIs, JavaScript applications, and data exchange, making this conversion essential for automation and validation workflows.",
      howToUse: [
        "Paste YAML into the input field",
        "Click convert",
        "Fix errors if shown",
        "Copy the generated JSON",
      ],
      useCases: [
        "Convert Kubernetes YAML to JSON",
        "Prepare configs for APIs",
        "Validate YAML structure",
        "Automation and scripting",
      ],
      features: [
        "Strict YAML parsing",
        "Clean JSON output",
        "Supports DevOps configs",
        "Client-side processing",
      ],
    },
    examples: [],
    faq: [],
    relatedTools: [
      "json-to-yaml",
      "json-formatter",
      "json-to-csv",
      "csv-to-json",
    ],
    ui: {
      inputPlaceholder: "Paste YAML here...",
      outputPlaceholder: "JSON output...",
      inputLabel: "YAML Input",
      outputLabel: "JSON Output",
      convertLabel: "Convert to JSON",
    },
  },

  {
    id: "json-to-csv",
    slug: "json-to-csv",
    name: "JSON to CSV Converter",
    description:
      "Convert JSON arrays into CSV for Excel and Google Sheets",
    category: "json-data",
    type: "converter",
    keywords: ["json to csv", "convert json to csv"],
    metadata: {
      title: "JSON to CSV Converter Online (Excel Ready)",
      description:
        "Convert JSON to CSV for Excel, Google Sheets, and reporting tools. Fast, accurate, and browser-based.",
      keywords: ["json to csv", "csv converter"],
    },
    info: {
      description:
        "The JSON to CSV Converter transforms JSON arrays into CSV tables. CSV is ideal for spreadsheets, reporting, and analytics, while JSON is common in APIs. This tool bridges both formats cleanly.",
      howToUse: [
        "Paste JSON array",
        "Convert to CSV",
        "Copy into Excel or Sheets",
      ],
      useCases: [
        "Export API data",
        "Reporting and analytics",
        "Spreadsheet imports",
      ],
      features: [
        "Automatic headers",
        "Spreadsheet-ready output",
        "Fast local processing",
      ],
    },
    examples: [],
    faq: [],
    relatedTools: [
      "csv-to-json",
      "json-formatter",
      "json-to-yaml",
    ],
    ui: {
      inputPlaceholder: "Paste JSON array...",
      outputPlaceholder: "CSV output...",
      inputLabel: "JSON Input",
      outputLabel: "CSV Output",
      convertLabel: "Convert to CSV",
    },
  },

  {
    id: "csv-to-json",
    slug: "csv-to-json",
    name: "CSV to JSON Converter",
    description:
      "Convert CSV files into structured JSON objects",
    category: "json-data",
    type: "converter",
    keywords: ["csv to json", "convert csv to json"],
    metadata: {
      title: "CSV to JSON Converter Online (Free Tool)",
      description:
        "Convert CSV to JSON instantly. Perfect for APIs, databases, and frontend applications.",
      keywords: ["csv to json", "json converter"],
    },
    info: {
      description:
        "The CSV to JSON Converter turns spreadsheet data into structured JSON objects. Ideal for importing Excel or CSV exports into APIs, databases, and JavaScript apps.",
      howToUse: [
        "Paste CSV with headers",
        "Convert to JSON",
        "Use JSON in apps or APIs",
      ],
      useCases: [
        "Convert Excel exports",
        "Prepare API payloads",
        "Frontend data usage",
      ],
      features: [
        "Header detection",
        "Type conversion",
        "Clean JSON output",
      ],
    },
    examples: [],
    faq: [],
    relatedTools: [
      "json-to-csv",
      "json-formatter",
    ],
    ui: {
      inputPlaceholder: "Paste CSV here...",
      outputPlaceholder: "JSON output...",
      inputLabel: "CSV Input",
      outputLabel: "JSON Output",
      convertLabel: "Convert to JSON",
    },
  },
]
