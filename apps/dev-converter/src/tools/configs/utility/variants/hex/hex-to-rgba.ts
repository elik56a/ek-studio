import { Tool } from "@/lib/tools/types"

export const hexToRgbaTool: Tool = {
  id: "hex-to-rgba",
  slug: "hex-to-rgba",
  name: "HEX to RGBA Converter",
  description:
    "Convert HEX color codes to RGBA format with alpha transparency — perfect for CSS rgba() functions and semi-transparent UI elements",
  category: "utility",
  type: "converter",

  nav: {
    showInHeader: false,
  },

  componentId: "color-converter",

  preset: {
    focus: "hex",
    highlight: "rgba",
  },

  keywords: [
    "hex to rgba",
    "hex to rgba converter",
    "convert hex to rgba",
    "hex color to rgba",
    "css hex to rgba",
    "hex with alpha",
    "hex transparency",
  ],

  metadata: {
    title: "HEX to RGBA Converter - Convert HEX Colors to RGBA with Alpha",
    description:
      "Convert HEX color codes to RGBA format with alpha transparency. Free online tool with live preview for CSS, overlays, and semi-transparent UI.",
    keywords: [
      "hex to rgba",
      "hex to rgba converter",
      "color converter",
      "rgba with alpha",
      "css transparency",
    ],
  },

  info: {
    description:
      "Convert HEX color codes to RGBA format with alpha transparency for CSS rgba() functions, overlays, and semi-transparent UI elements. While HEX colors like #FF5733 are common in design tools, RGBA format rgba(255, 87, 51, 0.8) adds an alpha channel for transparency control. This is essential for creating overlays, modals, shadows, and any UI element that needs to be semi-transparent.",
    howToUse: [
      "Paste a HEX color code (e.g., #FF5733)",
      "View the RGBA equivalent with alpha channel",
      "Adjust alpha value if needed (0 = transparent, 1 = opaque)",
      "Copy the RGBA value for your CSS or design system",
    ],
    useCases: [
      "Convert HEX to RGBA for CSS rgba() functions with transparency",
      "Create semi-transparent overlays and modals",
      "Build UI elements with alpha transparency",
      "Generate RGBA values for shadows and effects",
      "Convert design colors to RGBA for programmatic opacity control",
    ],
    features: [
      "Instant HEX to RGBA conversion",
      "Live color preview with transparency",
      "Supports short HEX notation (#F80)",
      "Alpha channel for transparency control",
      "Copy RGBA values with one click",
      "Runs locally in your browser",
    ],
  },

  examples: [
    {
      title: "HEX to RGBA with transparency",
      input: "#FF5733",
      description: "Convert HEX to RGBA and adjust alpha for transparency",
    },
    {
      title: "Short HEX to RGBA",
      input: "#F80",
      description: "Convert shorthand HEX to RGBA format",
    },
    {
      title: "Dark overlay color",
      input: "#000000",
      description: "Convert black HEX to RGBA for semi-transparent overlays",
    },
  ],

  faq: [
    {
      question: "How do I convert HEX to RGBA?",
      answer:
        "Paste your HEX color code (like #FF5733) and get the RGBA equivalent rgba(255, 87, 51, 1) with an alpha channel for transparency control.",
    },
    {
      question: "What is the alpha channel in RGBA?",
      answer:
        "The alpha channel controls transparency from 0 (fully transparent) to 1 (fully opaque). For example, rgba(255, 87, 51, 0.5) is 50% transparent.",
    },
    {
      question: "Can I convert short HEX codes to RGBA?",
      answer:
        "Yes. Short HEX codes like #F80 are automatically expanded to #FF8800 and then converted to RGBA format.",
    },
    {
      question: "Why use RGBA instead of HEX?",
      answer:
        "RGBA allows you to control transparency with the alpha channel, which is essential for overlays, modals, shadows, and semi-transparent UI elements.",
    },
    {
      question: "How do I create a semi-transparent overlay?",
      answer:
        "Convert your HEX color to RGBA and set the alpha value between 0 and 1. For example, rgba(0, 0, 0, 0.5) creates a 50% transparent black overlay.",
    },
    {
      question: "Does HEX support transparency?",
      answer:
        "8-digit HEX codes can include alpha (#FF5733CC), but RGBA is more widely supported and easier to read for transparency values.",
    },
    {
      question: "Is the conversion done on a server?",
      answer:
        "No. All conversion runs locally in your browser, so your color data never leaves your device.",
    },
  ],

  relatedTools: ["color-converter", "rgba-to-hex", "hex-to-rgb", "hex-to-hsl"],

  ui: {
    inputPlaceholder: "#FF5733",
    outputPlaceholder: "RGBA values will appear here...",
    inputLabel: "HEX Color",
    outputLabel: "RGBA Output",
    convertLabel: "Convert to RGBA",
  },
}
