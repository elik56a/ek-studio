import { Tool } from "@/lib/tools/types"

export const rgbToHexTool: Tool = {
  id: "rgb-to-hex",
  slug: "rgb-to-hex",
  name: "RGB to HEX Converter",
  description:
    "Convert RGB color values to HEX format instantly with live preview — perfect for CSS variables, design tools, and color codes",
  category: "utility",
  type: "converter",

  nav: {
    showInHeader: false,
  },

  componentId: "color-converter",

  preset: {
    focus: "rgb",
    highlight: "hex",
  },

  keywords: [
    "rgb to hex",
    "rgb to hex converter",
    "convert rgb to hex",
    "rgb color to hex",
    "css rgb to hex",
    "rgb to hexadecimal",
    "hex code converter",
  ],

  metadata: {
    title: "RGB to HEX Converter - Convert RGB Colors to HEX Format",
    description:
      "Convert RGB color values to HEX format instantly. Free online tool with live preview for CSS variables, design tools, and color codes.",
    keywords: [
      "rgb to hex",
      "rgb to hex converter",
      "color converter",
      "hex code",
      "css colors",
    ],
  },

  info: {
    description:
      "Convert RGB color values to HEX format for CSS variables, design tools, and color codes. While RGB format rgb(255, 87, 51) is great for programmatic styling and JavaScript, HEX format #FF5733 is more compact and widely used in design tools, CSS variables, and color documentation. This tool instantly converts any RGB value to its HEX equivalent with a live preview.",
    howToUse: [
      "Paste an RGB color value (e.g., rgb(255, 87, 51))",
      "View the HEX equivalent instantly",
      "See a live color preview to verify the result",
      "Copy the HEX code for your CSS or design tool",
    ],
    useCases: [
      "Convert RGB to HEX for CSS variables and color codes",
      "Use HEX codes in design tools like Figma and Sketch",
      "Convert JavaScript RGB values to HEX for documentation",
      "Generate compact HEX codes for color palettes",
      "Create design tokens with HEX format",
    ],
    features: [
      "Instant RGB to HEX conversion",
      "Live color preview",
      "Supports rgb() function format",
      "Copy HEX codes with one click",
      "Auto-detects RGB format",
      "Runs locally in your browser",
    ],
  },

  examples: [
    {
      title: "Standard RGB to HEX",
      input: "rgb(255, 87, 51)",
      description: "Convert RGB values to HEX code",
    },
    {
      title: "Dark color conversion",
      input: "rgb(44, 62, 80)",
      description: "Convert dark RGB colors to HEX for UI themes",
    },
    {
      title: "Bright color conversion",
      input: "rgb(52, 152, 219)",
      description: "Convert bright RGB to HEX for brand colors",
    },
  ],

  faq: [
    {
      question: "How do I convert RGB to HEX?",
      answer:
        "Paste your RGB color value (like rgb(255, 87, 51)) and get the HEX equivalent #FF5733 instantly with a live preview.",
    },
    {
      question: "What is the difference between RGB and HEX?",
      answer:
        "RGB uses decimal values rgb(255, 87, 51) while HEX uses hexadecimal notation #FF5733. Both represent the same color but in different formats.",
    },
    {
      question: "Why use HEX instead of RGB?",
      answer:
        "HEX is more compact, widely used in design tools, and common in CSS variables and color documentation. It's easier to copy and share.",
    },
    {
      question: "Can I convert RGB values from JavaScript?",
      answer:
        "Yes. If you have RGB values from JavaScript color calculations, paste them in rgb(r, g, b) format to get the HEX code.",
    },
    {
      question: "Does this work with RGBA values?",
      answer:
        "This tool focuses on standard RGB to HEX conversion. For alpha transparency, use the RGBA to HEX converter.",
    },
    {
      question: "Is my color data sent to a server?",
      answer:
        "No. All conversion happens locally in your browser, so your color data never leaves your device.",
    },
  ],

  relatedTools: ["color-converter", "hex-to-rgb", "rgb-to-hsl", "rgb-to-rgba"],

  ui: {
    inputPlaceholder: "rgb(255, 87, 51)",
    outputPlaceholder: "HEX code will appear here...",
    inputLabel: "RGB Color",
    outputLabel: "HEX Output",
    convertLabel: "Convert to HEX",
  },
}
