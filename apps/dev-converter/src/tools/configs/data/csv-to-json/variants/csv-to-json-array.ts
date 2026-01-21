import { Tool } from "@/lib/tools/types"

export const csvToJsonArrayTool: Tool = {
  id: "csv-to-json-array",
  slug: "csv-to-json-array",
  name: "CSV to JSON Array",
  description: "Convert CSV to JSON array format",
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
    "csv to json array",
    "csv to array",
    "json array from csv",
    "csv array converter",
  ],

  metadata: {
    title: "CSV to JSON Array Converter - Convert CSV to JSON Array",
    description:
      "Convert CSV to JSON array format. Transform CSV data into a JSON array of objects. Perfect for APIs and JavaScript applications.",
    keywords: [
      "csv to json array",
      "csv to array converter",
      "json array from csv",
      "csv array format",
    ],
  },

  info: {
    description:
      "Convert CSV to JSON array format. This tool transforms CSV data into a JSON array where each row becomes an object in the array. Perfect for REST APIs, JavaScript applications, and data processing that expects array-based JSON.",
    howToUse: [
      "Paste CSV data with headers",
      "Tool converts to JSON array format",
      "Each row becomes an object in the array",
      "Copy the JSON array for your application",
    ],
    useCases: [
      "Create JSON arrays for APIs",
      "Convert CSV for JavaScript arrays",
      "Prepare data for frontend applications",
      "Transform CSV for array-based processing",
      "Generate JSON arrays for databases",
    ],
    features: [
      "JSON array output format",
      "Each row as array element",
      "Header-based object properties",
      "Type conversion",
      "Optimized for APIs",
    ],
  },

  examples: [
    {
      title: "CSV to JSON array",
      input: "name,role,active\nJohn,Admin,true\nAlice,User,true",
      description: "Convert CSV to JSON array of objects",
    },
    {
      title: "Product list to array",
      input: "id,product,price\n1,Laptop,999\n2,Mouse,29",
      description: "Transform product CSV to JSON array",
    },
  ],

  faq: [
    {
      question: "What is a JSON array?",
      answer:
        "A JSON array is a list of values enclosed in square brackets []. In this tool, each CSV row becomes an object in the array.",
    },
    {
      question: "How is this different from JSON object output?",
      answer:
        "Array output creates a list of objects, while object output creates a single object with row keys. Arrays are more common for APIs.",
    },
    {
      question: "Can I use this for REST APIs?",
      answer:
        "Yes, JSON arrays are the standard format for REST API responses that return multiple items.",
    },
    {
      question: "Does it preserve data types?",
      answer:
        "Yes, numbers, booleans, and strings are automatically converted to their proper JSON types.",
    },
  ],

  relatedTools: [
    "csv-to-json",
    "csv-to-json-object",
    "json-formatter",
    "json-to-csv",
  ],

  ui: {
    inputPlaceholder: "Paste CSV here...",
    outputPlaceholder: "JSON array output...",
    inputLabel: "CSV Input",
    outputLabel: "JSON Array",
    convertLabel: "Convert to Array",
  },
}
