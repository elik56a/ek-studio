import { ComingSoonPlaceholder } from "@/components/coming-soon-placeholder"
import ColorConverterTool from "@/components/tools/color-converter"

import { Tool } from "../types"

export const utilityTools: Tool[] = [
  {
    id: "color-converter",
    slug: "color-converter",
    name: "Color Converter",
    description: "Convert colors between HEX, RGB, HSL, and RGBA formats with live preview",
    category: "utility",
    type: "converter",
    keywords: ["color", "hex", "rgb", "hsl", "rgba", "hsla", "convert", "picker"],
    metadata: {
      title: "Color Converter - Convert HEX, RGB, HSL Colors Online",
      description:
        "Free online color converter. Convert colors between HEX, RGB, HSL, RGBA, and HSLA formats with visual color preview.",
      keywords: ["color converter", "hex to rgb", "rgb to hex", "hsl to rgb", "color picker", "rgba converter"],
    },
    examples: [
      {
        title: "HEX to RGB/HSL",
        input: "#FF5733",
        description: "Convert a HEX color code to RGB and HSL formats",
      },
      {
        title: "RGB to HEX/HSL",
        input: "rgb(52, 152, 219)",
        description: "Convert RGB color values to HEX and HSL",
      },
      {
        title: "HSL to HEX/RGB",
        input: "hsl(120, 100%, 50%)",
        description: "Convert HSL color to HEX and RGB formats",
      },
      {
        title: "Short HEX notation",
        input: "#F80",
        description: "Convert 3-digit HEX shorthand to full formats",
      },
      {
        title: "RGBA with transparency",
        input: "rgba(255, 87, 51, 0.8)",
        description: "Convert RGBA color with alpha channel",
      },
    ],
    faq: [
      {
        question: "What color formats are supported?",
        answer:
          "The tool supports HEX (#FF5733 or #F80), RGB (rgb(255, 87, 51)), RGBA (rgba(255, 87, 51, 0.8)), HSL (hsl(9, 100%, 60%)), and HSLA (hsla(9, 100%, 60%, 0.8)) formats.",
      },
      {
        question: "What is the difference between RGB and HSL?",
        answer:
          "RGB (Red, Green, Blue) uses color channels from 0-255. HSL (Hue, Saturation, Lightness) is more intuitive: Hue (0-360°) represents the color, Saturation (0-100%) is color intensity, and Lightness (0-100%) is brightness.",
      },
      {
        question: "Can I use 3-digit HEX codes?",
        answer:
          "Yes! Short HEX codes like #F80 are automatically expanded to #FF8800. Each digit is doubled to create the full 6-digit code.",
      },
      {
        question: "What does the alpha channel do?",
        answer:
          "The alpha channel in RGBA and HSLA controls transparency, ranging from 0 (fully transparent) to 1 (fully opaque). For example, rgba(255, 0, 0, 0.5) is 50% transparent red.",
      },
    ],
    relatedTools: ["hash-generator", "base64-encode-decode"],
    ui: {
      inputPlaceholder: "Enter color value (e.g., #FF5733, rgb(255, 87, 51), hsl(9, 100%, 60%))...",
      outputPlaceholder: "Converted color values will appear here...",
      inputLabel: "Color Input",
      outputLabel: "Color Output",
      convertLabel: "Convert Color",
    },
    switcher: {
      enabled: true,
      mode: "category",
      showAllLink: true,
      preserveInput: true,
    },
    component: ColorConverterTool,
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
