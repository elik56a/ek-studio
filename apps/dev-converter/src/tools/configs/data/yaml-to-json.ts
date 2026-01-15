import { Tool } from "@/lib/tools/types";

/**
 * YAML to JSON Converter Tool Configuration
 * 
 * Converts YAML configuration files into structured JSON data.
 * Essential for APIs, automation scripts, and JavaScript applications.
 * Validates YAML syntax and produces clean JSON output.
 */
export const yamlToJsonTool: Tool = {
  id: "yaml-to-json",
  slug: "yaml-to-json",
  name: "YAML to JSON Converter",
  description:
    "Convert YAML configuration files into structured JSON data",
  category: "json-data",
  type: "converter",
  keywords: ["yaml to json", "convert yaml to json"],
  metadata: {
    title: "YAML to JSON Converter Online (Free Tool)",
    description:
      "Convert YAML to JSON instantly. Ideal for APIs, automation scripts, and JavaScript applications.",
    keywords: ["yaml to json", "yaml json converter"],
  },
  info: {
    description:
      "The YAML to JSON Converter transforms YAML configuration files into valid JSON. JSON is widely used in APIs, JavaScript applications, and data exchange, making this conversion essential for automation and validation workflows.",
    howToUse: [
      "Paste YAML into the input field",
      "Click convert",
      "Fix errors if shown",
      "Copy the generated JSON",
    ],
    useCases: [
      "Convert Kubernetes YAML to JSON",
      "Prepare configs for APIs",
      "Validate YAML structure",
      "Automation and scripting",
    ],
    features: [
      "Strict YAML parsing",
      "Clean JSON output",
      "Supports DevOps configs",
      "Client-side processing",
    ],
  },
  examples: [],
  faq: [],
  relatedTools: [
    "json-to-yaml",
    "json-formatter",
    "json-to-csv",
    "csv-to-json",
  ],
  ui: {
    inputPlaceholder: "Paste YAML here...",
    outputPlaceholder: "JSON output...",
    inputLabel: "YAML Input",
    outputLabel: "JSON Output",
    convertLabel: "Convert to JSON",
  },
};
