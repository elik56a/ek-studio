import { Tool } from "@/lib/tools/types"

export const rgbToHslaTool: Tool = {
  id: "rgb-to-hsla",
  slug: "rgb-to-hsla",
  name: "RGB to HSLA Converter",
  description:
    "Convert RGB color values to HSLA format with alpha transparency — perfect for theme systems with opacity control",
  category: "utility",
  type: "converter",

  nav: {
    showInHeader: false,
  },

  componentId: "color-converter",

  preset: {
    focus: "rgb",
    highlight: "hsla",
  },

  keywords: [
    "rgb to hsla",
    "rgb to hsla converter",
    "convert rgb to hsla",
    "rgb color to hsla",
    "css rgb to hsla",
    "hsla with alpha",
    "hsla transparency",
  ],

  metadata: {
    title: "RGB to HSLA Converter - Convert RGB Colors to HSLA with Alpha",
    description:
      "Convert RGB color values to HSLA format with alpha transparency. Free online tool with live preview for theme systems and semi-transparent UI.",
    keywords: [
      "rgb to hsla",
      "rgb to hsla converter",
      "color converter",
      "hsla with alpha",
      "theme colors",
    ],
  },

  info: {
    description:
      "Convert RGB color values to HSLA format with alpha transparency for theme systems and semi-transparent UI elements. HSLA combines the intuitive color manipulation of HSL (hue, saturation, lightness) with an alpha channel for transparency control. This format is ideal for converting RGB colors to a format that's easier to adjust while maintaining opacity control.",
    howToUse: [
      "Paste an RGB color value (e.g., rgb(255, 87, 51))",
      "View the HSLA equivalent with alpha channel",
      "Adjust alpha value if needed (0 = transparent, 1 = opaque)",
      "Copy the HSLA value for your CSS or design system",
    ],
    useCases: [
      "Convert RGB to HSLA for CSS hsla() functions with transparency",
      "Create theme variations with opacity control",
      "Build semi-transparent overlays with consistent hue",
      "Generate color palettes with alpha transparency",
      "Manipulate colors and opacity in design systems",
    ],
    features: [
      "Instant RGB to HSLA conversion",
      "Live color preview with transparency",
      "Alpha channel for transparency control",
      "Copy HSLA values with one click",
      "Auto-detects RGB format",
      "Runs locally in your browser",
    ],
  },

  examples: [
    {
      title: "RGB to HSLA with transparency",
      input: "rgb(255, 87, 51)",
      description: "Convert RGB to HSLA and add alpha for transparency",
    },
    {
      title: "Theme color with opacity",
      input: "rgb(52, 152, 219)",
      description: "Convert brand RGB to HSLA for theme variations",
    },
    {
      title: "Overlay color conversion",
      input: "rgb(0, 0, 0)",
      description: "Convert black RGB to HSLA for semi-transparent overlays",
    },
  ],

  faq: [
    {
      question: "How do I convert RGB to HSLA?",
      answer:
        "Paste your RGB color value (like rgb(255, 87, 51)) and get the HSLA equivalent hsla(9, 100%, 65%, 1) with an alpha channel for transparency control.",
    },
    {
      question: "What is HSLA format?",
      answer:
        "HSLA stands for Hue, Saturation, Lightness, Alpha. It combines HSL's intuitive color model with an alpha channel for transparency (0 = transparent, 1 = opaque).",
    },
    {
      question: "Why use HSLA instead of RGB or RGBA?",
      answer:
        "HSLA combines intuitive color adjustments (like HSL) with transparency control (like RGBA). It's perfect for theme systems where you need both color manipulation and opacity.",
    },
    {
      question: "How do I create a semi-transparent version of an RGB color?",
      answer:
        "Convert your RGB color to HSLA and set the alpha value between 0 and 1. For example, hsla(9, 100%, 65%, 0.5) is 50% transparent.",
    },
    {
      question: "What's the advantage of HSLA over RGBA?",
      answer:
        "HSLA makes it easier to create color variations while maintaining transparency. You can adjust lightness for dark mode without changing the alpha value.",
    },
    {
      question: "Can I convert RGB values from JavaScript?",
      answer:
        "Yes. If you have RGB values from JavaScript, paste them in rgb(r, g, b) format to get the HSLA equivalent with alpha channel.",
    },
    {
      question: "Is the conversion done on a server?",
      answer:
        "No. All conversion runs locally in your browser, so your color data never leaves your device.",
    },
  ],

  relatedTools: ["color-converter", "hsla-to-rgb", "rgb-to-hsl", "rgb-to-rgba"],

  ui: {
    inputPlaceholder: "rgb(255, 87, 51)",
    outputPlaceholder: "HSLA values will appear here...",
    inputLabel: "RGB Color",
    outputLabel: "HSLA Output",
    convertLabel: "Convert to HSLA",
  },
}
