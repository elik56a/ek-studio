import { Tool } from "@/lib/tools/types"

export const csvToJsonVariantTool: Tool = {
  id: "csv-to-json-variant",
  slug: "csv-to-json",
  name: "CSV to JSON Converter",
  description: "Convert CSV files into structured JSON objects",
  category: "json-data",
  type: "converter",

  nav: {
    showInHeader: false,
  },

  componentId: "csv-to-json",

  preset: {
    hasHeaders: true,
    outputFormat: "array",
  },

  keywords: ["csv to json", "convert csv to json"],

  metadata: {
    title: "CSV to JSON Converter Online (Free Tool)",
    description:
      "Convert CSV to JSON instantly. Perfect for APIs, databases, and frontend applications.",
    keywords: ["csv to json", "json converter"],
  },

  info: {
    description:
      "The CSV to JSON Converter turns spreadsheet data into structured JSON objects. Ideal for importing Excel or CSV exports into APIs, databases, and JavaScript apps. Automatically detects headers and converts data types for clean, ready-to-use JSON output.",
    howToUse: [
      "Paste CSV data or upload a CSV file",
      "Tool automatically detects headers in first row",
      "Choose output format (array or object)",
      "Click Convert to generate JSON",
      "Copy or download the JSON output",
    ],
    useCases: [
      "Convert Excel exports to JSON for APIs",
      "Transform CSV data for web applications",
      "Prepare spreadsheet data for databases",
      "Import CSV data into JavaScript apps",
      "Convert tabular data for frontend use",
    ],
    features: [
      "Automatic header detection",
      "Smart type conversion (numbers, booleans)",
      "Array or object output formats",
      "Handles large CSV files",
      "Client-side processing (secure)",
    ],
  },

  examples: [
    {
      title: "Convert CSV with headers",
      input: "name,age,city\nJohn,30,New York\nAlice,25,London",
      description: "Transform CSV data into JSON array",
    },
    {
      title: "Convert product data",
      input: "product,price,inStock\nLaptop,999,true\nMouse,29,true",
      description: "Convert product CSV to JSON",
    },
  ],

  faq: [
    {
      question: "How do I convert CSV to JSON?",
      answer:
        "Paste your CSV data into the tool or upload a CSV file. The tool automatically detects headers and converts the data to JSON format with proper structure and data types.",
    },
    {
      question: "Does it handle CSV headers?",
      answer:
        "Yes, the tool automatically detects headers in the first row and uses them as JSON property names. You can also disable header detection if needed.",
    },
    {
      question: "What output formats are supported?",
      answer:
        "You can output as a JSON array (default) where each row is an object, or as a JSON object with row keys (row_1, row_2, etc.).",
    },
    {
      question: "Is my CSV data secure?",
      answer:
        "Yes, all conversion happens locally in your browser. Your CSV data is never uploaded to any server.",
    },
  ],

  relatedTools: ["json-to-csv", "json-formatter"],

  ui: {
    inputPlaceholder: "Paste CSV here...",
    outputPlaceholder: "JSON output...",
    inputLabel: "CSV Input",
    outputLabel: "JSON Output",
    convertLabel: "Convert to JSON",
  },
}
