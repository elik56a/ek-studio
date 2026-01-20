import { Tool } from "@/lib/tools/types"

export const base64EncodeTool: Tool = {
  id: "base64-encode",
  slug: "base64-encode",
  name: "Base64 Encode",
  description: "Encode text to Base64 format instantly with UTF-8 support",
  category: "encoding",
  type: "converter",

  nav: {
    showInHeader: false,
  },

  componentId: "base64-encode-decode",

  preset: {
    direction: "encode",
    urlSafe: false,
    noPadding: false,
    encoding: "utf8",
  },

  keywords: [
    "base64 encode",
    "encode to base64",
    "text to base64",
    "base64 encoder",
    "convert to base64",
  ],

  metadata: {
    title: "Base64 Encode - Convert Text to Base64 Online",
    description:
      "Encode text to Base64 format instantly. Free online Base64 encoder with UTF-8 support for encoding strings, JSON, and data.",
    keywords: [
      "base64 encode",
      "encode to base64",
      "text to base64",
      "base64 encoder",
    ],
  },

  info: {
    description:
      "Encode text and data to Base64 format for safe transmission through text-only systems. Base64 encoding converts binary data into ASCII text, making it suitable for HTTP headers, JSON payloads, email attachments, and configuration files. This tool uses UTF-8 encoding by default for proper Unicode character support.",
    howToUse: [
      "Paste or type the text you want to encode",
      "The tool automatically encodes to Base64",
      "Copy the Base64-encoded output",
      "Use the encoded string in your application",
    ],
    useCases: [
      "Encode data for HTTP headers and API requests",
      "Create Base64 strings for JSON payloads",
      "Encode credentials for HTTP Basic Authentication",
      "Prepare data for email transmission",
      "Encode configuration values",
    ],
    features: [
      "Instant Base64 encoding",
      "UTF-8 character encoding support",
      "Standard Base64 format with padding",
      "One-click copy to clipboard",
      "Works offline in your browser",
    ],
  },

  faq: [
    {
      question: "What is Base64 encoding?",
      answer:
        "Base64 encoding converts binary data into ASCII text using 64 printable characters (A-Z, a-z, 0-9, +, /). It's commonly used to transmit data through text-only systems.",
    },
    {
      question: "When should I use Base64 encoding?",
      answer:
        "Use Base64 when you need to transmit binary data through text-only channels like HTTP headers, JSON, XML, or email. It's also used for embedding images in CSS/HTML and storing binary data in databases.",
    },
    {
      question: "Does Base64 encoding encrypt my data?",
      answer:
        "No. Base64 is encoding, not encryption. Anyone can decode Base64 strings. Never use Base64 alone to protect sensitive information.",
    },
    {
      question: "Why does Base64 make my data larger?",
      answer:
        "Base64 increases data size by approximately 33% because it represents 3 bytes of data using 4 ASCII characters. This overhead is the cost of text-safe transmission.",
    },
    {
      question: "What's the difference between Base64 and Base64URL?",
      answer:
        "Base64URL replaces + and / with - and _ to make the output URL-safe. It's commonly used in JWTs and URLs where + and / would cause issues.",
    },
  ],

  examples: [
    {
      title: "Encode simple text",
      input: "Hello, World!",
      description: "Convert plain text to Base64",
    },
    {
      title: "Encode JSON data",
      input: '{"name":"John","age":30}',
      description: "Encode JSON for API transmission",
    },
    {
      title: "Encode credentials",
      input: "username:password",
      description: "Encode credentials for HTTP Basic Auth",
    },
  ],

  relatedTools: [
    "base64-encode-decode",
    "base64-decode",
    "base64url-encode",
    "text-to-base64",
    "url-encode-decode",
    "jwt-decoder",
  ],

  ui: {
    inputPlaceholder: "Enter text to encode...",
    outputPlaceholder: "Base64 encoded result will appear here...",
    inputLabel: "Text (Plain)",
    outputLabel: "Base64 (Encoded)",
    convertLabel: "Encode to Base64",
    showSwapButton: true,
    autoDetect: {
      enabled: true,
      emptyLabel: "paste text to encode",
      labels: {
        detected: "Base64 → Decoding",
        plain: "Plain text → Encoding",
      },
      inputLabels: {
        detected: "Base64 (Encoded)",
        plain: "Text (Plain)",
      },
      outputLabels: {
        detected: "Text (Decoded)",
        plain: "Base64 (Encoded)",
      },
    },
  },
}
