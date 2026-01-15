import { Tool } from "@/lib/tools/types"

/**
 * Base64 Encoder/Decoder Tool Configuration
 *
 * Provides encoding and decoding functionality for Base64 and Base64URL formats.
 * Supports UTF-8 and Binary (Latin1) character encodings with optional padding control.
 * Commonly used for JWT token inspection, API payloads, and HTTP Basic Auth.
 */
export const base64EncodeDecodeTool: Tool = {
  id: "base64-encode-decode",
  slug: "base64-encode-decode",
  name: "Base64 Encoder / Decoder",
  description:
    "Encode text to Base64 or decode Base64 to text — includes Base64URL (JWT) mode and padding control",
  category: "encoding",
  type: "converter",
  keywords: [
    "base64 encoder",
    "base64 decoder",
    "base64url",
    "jwt base64",
    "encode base64",
    "decode base64",
  ],
  metadata: {
    title: "Base64 Encoder & Decoder (Base64URL / JWT)",
    description:
      "Encode to Base64 or decode Base64 instantly. Supports Base64URL (JWT), UTF-8, and optional padding removal. Works locally in your browser.",
    keywords: [
      "base64 encoder",
      "base64 decoder",
      "base64url",
      "jwt base64url",
      "encode base64 online",
      "decode base64 online",
    ],
  },
  info: {
    description:
      "This Base64 Encoder & Decoder converts text into Base64 and decodes Base64 back into readable text. Base64 is used to safely transmit data through text-only systems (HTTP headers, JSON, emails, config files). It also supports Base64URL for JWTs, which replaces + and / with URL-safe characters (- and _) and commonly omits padding (=). Use this tool to debug tokens, inspect encoded payloads, and quickly create Base64/Base64URL strings for APIs.",
    howToUse: [
      "Paste text to encode or a Base64/Base64URL string to decode",
      "The tool auto-detects encoding vs decoding",
      "Choose UTF-8 (recommended) or Binary (Latin1) if needed",
      "Enable Base64URL (JWT) for URL-safe encoding/decoding",
      "Optionally toggle 'Without padding' to remove = characters",
      "Copy the output for use in headers, tokens, or payloads",
    ],
    useCases: [
      "Decode Base64 values from API responses and logs",
      "Create Base64 strings for HTTP headers and JSON fields",
      "Use Base64URL mode to debug JWT header/payload segments",
      "Generate URL-safe tokens for query parameters and filenames",
      "Encode credentials for HTTP Basic Auth (username:password)",
      "Validate whether a value is valid Base64 before processing",
    ],
    features: [
      "Encode Base64 and decode Base64 in one tool",
      "Base64URL (JWT-compatible) toggle",
      "Padding control (keep or remove =)",
      "UTF-8 by default for correct Unicode handling",
      "Binary (Latin1) mode for legacy atob/btoa compatibility",
      "Auto-detection for smoother workflows",
      "Instant conversion and one-click copy",
      "Runs locally in your browser (privacy-friendly)",
    ],
  },
  examples: [
    {
      title: "Encode text to Base64",
      input: "Hello, World!",
      description: "Convert plain text into Base64",
    },
    {
      title: "Decode Base64 to text",
      input: "SGVsbG8sIFdvcmxkIQ==",
      description: "Convert Base64 back into readable text",
    },
    {
      title: "Encode JSON",
      input: '{"name":"John","age":30}',
      description: "Encode a JSON string for transport or storage",
    },
    {
      title: "Decode JWT Base64URL segment",
      input: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
      description:
        "Decode a JWT header segment (enable Base64URL mode if needed)",
    },
    {
      title: "Encode URL-safe token",
      input: "user:12345|role:admin",
      description:
        "Encode a token for URLs (enable Base64URL mode and optional no-padding)",
    },
  ],
  faq: [
    {
      question: "Is Base64 encryption?",
      answer:
        "No. Base64 is encoding, not encryption. Anyone can decode it. Never use Base64 to protect secrets.",
    },
    {
      question: "What is Base64URL and why is it used in JWT?",
      answer:
        "Base64URL is a URL-safe Base64 variant used by JWT. It uses - and _ instead of + and / and often omits padding, making it safe in URLs and headers.",
    },
    {
      question: "How do I decode Base64 online?",
      answer:
        "Paste the Base64 (or Base64URL) string and the tool will detect it and decode it instantly. Enable Base64URL for JWT-style strings.",
    },
    {
      question: "Why does Base64 output sometimes include '='?",
      answer:
        "That is padding. Some systems require it, while others (like many JWT uses) omit it. This tool lets you keep or remove padding.",
    },
    {
      question: "Why does Base64 make data bigger?",
      answer:
        "Base64 represents binary data using text characters, which increases size (often ~33%). It's about transport compatibility, not compression.",
    },
    {
      question: "What's the difference between UTF-8 and Binary mode?",
      answer:
        "UTF-8 supports full Unicode (recommended). Binary (Latin1) matches older atob/btoa behavior for legacy inputs.",
    },
  ],
  relatedTools: [
    "url-encode-decode",
    "html-escape-unescape",
    "file-to-base64",
    "json-escape-unescape",
    "jwt-decoder",
    "json-formatter",
  ],
  ui: {
    inputPlaceholder: "Enter text to encode or Base64 to decode...",
    outputPlaceholder: "Result will appear here...",
    inputLabel: "Input",
    outputLabel: "Output",
    convertLabel: "Encode/Decode",
    showSwapButton: true,
    autoDetect: {
      enabled: true,
      emptyLabel: "paste text or Base64",
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
