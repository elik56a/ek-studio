import { Tool } from "@/lib/tools/types"

export const hslToHslaTool: Tool = {
  id: "hsl-to-hsla",
  slug: "hsl-to-hsla",
  name: "HSL to HSLA Converter",
  description:
    "Convert HSL color values to HSLA format with alpha transparency — perfect for adding opacity to theme colors while maintaining HSL format",
  category: "utility",
  type: "converter",

  nav: {
    showInHeader: false,
  },

  componentId: "color-converter",

  preset: {
    focus: "hsl",
    highlight: "hsla",
  },

  keywords: [
    "hsl to hsla",
    "hsl to hsla converter",
    "convert hsl to hsla",
    "add alpha to hsl",
    "hsl transparency",
    "hsla with alpha",
    "css hsla converter",
  ],

  metadata: {
    title: "HSL to HSLA Converter - Add Alpha Transparency to HSL Colors",
    description:
      "Convert HSL color values to HSLA format with alpha transparency. Free online tool with live preview for adding opacity to theme colors.",
    keywords: [
      "hsl to hsla",
      "hsl to hsla converter",
      "color converter",
      "add alpha",
      "css transparency",
    ],
  },

  info: {
    description:
      "Convert HSL color values to HSLA format to add alpha transparency control while maintaining the HSL color model. While HSL format hsl(9, 100%, 65%) represents solid colors, HSLA format hsla(9, 100%, 65%, 0.8) adds an alpha channel for transparency. This is ideal when you need to add opacity to theme colors without switching to RGB-based formats.",
    howToUse: [
      "Paste an HSL color value (e.g., hsl(9, 100%, 65%))",
      "View the HSLA equivalent with alpha channel",
      "Adjust alpha value if needed (0 = transparent, 1 = opaque)",
      "Copy the HSLA value for your CSS or design system",
    ],
    useCases: [
      "Add alpha transparency to existing HSL colors",
      "Convert HSL to HSLA for CSS hsla() functions",
      "Create semi-transparent versions of theme colors",
      "Build overlays and modals with HSL-based opacity",
      "Generate HSLA values for theme systems with transparency",
    ],
    features: [
      "Instant HSL to HSLA conversion",
      "Live color preview with transparency",
      "Alpha channel for transparency control",
      "Copy HSLA values with one click",
      "Auto-detects HSL format",
      "Runs locally in your browser",
    ],
  },

  examples: [
    {
      title: "Add alpha to HSL",
      input: "hsl(9, 100%, 65%)",
      description: "Convert HSL to HSLA and add transparency",
    },
    {
      title: "Theme color with opacity",
      input: "hsl(204, 70%, 53%)",
      description: "Convert brand HSL to HSLA for opacity variations",
    },
    {
      title: "Create overlay color",
      input: "hsl(0, 0%, 0%)",
      description: "Convert black HSL to HSLA for semi-transparent overlays",
    },
  ],

  faq: [
    {
      question: "How do I convert HSL to HSLA?",
      answer:
        "Paste your HSL color value (like hsl(9, 100%, 65%)) and get the HSLA equivalent hsla(9, 100%, 65%, 1) with an alpha channel for transparency control.",
    },
    {
      question: "What is the difference between HSL and HSLA?",
      answer:
        "HSL has three values (hue, saturation, lightness) while HSLA adds a fourth value for alpha transparency (0 = transparent, 1 = opaque).",
    },
    {
      question: "Why use HSLA instead of HSL?",
      answer:
        "HSLA allows you to control transparency with the alpha channel while maintaining the intuitive HSL color model for hue, saturation, and lightness adjustments.",
    },
    {
      question: "How do I create a semi-transparent version of an HSL color?",
      answer:
        "Convert your HSL color to HSLA and set the alpha value between 0 and 1. For example, hsla(9, 100%, 65%, 0.5) is 50% transparent.",
    },
    {
      question: "Can I adjust the alpha value after conversion?",
      answer:
        "Yes. The tool shows the HSLA format with alpha set to 1 (opaque). You can manually adjust the alpha value in your CSS or design tool.",
    },
    {
      question: "What's the advantage of HSLA over RGBA?",
      answer:
        "HSLA maintains the HSL color model, making it easier to adjust hue, saturation, and lightness while also controlling transparency.",
    },
    {
      question: "Is the conversion done on a server?",
      answer:
        "No. All conversion runs locally in your browser, so your color data never leaves your device.",
    },
  ],

  relatedTools: ["color-converter", "hsla-to-hsl", "hsl-to-hex", "hsl-to-rgba"],

  ui: {
    inputPlaceholder: "hsl(9, 100%, 65%)",
    outputPlaceholder: "HSLA values will appear here...",
    inputLabel: "HSL Color",
    outputLabel: "HSLA Output",
    convertLabel: "Convert to HSLA",
  },
}
