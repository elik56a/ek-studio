import { Tool } from "@/lib/tools/types"

export const pdfToBase64Tool: Tool = {
  id: "pdf-to-base64",
  slug: "pdf-to-base64",
  name: "PDF to Base64 Converter",
  description:
    "Convert PDF documents to Base64 data URLs for embedding in HTML, JSON, and APIs",
  category: "encoding",
  type: "converter",

  nav: {
    showInHeader: false,
  },

  componentId: "file-to-base64",

  preset: {
    accept: [".pdf"],
    label: "PDF",
  },

  keywords: [
    "pdf to base64",
    "convert pdf to base64",
    "base64 pdf encoder",
    "pdf data url",
    "pdf base64 converter",
  ],

  metadata: {
    title: "PDF to Base64 Converter - Encode PDF Documents Online",
    description:
      "Convert PDF documents to Base64 data URLs instantly. Embed PDFs in JSON, HTML, and API requests without external hosting.",
    keywords: [
      "pdf to base64",
      "convert pdf to base64",
      "base64 pdf",
      "pdf data url",
      "pdf encoder",
    ],
  },

  info: {
    description:
      "Convert PDF documents to Base64 data URLs for embedding in JSON payloads, HTML, or API requests. This tool generates a data URL with the data:application/pdf;base64,... prefix that can be used in API integrations, document management systems, and web applications. All conversion happens locally in your browser, ensuring your PDF documents remain private and secure.",
    howToUse: [
      "Upload a PDF document",
      "The tool automatically converts it to Base64",
      "Copy the Base64 data URL output",
      "Use it in JSON API requests or data payloads",
      "Or embed it in HTML with <embed> or <iframe> tags",
    ],
    useCases: [
      "Send PDF documents in JSON API requests",
      "Embed PDFs in database records as Base64 strings",
      "Create API payloads with document attachments",
      "Store PDF data in NoSQL databases",
      "Build document management systems with Base64 storage",
      "Integrate PDFs with REST APIs and webhooks",
    ],
    features: [
      "Optimized for PDF document conversion",
      "Generates valid data:application/pdf;base64,... URLs",
      "Fast browser-based conversion (no upload required)",
      "One-click copy to clipboard",
      "Perfect for API integrations and JSON payloads",
      "Privacy-first: documents stay on your device",
    ],
  },

  faq: [
    {
      question: "Why convert PDF to Base64?",
      answer:
        "Converting PDF to Base64 is useful for sending documents in JSON API requests, storing PDFs in databases, or embedding documents in data payloads without separate file hosting.",
    },
    {
      question: "How do I use a Base64 PDF in an API request?",
      answer:
        "Include the Base64 string in your JSON payload: {\"document\": \"data:application/pdf;base64,JVBERi0...\"}. Many APIs accept Base64-encoded PDFs for document uploads.",
    },
    {
      question: "Can I embed a Base64 PDF in HTML?",
      answer:
        "Yes, but it's not recommended for large PDFs. You can use <embed src='data:application/pdf;base64,...'> or <iframe>, but this increases page size significantly.",
    },
    {
      question: "Should I convert large PDFs to Base64?",
      answer:
        "No. Base64 increases file size by ~33%. For large PDFs, use file uploads or URLs instead. Base64 is best for small documents (under 1MB) in API integrations.",
    },
    {
      question: "Does Base64 preserve PDF content and formatting?",
      answer:
        "Yes. Base64 encoding is lossless and preserves the exact PDF data including all pages, formatting, fonts, and embedded content.",
    },
    {
      question: "Is my PDF uploaded to a server?",
      answer:
        "No. All conversion happens locally in your browser. Your PDF documents never leave your device.",
    },
    {
      question: "What's the maximum PDF size I can convert?",
      answer:
        "The tool supports PDFs up to 10MB. However, remember that Base64 encoding increases size by ~33%, so a 10MB PDF becomes ~13MB of Base64 text.",
    },
  ],

  relatedTools: [
    "file-to-base64",
    "image-to-base64",
    "base64-encode-decode",
    "json-formatter",
  ],

  ui: {
    inputPlaceholder: "Upload a PDF file...",
    outputPlaceholder: "Base64 data URL will appear here...",
    inputLabel: "PDF Upload",
    outputLabel: "Base64 Data URL",
    convertLabel: "Convert to Base64",
  },
}
