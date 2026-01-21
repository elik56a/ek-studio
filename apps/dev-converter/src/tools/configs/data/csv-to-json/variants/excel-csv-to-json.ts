import { Tool } from "@/lib/tools/types"

export const excelCsvToJsonTool: Tool = {
  id: "excel-csv-to-json",
  slug: "excel-csv-to-json",
  name: "Excel CSV to JSON",
  description: "Convert Excel CSV exports to JSON format",
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
    "excel csv to json",
    "excel to json",
    "convert excel csv",
    "excel export to json",
  ],

  metadata: {
    title: "Excel CSV to JSON Converter - Convert Excel Exports to JSON",
    description:
      "Convert Excel CSV exports to JSON format instantly. Transform Excel spreadsheet data into structured JSON for APIs and applications.",
    keywords: [
      "excel csv to json",
      "excel to json converter",
      "convert excel csv",
      "excel export to json",
    ],
  },

  info: {
    description:
      "Convert Excel CSV exports to JSON with this specialized tool. Export your Excel spreadsheet as CSV, then transform it into structured JSON format perfect for APIs, databases, and web applications. Handles Excel-specific formatting and data types.",
    howToUse: [
      "Export your Excel file as CSV",
      "Paste or upload the CSV data",
      "Tool detects Excel headers automatically",
      "Convert to JSON with proper formatting",
      "Use the JSON in your applications",
    ],
    useCases: [
      "Convert Excel reports to JSON",
      "Transform Excel data for APIs",
      "Import Excel data into web apps",
      "Convert Excel exports for databases",
      "Process Excel data in JavaScript",
    ],
    features: [
      "Excel CSV format support",
      "Automatic header detection",
      "Type conversion for Excel data",
      "Handles Excel special characters",
      "Large spreadsheet support",
    ],
  },

  examples: [
    {
      title: "Convert Excel product list",
      input: "Product,Price,Quantity\nLaptop,1299.99,10\nKeyboard,79.99,25",
      description: "Transform Excel CSV export to JSON",
    },
    {
      title: "Convert Excel sales data",
      input: "Date,Sales,Region\n2024-01-01,5000,North\n2024-01-02,6500,South",
      description: "Convert Excel sales report to JSON",
    },
  ],

  faq: [
    {
      question: "How do I export Excel to CSV?",
      answer:
        "In Excel, go to File > Save As, then select 'CSV (Comma delimited)' as the file format.",
    },
    {
      question: "Does it handle Excel formulas?",
      answer:
        "The tool converts the calculated values from Excel CSV exports, not the formulas themselves.",
    },
    {
      question: "Can it convert Excel dates?",
      answer:
        "Yes, Excel dates in CSV format are converted to JSON strings or numbers depending on the format.",
    },
    {
      question: "What about Excel special characters?",
      answer:
        "The tool properly handles special characters, quotes, and commas from Excel CSV exports.",
    },
  ],

  relatedTools: [
    "csv-to-json",
    "convert-csv-to-json",
    "csv-file-to-json",
    "json-formatter",
  ],

  ui: {
    inputPlaceholder: "Paste Excel CSV export here...",
    outputPlaceholder: "JSON output...",
    inputLabel: "Excel CSV",
    outputLabel: "JSON Output",
    convertLabel: "Convert to JSON",
  },
}
