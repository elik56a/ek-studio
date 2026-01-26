import { Tool } from "@/lib/tools/types"


export const colorConverterTool: Tool = {
  id: "color-converter",
  slug: "color-converter",
  name: "Color Converter",
  description:
    "Convert HEX, RGB/RGBA, HSL/HSLA instantly with live preview — perfect for CSS variables, Tailwind, design tokens, and UI theming.",
  category: "utility",
  type: "converter",

  keywords: [
    "color converter",
    "css color converter",
    "hex to rgb",
    "rgb to hex",
    "hex to hsl",
    "hsl to hex",
    "hsl to rgb",
    "rgb to hsl",
    "rgba to hex",
    "hex to rgba",
    "hsla converter",
    "rgba converter",
    "alpha color converter",
    "css rgba",
    "css hsla",
    "color picker",
    "color picker online",
    "short hex",
    "expand short hex",
    "#rgb to #rrggbb",
    "design tokens",
    "tailwind color converter",
    "figma to css color",
  ],

  metadata: {
    title: "Color Converter (HEX ↔ RGB ↔ HSL, RGBA/HSLA, Live Preview)",
    description:
      "Convert CSS colors between HEX, RGB/RGBA, and HSL/HSLA with live preview. Auto-detect input, expand short HEX (#F80), and preserve alpha for transparent UI colors.",
    keywords: [
      "color converter",
      "hex to rgb",
      "rgb to hex",
      "hex to hsl",
      "hsl to rgb",
      "rgba to hex",
      "hsla converter",
      "color picker online",
      "short hex",
      "alpha color converter",
    ],
  },

  info: {
    description:
      "Color Converter is a developer-friendly CSS color converter that translates color values between HEX, RGB/RGBA, HSL/HSLA and shows a live preview. Different workflows prefer different formats: HEX is popular for design tokens and CSS variables, RGB/RGBA works well for programmatic styling and overlays (alpha), and HSL/HSLA is ideal for theme systems because hue, saturation, and lightness can be adjusted independently (great for dark mode and brand palettes). Paste any supported color string and the tool auto-detects the format, outputs all equivalents at once, expands shorthand HEX (#RGB/#RGBA), and preserves transparency so you can copy/paste the exact format you need into CSS, Tailwind, Figma tokens, or component libraries — locally in your browser.",
    howToUse: [
      "Paste a color value into the input (HEX, RGB, RGBA, HSL, or HSLA)",
      "The tool auto-detects the format and parses it immediately",
      "See equivalent values for HEX, RGB/RGBA, and HSL/HSLA",
      "Use the live preview to confirm you’re copying the intended color",
      "Copy the format you need for CSS variables, design tokens, Tailwind config, or UI code",
      "If you’re working with transparency, prefer RGBA/HSLA and keep alpha preserved",
    ],
    useCases: [
      "Convert HEX → RGB for css rgb() / rgba() usage",
      "Convert RGB → HEX for design tools, tokens, and CSS variables",
      "Use HSL to generate themes by adjusting lightness/saturation (dark mode)",
      "Preserve alpha for overlays, shadows, hover states, and glassmorphism UI",
      "Translate colors between Figma and code (design tokens workflow)",
      "Normalize color formats across a component library or design system",
      "Expand short HEX (#F80 / #F80C) into full 6/8-digit hex",
      "Validate pasted colors from the web (ensure correct syntax + expected output)",
    ],
    features: [
      "Accurate conversion between HEX, RGB, RGBA, HSL, and HSLA",
      "Live preview swatch so you can verify visually before copying",
      "Auto-detects input format (paste any supported CSS color string)",
      "Expands shorthand HEX (#RGB and #RGBA) to full HEX (#RRGGBB / #RRGGBBAA)",
      "Preserves alpha (transparency) for RGBA/HSLA and 8-digit HEX",
      "Copy-ready outputs for CSS variables, Tailwind config, and design tokens",
      "Local-only processing: runs in your browser (no uploads)",
    ],
  },

  examples: [
    {
      title: "HEX → RGB / HSL (classic design token)",
      input: "#FF5733",
      description: "Convert a standard 6-digit HEX color to RGB and HSL equivalents.",
    },
    {
      title: "Short HEX (#RGB) expansion",
      input: "#F80",
      description: "Expand shorthand HEX and convert to all formats (#F80 → #FF8800).",
    },
    {
      title: "Short HEX with alpha (#RGBA) expansion",
      input: "#F80C",
      description:
        "Expand shorthand HEX with alpha (#RGBA → #RRGGBBAA) and preserve transparency.",
    },
    {
      title: "RGB → HEX / HSL (CSS rgb())",
      input: "rgb(52, 152, 219)",
      description: "Convert rgb() into HEX and HSL (useful for tokens and theme editing).",
    },
    {
      title: "RGBA with alpha (overlay color)",
      input: "rgba(0, 0, 0, 0.35)",
      description: "Preserve alpha for overlays and shadows while converting formats.",
    },
    {
      title: "HSL → HEX / RGB (theme-friendly edits)",
      input: "hsl(210, 90%, 55%)",
      description: "Convert hsl() into HEX/RGB. HSL is great for tweaking lightness.",
    },
    {
      title: "HSLA (transparent theme color)",
      input: "hsla(210, 90%, 55%, 0.6)",
      description: "Convert HSLA while keeping alpha for UI states and glass effects.",
    },
    {
      title: "8-digit HEX with alpha (#RRGGBBAA)",
      input: "#0EA5E980",
      description:
        "Convert 8-digit HEX (includes alpha) to RGBA/HSLA for modern CSS workflows.",
    },
    {
      title: "Pure white / black sanity check",
      input: "#000000",
      description: "Confirm conversions for edge colors (black/white) and spot parsing issues.",
    },
    {
      title: "CSS variable style input (common copy/paste)",
      input: "rgba(255, 255, 255, 0.08)",
      description:
        "Useful when building subtle borders/backgrounds in dark mode — convert to HEX8 or HSLA.",
    },
  ],

  faq: [
    {
      question: "What color formats does this converter support?",
      answer:
        "It converts between HEX (3/4/6/8-digit), RGB, RGBA, HSL, and HSLA. Paste any supported format and get all equivalents instantly.",
    },
    {
      question: "How do I convert HEX to RGB?",
      answer:
        "Paste a HEX value like #FF5733 and the converter will output rgb(255, 87, 51) and other formats, plus a live preview.",
    },
    {
      question: "Can I convert short HEX like #F80 or #F80C?",
      answer:
        "Yes. #RGB expands to #RRGGBB and #RGBA expands to #RRGGBBAA automatically, then converts to RGB/HSL equivalents.",
    },
    {
      question: "What is alpha in RGBA/HSLA and how is it used?",
      answer:
        "Alpha is transparency from 0 (fully transparent) to 1 (fully opaque). It’s commonly used for overlays, shadows, borders, hover states, and glassmorphism UI.",
    },
    {
      question: "Why use HSL instead of RGB?",
      answer:
        "HSL is more intuitive for theme adjustments. You can tweak hue, saturation, and lightness independently—great for palettes, dark mode, and consistent UI states.",
    },
    {
      question: "What is 8-digit HEX (#RRGGBBAA)?",
      answer:
        "8-digit HEX includes alpha at the end (AA). For example, #0EA5E980 is a color with transparency. The tool converts it to RGBA/HSLA while preserving alpha.",
    },
    {
      question: "Why do my colors look slightly different after converting?",
      answer:
        "Some conversions involve rounding (especially HSL ↔ RGB). Small rounding differences can happen, but the visual result should be effectively the same.",
    },
    {
      question: "Is the conversion done on a server?",
      answer:
        "No. Everything runs locally in your browser — your color inputs aren’t uploaded.",
    },
    {
      question: "Can I use this for Tailwind or design tokens?",
      answer:
        "Yes. Convert to HEX for tokens/CSS variables, use HSL for theme generation, or RGBA/HEX8 for transparent UI layers.",
    },
    {
      question: "Does it support named CSS colors like 'rebeccapurple'?",
      answer:
        "This tool focuses on numeric formats (HEX/RGB/HSL). If you paste a named color and it’s not recognized, convert it first or use a picker that resolves names to values.",
    },
  ],

  relatedTools: [
    // Key variants (popular conversions)
    "hex-to-rgb",
    "rgb-to-hex",
    "hex-to-hsl",
    "hsl-to-rgb",
    "rgba-to-hex",
    "hsla-to-rgb",
    // Other related tools
    "json-formatter",
    "url-encode-decode",
    "base64-encode-decode",
    "uuid-generator",
    "hash-generator",
    "mime-type-lookup",
  ],

  ui: {
    inputPlaceholder: "#FF5733, #F80, rgb(255, 87, 51), hsl(12, 100%, 60%)",
    outputPlaceholder: "Converted color values will appear here...",
    inputLabel: "Color Input",
    outputLabel: "Converted Values",
    convertLabel: "Convert Color",
    relatedToolsTitle: "Popular conversions",
  },
}
