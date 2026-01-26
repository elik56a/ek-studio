import { Tool } from "@/lib/tools/types"

/**
 * Base64 Encoder/Decoder Tool Configuration
 *
 * Encodes and decodes Base64 + Base64URL (JWT-friendly) with UTF-8 and Binary (Latin1) modes.
 * Includes padding control, auto-detect flow, and practical developer examples/pitfalls.
 * Runs locally in your browser (privacy-friendly).
 */
export const base64EncodeDecodeTool: Tool = {
  id: "base64-encode-decode",
  slug: "base64-encode-decode",
  name: "Base64 Encoder / Decoder",
  description:
    "Encode to Base64 or decode Base64 to text — supports Base64URL (JWT), UTF-8/Latin1, padding toggle, and auto-detect.",
  category: "encoding",
  type: "converter",

  keywords: [
    "base64 encoder",
    "base64 decoder",
    "base64 encode",
    "base64 decode",
    "base64 encode online",
    "base64 decode online",
    "base64url",
    "base64url encoder",
    "base64url decoder",
    "jwt base64",
    "jwt base64url",
    "decode jwt base64",
    "base64 padding",
    "base64 without padding",
    "utf8 base64",
    "latin1 base64",
    "atob btoa",
    "encode string to base64",
    "decode base64 to text",
  ],

  metadata: {
    title: "Base64 Encoder & Decoder (Base64URL / JWT, UTF-8, Padding Control)",
    description:
      "Encode or decode Base64 instantly. Supports Base64URL (JWT), UTF-8 & Binary (Latin1), and optional padding removal. Runs locally in your browser — no uploads.",
    keywords: [
      "base64 encoder",
      "base64 decoder",
      "base64url",
      "jwt base64url",
      "base64 padding",
      "decode base64 to text",
      "encode to base64",
      "utf8 base64",
      "atob btoa",
    ],
  },

  info: {
    description:
      "Base64 Encoder / Decoder is a developer tool for converting between plain text and Base64, plus Base64URL (the URL-safe variant used by JWT). Base64 represents binary data as ASCII text so it can safely pass through text-only channels like JSON, HTTP headers, query strings, environment variables, and configuration files. This tool supports UTF-8 (recommended for Unicode like Hebrew/emoji) and Binary (Latin1) for legacy `atob`/`btoa` compatibility. You can also control padding (`=`) because some ecosystems require it, while JWT/Base64URL often omits it. Use it to debug encoded API fields, inspect JWT segments, validate whether a string is Base64, and generate safe encoded values for apps and scripts—entirely in your browser.",
    howToUse: [
      "Paste plain text to encode or a Base64/Base64URL string to decode",
      "Auto-detect chooses Encoding vs Decoding (you can override by swapping if needed)",
      "Select UTF-8 for modern text (recommended) or Binary (Latin1) for legacy compatibility",
      "Enable Base64URL (JWT) when working with URL-safe tokens (uses - and _ instead of + and /)",
      "Toggle “Without padding” if your target system expects no '=' padding (common for Base64URL/JWT segments)",
      "Copy the output and use it in headers, payloads, configs, tests, or scripts",
    ],
    useCases: [
      "Decode Base64 fields from API responses, logs, and database records",
      "Encode JSON or config blobs for environment variables (single-line transport)",
      "Decode JWT header/payload segments (Base64URL) for debugging auth issues",
      "Generate URL-safe identifiers for query params or filenames (Base64URL mode)",
      "Create HTTP Basic Auth values (Base64 of username:password)",
      "Validate whether an input is valid Base64/Base64URL before parsing in code",
      "Troubleshoot broken Unicode output by switching UTF-8 vs Binary mode",
      "Prepare Base64 test fixtures for unit/integration tests",
    ],
    features: [
      "All-in-one Base64 encode + decode: One tool for both directions",
      "Base64URL (JWT) mode: URL-safe alphabet (- and _) for tokens and URLs",
      "Padding control: Keep '=' for strict decoders or remove it for JWT/Base64URL use",
      "UTF-8 support: Correct handling for Unicode text (Hebrew, emoji, accents)",
      "Binary (Latin1) mode: Matches legacy `atob`/`btoa` expectations when needed",
      "Auto-detect workflow: Paste anything and the tool chooses the likely direction",
      "Fast local processing: Runs in-browser (no uploads), great for sensitive data",
      "Copy-friendly output + examples: Designed for day-to-day dev debugging",
    ],
  },

  examples: [
    {
      title: "Encode simple text → Base64",
      input: "Hello, World!",
      description: "Convert plain text into Base64 for safe transport.",
    },
    {
      title: "Decode Base64 → text",
      input: "SGVsbG8sIFdvcmxkIQ==",
      description: "Decode a standard Base64 string back into readable text.",
    },
    {
      title: "Encode Unicode text (UTF-8)",
      input: "שלום 👋 — café",
      description:
        "UTF-8 preserves Unicode characters correctly (Hebrew/emoji/accents).",
    },
    {
      title: "Encode JSON for APIs/configs",
      input: '{"env":"prod","flags":{"newUI":true},"region":"eu-west-1"}',
      description:
        "Encode a JSON string for env vars, config fields, or text-only systems.",
    },
    {
      title: "HTTP Basic Auth credential (username:password)",
      input: "username:password",
      description:
        "Encode `username:password` for the Authorization header (prefix with `Basic `).",
    },
    {
      title: "Decode a JWT header segment (Base64URL)",
      input: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
      description:
        "Decode a JWT header segment. Enable Base64URL mode if needed (JWT uses Base64URL).",
    },
    {
      title: "Decode a JWT payload segment (Base64URL)",
      input: "eyJzdWIiOiJ1c2VyXzEyMyIsInNjb3BlIjoicmVhZDp1c2VycyJ9",
      description:
        "Inspect JWT claims quickly by decoding the payload segment (Base64URL).",
    },
    {
      title: "URL-safe token (Base64URL + optional no padding)",
      input: "user:12345|role:admin|ts:1700000000",
      description:
        "Enable Base64URL (and optionally remove padding) for URL-safe tokens.",
    },
    {
      title: "Multiline value (store as single line)",
      input: "-----BEGIN KEY-----\nline1\nline2\n-----END KEY-----",
      description:
        "Base64 is useful for storing multiline values as a single-line string in env vars.",
    },
    {
      title: "Detect invalid Base64 quickly (bad characters)",
      input: "SGVsbG8$IFdvcmxkIQ==",
      description:
        "Validation should fail when illegal Base64 characters appear (like '$').",
    },
  ],

  faq: [
    {
      question: "Is Base64 encryption? Is it secure?",
      answer:
        "No. Base64 is encoding, not encryption. Anyone can decode it. Do not use Base64 to protect secrets or sensitive data.",
    },
    {
      question: "What is Base64 used for?",
      answer:
        "Base64 is used to represent data as plain text so it can be transported in text-only systems like JSON, HTTP headers, URLs (with Base64URL), email, logs, and config files.",
    },
    {
      question: "What is Base64URL and why is it used in JWT?",
      answer:
        "Base64URL is a URL-safe variant that replaces '+' and '/' with '-' and '_' and often omits '=' padding. JWT uses Base64URL for its header and payload segments.",
    },
    {
      question: "Why does Base64 output sometimes end with '=' or '=='?",
      answer:
        "That’s padding. It makes the output length a multiple of 4. Some decoders require padding; many Base64URL/JWT contexts omit it. This tool lets you keep or remove it.",
    },
    {
      question: "Why does Base64 increase size by about 33%?",
      answer:
        "Base64 encodes 3 bytes of data into 4 characters. The overhead is the cost of making binary/text safe to transport in ASCII-friendly systems.",
    },
    {
      question: "What’s the difference between UTF-8 and Binary (Latin1) mode?",
      answer:
        "UTF-8 supports full Unicode (recommended). Binary/Latin1 matches older `atob`/`btoa` behavior and may be needed for legacy inputs that aren’t true UTF-8 text.",
    },
    {
      question: "Why does decoded output look corrupted or show � characters?",
      answer:
        "Usually the encoder/decoder disagrees on character encoding. Try UTF-8 for normal text. Use Binary/Latin1 only for legacy or non-text bytes.",
    },
    {
      question: "How do I know if a string is valid Base64?",
      answer:
        "Valid Base64 uses only A–Z, a–z, 0–9, +, / and optional '=' padding. Base64URL uses - and _. This tool helps detect invalid characters and structure quickly.",
    },
    {
      question: "Can I Base64-encode a file here?",
      answer:
        "This tool is focused on text. For files (images, PDFs), use a dedicated File → Base64 converter to avoid memory/size issues and get correct binary handling.",
    },
    {
      question: "When should I avoid Base64?",
      answer:
        "Avoid Base64 for large files (it increases size) and never rely on it for security. If you need confidentiality, encrypt first and Base64-encode the ciphertext only for transport if needed.",
    },
  ],

  relatedTools: [
    // Key variants (popular conversions)
    "base64-encode",
    "base64-decode",
    "base64url-encode",
    "base64url-decode",
    "text-to-base64",
    "base64-to-text",
    // Then other related tools
    "url-encode-decode",
    "html-escape-unescape",
    "jwt-decoder",
    "json-formatter",
  ],

  ui: {
    inputPlaceholder: "Enter text to encode or Base64/Base64URL to decode...",
    outputPlaceholder: "Result will appear here...",
    inputLabel: "Input",
    outputLabel: "Output",
    convertLabel: "Encode/Decode",
    showSwapButton: true,
    relatedToolsTitle: "Popular conversions",
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
