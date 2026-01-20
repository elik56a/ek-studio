import { Tool } from "@/lib/tools/types"

export const rgbaToHexTool: Tool = {
  id: "rgba-to-hex",
  slug: "rgba-to-hex",
  name: "RGBA to HEX Converter",
  description:
    "Convert RGBA color values to HEX format instantly — perfect for converting transparent colors to solid HEX codes",
  category: "utility",
  type: "converter",

  nav: {
    showInHeader: false,
  },

  componentId: "color-converter",

  preset: {
    focus: "rgba",
    highlight: "hex",
  },

  keywords: [
    "rgba to hex",
    "rgba to hex converter",
    "convert rgba to hex",
    "rgba color to hex",
    "css rgba to hex",
    "remove alpha channel",
    "hex code converter",
  ],

  metadata: {
    title: "RGBA to HEX Converter - Convert RGBA Colors to HEX Format",
    description:
      "Convert RGBA color values to HEX format instantly. Free online tool with live preview for converting transparent colors to solid HEX codes.",
    keywords: [
      "rgba to hex",
      "rgba to hex converter",
      "color converter",
      "hex code",
      "css colors",
    ],
  },

  info: {
    description:
      "Convert RGBA color values to HEX format for CSS variables, design tools, and color codes. While RGBA format rgba(255, 87, 51, 0.8) includes alpha transparency, HEX format #FF5733 represents solid colors. This tool converts RGBA to HEX by removing the alpha channel, giving you the base color in compact HEX notation for use in design tools and CSS variables.",
    howToUse: [
      "Paste an RGBA color value (e.g., rgba(255, 87, 51, 0.8))",
      "View the HEX equivalent (alpha channel removed)",
      "See a live color preview to verify the result",
      "Copy the HEX code for your CSS or design tool",
    ],
    useCases: [
      "Convert RGBA to HEX for CSS variables and color codes",
      "Remove alpha channel to get base color in HEX",
      "Use HEX codes in design tools like Figma and Sketch",
      "Convert JavaScript RGBA values to HEX for documentation",
      "Generate compact HEX codes from RGBA colors",
    ],
    features: [
      "Instant RGBA to HEX conversion",
      "Live color preview",
      "Removes alpha channel automatically",
      "Copy HEX codes with one click",
      "Auto-detects RGBA format",
      "Runs locally in your browser",
    ],
  },

  examples: [
    {
      title: "RGBA to HEX",
      input: "rgba(255, 87, 51, 0.8)",
      description: "Convert RGBA to HEX (alpha removed)",
    },
    {
      title: "Semi-transparent to solid",
      input: "rgba(52, 152, 219, 0.5)",
      description: "Convert semi-transparent RGBA to solid HEX",
    },
    {
      title: "Overlay color to HEX",
      input: "rgba(0, 0, 0, 0.3)",
      description: "Convert overlay RGBA to base HEX color",
    },
  ],

  faq: [
    {
      question: "How do I convert RGBA to HEX?",
      answer:
        "Paste your RGBA color value (like rgba(255, 87, 51, 0.8)) and get the HEX equivalent #FF5733. The alpha channel is removed to give you the base color.",
    },
    {
      question: "What happens to the alpha channel?",
      answer:
        "The alpha channel is removed during conversion. HEX format doesn't support transparency (except 8-digit HEX), so you get the base color without opacity.",
    },
    {
      question: "Can I preserve the alpha channel?",
      answer:
        "Standard 6-digit HEX doesn't support alpha. If you need transparency, keep the RGBA format or use 8-digit HEX (not widely supported).",
    },
    {
      question: "Why use HEX instead of RGBA?",
      answer:
        "HEX is more compact, widely used in design tools, and common in CSS variables. Use HEX when you don't need transparency.",
    },
    {
      question: "Can I convert RGBA values from JavaScript?",
      answer:
        "Yes. If you have RGBA values from JavaScript, paste them in rgba(r, g, b, a) format to get the HEX code.",
    },
    {
      question: "Is the conversion done on a server?",
      answer:
        "No. All conversion runs locally in your browser, so your color data never leaves your device.",
    },
  ],

  relatedTools: [
    "color-converter",
    "hex-to-rgba",
    "rgba-to-rgb",
    "rgba-to-hsl",
  ],

  ui: {
    inputPlaceholder: "rgba(255, 87, 51, 0.8)",
    outputPlaceholder: "HEX code will appear here...",
    inputLabel: "RGBA Color",
    outputLabel: "HEX Output",
    convertLabel: "Convert to HEX",
  },
}
