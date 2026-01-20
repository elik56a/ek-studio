import { Tool } from "@/lib/tools/types"

export const svgToBase64Tool: Tool = {
  id: "svg-to-base64",
  slug: "svg-to-base64",
  name: "SVG to Base64 Converter",
  description:
    "Convert SVG vector graphics to Base64 data URLs for HTML, CSS, and web development",
  category: "encoding",
  type: "converter",

  nav: {
    showInHeader: false,
  },

  componentId: "file-to-base64",

  preset: {
    accept: [".svg"],
    label: "SVG",
  },

  keywords: [
    "svg to base64",
    "convert svg to base64",
    "base64 svg encoder",
    "svg data url",
    "svg base64 converter",
  ],

  metadata: {
    title: "SVG to Base64 Converter - Encode SVG Graphics Online",
    description:
      "Convert SVG vector graphics to Base64 data URLs instantly. Embed SVG icons and logos in HTML, CSS, and JSON without external files.",
    keywords: [
      "svg to base64",
      "convert svg to base64",
      "base64 svg",
      "svg data url",
      "svg encoder",
    ],
  },

  info: {
    description:
      "Convert SVG (Scalable Vector Graphics) files to Base64 data URLs for embedding in HTML, CSS, or JSON. SVG is perfect for icons, logos, and graphics that need to scale without quality loss. This tool generates a data URL with the data:image/svg+xml;base64,... prefix that works immediately in <img> tags, CSS backgrounds, and API payloads. All conversion happens locally in your browser for complete privacy.",
    howToUse: [
      "Upload an SVG file",
      "The tool automatically converts it to Base64",
      "Copy the Base64 data URL output",
      "Use it in HTML: <img src='data:image/svg+xml;base64,...'>",
      "Or in CSS: background-image: url('data:image/svg+xml;base64,...')",
    ],
    useCases: [
      "Embed SVG icons and logos in HTML without separate files",
      "Inline SVG graphics in CSS for scalable UI elements",
      "Create self-contained HTML email templates with SVG graphics",
      "Send SVG data in JSON API requests",
      "Build offline web apps with embedded vector assets",
      "Share HTML prototypes with embedded SVG icons",
    ],
    features: [
      "Optimized for SVG vector graphics",
      "Generates valid data:image/svg+xml;base64,... URLs",
      "Fast browser-based conversion (no upload required)",
      "One-click copy to clipboard",
      "Perfect for icons, logos, and scalable graphics",
      "Privacy-first: files stay on your device",
    ],
  },

  faq: [
    {
      question: "Why convert SVG to Base64?",
      answer:
        "Converting SVG to Base64 lets you embed vector graphics directly in HTML or CSS without separate files. It's great for icons, logos, and small graphics that need to scale perfectly.",
    },
    {
      question: "How do I embed a Base64 SVG in HTML?",
      answer:
        "Use <img src='data:image/svg+xml;base64,PHN2Zy...' alt='description'>. The SVG displays inline and scales perfectly at any size.",
    },
    {
      question: "Can I use Base64 SVG in CSS?",
      answer:
        "Yes! Use background-image: url('data:image/svg+xml;base64,...'). This is perfect for scalable icons and UI elements in your stylesheets.",
    },
    {
      question: "Should I use Base64 for all SVG files?",
      answer:
        "Base64 is best for small SVG icons (under 10KB). For large or complex SVGs, consider using regular <img> tags or inline <svg> elements for better caching and performance.",
    },
    {
      question: "Does Base64 affect SVG quality or scalability?",
      answer:
        "No. Base64 encoding is lossless and preserves the vector nature of SVG. The graphic scales perfectly at any size, just like the original SVG file.",
    },
    {
      question: "Is my SVG uploaded to a server?",
      answer:
        "No. All conversion happens locally in your browser. Your SVG files never leave your device.",
    },
    {
      question: "What's better: Base64 SVG or inline SVG?",
      answer:
        "Inline SVG (<svg>...</svg>) is often better for styling and animation. Base64 is better when you need a data URL format for CSS, JSON, or when you can't use inline SVG.",
    },
  ],

  relatedTools: [
    "file-to-base64",
    "image-to-base64",
    "png-to-base64",
    "jpg-to-base64",
    "base64-encode-decode",
  ],

  ui: {
    inputPlaceholder: "Upload an SVG file...",
    outputPlaceholder: "Base64 data URL will appear here...",
    inputLabel: "SVG Upload",
    outputLabel: "Base64 Data URL",
    convertLabel: "Convert to Base64",
  },
}
