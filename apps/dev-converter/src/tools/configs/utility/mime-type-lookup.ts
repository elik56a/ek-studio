import { Tool } from "@/lib/tools/types"

export const mimeTypeLookupTool: Tool = {
  id: "mime-type-lookup",
  slug: "mime-type-lookup",
  name: "MIME Type Lookup",
  description:
    "Find the correct MIME type / Content-Type for any file extension (e.g., .pdf, .png, .json) — helpful for uploads, APIs, and headers",
  category: "utility",
  type: "converter",
  keywords: [
    "mime type lookup",
    "content type lookup",
    "file extension mime type",
    "content-type header",
    "mime database",
    "what is the mime type for",
  ],
  metadata: {
    title: "MIME Type Lookup: Find Content-Type by Extension",
    description:
      "Look up MIME types (Content-Type) by file extension like pdf, png, jpg, mp4, json, csv. Copy the correct header value instantly.",
    keywords: [
      "mime type lookup",
      "content type lookup",
      "mime type for pdf",
      "mime type for png",
      "mime type for json",
      "file extension to mime type",
    ],
  },
  info: {
    description:
      "MIME Type Lookup helps you find the correct Content-Type header value for a file extension—fast. MIME types tell browsers and servers how to treat a file (render an image, play a video, parse JSON, or download a document). Using the right Content-Type matters for file uploads, API responses, CDN caching, and security controls that prevent content sniffing. Enter an extension with or without a dot (pdf or .pdf) and instantly get the standard MIME type you can use in HTTP headers, server configs, and upload validation logic.",
    howToUse: [
      "Type a file extension (example: pdf, .png, mp4, json)",
      "Click Lookup to get the MIME type / Content-Type",
      "Copy the result (example: application/pdf)",
      "Use it in HTTP headers, upload validation, or server/CDN configuration",
      "Repeat for other extensions while building file handling rules",
    ],
    useCases: [
      "Set correct Content-Type headers for API responses and static files",
      "Fix issues where files download instead of display (or vice versa)",
      "Validate uploads by extension and expected MIME type",
      "Configure CDNs and object storage metadata correctly",
      "Prevent serving content under the wrong type (security hardening)",
      "Map file extensions when generating signed URLs or upload policies",
    ],
    features: [
      "Instant file extension → MIME type lookup",
      "Accepts inputs with or without a dot (.pdf and pdf)",
      "Provides copy-ready Content-Type values for HTTP headers",
      "Useful for uploads, APIs, CDNs, and server configuration",
      "Text-only input (no file upload required)",
    ],
  },
  examples: [
    {
      title: "MIME type for PDF",
      input: ".pdf",
      description: "Find the Content-Type for PDF documents",
    },
    {
      title: "MIME type for JPEG",
      input: "jpg",
      description: "Look up the MIME type for JPEG images",
    },
    {
      title: "MIME type for JavaScript",
      input: ".js",
      description: "Get the correct Content-Type for JS files",
    },
    {
      title: "MIME type for MP4 video",
      input: ".mp4",
      description: "Look up the MIME type for MP4 media files",
    },
    {
      title: "MIME type for JSON",
      input: "json",
      description: "Find the standard MIME type for JSON responses",
    },
  ],
  faq: [
    {
      question: "What is a MIME type (Content-Type)?",
      answer:
        "A MIME type (often used as the HTTP Content-Type header) tells the browser or client what kind of content is being served, like application/json or image/png.",
    },
    {
      question: "How do I find the MIME type for a file extension?",
      answer:
        "Enter the extension (with or without a dot) and this tool returns the standard MIME type you can copy into headers or configs.",
    },
    {
      question: "Do I need to include the dot in the extension?",
      answer:
        "No. Both pdf and .pdf work and return the same MIME type result.",
    },
    {
      question: "Why does Content-Type matter for uploads and APIs?",
      answer:
        "Correct Content-Type prevents broken rendering, improves caching, and reduces security risks from browsers guessing file types incorrectly.",
    },
    {
      question: "What happens if I set the wrong MIME type?",
      answer:
        "Files may render incorrectly, be downloaded unexpectedly, fail security checks, or trigger browser warnings (especially for scripts and JSON).",
    },
    {
      question: "Does this tool upload any files?",
      answer:
        "No. You only enter a file extension as text, and the lookup runs instantly.",
    },
  ],
  relatedTools: [
    "hash-generator",
    "base64-encode-decode",
    "color-converter",
    "uuid-generator",
    "json-formatter",
    "file-to-base64",
  ],
  ui: {
    inputPlaceholder: "Enter extension (e.g., pdf, .png, jpg, .mp4, json)...",
    outputPlaceholder: "MIME type / Content-Type will appear here...",
    inputLabel: "File Extension",
    outputLabel: "MIME Type Result",
    convertLabel: "Lookup",
  },
}
