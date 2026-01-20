import { Tool } from "@/lib/tools/types"

export const hexToHslaTool: Tool = {
  id: "hex-to-hsla",
  slug: "hex-to-hsla",
  name: "HEX to HSLA Converter",
  description:
    "Convert HEX color codes to HSLA format with alpha transparency — perfect for theme systems with opacity control",
  category: "utility",
  type: "converter",

  nav: {
    showInHeader: false,
  },

  componentId: "color-converter",

  preset: {
    focus: "hex",
    highlight: "hsla",
  },

  keywords: [
    "hex to hsla",
    "hex to hsla converter",
    "convert hex to hsla",
    "hex color to hsla",
    "css hex to hsla",
    "hsla with alpha",
    "hsla transparency",
  ],

  metadata: {
    title: "HEX to HSLA Converter - Convert HEX Colors to HSLA with Alpha",
    description:
      "Convert HEX color codes to HSLA format with alpha transparency. Free online tool with live preview for theme systems and semi-transparent UI.",
    keywords: [
      "hex to hsla",
      "hex to hsla converter",
      "color converter",
      "hsla with alpha",
      "theme colors",
    ],
  },

  info: {
    description:
      "Convert HEX color codes to HSLA format with alpha transparency for theme systems, design tokens, and semi-transparent UI elements. HSLA combines the intuitive color manipulation of HSL (hue, saturation, lightness) with an alpha channel for transparency control. This format is ideal for creating theme variations with opacity, building overlays, and maintaining consistent color relationships across your design system.",
    howToUse: [
      "Paste a HEX color code (e.g., #FF5733)",
      "View the HSLA equivalent with alpha channel",
      "Adjust alpha value if needed (0 = transparent, 1 = opaque)",
      "Copy the HSLA value for your CSS or design system",
    ],
    useCases: [
      "Convert HEX to HSLA for CSS hsla() functions with transparency",
      "Create theme variations with opacity control",
      "Build semi-transparent overlays with consistent hue",
      "Generate color palettes with alpha transparency",
      "Manipulate colors and opacity in design systems",
    ],
    features: [
      "Instant HEX to HSLA conversion",
      "Live color preview with transparency",
      "Supports short HEX notation (#F80)",
      "Alpha channel for transparency control",
      "Copy HSLA values with one click",
      "Runs locally in your browser",
    ],
  },

  examples: [
    {
      title: "HEX to HSLA with transparency",
      input: "#FF5733",
      description: "Convert HEX to HSLA and adjust alpha for transparency",
    },
    {
      title: "Short HEX to HSLA",
      input: "#F80",
      description: "Convert shorthand HEX to HSLA format",
    },
    {
      title: "Theme color with opacity",
      input: "#3498DB",
      description: "Convert brand colors to HSLA for theme variations",
    },
  ],

  faq: [
    {
      question: "How do I convert HEX to HSLA?",
      answer:
        "Paste your HEX color code (like #FF5733) and get the HSLA equivalent hsla(9, 100%, 65%, 1) with an alpha channel for transparency control.",
    },
    {
      question: "What is HSLA format?",
      answer:
        "HSLA stands for Hue, Saturation, Lightness, Alpha. It combines HSL's intuitive color model with an alpha channel for transparency (0 = transparent, 1 = opaque).",
    },
    {
      question: "Why use HSLA instead of HEX or RGBA?",
      answer:
        "HSLA combines the best of both: intuitive color adjustments (like HSL) and transparency control (like RGBA). It's perfect for theme systems with opacity.",
    },
    {
      question: "Can I convert short HEX codes to HSLA?",
      answer:
        "Yes. Short HEX codes like #F80 are automatically expanded to #FF8800 and then converted to HSLA format.",
    },
    {
      question: "How do I create a semi-transparent theme color?",
      answer:
        "Convert your HEX color to HSLA and set the alpha value between 0 and 1. For example, hsla(9, 100%, 65%, 0.5) is 50% transparent.",
    },
    {
      question: "What's the advantage of HSLA over RGBA?",
      answer:
        "HSLA makes it easier to create color variations while maintaining transparency. You can adjust lightness for dark mode without changing the alpha value.",
    },
    {
      question: "Is the conversion done on a server?",
      answer:
        "No. All conversion runs locally in your browser, so your color data never leaves your device.",
    },
  ],

  relatedTools: ["color-converter", "hsla-to-hex", "hex-to-hsl", "hex-to-rgba"],

  ui: {
    inputPlaceholder: "#FF5733",
    outputPlaceholder: "HSLA values will appear here...",
    inputLabel: "HEX Color",
    outputLabel: "HSLA Output",
    convertLabel: "Convert to HSLA",
  },
}
