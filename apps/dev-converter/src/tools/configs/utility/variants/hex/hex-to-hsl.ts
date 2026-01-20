import { Tool } from "@/lib/tools/types"

export const hexToHslTool: Tool = {
  id: "hex-to-hsl",
  slug: "hex-to-hsl",
  name: "HEX to HSL Converter",
  description:
    "Convert HEX color codes to HSL format instantly — perfect for theme systems, design tokens, and color manipulation",
  category: "utility",
  type: "converter",

  nav: {
    showInHeader: false,
  },

  componentId: "color-converter",

  preset: {
    focus: "hex",
    highlight: "hsl",
  },

  keywords: [
    "hex to hsl",
    "hex to hsl converter",
    "convert hex to hsl",
    "hex color to hsl",
    "css hex to hsl",
    "hexadecimal to hsl",
    "hsl color converter",
  ],

  metadata: {
    title: "HEX to HSL Converter - Convert HEX Colors to HSL Format",
    description:
      "Convert HEX color codes to HSL format instantly. Free online tool with live preview for theme systems, design tokens, and color manipulation.",
    keywords: [
      "hex to hsl",
      "hex to hsl converter",
      "color converter",
      "hsl format",
      "theme colors",
    ],
  },

  info: {
    description:
      "Convert HEX color codes to HSL format for theme systems, design tokens, and intuitive color manipulation. While HEX colors like #FF5733 are common in design tools, HSL format hsl(9, 100%, 65%) makes it easier to adjust hue, saturation, and lightness independently. This is especially useful for creating color variations, dark mode themes, and design systems where you need to programmatically adjust colors.",
    howToUse: [
      "Paste a HEX color code (e.g., #FF5733 or #F80)",
      "View the HSL equivalent instantly",
      "See a live color preview to verify the result",
      "Copy the HSL value for your CSS or design system",
    ],
    useCases: [
      "Convert HEX to HSL for CSS hsl() functions",
      "Create theme variations by adjusting lightness",
      "Build dark mode by reducing lightness values",
      "Generate color palettes with consistent saturation",
      "Manipulate colors programmatically in design systems",
    ],
    features: [
      "Instant HEX to HSL conversion",
      "Live color preview",
      "Supports short HEX notation (#F80)",
      "Copy HSL values with one click",
      "Auto-detects HEX format",
      "Runs locally in your browser",
    ],
  },

  examples: [
    {
      title: "Standard HEX to HSL",
      input: "#FF5733",
      description: "Convert a standard 6-digit HEX code to HSL",
    },
    {
      title: "Short HEX to HSL",
      input: "#F80",
      description: "Convert shorthand HEX notation to HSL",
    },
    {
      title: "Theme color conversion",
      input: "#3498DB",
      description: "Convert brand colors to HSL for theme manipulation",
    },
  ],

  faq: [
    {
      question: "How do I convert HEX to HSL?",
      answer:
        "Paste your HEX color code (like #FF5733) and get the HSL equivalent hsl(9, 100%, 65%) instantly with a live preview.",
    },
    {
      question: "What is HSL format?",
      answer:
        "HSL stands for Hue, Saturation, Lightness. It represents colors in a way that's more intuitive for adjustments: hue (0-360°), saturation (0-100%), and lightness (0-100%).",
    },
    {
      question: "Why use HSL instead of HEX?",
      answer:
        "HSL makes it easier to create color variations. You can adjust lightness for dark mode, change saturation for muted colors, or shift hue for complementary colors.",
    },
    {
      question: "Can I convert short HEX codes like #F80?",
      answer:
        "Yes. Short HEX codes are automatically expanded (#F80 becomes #FF8800) and then converted to HSL format.",
    },
    {
      question: "How do I create a dark mode version of a color?",
      answer:
        "Convert your HEX color to HSL, then reduce the lightness value. For example, hsl(9, 100%, 65%) becomes hsl(9, 100%, 35%) for a darker version.",
    },
    {
      question: "What's the difference between HSL and RGB?",
      answer:
        "RGB uses red, green, blue values (0-255), while HSL uses hue, saturation, lightness. HSL is more intuitive for color adjustments and theme creation.",
    },
    {
      question: "Is my color data sent to a server?",
      answer:
        "No. All conversion happens locally in your browser, so your color data never leaves your device.",
    },
  ],

  relatedTools: ["color-converter", "hsl-to-hex", "hex-to-rgb", "hex-to-hsla"],

  ui: {
    inputPlaceholder: "#FF5733",
    outputPlaceholder: "HSL values will appear here...",
    inputLabel: "HEX Color",
    outputLabel: "HSL Output",
    convertLabel: "Convert to HSL",
  },
}
