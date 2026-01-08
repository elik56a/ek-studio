import { Tool } from "../types"

export const utilityTools: Tool[] = [
  {
    id: "color-converter",
    slug: "color-converter",
    name: "Color Converter",
    description:
      "Convert colors between HEX, RGB, HSL, and RGBA formats with live preview",
    category: "utility",
    type: "converter",
    keywords: [
      "color",
      "hex",
      "rgb",
      "hsl",
      "rgba",
      "hsla",
      "convert",
      "picker",
    ],
    metadata: {
      title: "Color Converter - Convert HEX, RGB, HSL Colors Online",
      description:
        "Free online color converter. Convert colors between HEX, RGB, HSL, RGBA, and HSLA formats with visual color preview.",
      keywords: [
        "color converter",
        "hex to rgb",
        "rgb to hex",
        "hsl to rgb",
        "color picker",
        "rgba converter",
      ],
    },
    examples: [
      {
        title: "HEX to RGB/HSL",
        input: "#FF5733",
        description: "Convert a HEX color code to RGB and HSL formats",
      },
      {
        title: "RGB to HEX/HSL",
        input: "rgb(52, 152, 219)",
        description: "Convert RGB color values to HEX and HSL",
      },
      {
        title: "HSL to HEX/RGB",
        input: "hsl(120, 100%, 50%)",
        description: "Convert HSL color to HEX and RGB formats",
      },
      {
        title: "Short HEX notation",
        input: "#F80",
        description: "Convert 3-digit HEX shorthand to full formats",
      },
      {
        title: "RGBA with transparency",
        input: "rgba(255, 87, 51, 0.8)",
        description: "Convert RGBA color with alpha channel",
      },
    ],
    faq: [
      {
        question: "What is a color converter tool used for?",
        answer:
          "A color converter helps you convert color values between formats like HEX, RGB, RGBA, HSL, and HSLA. It's commonly used by designers and developers for web design, CSS styling, UI theming, and design system consistency.",
      },
      {
        question: "What color formats does this converter support?",
        answer:
          "This tool supports HEX (#FF5733 or #F80), RGB (rgb(255, 87, 51)), RGBA (rgba(255, 87, 51, 0.8)), HSL (hsl(9, 100%, 60%)), and HSLA (hsla(9, 100%, 60%, 0.8)).",
      },
      {
        question: "How do I convert HEX to RGB or HSL?",
        answer:
          "Simply paste a HEX code (like #FF5733) into the input field. The tool instantly outputs the equivalent RGB, RGBA, HSL, and HSLA values, along with a live preview so you can visually confirm the color.",
      },
      {
        question: "Can I convert 3-digit HEX shorthand (like #F80)?",
        answer:
          "Yes. The tool automatically expands shorthand HEX codes such as #F80 into the full 6-digit HEX format (#FF8800) and converts them into all supported formats.",
      },
      {
        question: "What is the alpha channel in RGBA and HSLA?",
        answer:
          "The alpha channel controls transparency and ranges from 0 (fully transparent) to 1 (fully opaque). For example, rgba(255, 87, 51, 0.5) produces a semi-transparent version of the same color.",
      },
    ],
    relatedTools: ["hash-generator", "base64-encode-decode"],
    ui: {
      inputPlaceholder:
        "Enter color value (e.g., #FF5733, rgb(255, 87, 51), hsl(9, 100%, 60%))...",
      outputPlaceholder: "Converted color values will appear here...",
      inputLabel: "Color Input",
      outputLabel: "Color Output",
      convertLabel: "Convert Color",
    },
  },
  {
    id: "mime-type-lookup",
    slug: "mime-type-lookup",
    name: "MIME Type Lookup",
    description:
      "Find MIME types and content types for file extensions instantly",
    category: "utility",
    type: "converter",
    keywords: ["mime", "type", "extension", "file", "lookup", "content-type"],
    metadata: {
      title: "MIME Type Lookup - Find MIME Types for File Extensions",
      description:
        "Free online MIME type lookup tool. Find MIME types and content types for file extensions with detailed information.",
      keywords: [
        "mime type lookup",
        "file extension",
        "content type",
        "mime database",
        "file type",
      ],
    },
    examples: [
      {
        title: "PDF Document",
        input: ".pdf",
        description: "Look up MIME type for PDF files",
      },
      {
        title: "JPEG Image",
        input: "jpg",
        description: "Find MIME type for JPEG images (without dot)",
      },
      {
        title: "JavaScript File",
        input: ".js",
        description: "Get MIME type for JavaScript files",
      },
      {
        title: "MP4 Video",
        input: ".mp4",
        description: "Look up MIME type for MP4 video files",
      },
      {
        title: "JSON Data",
        input: "json",
        description: "Find MIME type for JSON files",
      },
    ],
    faq: [
      {
        question: "What is a MIME type and why does it matter?",
        answer:
          "A MIME type (Multipurpose Internet Mail Extensions) tells browsers and servers what kind of file is being transferred. It helps determine how the file should be displayed or handled — for example, whether it should open as an image, download as a file, or be interpreted as JSON data.",
      },
      {
        question: "How do I find the MIME type for a file extension?",
        answer:
          "Enter a file extension such as .pdf, png, mp4, or json, and the tool will instantly show the correct MIME type (Content-Type) used in HTTP headers, uploads, and APIs.",
      },
      {
        question: "Do I need to include the dot (.) in the extension?",
        answer:
          "No. You can enter extensions with or without the dot. Both 'pdf' and '.pdf' work and return the same MIME type result.",
      },
      {
        question: "How do I use MIME types in HTTP headers or uploads?",
        answer:
          "MIME types are typically set in the Content-Type header when serving files or sending API requests. For example, PDFs use 'application/pdf' and JSON uses 'application/json'. Correct MIME types prevent file handling issues and improve browser compatibility.",
      },
      {
        question: "What happens if I use the wrong MIME type?",
        answer:
          "Using the wrong MIME type can cause files to break, display incorrectly, or be blocked by browsers. For example, serving JavaScript with the wrong Content-Type can trigger security warnings or prevent scripts from executing properly.",
      },
    ],
    relatedTools: ["hash-generator", "base64-encode-decode", "color-converter"],
    ui: {
      inputPlaceholder: "Enter file extension (e.g., .pdf, jpg, .mp4)...",
      outputPlaceholder: "MIME type information will appear here...",
      inputLabel: "File Extension",
      outputLabel: "MIME Type Information",
      convertLabel: "Lookup",
    },
  },
]
