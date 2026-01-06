import { ComingSoonPlaceholder } from "@/components/coming-soon-placeholder"

import { Tool } from "../types"

export const utilityTools: Tool[] = [
  {
    id: "color-converter",
    slug: "color-converter",
    name: "Color Converter",
    description: "Convert colors between HEX, RGB, and HSL formats",
    category: "text",
    type: "converter",
    keywords: ["color", "hex", "rgb", "hsl", "convert"],
    metadata: {
      title: "Color Converter - Convert HEX, RGB, HSL Colors Online",
      description:
        "Free online color converter. Convert colors between HEX, RGB, and HSL formats with visual color picker.",
      keywords: ["color converter", "hex to rgb", "rgb to hex", "color picker"],
    },
    examples: [],
    faq: [],
    relatedTools: ["case-converter", "hash-generator"],
    ui: {
      inputPlaceholder: "Enter color value (HEX, RGB, HSL)...",
      outputPlaceholder: "Converted color values will appear here...",
      inputLabel: "Color Input",
      outputLabel: "Color Output",
      convertLabel: "Convert Color",
    },
    component: ComingSoonPlaceholder,
  },
  {
    id: "mime-type-lookup",
    slug: "mime-type-lookup",
    name: "MIME Type Lookup",
    description: "Find MIME types for file extensions with search suggestions",
    category: "utility",
    type: "converter",
    keywords: ["mime", "type", "extension", "file", "lookup"],
    metadata: {
      title: "MIME Type Lookup - Find MIME Types for File Extensions",
      description:
        "Free online MIME type lookup tool. Find MIME types for file extensions with search suggestions and detailed information.",
      keywords: [
        "mime type lookup",
        "file extension",
        "content type",
        "mime database",
      ],
    },
    examples: [],
    faq: [],
    relatedTools: ["hash-generator", "base64-encode-decode"],
    ui: {
      inputPlaceholder: "Enter file extension (e.g., .pdf, .jpg)...",
      outputPlaceholder: "MIME type information will appear here...",
      inputLabel: "File Extension",
      outputLabel: "MIME Type",
      convertLabel: "Lookup",
    },
    component: ComingSoonPlaceholder,
  },
]
