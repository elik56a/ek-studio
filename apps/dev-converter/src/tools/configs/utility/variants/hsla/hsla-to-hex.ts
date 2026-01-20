import { Tool } from "@/lib/tools/types"

export const hslaToHexTool: Tool = {
  id: "hsla-to-hex",
  slug: "hsla-to-hex",
  name: "HSLA to HEX Converter",
  description:
    "Convert HSLA color values to HEX format instantly — perfect for converting transparent theme colors to solid HEX codes",
  category: "utility",
  type: "converter",

  nav: {
    showInHeader: false,
  },

  componentId: "color-converter",

  preset: {
    focus: "hsla",
    highlight: "hex",
  },

  keywords: [
    "hsla to hex",
    "hsla to hex converter",
    "convert hsla to hex",
    "hsla color to hex",
    "css hsla to hex",
    "remove alpha channel",
    "hex code converter",
  ],

  metadata: {
    title: "HSLA to HEX Converter - Convert HSLA Colors to HEX Format",
    description:
      "Convert HSLA color values to HEX format instantly. Free online tool with live preview for converting transparent theme colors to solid HEX codes.",
    keywords: [
      "hsla to hex",
      "hsla to hex converter",
      "color converter",
      "hex code",
      "css colors",
    ],
  },

  info: {
    description:
      "Convert HSLA color values to HEX format for CSS variables, design tools, and color codes. While HSLA format hsla(9, 100%, 65%, 0.8) includes alpha transparency, HEX format #FF5733 represents solid colors. This tool converts HSLA to HEX by removing the alpha channel, giving you the base color in compact HEX notation for use in design tools and CSS variables.",
    howToUse: [
      "Paste an HSLA color value (e.g., hsla(9, 100%, 65%, 0.8))",
      "View the HEX equivalent (alpha channel removed)",
      "See a live color preview to verify the result",
      "Copy the HEX code for your CSS or design tool",
    ],
    useCases: [
      "Convert HSLA to HEX for CSS variables and color codes",
      "Remove alpha channel to get base color in HEX",
      "Use HEX codes in design tools like Figma and Sketch",
      "Convert theme colors to HEX for documentation",
      "Generate compact HEX codes from HSLA colors",
    ],
    features: [
      "Instant HSLA to HEX conversion",
      "Live color preview",
      "Removes alpha channel automatically",
      "Copy HEX codes with one click",
      "Auto-detects HSLA format",
      "Runs locally in your browser",
    ],
  },

  examples: [
    {
      title: "HSLA to HEX",
      input: "hsla(9, 100%, 65%, 0.8)",
      description: "Convert HSLA to HEX (alpha removed)",
    },
    {
      title: "Theme color to HEX",
      input: "hsla(204, 70%, 53%, 0.5)",
      description: "Convert semi-transparent HSLA to solid HEX",
    },
    {
      title: "Overlay color to HEX",
      input: "hsla(0, 0%, 0%, 0.3)",
      description: "Convert overlay HSLA to base HEX color",
    },
  ],

  faq: [
    {
      question: "How do I convert HSLA to HEX?",
      answer:
        "Paste your HSLA color value (like hsla(9, 100%, 65%, 0.8)) and get the HEX equivalent #FF5733. The alpha channel is removed to give you the base color.",
    },
    {
      question: "What happens to the alpha channel?",
      answer:
        "The alpha channel is removed during conversion. HEX format doesn't support transparency (except 8-digit HEX), so you get the base color without opacity.",
    },
    {
      question: "Can I preserve the alpha channel?",
      answer:
        "Standard 6-digit HEX doesn't support alpha. If you need transparency, keep the HSLA format or use 8-digit HEX (not widely supported).",
    },
    {
      question: "Why use HEX instead of HSLA?",
      answer:
        "HEX is more compact, widely used in design tools, and common in CSS variables. Use HEX when you don't need transparency.",
    },
    {
      question: "Can I convert HSLA values from CSS?",
      answer:
        "Yes. If you have HSLA values from CSS, paste them in hsla(h, s%, l%, a) format to get the HEX code.",
    },
    {
      question: "Is the conversion done on a server?",
      answer:
        "No. All conversion runs locally in your browser, so your color data never leaves your device.",
    },
  ],

  relatedTools: [
    "color-converter",
    "hex-to-hsla",
    "hsla-to-hsl",
    "hsla-to-rgb",
  ],

  ui: {
    inputPlaceholder: "hsla(9, 100%, 65%, 0.8)",
    outputPlaceholder: "HEX code will appear here...",
    inputLabel: "HSLA Color",
    outputLabel: "HEX Output",
    convertLabel: "Convert to HEX",
  },
}
