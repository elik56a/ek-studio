import { Tool } from "@/lib/tools/types"

export const rgbToHslTool: Tool = {
  id: "rgb-to-hsl",
  slug: "rgb-to-hsl",
  name: "RGB to HSL Converter",
  description:
    "Convert RGB color values to HSL format instantly — perfect for theme systems and intuitive color manipulation",
  category: "utility",
  type: "converter",

  nav: {
    showInHeader: false,
  },

  componentId: "color-converter",

  preset: {
    focus: "rgb",
    highlight: "hsl",
  },

  keywords: [
    "rgb to hsl",
    "rgb to hsl converter",
    "convert rgb to hsl",
    "rgb color to hsl",
    "css rgb to hsl",
    "hsl color converter",
    "theme colors",
  ],

  metadata: {
    title: "RGB to HSL Converter - Convert RGB Colors to HSL Format",
    description:
      "Convert RGB color values to HSL format instantly. Free online tool with live preview for theme systems and intuitive color manipulation.",
    keywords: [
      "rgb to hsl",
      "rgb to hsl converter",
      "color converter",
      "hsl format",
      "theme colors",
    ],
  },

  info: {
    description:
      "Convert RGB color values to HSL format for theme systems and intuitive color manipulation. While RGB format rgb(255, 87, 51) uses red, green, blue values, HSL format hsl(9, 100%, 65%) uses hue, saturation, and lightness. HSL makes it easier to create color variations, adjust brightness for dark mode, and maintain consistent color relationships in design systems.",
    howToUse: [
      "Paste an RGB color value (e.g., rgb(255, 87, 51))",
      "View the HSL equivalent instantly",
      "See a live color preview to verify the result",
      "Copy the HSL value for your CSS or design system",
    ],
    useCases: [
      "Convert RGB to HSL for CSS hsl() functions",
      "Create theme variations by adjusting lightness",
      "Build dark mode by reducing lightness values",
      "Generate color palettes with consistent saturation",
      "Manipulate colors programmatically in design systems",
    ],
    features: [
      "Instant RGB to HSL conversion",
      "Live color preview",
      "Supports rgb() function format",
      "Copy HSL values with one click",
      "Auto-detects RGB format",
      "Runs locally in your browser",
    ],
  },

  examples: [
    {
      title: "Standard RGB to HSL",
      input: "rgb(255, 87, 51)",
      description: "Convert RGB values to HSL format",
    },
    {
      title: "Theme color conversion",
      input: "rgb(52, 152, 219)",
      description: "Convert brand RGB to HSL for theme manipulation",
    },
    {
      title: "Dark color conversion",
      input: "rgb(44, 62, 80)",
      description: "Convert dark RGB to HSL for UI themes",
    },
  ],

  faq: [
    {
      question: "How do I convert RGB to HSL?",
      answer:
        "Paste your RGB color value (like rgb(255, 87, 51)) and get the HSL equivalent hsl(9, 100%, 65%) instantly with a live preview.",
    },
    {
      question: "What is HSL format?",
      answer:
        "HSL stands for Hue, Saturation, Lightness. It represents colors in a way that's more intuitive for adjustments: hue (0-360°), saturation (0-100%), and lightness (0-100%).",
    },
    {
      question: "Why use HSL instead of RGB?",
      answer:
        "HSL makes it easier to create color variations. You can adjust lightness for dark mode, change saturation for muted colors, or shift hue for complementary colors.",
    },
    {
      question: "How do I create a dark mode version of an RGB color?",
      answer:
        "Convert your RGB color to HSL, then reduce the lightness value. This maintains the hue and saturation while making the color darker.",
    },
    {
      question: "Can I convert RGB values from JavaScript?",
      answer:
        "Yes. If you have RGB values from JavaScript, paste them in rgb(r, g, b) format to get the HSL equivalent for easier color manipulation.",
    },
    {
      question: "What's the advantage of HSL over RGB?",
      answer:
        "HSL is more intuitive for color adjustments. Instead of tweaking three RGB values, you can adjust hue, saturation, or lightness independently.",
    },
    {
      question: "Is the conversion done on a server?",
      answer:
        "No. All conversion runs locally in your browser, so your color data never leaves your device.",
    },
  ],

  relatedTools: ["color-converter", "hsl-to-rgb", "rgb-to-hex", "rgb-to-hsla"],

  ui: {
    inputPlaceholder: "rgb(255, 87, 51)",
    outputPlaceholder: "HSL values will appear here...",
    inputLabel: "RGB Color",
    outputLabel: "HSL Output",
    convertLabel: "Convert to HSL",
  },
}
