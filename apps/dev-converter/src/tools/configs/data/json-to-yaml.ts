import { Tool } from "@/lib/tools/types";

/**
 * JSON to YAML Converter Tool Configuration
 * 
 * Converts JSON data into clean, human-readable YAML format.
 * Essential for Kubernetes manifests, Docker Compose, CI/CD pipelines, and DevOps configs.
 * Preserves structure, nesting, and data types during conversion.
 */
export const jsonToYamlTool: Tool = {
  id: "json-to-yaml",
  slug: "json-to-yaml",
  name: "JSON to YAML Converter",
  description:
    "Convert JSON to YAML for Kubernetes, DevOps, and configuration files",
  category: "json-data",
  type: "converter",
  keywords: ["json to yaml", "convert json to yaml", "yaml converter"],
  metadata: {
    title: "JSON to YAML Converter Online (Fast & Free)",
    description:
      "Convert JSON to YAML instantly. Perfect for Kubernetes, Docker Compose, CI/CD pipelines, and configuration files.",
    keywords: ["json to yaml", "yaml converter online", "json yaml convert"],
  },
  info: {
    description:
      "The JSON to YAML Converter transforms JSON data into clean, human-readable YAML. YAML is commonly used in DevOps tools such as Kubernetes, Docker Compose, and CI/CD pipelines. This tool preserves structure, nesting, and data types while converting JSON into valid YAML syntax.",
    howToUse: [
      "Paste your JSON into the input editor",
      "Ensure the JSON is valid",
      "Click convert to generate YAML",
      "Review indentation and structure",
      "Copy YAML into your config files",
    ],
    useCases: [
      "Convert API JSON into Kubernetes YAML manifests",
      "Create YAML configs from JSON payloads",
      "Prepare Docker Compose and CI files",
      "Improve readability of configuration data",
      "Documentation and infrastructure examples",
    ],
    features: [
      "Accurate JSON to YAML conversion",
      "Preserves arrays, objects, and nesting",
      "Validates JSON before conversion",
      "Readable YAML output with indentation",
      "Runs fully in the browser",
    ],
  },
  examples: [
    {
      title: "Convert JSON object",
      input: '{"name":"App","replicas":3}',
      description: "Convert basic JSON to YAML",
    },
  ],
  faq: [
    {
      question: "Why convert JSON to YAML?",
      answer:
        "YAML is easier to read and edit, making it ideal for configuration and DevOps workflows.",
    },
    {
      question: "Is this JSON to YAML converter safe?",
      answer:
        "Yes. All conversion is done locally in your browser.",
    },
  ],
  relatedTools: [
    "yaml-to-json",
    "json-formatter",
    "json-to-csv",
    "csv-to-json",
  ],
  ui: {
    inputPlaceholder: "Paste JSON here...",
    outputPlaceholder: "YAML output...",
    inputLabel: "JSON Input",
    outputLabel: "YAML Output",
    convertLabel: "Convert to YAML",
  },
};
