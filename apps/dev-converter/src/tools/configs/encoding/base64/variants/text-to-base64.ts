import { Tool } from "@/lib/tools/types"

export const textToBase64Tool: Tool = {
  id: "text-to-base64",
  slug: "text-to-base64",
  name: "Text to Base64",
  description: "Convert plain text to Base64 encoding instantly",
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
    "text to base64",
    "convert text to base64",
    "string to base64",
    "encode text",
    "text encoder",
  ],

  metadata: {
    title: "Text to Base64 Converter - Encode Text to Base64 Online",
    description:
      "Convert plain text to Base64 encoding instantly. Free online text to Base64 converter with UTF-8 support.",
    keywords: [
      "text to base64",
      "convert text to base64",
      "string to base64",
      "text encoder",
    ],
  },

  info: {
    description:
      "Convert plain text strings to Base64 encoding for safe transmission and storage. This tool encodes any text input into Base64 format, making it suitable for HTTP headers, JSON payloads, configuration files, and data transmission. Uses UTF-8 encoding by default to properly handle Unicode characters, emojis, and international text.",
    howToUse: [
      "Type or paste your plain text",
      "The tool converts it to Base64 instantly",
      "Copy the Base64-encoded result",
      "Use the encoded string in your application",
    ],
    useCases: [
      "Encode text for HTTP Authorization headers",
      "Convert strings for JSON data transmission",
      "Encode configuration values and secrets",
      "Prepare text for email transmission",
      "Create Base64 strings for API requests",
    ],
    features: [
      "Instant text to Base64 conversion",
      "Full UTF-8 Unicode support",
      "Handles emojis and special characters",
      "Standard Base64 format with padding",
      "One-click copy to clipboard",
    ],
  },

  faq: [
    {
      question: "How do I convert text to Base64?",
      answer:
        "Simply paste or type your text and the tool will automatically convert it to Base64 format. The result can be copied and used in your application.",
    },
    {
      question: "Can I encode special characters and emojis?",
      answer:
        "Yes. This tool uses UTF-8 encoding which supports all Unicode characters including emojis, accented letters, and characters from any language.",
    },
    {
      question:
        "What's the difference between text to Base64 and Base64 encode?",
      answer:
        "They're the same thing. 'Text to Base64' is just a more search-friendly way to describe Base64 encoding.",
    },
    {
      question: "Will my encoded text be secure?",
      answer:
        "No. Base64 is encoding, not encryption. Anyone can decode Base64 strings. Never use Base64 alone to protect sensitive information.",
    },
    {
      question: "Why is my Base64 output longer than my input?",
      answer:
        "Base64 encoding increases data size by about 33% because it represents binary data using only printable ASCII characters.",
    },
  ],

  examples: [
    {
      title: "Convert text to Base64",
      input: "Hello, World!",
      description: "Convert plain text to Base64 encoding",
    },
    {
      title: "Convert JSON to Base64",
      input: '{"name":"John","age":30}',
      description: "Encode JSON data as Base64",
    },
    {
      title: "Convert credentials to Base64",
      input: "username:password",
      description: "Encode credentials for HTTP Basic Auth",
    },
  ],

  relatedTools: [
    "base64-encode-decode",
    "base64-to-text",
    "base64-encode",
    "text-to-base64url",
    "url-encode-decode",
    "html-escape-unescape",
  ],

  ui: {
    inputPlaceholder: "Enter text to convert...",
    outputPlaceholder: "Base64 result will appear here...",
    inputLabel: "Text (Plain)",
    outputLabel: "Base64 (Encoded)",
    convertLabel: "Convert to Base64",
    showSwapButton: true,
    autoDetect: {
      enabled: true,
      emptyLabel: "paste text to convert",
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
