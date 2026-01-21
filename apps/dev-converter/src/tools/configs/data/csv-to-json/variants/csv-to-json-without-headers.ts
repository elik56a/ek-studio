import { Tool } from "@/lib/tools/types"

export const csvToJsonWithoutHeadersTool: Tool = {
  id: "csv-to-json-without-headers",
  slug: "csv-to-json-without-headers",
  name: "CSV to JSON without Headers",
  description: "Convert CSV to JSON without using headers",
  category: "json-data",
  type: "converter",

  nav: {
    showInHeader: false,
  },

  componentId: "csv-to-json",

  preset: {
    hasHeaders: false,
    outputFormat: "array",
  },

  keywords: [
    "csv to json without headers",
    "csv no headers",
    "csv array to json",
    "headerless csv",
  ],

  metadata: {
    title: "CSV to JSON without Headers - Convert Headerless CSV",
    description:
      "Convert CSV to JSON without headers. Transform CSV data without column names into JSON arrays. Perfect for headerless CSV files.",
    keywords: [
      "csv to json without headers",
      "csv no headers to json",
      "headerless csv converter",
      "csv array to json",
    ],
  },

  info: {
    description:
      "Convert CSV to JSON without headers. This tool treats all rows as data, including the first row. Perfect for CSV files that don't have column headers or when you want to preserve all rows as data. Outputs JSON arrays with numeric indices.",
    howToUse: [
      "Paste CSV data without headers",
      "All rows are treated as data",
      "Click Convert to generate JSON",
      "Output is an array of arrays",
    ],
    useCases: [
      "Convert CSV files without headers",
      "Transform raw data arrays",
      "Parse headerless CSV exports",
      "Convert numeric data tables",
      "Process CSV data as arrays",
    ],
    features: [
      "No header row required",
      "All rows treated as data",
      "Array-based output",
      "Type conversion for values",
      "Handles numeric data",
    ],
  },

  examples: [
    {
      title: "CSV without headers",
      input: "John,30,New York\nAlice,25,London\nBob,35,Paris",
      description: "Convert headerless CSV to JSON array",
    },
    {
      title: "Numeric data table",
      input: "100,200,300\n150,250,350\n175,275,375",
      description: "Transform numeric CSV data",
    },
  ],

  faq: [
    {
      question: "When should I use this tool?",
      answer:
        "Use this tool when your CSV file doesn't have headers in the first row, or when you want to treat all rows as data.",
    },
    {
      question: "What format is the JSON output?",
      answer:
        "The output is an array of arrays, where each inner array represents a row from the CSV.",
    },
    {
      question: "Can I add headers later?",
      answer:
        "Yes, you can manually add headers to the JSON or use the 'CSV to JSON with Headers' tool if your CSV has headers.",
    },
    {
      question: "How are values converted?",
      answer:
        "Numbers are converted to JSON numbers, and text values are converted to strings automatically.",
    },
  ],

  relatedTools: [
    "csv-to-json",
    "csv-to-json-with-headers",
    "csv-to-json-array",
    "json-formatter",
  ],

  ui: {
    inputPlaceholder: "Paste CSV without headers here...",
    outputPlaceholder: "JSON output...",
    inputLabel: "CSV Data",
    outputLabel: "JSON Array",
    convertLabel: "Convert to JSON",
  },
}
