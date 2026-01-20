import { Tool } from "@/lib/tools/types"

export const jsToBase64Tool: Tool = {
  id: "js-to-base64",
  slug: "js-to-base64",
  name: "JavaScript to Base64 Converter",
  description:
    "Convert JavaScript files to Base64 data URLs for embedding in HTML and web apps",
  category: "encoding",
  type: "converter",

  nav: {
    showInHeader: false,
  },

  componentId: "file-to-base64",

  preset: {
    accept: [".js", ".mjs"],
    label: "JavaScript",
  },

  keywords: [
    "js to base64",
    "javascript to base64",
    "convert js to base64",
    "base64 js encoder",
    "js data url",
  ],

  metadata: {
    title: "JavaScript to Base64 Converter - Encode JS Files Online",
    description:
      "Convert JavaScript files to Base64 data URLs for embedding in HTML. Perfect for inline scripts and self-contained web pages.",
    keywords: [
      "js to base64",
      "javascript to base64",
      "convert js to base64",
      "base64 js",
      "inline javascript",
    ],
  },

  info: {
    description:
      "Convert JavaScript files to Base64 data URLs for embedding directly in HTML or web applications. This is useful for creating self-contained HTML documents, bookmarklets, or single-file web apps where you want to inline all scripts. The tool generates a data URL with the data:text/javascript;base64,... prefix that can be used in <script> tags.",
    howToUse: [
      "Upload a JavaScript (.js or .mjs) file",
      "The tool automatically converts it to Base64",
      "Copy the Base64 data URL output",
      "Use it in HTML: <script src='data:text/javascript;base64,...'></script>",
      "Or decode and inline the JavaScript in <script> tags",
    ],
    useCases: [
      "Create self-contained HTML documents with embedded scripts",
      "Build single-file web applications",
      "Create bookmarklets with complex JavaScript",
      "Package web components with inline scripts",
      "Share HTML prototypes without external JS files",
      "Store JavaScript in JSON configuration files",
    ],
    features: [
      "Supports .js and .mjs file extensions",
      "Generates valid data:text/javascript;base64,... URLs",
      "Fast browser-based conversion (no upload required)",
      "One-click copy to clipboard",
      "Perfect for self-contained HTML documents",
      "Privacy-first: files stay on your device",
    ],
  },

  faq: [
    {
      question: "Why convert JavaScript to Base64?",
      answer:
        "Converting JavaScript to Base64 is useful for creating self-contained HTML files, bookmarklets, or when you need to embed scripts in JSON or data attributes without external files.",
    },
    {
      question: "How do I use a Base64 JavaScript file in HTML?",
      answer:
        "You can use <script src='data:text/javascript;base64,...'></script> but it's often better to decode the Base64 and inline the JavaScript in <script> tags for better performance and debugging.",
    },
    {
      question: "Should I convert large JavaScript files to Base64?",
      answer:
        "No. Base64 increases file size by ~33% and prevents caching. It's best for small scripts or when you absolutely need a self-contained HTML file.",
    },
    {
      question: "Does Base64 affect JavaScript execution?",
      answer:
        "No. Base64 encoding is lossless and preserves the exact JavaScript code. All functions, variables, and logic execute identically to the original file.",
    },
    {
      question: "Is my JavaScript file uploaded to a server?",
      answer:
        "No. All conversion happens locally in your browser. Your JavaScript files never leave your device.",
    },
  ],

  relatedTools: [
    "file-to-base64",
    "css-to-base64",
    "json-file-to-base64",
    "base64-encode-decode",
  ],

  ui: {
    inputPlaceholder: "Upload a JavaScript file...",
    outputPlaceholder: "Base64 data URL will appear here...",
    inputLabel: "JavaScript Upload",
    outputLabel: "Base64 Data URL",
    convertLabel: "Convert to Base64",
  },
}
