import { Tool } from "@/lib/tools/types"

export const csvToJsonObjectTool: Tool = {
  id: "csv-to-json-object",
  slug: "csv-to-json-object",
  name: "CSV to JSON Object",
  description: "Convert CSV to JSON object format",
  category: "json-data",
  type: "converter",

  nav: {
    showInHeader: false,
  },

  componentId: "csv-to-json",

  preset: {
    hasHeaders: true,
    outputFormat: "object",
  },

  keywords: [
    "csv to json object",
    "csv to object",
    "json object from csv",
    "csv object converter",
  ],

  metadata: {
    title: "CSV to JSON Object Converter - Convert CSV to JSON Object",
    description:
      "Convert CSV to JSON object format. Transform CSV data into a JSON object with row keys. Perfect for keyed data structures.",
    keywords: [
      "csv to json object",
      "csv to object converter",
      "json object from csv",
      "csv object format",
    ],
  },

  info: {
    description:
      "Convert CSV to JSON object format. This tool transforms CSV data into a JSON object where each row is stored with a unique key (row_1, row_2, etc.). Perfect for data structures that need keyed access to rows or when you want to organize CSV data as a dictionary.",
    howToUse: [
      "Paste CSV data with headers",
      "Tool converts to JSON object format",
      "Each row gets a unique key (row_1, row_2, etc.)",
      "Copy the JSON object for your application",
    ],
    useCases: [
      "Create keyed data structures",
      "Convert CSV for dictionary-style access",
      "Organize CSV data with row identifiers",
      "Transform CSV for object-based processing",
      "Generate JSON objects for configuration",
    ],
    features: [
      "JSON object output format",
      "Unique row keys",
      "Header-based properties",
      "Type conversion",
      "Dictionary-style structure",
    ],
  },

  examples: [
    {
      title: "CSV to JSON object",
      input: "name,email,role\nJohn,john@example.com,Admin\nAlice,alice@example.com,User",
      description: "Convert CSV to JSON object with row keys",
    },
    {
      title: "Settings to object",
      input: "setting,value,type\ntheme,dark,string\ntimeout,30,number",
      description: "Transform settings CSV to JSON object",
    },
  ],

  faq: [
    {
      question: "What is a JSON object?",
      answer:
        "A JSON object is a collection of key-value pairs enclosed in curly braces {}. This tool creates an object where each CSV row is a value with a row key.",
    },
    {
      question: "How are row keys generated?",
      answer:
        "Row keys are automatically generated as row_1, row_2, row_3, etc., based on the row position in the CSV.",
    },
    {
      question: "When should I use object format?",
      answer:
        "Use object format when you need keyed access to rows or want to organize data as a dictionary rather than a list.",
    },
    {
      question: "Can I customize the row keys?",
      answer:
        "The tool uses standard row_N keys. For custom keys, use array format and process the data in your application.",
    },
  ],

  relatedTools: [
    "csv-to-json",
    "csv-to-json-array",
    "json-formatter",
    "json-to-csv",
  ],

  ui: {
    inputPlaceholder: "Paste CSV here...",
    outputPlaceholder: "JSON object output...",
    inputLabel: "CSV Input",
    outputLabel: "JSON Object",
    convertLabel: "Convert to Object",
  },
}
