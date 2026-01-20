import { Tool } from "@/lib/tools/types"

export const pngToBase64Tool: Tool = {
  id: "png-to-base64",
  slug: "png-to-base64",
  name: "PNG to Base64 Converter",
  description:
    "Convert PNG images to Base64 data URLs for HTML, CSS, and web development",
  category: "encoding",
  type: "converter",

  nav: {
    showInHeader: false,
  },

  componentId: "file-to-base64",

  preset: {
    accept: [".png"],
    label: "PNG",
  },

  keywords: [
    "png to base64",
    "convert png to base64",
    "base64 png encoder",
    "png data url",
    "png base64 converter",
  ],

  metadata: {
    title: "PNG to Base64 Converter - Encode PNG Images Online",
    description:
      "Convert PNG images to Base64 data URLs instantly. Perfect for embedding PNG files in HTML, CSS, and JSON without external hosting.",
    keywords: [
      "png to base64",
      "convert png to base64",
      "base64 png",
      "png data url",
      "png encoder",
    ],
  },

  info: {
    description:
      "Convert PNG images to Base64 data URLs for direct embedding in HTML, CSS, or JSON. PNG (Portable Network Graphics) is ideal for images with transparency, logos, and icons. This tool generates a data URL with the data:image/png;base64,... prefix that works immediately in <img> tags, CSS backgrounds, and API payloads. All conversion happens locally in your browser for maximum privacy.",
    howToUse: [
      "Upload a PNG image file",
      "The tool automatically converts it to Base64",
      "Copy the Base64 data URL output",
      "Use it in HTML: <img src='data:image/png;base64,...'>",
      "Or in CSS: background-image: url('data:image/png;base64,...')",
    ],
    useCases: [
      "Embed PNG logos and icons in HTML without separate files",
      "Inline transparent PNG images in CSS for UI elements",
      "Create self-contained HTML email templates with PNG graphics",
      "Send PNG data in JSON API requests",
      "Build offline web apps with embedded PNG assets",
      "Share HTML prototypes with embedded PNG images",
    ],
    features: [
      "Optimized for PNG format with transparency support",
      "Generates valid data:image/png;base64,... URLs",
      "Fast browser-based conversion (no upload required)",
      "One-click copy to clipboard",
      "Perfect for logos, icons, and transparent images",
      "Privacy-first: files stay on your device",
    ],
  },

  faq: [
    {
      question: "Why use PNG to Base64 conversion?",
      answer:
        "PNG to Base64 is perfect for embedding small PNG images (logos, icons) directly in HTML or CSS without hosting them separately. It's especially useful for transparent images and email templates.",
    },
    {
      question: "How do I embed a Base64 PNG in HTML?",
      answer:
        "Use <img src='data:image/png;base64,iVBORw0KG...' alt='description'>. The PNG displays inline without needing a separate file or server.",
    },
    {
      question: "Can I use Base64 PNG in CSS?",
      answer:
        "Yes! Use background-image: url('data:image/png;base64,...'). This is great for small PNG icons and transparent UI elements.",
    },
    {
      question: "Does Base64 preserve PNG transparency?",
      answer:
        "Yes. Base64 encoding is lossless and preserves all PNG features including transparency (alpha channel). The encoded image looks identical to the original.",
    },
    {
      question: "Should I convert large PNG files to Base64?",
      answer:
        "No. Base64 increases file size by ~33% and prevents browser caching. Use it only for small PNGs (under 10KB) like icons. For large images, use regular <img> tags.",
    },
    {
      question: "Is my PNG uploaded to a server?",
      answer:
        "No. All conversion happens locally in your browser. Your PNG files never leave your device.",
    },
  ],

  relatedTools: [
    "file-to-base64",
    "image-to-base64",
    "jpg-to-base64",
    "svg-to-base64",
    "base64-encode-decode",
  ],

  ui: {
    inputPlaceholder: "Upload a PNG file...",
    outputPlaceholder: "Base64 data URL will appear here...",
    inputLabel: "PNG Upload",
    outputLabel: "Base64 Data URL",
    convertLabel: "Convert to Base64",
  },
}
