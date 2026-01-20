import { Tool } from "@/lib/tools/types"

export const hexToRgbTool: Tool = {
  id: "hex-to-rgb",
  slug: "hex-to-rgb",
  name: "HEX to RGB Converter",
  description:
    "Convert HEX color codes to RGB format instantly with live preview — perfect for CSS rgb() functions and JavaScript color manipulation",
  category: "utility",
  type: "converter",

  nav: {
    showInHeader: false,
  },

  componentId: "color-converter",

  preset: {
    focus: "hex",
    highlight: "rgb",
  },

  keywords: [
    "hex to rgb",
    "hex to rgb converter",
    "convert hex to rgb",
    "hex color to rgb",
    "css hex to rgb",
    "hexadecimal to rgb",
    "hex code to rgb",
  ],

  metadata: {
    title: "HEX to RGB Converter - Convert HEX Colors to RGB Format",
    description:
      "Convert HEX color codes to RGB format instantly. Free online tool with live preview for CSS, design systems, and web development.",
    keywords: [
      "hex to rgb",
      "hex to rgb converter",
      "color converter",
      "css color",
      "rgb converter",
    ],
  },

  info: {
    description:
      "Convert HEX color codes to RGB format for use in CSS rgb() functions, JavaScript color manipulation, and design systems. HEX colors like #FF5733 are common in design tools and CSS variables, while RGB format rgb(255, 87, 51) is essential for programmatic styling, color calculations, and frameworks that require numeric color values. This tool instantly converts any HEX code to its RGB equivalent with a live preview.",
    howToUse: [
      "Paste a HEX color code (e.g., #FF5733 or #F80)",
      "View the RGB equivalent instantly",
      "See a live color preview to verify the result",
      "Copy the RGB value for your CSS or JavaScript code",
    ],
    useCases: [
      "Convert HEX to RGB for CSS rgb() functions",
      "Use RGB values in JavaScript color manipulation",
      "Convert design tool colors to RGB format",
      "Generate RGB values for programmatic styling",
      "Create color palettes with numeric RGB values",
    ],
    features: [
      "Instant HEX to RGB conversion",
      "Live color preview",
      "Supports short HEX notation (#F80)",
      "Copy RGB values with one click",
      "Auto-detects HEX format",
      "Runs locally in your browser",
    ],
  },

  examples: [
    {
      title: "Standard HEX to RGB",
      input: "#FF5733",
      description: "Convert a standard 6-digit HEX code to RGB",
    },
    {
      title: "Short HEX to RGB",
      input: "#F80",
      description: "Convert shorthand HEX notation to RGB",
    },
    {
      title: "Dark color conversion",
      input: "#2C3E50",
      description: "Convert dark HEX colors to RGB for UI themes",
    },
  ],

  faq: [
    {
      question: "How do I convert HEX to RGB?",
      answer:
        "Paste your HEX color code (like #FF5733) and get the RGB equivalent rgb(255, 87, 51) instantly with a live preview.",
    },
    {
      question: "What is the difference between HEX and RGB?",
      answer:
        "HEX uses hexadecimal notation (#FF5733) while RGB uses decimal values rgb(255, 87, 51). Both represent the same color but in different formats.",
    },
    {
      question: "Can I convert short HEX codes like #F80?",
      answer:
        "Yes. Short HEX codes are automatically expanded (#F80 becomes #FF8800) and then converted to RGB format.",
    },
    {
      question: "Why would I need RGB instead of HEX?",
      answer:
        "RGB is useful for CSS rgb() functions, JavaScript color calculations, and frameworks that require numeric color values for programmatic manipulation.",
    },
    {
      question: "Does this work with HEX codes that have alpha?",
      answer:
        "This tool focuses on standard HEX to RGB conversion. For alpha transparency, use the HEX to RGBA converter.",
    },
    {
      question: "Is my color data sent to a server?",
      answer:
        "No. All conversion happens locally in your browser, so your color data never leaves your device.",
    },
  ],

  relatedTools: ["color-converter", "rgb-to-hex", "hex-to-rgba", "hex-to-hsl"],

  ui: {
    inputPlaceholder: "#FF5733",
    outputPlaceholder: "RGB values will appear here...",
    inputLabel: "HEX Color",
    outputLabel: "RGB Output",
    convertLabel: "Convert to RGB",
  },
}
