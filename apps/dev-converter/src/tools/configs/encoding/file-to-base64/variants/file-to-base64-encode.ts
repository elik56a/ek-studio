import { Tool } from "@/lib/tools/types"

export const fileToBase64EncodeTool: Tool = {
  id: "file-to-base64-encode",
  slug: "file-to-base64-encode",
  name: "File to Base64 Encode",
  description:
    "Encode any file to Base64 data URL format for web development and APIs",
  category: "encoding",
  type: "converter",

  nav: {
    showInHeader: false,
  },

  componentId: "file-to-base64",

  keywords: [
    "file to base64 encode",
    "encode file to base64",
    "base64 file encoder",
    "file encoder",
    "base64 encoding",
  ],

  metadata: {
    title: "File to Base64 Encode - Convert Any File to Base64 Online",
    description:
      "Encode any file to Base64 data URL format. Support for all file types including images, documents, and web assets.",
    keywords: [
      "file to base64 encode",
      "encode file to base64",
      "base64 encoder",
      "file encoder",
    ],
  },

  info: {
    description:
      "Encode any file to Base64 data URL format for use in web development, APIs, and data transmission. This tool converts binary files into text-based Base64 strings with proper MIME type prefixes, making them suitable for embedding in HTML, CSS, JSON, and API payloads. All encoding happens locally in your browser for complete privacy.",
    howToUse: [
      "Upload any file (images, documents, web assets, etc.)",
      "The tool automatically encodes it to Base64",
      "Copy the Base64 data URL output",
      "Use it in your web application, API, or data payload",
      "The output includes the correct MIME type prefix",
    ],
    useCases: [
      "Encode files for API transmission",
      "Embed files in JSON payloads",
      "Create data URLs for HTML and CSS",
      "Store file data in databases as text",
      "Build offline-first web applications",
      "Package files with web components",
    ],
    features: [
      "Supports all file types",
      "Generates valid Base64 data URLs with MIME types",
      "Fast browser-based encoding (no upload required)",
      "One-click copy to clipboard",
      "Perfect for web development and APIs",
      "Privacy-first: files stay on your device",
    ],
  },

  faq: [
    {
      question: "What is Base64 encoding?",
      answer:
        "Base64 encoding converts binary file data into ASCII text using 64 printable characters. This makes files suitable for transmission through text-only systems like JSON and HTTP headers.",
    },
    {
      question: "Which file types can I encode?",
      answer:
        "You can encode any file type. The tool automatically detects the MIME type and generates the appropriate data URL prefix (data:image/png;base64,... or data:application/pdf;base64,... etc.).",
    },
    {
      question: "Does Base64 encoding change file quality?",
      answer:
        "No. Base64 encoding is lossless and preserves the exact file data. However, the encoded string is approximately 33% larger than the original file.",
    },
    {
      question: "When should I use Base64 encoding?",
      answer:
        "Use Base64 for small files in API payloads, embedded assets in HTML/CSS, or when you need to transmit binary data through text-only systems. Avoid it for large files.",
    },
    {
      question: "Is Base64 encoding secure?",
      answer:
        "No. Base64 is encoding, not encryption. Anyone can decode Base64 strings. Never use Base64 alone to protect sensitive information.",
    },
  ],

  relatedTools: [
    "file-to-base64",
    "image-to-base64",
    "pdf-to-base64",
    "base64-encode-decode",
  ],

  ui: {
    inputPlaceholder: "Upload any file to encode...",
    outputPlaceholder: "Base64 data URL will appear here...",
    inputLabel: "File Upload",
    outputLabel: "Base64 Data URL",
    convertLabel: "Encode to Base64",
  },
}
