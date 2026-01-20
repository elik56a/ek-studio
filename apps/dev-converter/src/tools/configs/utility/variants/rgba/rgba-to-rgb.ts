import { Tool } from "@/lib/tools/types"

export const rgbaToRgbTool: Tool = {
  id: "rgba-to-rgb",
  slug: "rgba-to-rgb",
  name: "RGBA to RGB Converter",
  description:
    "Convert RGBA color values to RGB format instantly — perfect for removing alpha transparency from colors",
  category: "utility",
  type: "converter",

  nav: {
    showInHeader: false,
  },

  componentId: "color-converter",

  preset: {
    focus: "rgba",
    highlight: "rgb",
  },

  keywords: [
    "rgba to rgb",
    "rgba to rgb converter",
    "convert rgba to rgb",
    "remove alpha channel",
    "rgba without transparency",
    "css rgba to rgb",
    "solid color converter",
  ],

  metadata: {
    title: "RGBA to RGB Converter - Remove Alpha Transparency from Colors",
    description:
      "Convert RGBA color values to RGB format instantly. Free online tool with live preview for removing alpha transparency from colors.",
    keywords: [
      "rgba to rgb",
      "rgba to rgb converter",
      "color converter",
      "remove alpha",
      "css colors",
    ],
  },

  info: {
    description:
      "Convert RGBA color values to RGB format by removing the alpha transparency channel. While RGBA format rgba(255, 87, 51, 0.8) includes alpha for transparency, RGB format rgb(255, 87, 51) represents solid colors. This tool is useful when you need to extract the base color from a transparent RGBA value or convert semi-transparent colors to their solid equivalents.",
    howToUse: [
      "Paste an RGBA color value (e.g., rgba(255, 87, 51, 0.8))",
      "View the RGB equivalent (alpha channel removed)",
      "See a live color preview to verify the result",
      "Copy the RGB value for your CSS or JavaScript code",
    ],
    useCases: [
      "Remove alpha transparency from RGBA colors",
      "Convert RGBA to RGB for solid color values",
      "Extract base color from semi-transparent RGBA",
      "Convert overlay colors to solid RGB",
      "Simplify color values by removing alpha channel",
    ],
    features: [
      "Instant RGBA to RGB conversion",
      "Live color preview",
      "Removes alpha channel automatically",
      "Copy RGB values with one click",
      "Auto-detects RGBA format",
      "Runs locally in your browser",
    ],
  },

  examples: [
    {
      title: "RGBA to RGB",
      input: "rgba(255, 87, 51, 0.8)",
      description: "Convert RGBA to RGB (alpha removed)",
    },
    {
      title: "Semi-transparent to solid",
      input: "rgba(52, 152, 219, 0.5)",
      description: "Convert semi-transparent RGBA to solid RGB",
    },
    {
      title: "Overlay color to RGB",
      input: "rgba(0, 0, 0, 0.3)",
      description: "Convert overlay RGBA to base RGB color",
    },
  ],

  faq: [
    {
      question: "How do I convert RGBA to RGB?",
      answer:
        "Paste your RGBA color value (like rgba(255, 87, 51, 0.8)) and get the RGB equivalent rgb(255, 87, 51). The alpha channel is removed.",
    },
    {
      question: "What happens to the alpha channel?",
      answer:
        "The alpha channel is removed during conversion. RGB format doesn't support transparency, so you get the base color without opacity.",
    },
    {
      question: "Why would I need RGB instead of RGBA?",
      answer:
        "RGB is useful when you don't need transparency, want simpler color values, or need to work with systems that don't support alpha channels.",
    },
    {
      question: "Can I preserve the alpha channel?",
      answer:
        "No. RGB format doesn't support alpha. If you need transparency, keep the RGBA format or convert to HSLA.",
    },
    {
      question:
        "What if I want to convert RGBA to a solid color that looks the same?",
      answer:
        "This tool removes the alpha channel, giving you the base color. To get a solid color that looks the same as a semi-transparent one, you'd need to blend it with the background color.",
    },
    {
      question: "Is the conversion done on a server?",
      answer:
        "No. All conversion runs locally in your browser, so your color data never leaves your device.",
    },
  ],

  relatedTools: [
    "color-converter",
    "rgb-to-rgba",
    "rgba-to-hex",
    "rgba-to-hsl",
  ],

  ui: {
    inputPlaceholder: "rgba(255, 87, 51, 0.8)",
    outputPlaceholder: "RGB values will appear here...",
    inputLabel: "RGBA Color",
    outputLabel: "RGB Output",
    convertLabel: "Convert to RGB",
  },
}
