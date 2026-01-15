import { Tool } from "../types"

export const utilityTools: Tool[] = [
  {
    id: "color-converter",
    slug: "color-converter",
    name: "Color Converter",
    description:
      "Convert HEX, RGB, RGBA, HSL, and HSLA colors instantly with a live preview — perfect for CSS, design systems, and UI theming",
    category: "utility",
    type: "converter",
    keywords: [
      "color converter",
      "hex to rgb",
      "rgb to hex",
      "hex to hsl",
      "hsl to hex",
      "rgba to hex",
      "hsla converter",
      "css color converter",
      "color picker",
    ],
    metadata: {
      title: "Color Converter: HEX to RGB, HSL, RGBA (Live Preview)",
      description:
        "Convert HEX, RGB/RGBA, and HSL/HSLA color values with live preview. Auto-detects input, supports alpha, and expands short HEX (#F80).",
      keywords: [
        "color converter",
        "hex to rgb",
        "rgb to hex",
        "hsl to rgb",
        "hex to hsl",
        "rgba converter",
        "color picker online",
      ],
    },
    info: {
      description:
        "Color Converter is a developer-friendly tool for converting CSS color values between HEX, RGB, RGBA, HSL, and HSLA. Different workflows prefer different formats: HEX is common in design tools and CSS variables, RGB/RGBA is great for programmatic styling and transparency, and HSL/HSLA makes it easier to tweak hue, saturation, and lightness for theme systems. Paste any supported format and this tool auto-detects it, outputs every equivalent format, and shows a live preview so you can confirm the color visually before copying it into CSS, Tailwind configs, or design tokens.",
      howToUse: [
        "Paste a color value (HEX, RGB, RGBA, HSL, or HSLA) into the input",
        "The converter detects the format automatically",
        "View equivalent values in HEX, RGB/RGBA, and HSL/HSLA instantly",
        "Use the live preview to confirm the result",
        "Copy the format you need for CSS, design tokens, or component themes",
      ],
      useCases: [
        "Convert HEX to RGB for CSS functions like rgb() and rgba()",
        "Convert RGB to HEX for design tools and CSS variables",
        "Convert HSL/HSLA for theme manipulation (adjust lightness/saturation)",
        "Work with alpha transparency using RGBA/HSLA values",
        "Create consistent design tokens between Figma and code",
        "Validate colors in Tailwind config, CSS-in-JS, or component libraries",
      ],
      features: [
        "Converts HEX, RGB, RGBA, HSL, and HSLA accurately",
        "Live color preview for quick visual verification",
        "Auto-detects input format (paste anything supported)",
        "Supports short HEX (e.g., #F80 → #FF8800)",
        "Preserves alpha channel for RGBA/HSLA transparency",
        "Runs locally in your browser (no uploads)",
      ],
    },
    examples: [
      {
        title: "HEX → RGB / HSL",
        input: "#FF5733",
        description: "Convert a HEX color to RGB and HSL equivalents",
      },
      {
        title: "RGB → HEX / HSL",
        input: "rgb(52, 152, 219)",
        description: "Convert rgb() values into HEX and HSL for CSS tokens",
      },
      {
        title: "HSL → HEX / RGB",
        input: "hsl(120, 100%, 50%)",
        description: "Convert hsl() to HEX and RGB for cross-tool compatibility",
      },
      {
        title: "Short HEX notation",
        input: "#F80",
        description: "Expand shorthand HEX and convert to all formats",
      },
      {
        title: "RGBA with alpha",
        input: "rgba(255, 87, 51, 0.8)",
        description: "Convert RGBA while preserving transparency",
      },
    ],
    faq: [
      {
        question: "What color formats can I convert with this tool?",
        answer:
          "You can convert between HEX (#FF5733 / #F80), RGB, RGBA, HSL, and HSLA. The tool outputs all equivalents at once.",
      },
      {
        question: "How do I convert HEX to RGB?",
        answer:
          "Paste a HEX value like #FF5733 and the converter will output rgb(255, 87, 51) along with other formats and a live preview.",
      },
      {
        question: "Can I convert short HEX like #F80?",
        answer:
          "Yes. Short HEX is expanded automatically (for example, #F80 becomes #FF8800) and then converted to RGB/HSL variants.",
      },
      {
        question: "What is alpha in RGBA and HSLA?",
        answer:
          "Alpha controls transparency from 0 (transparent) to 1 (opaque). RGBA and HSLA include alpha so you can build overlays and semi-transparent UI elements.",
      },
      {
        question: "Why use HSL instead of RGB?",
        answer:
          "HSL is easier for theme adjustments because you can tweak hue, saturation, and lightness independently (useful for dark mode and design systems).",
      },
      {
        question: "Is the conversion done on a server?",
        answer:
          "No. All conversion runs locally in your browser, so your input isn’t uploaded.",
      },
    ],
    relatedTools: [
      "hash-generator",
      "base64-encode-decode",
      "mime-type-lookup",
      "uuid-generator",
      "json-formatter",
      "url-encode-decode",
    ],
    ui: {
      inputPlaceholder:
        "Enter a color (e.g., #FF5733, #F80, rgb(255, 87, 51), hsl(9, 100%, 60%))...",
      outputPlaceholder: "Converted color values will appear here...",
      inputLabel: "Color Input",
      outputLabel: "Converted Values",
      convertLabel: "Convert Color",
    },
  },

  {
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
  },
]
