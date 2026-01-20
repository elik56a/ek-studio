import { Tool } from "@/lib/tools/types"

export const rgbToRgbaTool: Tool = {
  id: "rgb-to-rgba",
  slug: "rgb-to-rgba",
  name: "RGB to RGBA Converter",
  description:
    "Convert RGB color values to RGBA format with alpha transparency — perfect for adding opacity to existing colors",
  category: "utility",
  type: "converter",

  nav: {
    showInHeader: false,
  },

  componentId: "color-converter",

  preset: {
    focus: "rgb",
    highlight: "rgba",
  },

  keywords: [
    "rgb to rgba",
    "rgb to rgba converter",
    "convert rgb to rgba",
    "add alpha to rgb",
    "rgb transparency",
    "rgba with alpha",
    "css rgba converter",
  ],

  metadata: {
    title: "RGB to RGBA Converter - Add Alpha Transparency to RGB Colors",
    description:
      "Convert RGB color values to RGBA format with alpha transparency. Free online tool with live preview for adding opacity to existing colors.",
    keywords: [
      "rgb to rgba",
      "rgb to rgba converter",
      "color converter",
      "add alpha",
      "css transparency",
    ],
  },

  info: {
    description:
      "Convert RGB color values to RGBA format to add alpha transparency control. While RGB format rgb(255, 87, 51) represents solid colors, RGBA format rgba(255, 87, 51, 0.8) adds an alpha channel for transparency. This is essential when you need to add opacity to existing RGB colors for overlays, shadows, or semi-transparent UI elements without changing the base color.",
    howToUse: [
      "Paste an RGB color value (e.g., rgb(255, 87, 51))",
      "View the RGBA equivalent with alpha channel",
      "Adjust alpha value if needed (0 = transparent, 1 = opaque)",
      "Copy the RGBA value for your CSS or design system",
    ],
    useCases: [
      "Add alpha transparency to existing RGB colors",
      "Convert RGB to RGBA for CSS rgba() functions",
      "Create semi-transparent versions of solid colors",
      "Build overlays and modals with opacity control",
      "Generate RGBA values for shadows and effects",
    ],
    features: [
      "Instant RGB to RGBA conversion",
      "Live color preview with transparency",
      "Alpha channel for transparency control",
      "Copy RGBA values with one click",
      "Auto-detects RGB format",
      "Runs locally in your browser",
    ],
  },

  examples: [
    {
      title: "Add alpha to RGB",
      input: "rgb(255, 87, 51)",
      description: "Convert RGB to RGBA and add transparency",
    },
    {
      title: "Create overlay color",
      input: "rgb(0, 0, 0)",
      description: "Convert black RGB to RGBA for semi-transparent overlays",
    },
    {
      title: "Add opacity to brand color",
      input: "rgb(52, 152, 219)",
      description: "Convert brand RGB to RGBA for opacity variations",
    },
  ],

  faq: [
    {
      question: "How do I convert RGB to RGBA?",
      answer:
        "Paste your RGB color value (like rgb(255, 87, 51)) and get the RGBA equivalent rgba(255, 87, 51, 1) with an alpha channel for transparency control.",
    },
    {
      question: "What is the difference between RGB and RGBA?",
      answer:
        "RGB has three values (red, green, blue) while RGBA adds a fourth value for alpha transparency (0 = transparent, 1 = opaque).",
    },
    {
      question: "Why would I need RGBA instead of RGB?",
      answer:
        "RGBA allows you to control transparency with the alpha channel, which is essential for overlays, modals, shadows, and semi-transparent UI elements.",
    },
    {
      question: "How do I create a semi-transparent version of an RGB color?",
      answer:
        "Convert your RGB color to RGBA and set the alpha value between 0 and 1. For example, rgba(255, 87, 51, 0.5) is 50% transparent.",
    },
    {
      question: "Can I adjust the alpha value after conversion?",
      answer:
        "Yes. The tool shows the RGBA format with alpha set to 1 (opaque). You can manually adjust the alpha value in your CSS or design tool.",
    },
    {
      question: "Is the conversion done on a server?",
      answer:
        "No. All conversion runs locally in your browser, so your color data never leaves your device.",
    },
  ],

  relatedTools: ["color-converter", "rgba-to-rgb", "rgb-to-hex", "rgb-to-hsl"],

  ui: {
    inputPlaceholder: "rgb(255, 87, 51)",
    outputPlaceholder: "RGBA values will appear here...",
    inputLabel: "RGB Color",
    outputLabel: "RGBA Output",
    convertLabel: "Convert to RGBA",
  },
}
