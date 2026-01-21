import { Tool } from "@/lib/tools/types"

export const csvToJsonTool: Tool = {
  id: "convert-csv-to-json",
  slug: "convert-csv-to-json",
  name: "Convert CSV to JSON",
  description: "Convert CSV files to JSON format instantly",
  category: "json-data",
  type: "converter",
  componentId: "csv-to-json",

  preset: {
    hasHeaders: true,
    outputFormat: "array",
  },

  keywords: [
    "convert csv to json",
    "csv to json converter",
    "csv json conversion",
    "transform csv to json",
  ],

  metadata: {
    title: "Convert CSV to JSON Online - Free CSV to JSON Converter",
    description:
      "Convert CSV files to JSON format instantly. Transform spreadsheet data into structured JSON for APIs and applications. Free online CSV to JSON converter.",
    keywords: [
      "convert csv to json",
      "csv to json converter",
      "csv json conversion",
      "transform csv to json",
    ],
  },

  info: {
    description:
      "Convert CSV to JSON with this free online tool. Transform spreadsheet data from Excel or CSV files into structured JSON format perfect for APIs, databases, and web applications. Automatically detects headers and converts data types.",
    howToUse: [
      "Paste CSV data or upload a CSV file",
      "Tool automatically detects headers",
      "Click Convert to transform to JSON",
      "Copy the JSON output for your application",
    ],
    useCases: [
      "Convert Excel exports to JSON",
      "Prepare CSV data for REST APIs",
      "Transform spreadsheet data for web apps",
      "Import CSV data into databases",
      "Convert tabular data for JavaScript",
    ],
    features: [
      "Automatic header detection",
      "Type conversion (numbers, booleans)",
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
      input: "product,price,stock\nLaptop,999,15\nMouse,29,50",
      description: "Convert product CSV to JSON",
    },
  ],

  faq: [
    {
      question: "How do I convert CSV to JSON?",
      answer:
        "Paste your CSV data into the tool, and it will automatically convert it to JSON format with proper structure and data types.",
    },
    {
      question: "Does it handle CSV headers?",
      answer:
        "Yes, the tool automatically detects headers in the first row and uses them as JSON keys.",
    },
    {
      question: "Can I convert CSV files without headers?",
      answer:
        "Yes, uncheck the 'First row is headers' option to convert CSV data without headers.",
    },
    {
      question: "Is my CSV data secure?",
      answer:
        "Yes, all conversion happens in your browser. Your CSV data is never uploaded to any server.",
    },
    {
      question: "What output formats are supported?",
      answer:
        "You can output as a JSON array (default) or as a JSON object with row keys.",
    },
  ],

  relatedTools: [
    "csv-to-json",
    "json-to-csv",
    "json-formatter",
    "excel-csv-to-json",
  ],

  ui: {
    inputPlaceholder: "Paste CSV here...",
    outputPlaceholder: "JSON output...",
    inputLabel: "CSV Input",
    outputLabel: "JSON Output",
    convertLabel: "Convert to JSON",
  },
}
