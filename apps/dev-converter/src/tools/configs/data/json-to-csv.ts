import { Tool } from "@/lib/tools/types"

/**
 * JSON to CSV Converter Tool Configuration
 *
 * Converts JSON arrays into CSV format for spreadsheets and reporting.
 * Automatically generates headers from JSON keys.
 * Essential for Excel, Google Sheets, and data analysis workflows.
 */
export const jsonToCsvTool: Tool = {
  id: "json-to-csv",
  slug: "json-to-csv",
  name: "JSON to CSV Converter",
  description: "Convert JSON arrays into CSV for Excel and Google Sheets",
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
  relatedTools: ["csv-to-json", "json-formatter", "json-to-yaml"],
  ui: {
    inputPlaceholder: "Paste JSON array...",
    outputPlaceholder: "CSV output...",
    inputLabel: "JSON Input",
    outputLabel: "CSV Output",
    convertLabel: "Convert to CSV",
  },
}
