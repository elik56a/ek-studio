import JsonFormatterTool from "@/components/tools/json-formatter"
import JsonToYamlTool from "@/components/tools/json-to-yaml"
import YamlToJsonTool from "@/components/tools/yaml-to-json"
import JsonToCsvTool from "@/components/tools/json-to-csv"
import CsvToJsonTool from "@/components/tools/csv-to-json"
import { Tool } from "../types"

export const jsonDataTools: Tool[] = [
  {
    id: "json-formatter",
    slug: "json-formatter",
    name: "JSON Formatter & Validator",
    description:
      "Format, validate, and beautify JSON data with error highlighting",
    category: "json-data",
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
    ],
    faq: [
      {
        question: "What is JSON formatting?",
        answer:
          "JSON formatting adds proper indentation and line breaks to make JSON data more readable.",
      },
      {
        question: "Can this validate JSON?",
        answer:
          "Yes, the tool will show an error if your JSON syntax is invalid.",
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
    switcher: {
      enabled: true,
      mode: 'category',
      showAllLink: true,
      preserveInput: true,
    },
    component: JsonFormatterTool,
  },
  {
    id: "json-to-yaml",
    slug: "json-to-yaml",
    name: "JSON to YAML Converter",
    description: "Convert JSON data to YAML format with proper indentation",
    category: "json-data",
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
        input: '{"user":{"name":"Alice","email":"alice@example.com","settings":{"theme":"dark","notifications":true}}}',
        description: "Convert nested JSON with multiple levels",
      },
      {
        title: "Array of objects",
        input: '[{"id":1,"name":"Product A","price":29.99},{"id":2,"name":"Product B","price":49.99}]',
        description: "Convert JSON array to YAML list",
      },
    ],
    faq: [
      {
        question: "What is YAML?",
        answer:
          "YAML (YAML Ain't Markup Language) is a human-readable data serialization format commonly used for configuration files. It uses indentation to represent structure instead of brackets.",
      },
      {
        question: "When should I use YAML instead of JSON?",
        answer:
          "YAML is often preferred for configuration files because it's more readable and supports comments. JSON is better for data exchange between systems and APIs.",
      },
      {
        question: "Does this tool validate my JSON?",
        answer:
          "Yes, the tool will show an error if your JSON is invalid and cannot be parsed.",
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
    switcher: {
      enabled: true,
      mode: 'category',
      showAllLink: true,
      preserveInput: true,
    },
    component: JsonToYamlTool,
  },
  {
    id: "yaml-to-json",
    slug: "yaml-to-json",
    name: "YAML to JSON Converter",
    description: "Convert YAML data to JSON format with proper formatting",
    category: "json-data",
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
        input: "user:\n  name: Alice\n  email: alice@example.com\n  settings:\n    theme: dark\n    notifications: true",
        description: "Convert nested YAML with multiple levels",
      },
      {
        title: "YAML list",
        input: "- id: 1\n  name: Product A\n  price: 29.99\n- id: 2\n  name: Product B\n  price: 49.99",
        description: "Convert YAML list to JSON array",
      },
    ],
    faq: [
      {
        question: "What is YAML?",
        answer:
          "YAML (YAML Ain't Markup Language) is a human-readable data serialization format that uses indentation to represent structure. It's commonly used for configuration files.",
      },
      {
        question: "Can YAML have comments?",
        answer:
          "Yes, YAML supports comments using the # symbol. However, comments are not preserved when converting to JSON since JSON doesn't support comments.",
      },
      {
        question: "Does this tool validate my YAML?",
        answer:
          "Yes, the tool will show an error if your YAML syntax is invalid and cannot be parsed.",
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
    switcher: {
      enabled: true,
      mode: 'category',
      showAllLink: true,
      preserveInput: true,
    },
    component: YamlToJsonTool,
  },
  {
    id: "json-to-csv",
    slug: "json-to-csv",
    name: "JSON to CSV Converter",
    description: "Convert JSON data to CSV format for spreadsheet applications",
    category: "json-data",
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
        input: '[{"name":"John","age":30,"city":"New York"},{"name":"Alice","age":25,"city":"London"},{"name":"Bob","age":35,"city":"Paris"}]',
        description: "Convert JSON array to CSV with headers",
      },
      {
        title: "Product data",
        input: '[{"id":1,"product":"Laptop","price":999.99,"stock":15},{"id":2,"product":"Mouse","price":29.99,"stock":50}]',
        description: "Convert product data to CSV format",
      },
      {
        title: "Single object",
        input: '{"name":"John Doe","email":"john@example.com","role":"Developer"}',
        description: "Convert a single JSON object to CSV",
      },
    ],
    faq: [
      {
        question: "What JSON format is required?",
        answer:
          "The tool accepts either a JSON array of objects or a single JSON object. Arrays are converted to multi-row CSV files, while single objects create a single-row CSV.",
      },
      {
        question: "How are nested objects handled?",
        answer:
          "Nested objects are flattened and converted to string representation. For complex nested structures, consider flattening your JSON first.",
      },
      {
        question: "Can I use this CSV in Excel?",
        answer:
          "Yes! The generated CSV format is compatible with Excel, Google Sheets, and other spreadsheet applications.",
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
    switcher: {
      enabled: true,
      mode: 'category',
      showAllLink: true,
      preserveInput: true,
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
        input: "id,product,price,stock\n1,Laptop,999.99,15\n2,Mouse,29.99,50\n3,Keyboard,79.99,30",
        description: "Convert product CSV to JSON",
      },
      {
        title: "Contact list",
        input: "name,email,phone\nJohn Doe,john@example.com,555-0100\nJane Smith,jane@example.com,555-0101",
        description: "Convert contact CSV to JSON",
      },
    ],
    faq: [
      {
        question: "Does the CSV need headers?",
        answer:
          "Yes, the first row of your CSV should contain column headers. These will become the keys in the resulting JSON objects.",
      },
      {
        question: "How are data types handled?",
        answer:
          "The tool automatically detects and converts numbers and booleans to their proper types. Text values remain as strings.",
      },
      {
        question: "What if my CSV has errors?",
        answer:
          "The tool will show specific error messages indicating which row has issues, making it easy to fix your CSV data.",
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
    switcher: {
       enabled: true,
      mode: 'category',
      showAllLink: true,
      preserveInput: true,
    },
    component: CsvToJsonTool,
  },
]
