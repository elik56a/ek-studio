import { Tool } from "@/lib/tools/types"

export const hslToRgbaTool: Tool = {
  id: "hsl-to-rgba",
  slug: "hsl-to-rgba",
  name: "HSL to RGBA Converter",
  description:
    "Convert HSL color values to RGBA format with alpha transparency — perfect for adding opacity to theme colors",
  category: "utility",
  type: "converter",

  nav: {
    showInHeader: false,
  },

  componentId: "color-converter",

  preset: {
    focus: "hsl",
    highlight: "rgba",
  },

  keywords: [
    "hsl to rgba",
    "hsl to rgba converter",
    "convert hsl to rgba",
    "hsl color to rgba",
    "css hsl to rgba",
    "add alpha to hsl",
    "rgba with transparency",
  ],

  metadata: {
    title: "HSL to RGBA Converter - Convert HSL Colors to RGBA with Alpha",
    description:
      "Convert HSL color values to RGBA format with alpha transparency. Free online tool with live preview for adding opacity to theme colors.",
    keywords: [
      "hsl to rgba",
      "hsl to rgba converter",
      "color converter",
      "rgba with alpha",
      "css transparency",
    ],
  },

  info: {
    description:
      "Convert HSL color values to RGBA format to add alpha transparency control. While HSL format hsl(9, 100%, 65%) is great for theme manipulation, RGBA format rgba(255, 87, 51, 0.8) adds an alpha channel for transparency. This is useful when you need to convert theme colors to a format that supports opacity for overlays, shadows, or semi-transparent UI elements.",
    howToUse: [
      "Paste an HSL color value (e.g., hsl(9, 100%, 65%))",
      "View the RGBA equivalent with alpha channel",
      "Adjust alpha value if needed (0 = transparent, 1 = opaque)",
      "Copy the RGBA value for your CSS or design system",
    ],
    useCases: [
      "Convert HSL to RGBA for CSS rgba() functions with transparency",
      "Add alpha transparency to theme colors",
      "Create semi-transparent versions of HSL colors",
      "Build overlays and modals with opacity control",
      "Generate RGBA values from theme system colors",
    ],
    features: [
      "Instant HSL to RGBA conversion",
      "Live color preview with transparency",
      "Alpha channel for transparency control",
      "Copy RGBA values with one click",
      "Auto-detects HSL format",
      "Runs locally in your browser",
    ],
  },

  examples: [
    {
      title: "HSL to RGBA with transparency",
      input: "hsl(9, 100%, 65%)",
      description: "Convert HSL to RGBA and add alpha for transparency",
    },
    {
      title: "Theme color with opacity",
      input: "hsl(204, 70%, 53%)",
      description: "Convert brand HSL to RGBA for opacity variations",
    },
    {
      title: "Dark overlay color",
      input: "hsl(0, 0%, 0%)",
      description: "Convert black HSL to RGBA for semi-transparent overlays",
    },
  ],

  faq: [
    {
      question: "How do I convert HSL to RGBA?",
      answer:
        "Paste your HSL color value (like hsl(9, 100%, 65%)) and get the RGBA equivalent rgba(255, 87, 51, 1) with an alpha channel for transparency control.",
    },
    {
      question: "What is the alpha channel in RGBA?",
      answer:
        "The alpha channel controls transparency from 0 (fully transparent) to 1 (fully opaque). For example, rgba(255, 87, 51, 0.5) is 50% transparent.",
    },
    {
      question: "Why use RGBA instead of HSL?",
      answer:
        "RGBA allows you to control transparency with the alpha channel, which is essential for overlays, modals, shadows, and semi-transparent UI elements.",
    },
    {
      question: "Can I convert HSL values from CSS?",
      answer:
        "Yes. If you have HSL values from CSS, paste them in hsl(h, s%, l%) format to get the RGBA equivalent with alpha channel.",
    },
    {
      question: "How do I create a semi-transparent theme color?",
      answer:
        "Convert your HSL color to RGBA and set the alpha value between 0 and 1. For example, rgba(255, 87, 51, 0.5) is 50% transparent.",
    },
    {
      question: "Does HSL support transparency?",
      answer:
        "Standard HSL doesn't support transparency. Use HSLA if you want to stay in the HSL color space with alpha, or convert to RGBA.",
    },
    {
      question: "Is the conversion done on a server?",
      answer:
        "No. All conversion runs locally in your browser, so your color data never leaves your device.",
    },
  ],

  relatedTools: ["color-converter", "rgba-to-hsl", "hsl-to-hsla", "hsl-to-hex"],

  ui: {
    inputPlaceholder: "hsl(9, 100%, 65%)",
    outputPlaceholder: "RGBA values will appear here...",
    inputLabel: "HSL Color",
    outputLabel: "RGBA Output",
    convertLabel: "Convert to RGBA",
  },
}
