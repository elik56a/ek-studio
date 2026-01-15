import { Tool } from "@/lib/tools/types";

/**
 * CSV to JSON Converter Tool Configuration
 * 
 * Converts CSV spreadsheet data into structured JSON objects.
 * Automatically detects headers and converts types.
 * Essential for importing Excel/CSV exports into APIs, databases, and JavaScript apps.
 */
export const csvToJsonTool: Tool = {
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
};
