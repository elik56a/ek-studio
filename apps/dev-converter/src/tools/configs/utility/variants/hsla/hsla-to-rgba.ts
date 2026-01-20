import { Tool } from "@/lib/tools/types"

export const hslaToRgbaTool: Tool = {
  id: "hsla-to-rgba",
  slug: "hsla-to-rgba",
  name: "HSLA to RGBA Converter",
  description:
    "Convert HSLA color values to RGBA format with alpha preserved — perfect for converting theme colors to RGB-based format",
  category: "utility",
  type: "converter",

  nav: {
    showInHeader: false,
  },

  componentId: "color-converter",

  preset: {
    focus: "hsla",
    highlight: "rgba",
  },

  keywords: [
    "hsla to rgba",
    "hsla to rgba converter",
    "convert hsla to rgba",
    "hsla color to rgba",
    "css hsla to rgba",
    "rgba with alpha",
    "theme colors with transparency",
  ],

  metadata: {
    title: "HSLA to RGBA Converter - Convert HSLA Colors to RGBA Format",
    description:
      "Convert HSLA color values to RGBA format with alpha preserved. Free online tool with live preview for converting theme colors to RGB-based format.",
    keywords: [
      "hsla to rgba",
      "hsla to rgba converter",
      "color converter",
      "rgba format",
      "css colors",
    ],
  },

  info: {
    description:
      "Convert HSLA color values to RGBA format while preserving alpha transparency. Both formats support transparency, but RGBA uses red, green, blue values instead of hue, saturation, lightness. This conversion is useful when you need RGB-based numeric values for JavaScript calculations or frameworks that work better with RGB format while maintaining opacity control.",
    howToUse: [
      "Paste an HSLA color value (e.g., hsla(9, 100%, 65%, 0.8))",
      "View the RGBA equivalent with alpha preserved",
      "See a live color preview to verify the result",
      "Copy the RGBA value for your CSS or JavaScript code",
    ],
    useCases: [
      "Convert HSLA to RGBA for CSS rgba() functions",
      "Use RGBA values in JavaScript color manipulation",
      "Convert theme colors to RGB-based format with transparency",
      "Generate numeric RGB values from HSL-based colors",
      "Work with frameworks that prefer RGB over HSL",
    ],
    features: [
      "Instant HSLA to RGBA conversion",
      "Live color preview with transparency",
      "Preserves alpha channel",
      "Copy RGBA values with one click",
      "Auto-detects HSLA format",
      "Runs locally in your browser",
    ],
  },

  examples: [
    {
      title: "HSLA to RGBA",
      input: "hsla(9, 100%, 65%, 0.8)",
      description: "Convert HSLA to RGBA with alpha preserved",
    },
    {
      title: "Theme color with transparency",
      input: "hsla(204, 70%, 53%, 0.5)",
      description: "Convert brand HSLA to RGBA for JavaScript",
    },
    {
      title: "Overlay color conversion",
      input: "hsla(0, 0%, 0%, 0.3)",
      description: "Convert overlay HSLA to RGBA for programmatic use",
    },
  ],

  faq: [
    {
      question: "How do I convert HSLA to RGBA?",
      answer:
        "Paste your HSLA color value (like hsla(9, 100%, 65%, 0.8)) and get the RGBA equivalent rgba(255, 87, 51, 0.8) with alpha preserved.",
    },
    {
      question: "Is the alpha channel preserved?",
      answer:
        "Yes. Both HSLA and RGBA support alpha transparency, so the alpha value is preserved during conversion.",
    },
    {
      question: "Why use RGBA instead of HSLA?",
      answer:
        "RGBA provides numeric RGB values that are easier to use in JavaScript calculations and color manipulation algorithms, while still supporting transparency.",
    },
    {
      question: "What's the difference between HSLA and RGBA?",
      answer:
        "HSLA uses hue, saturation, lightness, alpha while RGBA uses red, green, blue, alpha. Both support transparency but use different color models.",
    },
    {
      question: "Can I convert HSLA values from CSS?",
      answer:
        "Yes. If you have HSLA values from CSS, paste them in hsla(h, s%, l%, a) format to get the RGBA equivalent.",
    },
    {
      question: "What's the advantage of RGBA over HSLA?",
      answer:
        "RGBA provides numeric values that are easier to use in JavaScript color calculations and frameworks that work better with RGB-based formats.",
    },
    {
      question: "Is the conversion done on a server?",
      answer:
        "No. All conversion runs locally in your browser, so your color data never leaves your device.",
    },
  ],

  relatedTools: [
    "color-converter",
    "rgba-to-hsla",
    "hsla-to-hsl",
    "hsla-to-hex",
  ],

  ui: {
    inputPlaceholder: "hsla(9, 100%, 65%, 0.8)",
    outputPlaceholder: "RGBA values will appear here...",
    inputLabel: "HSLA Color",
    outputLabel: "RGBA Output",
    convertLabel: "Convert to RGBA",
  },
}
