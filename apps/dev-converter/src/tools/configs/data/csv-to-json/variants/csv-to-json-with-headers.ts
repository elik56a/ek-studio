import { Tool } from "@/lib/tools/types"

export const csvToJsonWithHeadersTool: Tool = {
  id: "csv-to-json-with-headers",
  slug: "csv-to-json-with-headers",
  name: "CSV to JSON with Headers",
  description: "Convert CSV to JSON using first row as headers",
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

  keywords: [
    "csv to json with headers",
    "csv headers to json",
    "csv column names",
    "csv header row",
  ],

  metadata: {
    title: "CSV to JSON with Headers - Convert CSV Using Header Row",
    description:
      "Convert CSV to JSON using the first row as headers. Transform CSV data with column names into structured JSON objects.",
    keywords: [
      "csv to json with headers",
      "csv headers to json",
      "csv column names to json",
      "csv header row",
    ],
  },

  info: {
    description:
      "Convert CSV to JSON with automatic header detection. This tool uses the first row of your CSV as property names in the resulting JSON objects. Perfect for CSV files exported from databases, spreadsheets, and data analysis tools that include column headers.",
    howToUse: [
      "Paste CSV data with headers in first row",
      "Headers are automatically used as JSON keys",
      "Click Convert to generate JSON",
      "Each row becomes a JSON object with header properties",
    ],
    useCases: [
      "Convert CSV with column names",
      "Transform database exports with headers",
      "Parse CSV files with header row",
      "Convert spreadsheet data with columns",
      "Process CSV data with field names",
    ],
    features: [
      "Automatic header detection",
      "Headers become JSON keys",
      "Type conversion for values",
      "Clean property names",
      "Handles special characters in headers",
    ],
  },

  examples: [
    {
      title: "CSV with headers to JSON",
      input: "firstName,lastName,age\nJohn,Doe,30\nJane,Smith,25",
      description: "Convert CSV with headers to JSON objects",
    },
    {
      title: "Product CSV with headers",
      input: "productName,price,inStock\nLaptop,999,true\nMouse,29,true",
      description: "Transform product CSV with headers",
    },
  ],

  faq: [
    {
      question: "What are CSV headers?",
      answer:
        "CSV headers are the column names in the first row of a CSV file. They describe what each column contains.",
    },
    {
      question: "How are headers used in JSON?",
      answer:
        "Headers become the property names (keys) in the resulting JSON objects. Each data row becomes an object with these properties.",
    },
    {
      question: "What if my headers have spaces?",
      answer:
        "Headers with spaces are preserved in the JSON keys. You can use them as-is or the tool will clean them up.",
    },
    {
      question: "Can I convert CSV without headers?",
      answer:
        "Yes, use the 'CSV to JSON without Headers' tool or uncheck the headers option.",
    },
  ],

  relatedTools: [
    "csv-to-json",
    "csv-to-json-without-headers",
    "convert-csv-to-json",
    "json-formatter",
  ],

  ui: {
    inputPlaceholder: "Paste CSV with headers here...",
    outputPlaceholder: "JSON output...",
    inputLabel: "CSV with Headers",
    outputLabel: "JSON Output",
    convertLabel: "Convert to JSON",
  },
}
