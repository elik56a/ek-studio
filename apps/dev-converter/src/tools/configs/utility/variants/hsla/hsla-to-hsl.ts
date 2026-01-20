import { Tool } from "@/lib/tools/types"

export const hslaToHslTool: Tool = {
  id: "hsla-to-hsl",
  slug: "hsla-to-hsl",
  name: "HSLA to HSL Converter",
  description:
    "Convert HSLA color values to HSL format instantly — perfect for removing alpha transparency from theme colors",
  category: "utility",
  type: "converter",

  nav: {
    showInHeader: false,
  },

  componentId: "color-converter",

  preset: {
    focus: "hsla",
    highlight: "hsl",
  },

  keywords: [
    "hsla to hsl",
    "hsla to hsl converter",
    "convert hsla to hsl",
    "remove alpha channel",
    "hsla without transparency",
    "css hsla to hsl",
    "solid color converter",
  ],

  metadata: {
    title: "HSLA to HSL Converter - Remove Alpha Transparency from HSLA Colors",
    description:
      "Convert HSLA color values to HSL format instantly. Free online tool with live preview for removing alpha transparency from theme colors.",
    keywords: [
      "hsla to hsl",
      "hsla to hsl converter",
      "color converter",
      "remove alpha",
      "css colors",
    ],
  },

  info: {
    description:
      "Convert HSLA color values to HSL format by removing the alpha transparency channel. While HSLA format hsla(9, 100%, 65%, 0.8) includes alpha for transparency, HSL format hsl(9, 100%, 65%) represents solid colors. This tool is useful when you need to extract the base color from a transparent HSLA value or convert semi-transparent theme colors to their solid HSL equivalents.",
    howToUse: [
      "Paste an HSLA color value (e.g., hsla(9, 100%, 65%, 0.8))",
      "View the HSL equivalent (alpha channel removed)",
      "See a live color preview to verify the result",
      "Copy the HSL value for your CSS or design system",
    ],
    useCases: [
      "Remove alpha transparency from HSLA colors",
      "Convert HSLA to HSL for solid color values",
      "Extract base color from semi-transparent HSLA",
      "Convert theme colors to HSL for color manipulation",
      "Simplify color values by removing alpha channel",
    ],
    features: [
      "Instant HSLA to HSL conversion",
      "Live color preview",
      "Removes alpha channel automatically",
      "Copy HSL values with one click",
      "Auto-detects HSLA format",
      "Runs locally in your browser",
    ],
  },

  examples: [
    {
      title: "HSLA to HSL",
      input: "hsla(9, 100%, 65%, 0.8)",
      description: "Convert HSLA to HSL (alpha removed)",
    },
    {
      title: "Theme color to HSL",
      input: "hsla(204, 70%, 53%, 0.5)",
      description: "Convert semi-transparent HSLA to solid HSL",
    },
    {
      title: "Overlay color to HSL",
      input: "hsla(0, 0%, 0%, 0.3)",
      description: "Convert overlay HSLA to base HSL color",
    },
  ],

  faq: [
    {
      question: "How do I convert HSLA to HSL?",
      answer:
        "Paste your HSLA color value (like hsla(9, 100%, 65%, 0.8)) and get the HSL equivalent hsl(9, 100%, 65%). The alpha channel is removed.",
    },
    {
      question: "What happens to the alpha channel?",
      answer:
        "The alpha channel is removed during conversion. HSL format doesn't support transparency, so you get the base color without opacity.",
    },
    {
      question: "Why would I need HSL instead of HSLA?",
      answer:
        "HSL is useful when you don't need transparency, want simpler color values, or need to work with systems that don't support alpha channels.",
    },
    {
      question: "Can I preserve the alpha channel?",
      answer:
        "No. HSL format doesn't support alpha. If you need transparency, keep the HSLA format.",
    },
    {
      question:
        "What if I want to convert HSLA to a solid color that looks the same?",
      answer:
        "This tool removes the alpha channel, giving you the base color. To get a solid color that looks the same as a semi-transparent one, you'd need to blend it with the background color.",
    },
    {
      question: "Can I convert HSLA values from CSS?",
      answer:
        "Yes. If you have HSLA values from CSS, paste them in hsla(h, s%, l%, a) format to get the HSL equivalent.",
    },
    {
      question: "Is the conversion done on a server?",
      answer:
        "No. All conversion runs locally in your browser, so your color data never leaves your device.",
    },
  ],

  relatedTools: [
    "color-converter",
    "hsl-to-hsla",
    "hsla-to-hex",
    "hsla-to-rgba",
  ],

  ui: {
    inputPlaceholder: "hsla(9, 100%, 65%, 0.8)",
    outputPlaceholder: "HSL values will appear here...",
    inputLabel: "HSLA Color",
    outputLabel: "HSL Output",
    convertLabel: "Convert to HSL",
  },
}
