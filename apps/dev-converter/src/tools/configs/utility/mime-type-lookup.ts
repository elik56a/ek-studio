import { Tool } from "@/lib/tools/types"

export const mimeTypeLookupTool: Tool = {
  id: "mime-type-lookup",
  slug: "mime-type-lookup",
  name: "MIME Type Lookup",
  description:
    "Browse and search MIME types / Content-Types for file extensions — helpful for uploads, APIs, and headers",
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
      "MIME Type Lookup helps you browse and search the complete database of MIME types (Content-Type headers) for file extensions. MIME types tell browsers and servers how to treat a file (render an image, play a video, parse JSON, or download a document). Using the right Content-Type matters for file uploads, API responses, CDN caching, and security controls that prevent content sniffing. Browse the full list or search by extension, MIME type, or description to find what you need. Filter by category to narrow down results.",
    howToUse: [
      "Browse the complete list of MIME types by default",
      "Use the search bar to filter by extension, MIME type, or description",
      "Click category badges to filter by type (Image, Document, Video, etc.)",
      "Click the copy button next to any MIME type to copy it to clipboard",
      "Use the copied MIME type in HTTP headers, upload validation, or server configuration",
    ],
    useCases: [
      "Set correct Content-Type headers for API responses and static files",
      "Fix issues where files download instead of display (or vice versa)",
      "Validate uploads by extension and expected MIME type",
      "Configure CDNs and object storage metadata correctly",
      "Prevent serving content under the wrong type (security hardening)",
      "Map file extensions when generating signed URLs or upload policies",
      "Quick reference when building file upload systems",
      "Discover MIME types for uncommon file extensions",
    ],
    features: [
      "Browse complete MIME type database by default",
      "Real-time search filtering by extension, MIME type, or description",
      "Category-based filtering (Image, Document, Video, Audio, etc.)",
      "One-click copy to clipboard for any MIME type",
      "Clean, organized display with descriptions",
      "No conversion needed - just search and copy",
    ],
  },
  examples: [
    {
      title: "Search for PDF",
      input: "pdf",
      description: "Search for PDF document MIME type",
    },
    {
      title: "Search for images",
      input: "image",
      description: "Find all image-related MIME types",
    },
    {
      title: "Filter by video",
      input: "video",
      description: "Browse video format MIME types",
    },
    {
      title: "Search JSON",
      input: "json",
      description: "Find JSON MIME type",
    },
  ],
  faq: [
    {
      question: "What is a MIME type (Content-Type)?",
      answer:
        "A MIME type (often used as the HTTP Content-Type header) tells the browser or client what kind of content is being served, like application/json or image/png.",
    },
    {
      question: "How do I search for a MIME type?",
      answer:
        "Use the search bar to filter by file extension, MIME type, or description. You can also click category badges to filter by type (Image, Document, Video, etc.).",
    },
    {
      question: "Can I browse all MIME types?",
      answer:
        "Yes! By default, the tool shows the complete database of MIME types. You can scroll through the list or use search/filters to narrow down results.",
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
      question: "How do I copy a MIME type?",
      answer:
        "Click the copy button next to any MIME type in the results list. The MIME type will be copied to your clipboard instantly.",
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
