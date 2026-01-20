import { Tool } from "@/lib/tools/types"

export const rgbaToHslTool: Tool = {
  id: "rgba-to-hsl",
  slug: "rgba-to-hsl",
  name: "RGBA to HSL Converter",
  description:
    "Convert RGBA color values to HSL format instantly — perfect for theme systems and intuitive color manipulation",
  category: "utility",
  type: "converter",

  nav: {
    showInHeader: false,
  },

  componentId: "color-converter",

  preset: {
    focus: "rgba",
    highlight: "hsl",
  },

  keywords: [
    "rgba to hsl",
    "rgba to hsl converter",
    "convert rgba to hsl",
    "rgba color to hsl",
    "css rgba to hsl",
    "hsl color converter",
    "theme colors",
  ],

  metadata: {
    title: "RGBA to HSL Converter - Convert RGBA Colors to HSL Format",
    description:
      "Convert RGBA color values to HSL format instantly. Free online tool with live preview for theme systems and intuitive color manipulation.",
    keywords: [
      "rgba to hsl",
      "rgba to hsl converter",
      "color converter",
      "hsl format",
      "theme colors",
    ],
  },

  info: {
    description:
      "Convert RGBA color values to HSL format for theme systems and intuitive color manipulation. While RGBA format rgba(255, 87, 51, 0.8) uses red, green, blue, and alpha values, HSL format hsl(9, 100%, 65%) uses hue, saturation, and lightness. HSL makes it easier to create color variations and adjust brightness, which is especially useful when working with transparent colors that you want to manipulate.",
    howToUse: [
      "Paste an RGBA color value (e.g., rgba(255, 87, 51, 0.8))",
      "View the HSL equivalent (alpha channel removed)",
      "See a live color preview to verify the result",
      "Copy the HSL value for your CSS or design system",
    ],
    useCases: [
      "Convert RGBA to HSL for CSS hsl() functions",
      "Create theme variations by adjusting lightness",
      "Build dark mode by reducing lightness values",
      "Generate color palettes with consistent saturation",
      "Manipulate colors programmatically in design systems",
    ],
    features: [
      "Instant RGBA to HSL conversion",
      "Live color preview",
      "Removes alpha channel automatically",
      "Copy HSL values with one click",
      "Auto-detects RGBA format",
      "Runs locally in your browser",
    ],
  },

  examples: [
    {
      title: "RGBA to HSL",
      input: "rgba(255, 87, 51, 0.8)",
      description: "Convert RGBA to HSL format",
    },
    {
      title: "Theme color conversion",
      input: "rgba(52, 152, 219, 0.5)",
      description: "Convert brand RGBA to HSL for theme manipulation",
    },
    {
      title: "Overlay color to HSL",
      input: "rgba(0, 0, 0, 0.3)",
      description: "Convert overlay RGBA to HSL for color adjustments",
    },
  ],

  faq: [
    {
      question: "How do I convert RGBA to HSL?",
      answer:
        "Paste your RGBA color value (like rgba(255, 87, 51, 0.8)) and get the HSL equivalent hsl(9, 100%, 65%). The alpha channel is removed.",
    },
    {
      question: "What happens to the alpha channel?",
      answer:
        "The alpha channel is removed during conversion to HSL. If you need transparency, use HSLA format instead.",
    },
    {
      question: "Why use HSL instead of RGBA?",
      answer:
        "HSL makes it easier to create color variations. You can adjust lightness for dark mode, change saturation for muted colors, or shift hue for complementary colors.",
    },
    {
      question: "Can I preserve the alpha channel?",
      answer:
        "Use the RGBA to HSLA converter if you need to preserve transparency. This tool converts to HSL which doesn't include alpha.",
    },
    {
      question: "How do I create a dark mode version of an RGBA color?",
      answer:
        "Convert your RGBA color to HSL, then reduce the lightness value. This maintains the hue and saturation while making the color darker.",
    },
    {
      question: "What's the advantage of HSL over RGBA?",
      answer:
        "HSL is more intuitive for color adjustments. Instead of tweaking RGB values, you can adjust hue, saturation, or lightness independently.",
    },
    {
      question: "Is the conversion done on a server?",
      answer:
        "No. All conversion runs locally in your browser, so your color data never leaves your device.",
    },
  ],

  relatedTools: [
    "color-converter",
    "hsl-to-rgba",
    "rgba-to-hsla",
    "rgba-to-hex",
  ],

  ui: {
    inputPlaceholder: "rgba(255, 87, 51, 0.8)",
    outputPlaceholder: "HSL values will appear here...",
    inputLabel: "RGBA Color",
    outputLabel: "HSL Output",
    convertLabel: "Convert to HSL",
  },
}
