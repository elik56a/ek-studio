import { Tool } from "@/lib/tools/types"

export const hslaToRgbTool: Tool = {
  id: "hsla-to-rgb",
  slug: "hsla-to-rgb",
  name: "HSLA to RGB Converter",
  description:
    "Convert HSLA color values to RGB format instantly — perfect for removing alpha transparency from theme colors",
  category: "utility",
  type: "converter",

  nav: {
    showInHeader: false,
  },

  componentId: "color-converter",

  preset: {
    focus: "hsla",
    highlight: "rgb",
  },

  keywords: [
    "hsla to rgb",
    "hsla to rgb converter",
    "convert hsla to rgb",
    "remove alpha channel",
    "hsla without transparency",
    "css hsla to rgb",
    "solid color converter",
  ],

  metadata: {
    title: "HSLA to RGB Converter - Remove Alpha Transparency from HSLA Colors",
    description:
      "Convert HSLA color values to RGB format instantly. Free online tool with live preview for removing alpha transparency from theme colors.",
    keywords: [
      "hsla to rgb",
      "hsla to rgb converter",
      "color converter",
      "remove alpha",
      "css colors",
    ],
  },

  info: {
    description:
      "Convert HSLA color values to RGB format by removing the alpha transparency channel. While HSLA format hsla(9, 100%, 65%, 0.8) includes alpha for transparency, RGB format rgb(255, 87, 51) represents solid colors. This tool is useful when you need to extract the base color from a transparent HSLA value or convert semi-transparent theme colors to their solid RGB equivalents.",
    howToUse: [
      "Paste an HSLA color value (e.g., hsla(9, 100%, 65%, 0.8))",
      "View the RGB equivalent (alpha channel removed)",
      "See a live color preview to verify the result",
      "Copy the RGB value for your CSS or JavaScript code",
    ],
    useCases: [
      "Remove alpha transparency from HSLA colors",
      "Convert HSLA to RGB for solid color values",
      "Extract base color from semi-transparent HSLA",
      "Convert theme colors to RGB for programmatic styling",
      "Simplify color values by removing alpha channel",
    ],
    features: [
      "Instant HSLA to RGB conversion",
      "Live color preview",
      "Removes alpha channel automatically",
      "Copy RGB values with one click",
      "Auto-detects HSLA format",
      "Runs locally in your browser",
    ],
  },

  examples: [
    {
      title: "HSLA to RGB",
      input: "hsla(9, 100%, 65%, 0.8)",
      description: "Convert HSLA to RGB (alpha removed)",
    },
    {
      title: "Theme color to RGB",
      input: "hsla(204, 70%, 53%, 0.5)",
      description: "Convert semi-transparent HSLA to solid RGB",
    },
    {
      title: "Overlay color to RGB",
      input: "hsla(0, 0%, 0%, 0.3)",
      description: "Convert overlay HSLA to base RGB color",
    },
  ],

  faq: [
    {
      question: "How do I convert HSLA to RGB?",
      answer:
        "Paste your HSLA color value (like hsla(9, 100%, 65%, 0.8)) and get the RGB equivalent rgb(255, 87, 51). The alpha channel is removed.",
    },
    {
      question: "What happens to the alpha channel?",
      answer:
        "The alpha channel is removed during conversion. RGB format doesn't support transparency, so you get the base color without opacity.",
    },
    {
      question: "Why would I need RGB instead of HSLA?",
      answer:
        "RGB is useful when you don't need transparency, want simpler color values, or need to work with systems that don't support alpha channels.",
    },
    {
      question: "Can I preserve the alpha channel?",
      answer:
        "No. RGB format doesn't support alpha. If you need transparency, keep the HSLA format or convert to RGBA.",
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
        "Yes. If you have HSLA values from CSS, paste them in hsla(h, s%, l%, a) format to get the RGB equivalent.",
    },
    {
      question: "Is the conversion done on a server?",
      answer:
        "No. All conversion runs locally in your browser, so your color data never leaves your device.",
    },
  ],

  relatedTools: [
    "color-converter",
    "rgb-to-hsla",
    "hsla-to-rgba",
    "hsla-to-hex",
  ],

  ui: {
    inputPlaceholder: "hsla(9, 100%, 65%, 0.8)",
    outputPlaceholder: "RGB values will appear here...",
    inputLabel: "HSLA Color",
    outputLabel: "RGB Output",
    convertLabel: "Convert to RGB",
  },
}
