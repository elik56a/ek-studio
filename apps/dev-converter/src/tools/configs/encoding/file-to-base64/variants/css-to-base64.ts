import { Tool } from "@/lib/tools/types"

export const cssToBase64Tool: Tool = {
  id: "css-to-base64",
  slug: "css-to-base64",
  name: "CSS to Base64 Converter",
  description:
    "Convert CSS files to Base64 data URLs for embedding in HTML and web applications",
  category: "encoding",
  type: "converter",

  nav: {
    showInHeader: false,
  },

  componentId: "file-to-base64",

  preset: {
    accept: [".css"],
    label: "CSS",
  },

  keywords: [
    "css to base64",
    "convert css to base64",
    "base64 css encoder",
    "css data url",
    "inline css base64",
  ],

  metadata: {
    title: "CSS to Base64 Converter - Encode CSS Files Online",
    description:
      "Convert CSS files to Base64 data URLs for embedding in HTML. Perfect for inline styles and self-contained web pages.",
    keywords: [
      "css to base64",
      "convert css to base64",
      "base64 css",
      "css data url",
      "inline css",
    ],
  },

  info: {
    description:
      "Convert CSS stylesheet files to Base64 data URLs for embedding directly in HTML. This is useful for creating self-contained HTML documents, email templates, or single-file web applications where you want to inline all styles. The tool generates a data URL with the data:text/css;base64,... prefix that can be used in <link> tags or style imports.",
    howToUse: [
      "Upload a CSS file",
      "The tool automatically converts it to Base64",
      "Copy the Base64 data URL output",
      "Use it in HTML: <link rel='stylesheet' href='data:text/css;base64,...'>",
      "Or decode and inline the CSS in <style> tags",
    ],
    useCases: [
      "Create self-contained HTML documents with embedded styles",
      "Build single-file web applications",
      "Embed CSS in HTML email templates",
      "Package web components with inline styles",
      "Share HTML prototypes without external CSS files",
      "Store CSS in JSON configuration files",
    ],
    features: [
      "Optimized for CSS file conversion",
      "Generates valid data:text/css;base64,... URLs",
      "Fast browser-based conversion (no upload required)",
      "One-click copy to clipboard",
      "Perfect for self-contained HTML documents",
      "Privacy-first: files stay on your device",
    ],
  },

  faq: [
    {
      question: "Why convert CSS to Base64?",
      answer:
        "Converting CSS to Base64 is useful for creating self-contained HTML files, email templates, or when you need to embed styles in JSON or data attributes without external files.",
    },
    {
      question: "How do I use a Base64 CSS file in HTML?",
      answer:
        "You can use <link rel='stylesheet' href='data:text/css;base64,...'> but it's often better to decode the Base64 and inline the CSS in <style> tags for better performance.",
    },
    {
      question: "Should I convert large CSS files to Base64?",
      answer:
        "No. Base64 increases file size by ~33% and prevents caching. It's best for small CSS snippets or when you absolutely need a self-contained HTML file.",
    },
    {
      question: "Does Base64 affect CSS functionality?",
      answer:
        "No. Base64 encoding is lossless and preserves the exact CSS content. All styles, selectors, and rules work identically to the original file.",
    },
    {
      question: "Is my CSS file uploaded to a server?",
      answer:
        "No. All conversion happens locally in your browser. Your CSS files never leave your device.",
    },
  ],

  relatedTools: [
    "file-to-base64",
    "js-to-base64",
    "json-file-to-base64",
    "base64-encode-decode",
  ],

  ui: {
    inputPlaceholder: "Upload a CSS file...",
    outputPlaceholder: "Base64 data URL will appear here...",
    inputLabel: "CSS Upload",
    outputLabel: "Base64 Data URL",
    convertLabel: "Convert to Base64",
  },
}
