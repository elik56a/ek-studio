import { Tool } from "@/lib/tools/types"

export const imageToBase64Tool: Tool = {
  id: "image-to-base64",
  slug: "image-to-base64",
  name: "Image to Base64 Converter",
  description:
    "Convert images (PNG, JPG, GIF, WebP, SVG) to Base64 data URLs for HTML and CSS",
  category: "encoding",
  type: "converter",

  nav: {
    showInHeader: false,
  },

  componentId: "file-to-base64",

  preset: {
    accept: [".png", ".jpg", ".jpeg", ".gif", ".webp", ".svg"],
    label: "Images",
  },

  keywords: [
    "image to base64",
    "convert image to base64",
    "base64 image encoder",
    "png to base64",
    "jpg to base64",
    "image data url",
  ],

  metadata: {
    title: "Image to Base64 Converter - PNG, JPG, GIF, WebP, SVG Online",
    description:
      "Convert images to Base64 data URLs instantly. Support for PNG, JPG, GIF, WebP, and SVG. Perfect for HTML img tags and CSS backgrounds.",
    keywords: [
      "image to base64",
      "convert image to base64",
      "base64 image",
      "png to base64",
      "jpg to base64",
      "svg to base64",
      "image data url",
    ],
  },

  info: {
    description:
      "Convert any image file to a Base64 data URL that can be embedded directly in HTML, CSS, or JSON. This tool supports all common image formats including PNG, JPG, GIF, WebP, and SVG. The output includes the proper MIME type prefix (data:image/png;base64,...) so you can use it immediately in <img> tags, CSS background-image properties, or API payloads without hosting the image separately.",
    howToUse: [
      "Upload an image file (PNG, JPG, GIF, WebP, or SVG)",
      "The tool automatically converts it to a Base64 data URL",
      "Copy the Base64 output",
      "Paste it into your HTML <img src='...'> or CSS background-image",
      "The image displays without needing a separate file",
    ],
    useCases: [
      "Embed images in HTML without external files: <img src='data:image/png;base64,...'>",
      "Inline small icons and logos in CSS for faster loading",
      "Create self-contained HTML email templates with embedded images",
      "Send image data in JSON API requests",
      "Build offline-first web apps with embedded assets",
      "Share HTML prototypes with embedded images",
    ],
    features: [
      "Supports PNG, JPG, GIF, WebP, and SVG formats",
      "Generates valid Base64 data URLs with correct MIME types",
      "Fast browser-based conversion (no server upload)",
      "One-click copy to clipboard",
      "Perfect for HTML, CSS, and JSON embedding",
      "Privacy-first: images never leave your device",
    ],
  },

  faq: [
    {
      question: "What image formats can I convert to Base64?",
      answer:
        "This tool supports PNG, JPG/JPEG, GIF, WebP, and SVG images. All formats are converted to Base64 data URLs with the appropriate MIME type.",
    },
    {
      question: "How do I use a Base64 image in HTML?",
      answer:
        "Use the data URL in an <img> tag: <img src='data:image/png;base64,iVBORw0KG...' alt='description'>. The image displays without needing a separate file.",
    },
    {
      question: "Can I use Base64 images in CSS?",
      answer:
        "Yes! Use it in background-image: url('data:image/png;base64,...'). This is great for small icons and logos that load with your CSS.",
    },
    {
      question: "Should I convert large images to Base64?",
      answer:
        "No. Base64 increases file size by ~33% and can't be cached separately. Use it for small images (under 10KB) like icons. For large images, use regular <img> tags with src URLs.",
    },
    {
      question: "Does Base64 reduce image quality?",
      answer:
        "No. Base64 encoding is lossless and preserves the exact image data. However, the encoded string is larger than the original file.",
    },
    {
      question: "Are my images uploaded to a server?",
      answer:
        "No. All conversion happens locally in your browser. Your images never leave your device, ensuring complete privacy.",
    },
    {
      question: "What's the difference between Base64 and a regular image URL?",
      answer:
        "A regular URL points to a hosted file. A Base64 data URL contains the entire image encoded as text, so it can be embedded directly in HTML/CSS without a separate file.",
    },
    {
      question: "Can I decode a Base64 image back to a file?",
      answer:
        "Yes. You can paste a Base64 data URL into a decoder tool or use browser developer tools to extract and save the original image.",
    },
  ],

  relatedTools: [
    "file-to-base64",
    "png-to-base64",
    "jpg-to-base64",
    "svg-to-base64",
    "pdf-to-base64",
    "base64-encode-decode",
  ],

  ui: {
    inputPlaceholder: "Upload an image file...",
    outputPlaceholder: "Base64 data URL will appear here...",
    inputLabel: "Image Upload",
    outputLabel: "Base64 Data URL",
    convertLabel: "Convert to Base64",
  },
}
