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
      "Format, validate, and beautify JSON data with error highlighting",
    category: "json-data",
    type: "converter",
    keywords: ["json", "format", "validate", "prettify", "minify"],
    metadata: {
      title: "JSON Formatter & Validator - Format and Validate JSON Online",
      description:
        "Free online JSON formatter and validator. Beautify, minify, and validate JSON data with syntax highlighting and error detection.",
      keywords: [
        "json formatter",
        "json validator",
        "json beautifier",
        "json minifier",
        "json parser",
      ],
    },
    examples: [
      {
        title: "Basic JSON formatting",
        input: '{"name":"John","age":30,"city":"New York"}',
        description: "Format a simple JSON object",
      },
      {
        title: "Nested JSON",
        input: '{"users":[{"id":1,"name":"Alice"},{"id":2,"name":"Bob"}]}',
        description: "Format JSON with nested arrays and objects",
      },
      {
        title: "Minify JSON for performance",
        input:
          '{\n  "name": "John",\n  "age": 30,\n  "city": "New York"\n}',
        description:
          "Convert formatted JSON into a compact minified version to reduce payload size",
      },
      {
        title: "Validate JSON with syntax errors",
        input: '{"name":"John", age:30,"city":"New York"}',
        description:
          "Detect invalid JSON syntax and highlight errors instantly",
      },
    ],
    faq: [
      {
        question: "What is a JSON formatter and why should I use it?",
        answer:
          "A JSON formatter organizes JSON data with proper indentation and structure, making it easier to read, debug, and share. It is useful when working with APIs, configuration files, or large datasets.",
      },
      {
        question: "Does this JSON formatter validate JSON automatically?",
        answer:
          "Yes. This tool validates JSON syntax in real time and shows clear error messages when your JSON is invalid, helping you fix issues quickly before using the data in your code or API requests.",
      },
      {
        question: "Can I minify JSON using this tool?",
        answer:
          "Yes. You can use this tool to beautify JSON for readability or minify it for smaller file sizes and faster data transfers, which is especially helpful in web applications and APIs.",
      },
      {
        question: "Is this JSON formatter safe to use with sensitive data?",
        answer:
          "Your JSON formatting happens locally in your browser, meaning your data is not uploaded to a server. However, avoid pasting private or confidential data if you're unsure about your environment or security policies.",
      },
      {
        question: "What’s the difference between JSON beautifier and JSON validator?",
        answer:
          "A JSON beautifier improves readability by adding indentation and spacing. A JSON validator checks that the JSON syntax is correct and can be parsed without errors. This tool supports both formatting and validation.",
      },
    ],
    relatedTools: ["json-to-yaml", "json-to-csv"],
    ui: {
      inputPlaceholder: "Paste your JSON here...",
      outputPlaceholder: "Formatted JSON will appear here...",
      inputLabel: "JSON Input",
      outputLabel: "Formatted JSON",
      convertLabel: "Format JSON",
    },

    component: JsonFormatterTool,
  },
  {
    id: "json-to-yaml",
    slug: "json-to-yaml",
    name: "JSON to YAML Converter",
    description: "Convert JSON data to YAML format with proper indentation",
    category: "json-data",
    type: "converter",
    keywords: ["json", "yaml", "convert", "transform"],
    metadata: {
      title: "JSON to YAML Converter - Convert JSON to YAML Online",
      description:
        "Free online JSON to YAML converter. Transform JSON data to YAML format with proper indentation and structure.",
      keywords: [
        "json to yaml",
        "yaml converter",
        "json converter",
        "data transformation",
      ],
    },
    examples: [
      {
        title: "Simple object",
        input: '{"name":"John Doe","age":30,"city":"New York"}',
        description: "Convert a simple JSON object to YAML",
      },
      {
        title: "Nested structure",
        input:
          '{"user":{"name":"Alice","email":"alice@example.com","settings":{"theme":"dark","notifications":true}}}',
        description: "Convert nested JSON with multiple levels",
      },
      {
        title: "Array of objects",
        input:
          '[{"id":1,"name":"Product A","price":29.99},{"id":2,"name":"Product B","price":49.99}]',
        description: "Convert JSON array to YAML list",
      },
      {
        title: "Convert API response JSON to YAML",
        input:
          '{"status":"success","data":{"users":[{"id":101,"name":"Tom"},{"id":102,"name":"Sarah"}]}}',
        description:
          "Convert a typical API response JSON structure into clean YAML output",
      },
    ],
    faq: [
      {
        question: "What is YAML and why is it used?",
        answer:
          "YAML (YAML Ain’t Markup Language) is a human-readable data format commonly used for configuration files like Kubernetes, Docker Compose, and CI/CD pipelines. It uses indentation to represent structure, making it easier to read than JSON.",
      },
      {
        question: "How do I convert JSON to YAML?",
        answer:
          "Simply paste your JSON into the input field and click Convert. The tool will validate your JSON and generate properly indented YAML output that preserves the original structure.",
      },
      {
        question: "When should I use YAML instead of JSON?",
        answer:
          "YAML is best for configuration and manual editing because it’s more readable and supports comments. JSON is usually better for machine-to-machine communication, APIs, and structured payloads.",
      },
      {
        question: "Does this tool validate my JSON before conversion?",
        answer:
          "Yes. The tool validates your JSON and will display clear errors if the JSON syntax is invalid, preventing broken YAML output.",
      },
      {
        question: "Can YAML preserve all JSON features?",
        answer:
          "Yes. YAML supports the same data structures as JSON such as objects, arrays, strings, numbers, booleans, and null values. The conversion preserves data structure and meaning.",
      },
    ],
    relatedTools: ["yaml-to-json", "json-formatter"],
    ui: {
      inputPlaceholder: "Paste your JSON here...",
      outputPlaceholder: "YAML output will appear here...",
      inputLabel: "JSON Input",
      outputLabel: "YAML Output",
      convertLabel: "Convert to YAML",
    },

    component: JsonToYamlTool,
  },
  {
    id: "yaml-to-json",
    slug: "yaml-to-json",
    name: "YAML to JSON Converter",
    description: "Convert YAML data to JSON format with proper formatting",
    category: "json-data",
    type: "converter",
    keywords: ["yaml", "json", "convert", "transform"],
    metadata: {
      title: "YAML to JSON Converter - Convert YAML to JSON Online",
      description:
        "Free online YAML to JSON converter. Transform YAML data to JSON format with proper formatting and validation.",
      keywords: [
        "yaml to json",
        "json converter",
        "yaml converter",
        "data transformation",
      ],
    },
    examples: [
      {
        title: "Simple YAML object",
        input: "name: John Doe\nage: 30\ncity: New York",
        description: "Convert a simple YAML object to JSON",
      },
      {
        title: "Nested YAML structure",
        input:
          "user:\n  name: Alice\n  email: alice@example.com\n  settings:\n    theme: dark\n    notifications: true",
        description: "Convert nested YAML with multiple levels",
      },
      {
        title: "YAML list",
        input:
          "- id: 1\n  name: Product A\n  price: 29.99\n- id: 2\n  name: Product B\n  price: 49.99",
        description: "Convert YAML list to JSON array",
      },
      {
        title: "Convert YAML config to JSON",
        input:
          "server:\n  host: localhost\n  port: 8080\n  enabled: true",
        description:
          "Convert YAML configuration format into JSON for programmatic usage",
      },
    ],
    faq: [
      {
        question: "What is YAML and how is it different from JSON?",
        answer:
          "YAML is a human-readable data format often used for configuration files. Unlike JSON, YAML supports comments, uses indentation instead of braces, and is easier to edit manually.",
      },
      {
        question: "How do I convert YAML to JSON online?",
        answer:
          "Paste your YAML content into the input and click Convert. The tool will parse your YAML, validate it, and output clean JSON that can be used in APIs or applications.",
      },
      {
        question: "Does this YAML to JSON converter validate YAML syntax?",
        answer:
          "Yes. If your YAML contains indentation errors or invalid syntax, the tool will show an error message so you can correct it before conversion.",
      },
      {
        question: "Will YAML comments be preserved in JSON?",
        answer:
          "No. JSON does not support comments, so any YAML comments are removed during conversion. Only the data structure is converted.",
      },
      {
        question: "Can this tool convert Kubernetes YAML to JSON?",
        answer:
          "Yes. This tool works great for converting Kubernetes manifests, Docker Compose files, and other YAML-based configs into JSON for scripting or validation.",
      },
    ],
    relatedTools: ["json-to-yaml", "json-formatter"],
    ui: {
      inputPlaceholder: "Paste your YAML here...",
      outputPlaceholder: "JSON output will appear here...",
      inputLabel: "YAML Input",
      outputLabel: "JSON Output",
      convertLabel: "Convert to JSON",
    },

    component: YamlToJsonTool,
  },
  {
    id: "json-to-csv",
    slug: "json-to-csv",
    name: "JSON to CSV Converter",
    description: "Convert JSON data to CSV format for spreadsheet applications",
    category: "json-data",
    type: "converter",
    keywords: ["json", "csv", "convert", "spreadsheet"],
    metadata: {
      title: "JSON to CSV Converter - Convert JSON to CSV Online",
      description:
        "Free online JSON to CSV converter. Transform JSON arrays to CSV format for Excel and spreadsheet applications.",
      keywords: [
        "json to csv",
        "csv converter",
        "json converter",
        "spreadsheet converter",
      ],
    },
    examples: [
      {
        title: "Array of objects",
        input:
          '[{"name":"John","age":30,"city":"New York"},{"name":"Alice","age":25,"city":"London"},{"name":"Bob","age":35,"city":"Paris"}]',
        description: "Convert JSON array to CSV with headers",
      },
      {
        title: "Product data",
        input:
          '[{"id":1,"product":"Laptop","price":999.99,"stock":15},{"id":2,"product":"Mouse","price":29.99,"stock":50}]',
        description: "Convert product data to CSV format",
      },
      {
        title: "Single object",
        input:
          '{"name":"John Doe","email":"john@example.com","role":"Developer"}',
        description: "Convert a single JSON object to CSV",
      },
      {
        title: "Convert API response to CSV",
        input:
          '[{"id":101,"status":"active","lastLogin":"2025-12-01"},{"id":102,"status":"inactive","lastLogin":"2025-10-15"}]',
        description:
          "Convert a JSON API response array to CSV for reporting or analytics",
      },
    ],
    faq: [
      {
        question: "What JSON format is required to convert JSON to CSV?",
        answer:
          "This tool supports a JSON array of objects (recommended) or a single JSON object. Arrays produce multi-row CSV output, while objects create a single-row CSV file.",
      },
      {
        question: "How does the converter handle nested JSON objects?",
        answer:
          "Nested fields are flattened or converted into string representations. If you have deeply nested JSON, you may want to flatten it first for cleaner CSV output.",
      },
      {
        question: "Can I open the generated CSV in Excel or Google Sheets?",
        answer:
          "Yes. The CSV output is fully compatible with Excel, Google Sheets, and most spreadsheet applications, making it perfect for exporting JSON data into tables.",
      },
      {
        question: "Does this JSON to CSV tool support large datasets?",
        answer:
          "Yes, it supports large JSON arrays, but performance may depend on your browser and device. For very large datasets, consider splitting the JSON into smaller chunks.",
      },
      {
        question: "Why is my CSV missing some fields?",
        answer:
          "CSV headers are generated from keys detected in your JSON objects. If some objects have missing keys, those columns may appear empty. Ensure your JSON objects share consistent fields for best results.",
      },
    ],
    relatedTools: ["csv-to-json", "json-formatter"],
    ui: {
      inputPlaceholder: "Paste your JSON array here...",
      outputPlaceholder: "CSV output will appear here...",
      inputLabel: "JSON Input",
      outputLabel: "CSV Output",
      convertLabel: "Convert to CSV",
    },

    component: JsonToCsvTool,
  },
  {
    id: "csv-to-json",
    slug: "csv-to-json",
    name: "CSV to JSON Converter",
    description:
      "Convert CSV data to JSON format with automatic header detection",
    category: "json-data",
    type: "converter",
    keywords: ["csv", "json", "convert", "spreadsheet"],
    metadata: {
      title: "CSV to JSON Converter - Convert CSV to JSON Online",
      description:
        "Free online CSV to JSON converter. Transform CSV data to JSON format with automatic header detection and validation.",
      keywords: [
        "csv to json",
        "json converter",
        "csv converter",
        "data transformation",
      ],
    },
    examples: [
      {
        title: "Simple CSV",
        input: "name,age,city\nJohn,30,New York\nAlice,25,London\nBob,35,Paris",
        description: "Convert CSV with headers to JSON array",
      },
      {
        title: "Product data",
        input:
          "id,product,price,stock\n1,Laptop,999.99,15\n2,Mouse,29.99,50\n3,Keyboard,79.99,30",
        description: "Convert product CSV to JSON",
      },
      {
        title: "Contact list",
        input:
          "name,email,phone\nJohn Doe,john@example.com,555-0100\nJane Smith,jane@example.com,555-0101",
        description: "Convert contact CSV to JSON",
      },
      {
        title: "Convert CSV report to JSON",
        input:
          "date,sales,region\n2025-12-01,1200,US\n2025-12-02,950,EU\n2025-12-03,1430,APAC",
        description:
          "Convert a CSV analytics report into JSON objects for API or dashboard use",
      },
    ],
    faq: [
      {
        question: "Does the CSV need headers to convert to JSON?",
        answer:
          "Yes. The first row of your CSV should contain headers (column names). These become the keys in the output JSON objects, allowing structured conversion.",
      },
      {
        question: "How does the tool detect data types in CSV?",
        answer:
          "This tool automatically converts numeric values and booleans when possible. Text values remain strings. This helps generate cleaner JSON that works well with APIs and databases.",
      },
      {
        question: "Can this converter handle commas inside CSV values?",
        answer:
          "Yes, as long as the values are properly quoted (e.g., \"New York, USA\"). The parser supports standard CSV formatting rules.",
      },
      {
        question: "What if my CSV contains empty rows or missing values?",
        answer:
          "Empty rows are ignored, and missing values will appear as empty strings or null-like values in the JSON output depending on the structure. Ensure your data is consistent for best results.",
      },
      {
        question: "What is the best way to use CSV to JSON conversion?",
        answer:
          "CSV to JSON conversion is ideal when importing spreadsheet data into APIs, converting reports into structured formats, or preparing datasets for frontend applications and database insertion.",
      },
    ],
    relatedTools: ["json-to-csv", "json-formatter"],
    ui: {
      inputPlaceholder: "Paste your CSV here...",
      outputPlaceholder: "JSON output will appear here...",
      inputLabel: "CSV Input",
      outputLabel: "JSON Output",
      convertLabel: "Convert to JSON",
    },
    component: CsvToJsonTool,
  },
]
