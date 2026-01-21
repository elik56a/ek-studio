import { Tool } from "@/lib/tools/types"

export const csvFileToJsonTool: Tool = {
  id: "csv-file-to-json",
  slug: "csv-file-to-json",
  name: "CSV File to JSON",
  description: "Convert CSV files to JSON format online",
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
    "csv file to json",
    "csv file converter",
    "upload csv to json",
    "csv file parser",
  ],

  metadata: {
    title: "CSV File to JSON Converter - Upload & Convert CSV Files",
    description:
      "Convert CSV files to JSON online. Upload CSV files and transform them into structured JSON format. Free CSV file to JSON converter.",
    keywords: [
      "csv file to json",
      "csv file converter",
      "upload csv to json",
      "csv file parser",
    ],
  },

  info: {
    description:
      "Convert CSV files to JSON format with this free online tool. Upload CSV files from your computer or paste CSV data directly. Perfect for converting spreadsheet exports, database dumps, and tabular data into JSON for web applications and APIs.",
    howToUse: [
      "Upload a CSV file or paste CSV data",
      "Headers are automatically detected",
      "Click Convert to generate JSON",
      "Download or copy the JSON output",
    ],
    useCases: [
      "Upload and convert CSV files",
      "Transform spreadsheet exports to JSON",
      "Parse CSV files for web applications",
      "Convert database exports to JSON",
      "Process CSV data for APIs",
    ],
    features: [
      "File upload support",
      "Automatic header detection",
      "Type conversion",
      "Large file handling",
      "Secure client-side processing",
    ],
  },

  examples: [
    {
      title: "Convert uploaded CSV file",
      input: "id,name,email\n1,John,john@example.com\n2,Alice,alice@example.com",
      description: "Upload and convert CSV file to JSON",
    },
  ],

  faq: [
    {
      question: "How do I convert a CSV file to JSON?",
      answer:
        "Click the upload button to select your CSV file, or paste CSV data directly. The tool will convert it to JSON instantly.",
    },
    {
      question: "What file size is supported?",
      answer:
        "The tool can handle large CSV files. All processing happens in your browser for security.",
    },
    {
      question: "Is my CSV file uploaded to a server?",
      answer:
        "No, all conversion happens locally in your browser. Your files never leave your computer.",
    },
  ],

  relatedTools: [
    "csv-to-json",
    "convert-csv-to-json",
    "json-to-csv",
    "json-formatter",
  ],

  ui: {
    inputPlaceholder: "Upload CSV file or paste here...",
    outputPlaceholder: "JSON output...",
    inputLabel: "CSV File",
    outputLabel: "JSON Output",
    convertLabel: "Convert to JSON",
  },
}
