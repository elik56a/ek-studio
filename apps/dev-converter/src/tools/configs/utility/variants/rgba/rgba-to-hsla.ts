import { Tool } from "@/lib/tools/types"

export const rgbaToHslaTool: Tool = {
  id: "rgba-to-hsla",
  slug: "rgba-to-hsla",
  name: "RGBA to HSLA Converter",
  description:
    "Convert RGBA color values to HSLA format with alpha preserved — perfect for theme systems with intuitive color manipulation",
  category: "utility",
  type: "converter",

  nav: {
    showInHeader: false,
  },

  componentId: "color-converter",

  preset: {
    focus: "rgba",
    highlight: "hsla",
  },

  keywords: [
    "rgba to hsla",
    "rgba to hsla converter",
    "convert rgba to hsla",
    "rgba color to hsla",
    "css rgba to hsla",
    "hsla with alpha",
    "theme colors with transparency",
  ],

  metadata: {
    title: "RGBA to HSLA Converter - Convert RGBA Colors to HSLA Format",
    description:
      "Convert RGBA color values to HSLA format with alpha preserved. Free online tool with live preview for theme systems and color manipulation.",
    keywords: [
      "rgba to hsla",
      "rgba to hsla converter",
      "color converter",
      "hsla format",
      "theme colors",
    ],
  },

  info: {
    description:
      "Convert RGBA color values to HSLA format while preserving alpha transparency. Both formats support transparency, but HSLA's hue, saturation, lightness model makes it easier to create color variations and adjust brightness. This is especially useful for theme systems where you need to manipulate colors programmatically while maintaining opacity control.",
    howToUse: [
      "Paste an RGBA color value (e.g., rgba(255, 87, 51, 0.8))",
      "View the HSLA equivalent with alpha preserved",
      "See a live color preview to verify the result",
      "Copy the HSLA value for your CSS or design system",
    ],
    useCases: [
      "Convert RGBA to HSLA for CSS hsla() functions",
      "Create theme variations with preserved transparency",
      "Build dark mode while maintaining opacity",
      "Generate color palettes with consistent saturation and alpha",
      "Manipulate colors and opacity in design systems",
    ],
    features: [
      "Instant RGBA to HSLA conversion",
      "Live color preview with transparency",
      "Preserves alpha channel",
      "Copy HSLA values with one click",
      "Auto-detects RGBA format",
      "Runs locally in your browser",
    ],
  },

  examples: [
    {
      title: "RGBA to HSLA",
      input: "rgba(255, 87, 51, 0.8)",
      description: "Convert RGBA to HSLA with alpha preserved",
    },
    {
      title: "Theme color with transparency",
      input: "rgba(52, 152, 219, 0.5)",
      description: "Convert brand RGBA to HSLA for theme manipulation",
    },
    {
      title: "Overlay color conversion",
      input: "rgba(0, 0, 0, 0.3)",
      description: "Convert overlay RGBA to HSLA for easier adjustments",
    },
  ],

  faq: [
    {
      question: "How do I convert RGBA to HSLA?",
      answer:
        "Paste your RGBA color value (like rgba(255, 87, 51, 0.8)) and get the HSLA equivalent hsla(9, 100%, 65%, 0.8) with alpha preserved.",
    },
    {
      question: "Is the alpha channel preserved?",
      answer:
        "Yes. Both RGBA and HSLA support alpha transparency, so the alpha value is preserved during conversion.",
    },
    {
      question: "Why use HSLA instead of RGBA?",
      answer:
        "HSLA makes it easier to create color variations while maintaining transparency. You can adjust lightness for dark mode without changing the alpha value.",
    },
    {
      question: "What's the difference between RGBA and HSLA?",
      answer:
        "RGBA uses red, green, blue, alpha values while HSLA uses hue, saturation, lightness, alpha. HSLA is more intuitive for color adjustments.",
    },
    {
      question:
        "How do I create a dark mode version with preserved transparency?",
      answer:
        "Convert your RGBA color to HSLA, then reduce the lightness value. The alpha channel remains unchanged, maintaining the same transparency.",
    },
    {
      question: "Can I adjust the alpha value after conversion?",
      answer:
        "Yes. The alpha value is preserved during conversion, but you can manually adjust it in the HSLA format as needed.",
    },
    {
      question: "Is the conversion done on a server?",
      answer:
        "No. All conversion runs locally in your browser, so your color data never leaves your device.",
    },
  ],

  relatedTools: [
    "color-converter",
    "hsla-to-rgba",
    "rgba-to-hsl",
    "rgba-to-hex",
  ],

  ui: {
    inputPlaceholder: "rgba(255, 87, 51, 0.8)",
    outputPlaceholder: "HSLA values will appear here...",
    inputLabel: "RGBA Color",
    outputLabel: "HSLA Output",
    convertLabel: "Convert to HSLA",
  },
}
