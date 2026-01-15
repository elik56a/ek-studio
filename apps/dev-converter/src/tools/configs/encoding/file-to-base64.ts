import { Tool } from "@/lib/tools/types"

/**
 * File to Base64 Converter Tool Configuration
 *
 * Converts files (images, documents, etc.) to Base64 data URLs.
 * Generates data URLs with proper MIME type prefixes (data:image/png;base64,...).
 * Useful for embedding files in HTML, CSS, JSON, email templates, and API payloads.
 */
export const fileToBase64Tool: Tool = {
  id: "file-to-base64",
  slug: "file-to-base64",
  name: "File to Base64 Converter",
  description:
    "Convert files to Base64 data URLs for HTML, CSS, JSON, and APIs — locally in your browser",
  category: "encoding",
  type: "converter",
  keywords: [
    "file to base64",
    "image to base64",
    "base64 data url",
    "data uri",
    "embed image",
    "convert file to base64",
  ],
  metadata: {
    title: "File to Base64 Converter (Data URL) Online",
    description:
      "Convert files to Base64 data URLs (data:...) for HTML/CSS/JSON. Supports PNG, JPG, GIF, WebP, SVG and more. Runs locally, no upload.",
    keywords: [
      "file to base64",
      "image to base64",
      "base64 data url",
      "data uri converter",
      "png to base64",
      "jpg to base64",
      "svg to base64",
    ],
  },
  info: {
    description:
      "This File to Base64 Converter turns any file (images, icons, documents, and more) into a Base64 data URL you can paste directly into HTML, CSS, or JSON. Base64 encoding converts binary bytes into text so you can embed files inline without hosting them separately. The output includes the correct MIME type prefix (for example, data:image/png;base64,...) so it works immediately in <img src>, CSS background-image, email templates, and API payloads.",
    howToUse: [
      "Upload a file (PNG, JPG, GIF, WebP, SVG, PDF, etc.)",
      "The tool generates a Base64 data URL automatically",
      "Copy the Base64 output",
      "Paste it into HTML, CSS, JSON, or an API request",
      "Optional: Use it as <img src='data:...'> or CSS background-image: url('data:...')",
    ],
    useCases: [
      "Embed images in HTML: Use Base64 in <img src='data:...'> without a hosted file",
      "Inline icons in CSS: Add Base64 images to background-image for small assets",
      "Email templates: Inline images when external assets might be blocked",
      "API payloads: Send file data inside JSON when required by a service",
      "Offline/PWA assets: Embed small resources to reduce dependency on network requests",
      "Rapid prototyping: Share self-contained HTML snippets that include images",
    ],
    features: [
      "Outputs a valid Base64 data URL with the correct MIME type",
      "Supports common image formats (PNG, JPG, GIF, WebP, SVG) and other files",
      "Fast conversion in your browser (no upload to a server)",
      "One-click copy to clipboard",
      "Great for HTML, CSS, JSON, Markdown, and API debugging",
      "Privacy-first: your file stays on your device",
    ],
  },
  faq: [
    {
      question: "What is a Base64 data URL (data URI)?",
      answer:
        "A Base64 data URL is an inline URL that contains the file content encoded as text (Base64) plus a MIME type, like data:image/png;base64,... It can be pasted anywhere a URL is accepted.",
    },
    {
      question: "When should I use File to Base64 conversion?",
      answer:
        "Use Base64 data URLs for small assets like icons and small images, email templates, and quick prototypes. Avoid large files because Base64 increases size and can slow loading.",
    },
    {
      question: "Which file types are supported?",
      answer:
        "You can convert most file types. For images, PNG/JPG/GIF/WebP/SVG are common. The output includes the correct MIME type prefix when available.",
    },
    {
      question: "How do I embed a Base64 image in HTML or CSS?",
      answer:
        "In HTML, set <img src='data:image/png;base64,...'>. In CSS, use background-image: url('data:image/png;base64,...').",
    },
    {
      question: "Does Base64 reduce image quality?",
      answer:
        "No. Base64 encoding is lossless. It preserves the exact bytes of the original file, but the encoded string is larger than the original binary.",
    },
    {
      question: "Is this tool safe for sensitive files?",
      answer:
        "Conversion happens locally in your browser and isn't uploaded. Still, avoid using sensitive files on untrusted devices or shared machines.",
    },
  ],
  relatedTools: [
    "base64-encode-decode",
    "url-encode-decode",
    "html-escape-unescape",
    "json-formatter",
    "json-escape-unescape",
    "jwt-decoder",
  ],
  ui: {
    inputPlaceholder: "Upload a file (PNG, JPG, SVG, PDF, etc.)...",
    outputPlaceholder: "Base64 data URL will appear here...",
    inputLabel: "File Upload",
    outputLabel: "Base64 Data URL",
    convertLabel: "Convert to Base64",
  },
}
