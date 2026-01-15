import { Tool } from "@/lib/tools/types"

export const colorConverterTool: Tool = {
  id: "color-converter",
  slug: "color-converter",
  name: "Color Converter",
  description:
    "Convert HEX, RGB, RGBA, HSL, and HSLA colors instantly with a live preview — perfect for CSS, design systems, and UI theming",
  category: "utility",
  type: "converter",
  keywords: [
    "color converter",
    "hex to rgb",
    "rgb to hex",
    "hex to hsl",
    "hsl to hex",
    "rgba to hex",
    "hsla converter",
    "css color converter",
    "color picker",
  ],
  metadata: {
    title: "Color Converter: HEX to RGB, HSL, RGBA (Live Preview)",
    description:
      "Convert HEX, RGB/RGBA, and HSL/HSLA color values with live preview. Auto-detects input, supports alpha, and expands short HEX (#F80).",
    keywords: [
      "color converter",
      "hex to rgb",
      "rgb to hex",
      "hsl to rgb",
      "hex to hsl",
      "rgba converter",
      "color picker online",
    ],
  },
  info: {
    description:
      "Color Converter is a developer-friendly tool for converting CSS color values between HEX, RGB, RGBA, HSL, and HSLA. Different workflows prefer different formats: HEX is common in design tools and CSS variables, RGB/RGBA is great for programmatic styling and transparency, and HSL/HSLA makes it easier to tweak hue, saturation, and lightness for theme systems. Paste any supported format and this tool auto-detects it, outputs every equivalent format, and shows a live preview so you can confirm the color visually before copying it into CSS, Tailwind configs, or design tokens.",
    howToUse: [
      "Paste a color value (HEX, RGB, RGBA, HSL, or HSLA) into the input",
      "The converter detects the format automatically",
      "View equivalent values in HEX, RGB/RGBA, and HSL/HSLA instantly",
      "Use the live preview to confirm the result",
      "Copy the format you need for CSS, design tokens, or component themes",
    ],
    useCases: [
      "Convert HEX to RGB for CSS functions like rgb() and rgba()",
      "Convert RGB to HEX for design tools and CSS variables",
      "Convert HSL/HSLA for theme manipulation (adjust lightness/saturation)",
      "Work with alpha transparency using RGBA/HSLA values",
      "Create consistent design tokens between Figma and code",
      "Validate colors in Tailwind config, CSS-in-JS, or component libraries",
    ],
    features: [
      "Converts HEX, RGB, RGBA, HSL, and HSLA accurately",
      "Live color preview for quick visual verification",
      "Auto-detects input format (paste anything supported)",
      "Supports short HEX (e.g., #F80 → #FF8800)",
      "Preserves alpha channel for RGBA/HSLA transparency",
      "Runs locally in your browser (no uploads)",
    ],
  },
  examples: [
    {
      title: "HEX → RGB / HSL",
      input: "#FF5733",
      description: "Convert a HEX color to RGB and HSL equivalents",
    },
    {
      title: "RGB → HEX / HSL",
      input: "rgb(52, 152, 219)",
      description: "Convert rgb() values into HEX and HSL for CSS tokens",
    },
    {
      title: "HSL → HEX / RGB",
      input: "hsl(120, 100%, 50%)",
      description: "Convert hsl() to HEX and RGB for cross-tool compatibility",
    },
    {
      title: "Short HEX notation",
      input: "#F80",
      description: "Expand shorthand HEX and convert to all formats",
    },
    {
      title: "RGBA with alpha",
      input: "rgba(255, 87, 51, 0.8)",
      description: "Convert RGBA while preserving transparency",
    },
  ],
  faq: [
    {
      question: "What color formats can I convert with this tool?",
      answer:
        "You can convert between HEX (#FF5733 / #F80), RGB, RGBA, HSL, and HSLA. The tool outputs all equivalents at once.",
    },
    {
      question: "How do I convert HEX to RGB?",
      answer:
        "Paste a HEX value like #FF5733 and the converter will output rgb(255, 87, 51) along with other formats and a live preview.",
    },
    {
      question: "Can I convert short HEX like #F80?",
      answer:
        "Yes. Short HEX is expanded automatically (for example, #F80 becomes #FF8800) and then converted to RGB/HSL variants.",
    },
    {
      question: "What is alpha in RGBA and HSLA?",
      answer:
        "Alpha controls transparency from 0 (transparent) to 1 (opaque). RGBA and HSLA include alpha so you can build overlays and semi-transparent UI elements.",
    },
    {
      question: "Why use HSL instead of RGB?",
      answer:
        "HSL is easier for theme adjustments because you can tweak hue, saturation, and lightness independently (useful for dark mode and design systems).",
    },
    {
      question: "Is the conversion done on a server?",
      answer:
        "No. All conversion runs locally in your browser, so your input isn't uploaded.",
    },
  ],
  relatedTools: [
    "hash-generator",
    "base64-encode-decode",
    "mime-type-lookup",
    "uuid-generator",
    "json-formatter",
    "url-encode-decode",
  ],
  ui: {
    inputPlaceholder:
      "Enter a color (e.g., #FF5733, #F80, rgb(255, 87, 51), hsl(9, 100%, 60%))...",
    outputPlaceholder: "Converted color values will appear here...",
    inputLabel: "Color Input",
    outputLabel: "Converted Values",
    convertLabel: "Convert Color",
  },
}
