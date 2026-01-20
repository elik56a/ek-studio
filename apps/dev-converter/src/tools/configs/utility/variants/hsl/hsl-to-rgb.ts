import { Tool } from "@/lib/tools/types"

export const hslToRgbTool: Tool = {
  id: "hsl-to-rgb",
  slug: "hsl-to-rgb",
  name: "HSL to RGB Converter",
  description:
    "Convert HSL color values to RGB format instantly — perfect for converting theme colors to numeric RGB values",
  category: "utility",
  type: "converter",

  nav: {
    showInHeader: false,
  },

  componentId: "color-converter",

  preset: {
    focus: "hsl",
    highlight: "rgb",
  },

  keywords: [
    "hsl to rgb",
    "hsl to rgb converter",
    "convert hsl to rgb",
    "hsl color to rgb",
    "css hsl to rgb",
    "rgb converter",
    "theme to rgb",
  ],

  metadata: {
    title: "HSL to RGB Converter - Convert HSL Colors to RGB Format",
    description:
      "Convert HSL color values to RGB format instantly. Free online tool with live preview for converting theme colors to numeric RGB values.",
    keywords: [
      "hsl to rgb",
      "hsl to rgb converter",
      "color converter",
      "rgb format",
      "css colors",
    ],
  },

  info: {
    description:
      "Convert HSL color values to RGB format for CSS rgb() functions, JavaScript color manipulation, and programmatic styling. While HSL format hsl(9, 100%, 65%) is intuitive for theme adjustments, RGB format rgb(255, 87, 51) uses numeric values that are essential for JavaScript calculations, color manipulation, and frameworks that require numeric color values.",
    howToUse: [
      "Paste an HSL color value (e.g., hsl(9, 100%, 65%))",
      "View the RGB equivalent instantly",
      "See a live color preview to verify the result",
      "Copy the RGB value for your CSS or JavaScript code",
    ],
    useCases: [
      "Convert HSL to RGB for CSS rgb() functions",
      "Use RGB values in JavaScript color manipulation",
      "Convert theme colors to RGB for programmatic styling",
      "Generate numeric RGB values from HSL",
      "Create color palettes with RGB format",
    ],
    features: [
      "Instant HSL to RGB conversion",
      "Live color preview",
      "Supports hsl() function format",
      "Copy RGB values with one click",
      "Auto-detects HSL format",
      "Runs locally in your browser",
    ],
  },

  examples: [
    {
      title: "Standard HSL to RGB",
      input: "hsl(9, 100%, 65%)",
      description: "Convert HSL values to RGB format",
    },
    {
      title: "Theme color conversion",
      input: "hsl(204, 70%, 53%)",
      description: "Convert brand HSL to RGB for JavaScript",
    },
    {
      title: "Dark color conversion",
      input: "hsl(210, 29%, 24%)",
      description: "Convert dark HSL to RGB for UI themes",
    },
  ],

  faq: [
    {
      question: "How do I convert HSL to RGB?",
      answer:
        "Paste your HSL color value (like hsl(9, 100%, 65%)) and get the RGB equivalent rgb(255, 87, 51) instantly with a live preview.",
    },
    {
      question: "What is the difference between HSL and RGB?",
      answer:
        "HSL uses hue, saturation, lightness while RGB uses red, green, blue values. Both represent the same color but in different formats.",
    },
    {
      question: "Why use RGB instead of HSL?",
      answer:
        "RGB is useful for CSS rgb() functions, JavaScript color calculations, and frameworks that require numeric color values for programmatic manipulation.",
    },
    {
      question: "Can I convert HSL values from CSS?",
      answer:
        "Yes. If you have HSL values from CSS, paste them in hsl(h, s%, l%) format to get the RGB equivalent.",
    },
    {
      question: "Does this work with HSLA values?",
      answer:
        "This tool focuses on standard HSL to RGB conversion. For alpha transparency, use the HSLA to RGBA converter.",
    },
    {
      question: "What's the advantage of RGB over HSL?",
      answer:
        "RGB provides numeric values that are easier to use in JavaScript calculations and color manipulation algorithms.",
    },
    {
      question: "Is the conversion done on a server?",
      answer:
        "No. All conversion runs locally in your browser, so your color data never leaves your device.",
    },
  ],

  relatedTools: ["color-converter", "rgb-to-hsl", "hsl-to-hex", "hsl-to-rgba"],

  ui: {
    inputPlaceholder: "hsl(9, 100%, 65%)",
    outputPlaceholder: "RGB values will appear here...",
    inputLabel: "HSL Color",
    outputLabel: "RGB Output",
    convertLabel: "Convert to RGB",
  },
}
