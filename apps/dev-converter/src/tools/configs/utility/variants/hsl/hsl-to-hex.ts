import { Tool } from "@/lib/tools/types"

export const hslToHexTool: Tool = {
  id: "hsl-to-hex",
  slug: "hsl-to-hex",
  name: "HSL to HEX Converter",
  description:
    "Convert HSL color values to HEX format instantly — perfect for converting theme colors to compact HEX codes",
  category: "utility",
  type: "converter",

  nav: {
    showInHeader: false,
  },

  componentId: "color-converter",

  preset: {
    focus: "hsl",
    highlight: "hex",
  },

  keywords: [
    "hsl to hex",
    "hsl to hex converter",
    "convert hsl to hex",
    "hsl color to hex",
    "css hsl to hex",
    "hex code converter",
    "theme to hex",
  ],

  metadata: {
    title: "HSL to HEX Converter - Convert HSL Colors to HEX Format",
    description:
      "Convert HSL color values to HEX format instantly. Free online tool with live preview for converting theme colors to compact HEX codes.",
    keywords: [
      "hsl to hex",
      "hsl to hex converter",
      "color converter",
      "hex code",
      "css colors",
    ],
  },

  info: {
    description:
      "Convert HSL color values to HEX format for CSS variables, design tools, and color codes. While HSL format hsl(9, 100%, 65%) is great for theme manipulation and color adjustments, HEX format #FF5733 is more compact and widely used in design tools, CSS variables, and color documentation. This tool instantly converts any HSL value to its HEX equivalent with a live preview.",
    howToUse: [
      "Paste an HSL color value (e.g., hsl(9, 100%, 65%))",
      "View the HEX equivalent instantly",
      "See a live color preview to verify the result",
      "Copy the HEX code for your CSS or design tool",
    ],
    useCases: [
      "Convert HSL to HEX for CSS variables and color codes",
      "Use HEX codes in design tools like Figma and Sketch",
      "Convert theme colors to HEX for documentation",
      "Generate compact HEX codes from HSL values",
      "Create design tokens with HEX format",
    ],
    features: [
      "Instant HSL to HEX conversion",
      "Live color preview",
      "Supports hsl() function format",
      "Copy HEX codes with one click",
      "Auto-detects HSL format",
      "Runs locally in your browser",
    ],
  },

  examples: [
    {
      title: "Standard HSL to HEX",
      input: "hsl(9, 100%, 65%)",
      description: "Convert HSL values to HEX code",
    },
    {
      title: "Theme color conversion",
      input: "hsl(204, 70%, 53%)",
      description: "Convert brand HSL to HEX for design tools",
    },
    {
      title: "Dark color conversion",
      input: "hsl(210, 29%, 24%)",
      description: "Convert dark HSL to HEX for UI themes",
    },
  ],

  faq: [
    {
      question: "How do I convert HSL to HEX?",
      answer:
        "Paste your HSL color value (like hsl(9, 100%, 65%)) and get the HEX equivalent #FF5733 instantly with a live preview.",
    },
    {
      question: "What is the difference between HSL and HEX?",
      answer:
        "HSL uses hue, saturation, lightness values while HEX uses hexadecimal notation. Both represent the same color but in different formats.",
    },
    {
      question: "Why use HEX instead of HSL?",
      answer:
        "HEX is more compact, widely used in design tools, and common in CSS variables and color documentation. It's easier to copy and share.",
    },
    {
      question: "Can I convert HSL values from CSS?",
      answer:
        "Yes. If you have HSL values from CSS, paste them in hsl(h, s%, l%) format to get the HEX code.",
    },
    {
      question: "Does this work with HSLA values?",
      answer:
        "This tool focuses on standard HSL to HEX conversion. For alpha transparency, use the HSLA to HEX converter.",
    },
    {
      question: "Is the conversion done on a server?",
      answer:
        "No. All conversion runs locally in your browser, so your color data never leaves your device.",
    },
  ],

  relatedTools: ["color-converter", "hex-to-hsl", "hsl-to-rgb", "hsl-to-hsla"],

  ui: {
    inputPlaceholder: "hsl(9, 100%, 65%)",
    outputPlaceholder: "HEX code will appear here...",
    inputLabel: "HSL Color",
    outputLabel: "HEX Output",
    convertLabel: "Convert to HEX",
  },
}
