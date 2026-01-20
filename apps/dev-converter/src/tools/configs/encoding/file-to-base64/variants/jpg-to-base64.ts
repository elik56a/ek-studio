import { Tool } from "@/lib/tools/types"

export const jpgToBase64Tool: Tool = {
  id: "jpg-to-base64",
  slug: "jpg-to-base64",
  name: "JPG to Base64 Converter",
  description:
    "Convert JPG/JPEG images to Base64 data URLs for HTML, CSS, and web projects",
  category: "encoding",
  type: "converter",

  nav: {
    showInHeader: false,
  },

  componentId: "file-to-base64",

  preset: {
    accept: [".jpg", ".jpeg"],
    label: "JPG/JPEG",
  },

  keywords: [
    "jpg to base64",
    "jpeg to base64",
    "convert jpg to base64",
    "base64 jpg encoder",
    "jpg data url",
  ],

  metadata: {
    title: "JPG to Base64 Converter - Encode JPEG Images Online",
    description:
      "Convert JPG/JPEG images to Base64 data URLs instantly. Embed JPEG photos in HTML, CSS, and JSON without external hosting.",
    keywords: [
      "jpg to base64",
      "jpeg to base64",
      "convert jpg to base64",
      "base64 jpg",
      "jpeg encoder",
    ],
  },

  info: {
    description:
      "Convert JPG/JPEG images to Base64 data URLs for embedding in HTML, CSS, or JSON. JPEG is the most common format for photos and complex images. This tool generates a data URL with the data:image/jpeg;base64,... prefix that works immediately in <img> tags, CSS backgrounds, and API payloads. All conversion happens locally in your browser with no server upload required.",
    howToUse: [
      "Upload a JPG or JPEG image file",
      "The tool automatically converts it to Base64",
      "Copy the Base64 data URL output",
      "Use it in HTML: <img src='data:image/jpeg;base64,...'>",
      "Or in CSS: background-image: url('data:image/jpeg;base64,...')",
    ],
    useCases: [
      "Embed JPG photos in HTML without separate files",
      "Inline JPEG images in CSS for backgrounds",
      "Create self-contained HTML email templates with photos",
      "Send JPEG data in JSON API requests",
      "Build offline web apps with embedded photo assets",
      "Share HTML prototypes with embedded JPEG images",
    ],
    features: [
      "Supports both .jpg and .jpeg file extensions",
      "Generates valid data:image/jpeg;base64,... URLs",
      "Fast browser-based conversion (no upload required)",
      "One-click copy to clipboard",
      "Perfect for photos and complex images",
      "Privacy-first: files stay on your device",
    ],
  },

  faq: [
    {
      question: "What's the difference between JPG and JPEG?",
      answer:
        "JPG and JPEG are the same format. JPG is just a shorter file extension (from older systems with 3-character limits). This tool handles both .jpg and .jpeg files.",
    },
    {
      question: "How do I embed a Base64 JPG in HTML?",
      answer:
        "Use <img src='data:image/jpeg;base64,/9j/4AAQ...' alt='description'>. The JPEG displays inline without needing a separate file.",
    },
    {
      question: "Should I convert photos to Base64?",
      answer:
        "Only for small photos or thumbnails. Base64 increases file size by ~33% and prevents caching. For full-size photos, use regular <img> tags with src URLs.",
    },
    {
      question: "Does Base64 reduce JPG quality?",
      answer:
        "No. Base64 encoding is lossless and preserves the exact JPEG data. However, the encoded string is larger than the original file.",
    },
    {
      question: "Can I use Base64 JPG in CSS?",
      answer:
        "Yes! Use background-image: url('data:image/jpeg;base64,...'). This works for small JPEG backgrounds and thumbnails.",
    },
    {
      question: "Is my JPG uploaded to a server?",
      answer:
        "No. All conversion happens locally in your browser. Your JPEG files never leave your device.",
    },
  ],

  relatedTools: [
    "file-to-base64",
    "image-to-base64",
    "png-to-base64",
    "svg-to-base64",
    "base64-encode-decode",
  ],

  ui: {
    inputPlaceholder: "Upload a JPG/JPEG file...",
    outputPlaceholder: "Base64 data URL will appear here...",
    inputLabel: "JPG/JPEG Upload",
    outputLabel: "Base64 Data URL",
    convertLabel: "Convert to Base64",
  },
}
