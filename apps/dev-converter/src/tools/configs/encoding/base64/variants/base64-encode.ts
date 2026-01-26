import { Tool } from "@/lib/tools/types"

export const base64EncodeTool: Tool = {
  id: "base64-encode",
  slug: "base64-encode",
  name: "Base64 Encode",
  description:
    "Encode text to Base64 instantly (UTF-8). Create Base64 strings for APIs, configs, Basic Auth, and safe text transport — locally in your browser.",
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
    "base64 encoder",
    "encode to base64",
    "text to base64",
    "string to base64",
    "utf8 to base64",
    "base64 encode online",
    "base64 encode json",
    "base64 encode credentials",
    "basic auth base64",
    "base64 padding",
    "base64url vs base64",
    "base64 for api",
  ],

  metadata: {
    title: "Base64 Encode Online (UTF-8) — Text to Base64 Converter",
    description:
      "Encode text to Base64 online (runs locally). UTF-8 support, standard Base64 with optional padding. Perfect for APIs, JSON, configs, and HTTP Basic Auth.",
    keywords: [
      "base64 encode",
      "encode to base64",
      "text to base64",
      "base64 encoder online",
      "utf8 base64",
      "base64 encode json",
      "basic auth base64",
      "base64 padding",
      "base64url",
    ],
  },

  info: {
    description:
      "Base64 Encode converts text into Base64 (a text-safe representation of binary data). It’s commonly used when you need to pass data through systems that expect plain text only—like HTTP headers, JSON payloads, query parameters, environment variables, email bodies, or configuration files. This tool encodes using UTF-8 by default, so Unicode characters (emoji, Hebrew/Arabic, accented letters) are preserved correctly. It’s ideal for developer workflows: quickly create Base64 strings for Basic Auth, embed small assets as data, or debug encoded payloads. Everything runs locally in your browser—no uploads and no server processing.",
    howToUse: [
      "Paste or type the text you want to encode (plain text, JSON, XML, etc.)",
      "The tool encodes automatically to Base64 using UTF-8",
      "Copy the Base64 output for use in headers, configs, or API payloads",
      "If you need URL-safe output, use the Base64URL tool (or enable URL-safe mode if available)",
      "If another system expects padding, keep '=' padding enabled (default)",
    ],
    useCases: [
      "Create HTTP Basic Auth credentials (base64(username:password))",
      "Encode JSON snippets or config values for environment variables",
      "Send binary-ish data through text-only channels (headers, JSON, logs)",
      "Generate Base64 for small data URIs or inline payloads in demos",
      "Debug API requests/responses that include Base64 fields",
      "Safely transport Unicode text through systems that mishandle non-ASCII",
      "Prepare test fixtures for unit tests that require Base64 inputs",
    ],
    features: [
      "UTF-8 Base64 encoding: Preserves Unicode characters correctly",
      "Standard Base64 output: Compatible with most APIs and libraries",
      "Padding support: Keeps '=' padding for strict decoders (default)",
      "Fast, local processing: Runs in your browser (no uploads)",
      "Copy-ready output: Great for headers, env vars, and payloads",
      "Auto-detect UX: Helps switch between encode/decode flows quickly",
      "Practical examples: Common developer scenarios included",
    ],
  },

  faq: [
    {
      question: "What is Base64 encoding?",
      answer:
        "Base64 encoding turns data into a text-safe string using a 64-character alphabet (A–Z, a–z, 0–9, +, /) plus optional '=' padding. It’s used to transport data through systems that expect text.",
    },
    {
      question: "Is Base64 encryption? Is it secure?",
      answer:
        "No. Base64 is not encryption—it's just encoding. Anyone can decode it. Never use Base64 alone to protect secrets, tokens, or personal data.",
    },
    {
      question: "Why does Base64 increase size by ~33%?",
      answer:
        "Base64 represents 3 bytes using 4 characters, which adds overhead. The tradeoff is that the result is safe to transmit as plain text.",
    },
    {
      question: "What’s the difference between Base64 and Base64URL?",
      answer:
        "Base64URL swaps '+' and '/' for '-' and '_' so it can be safely used in URLs and JWTs without escaping. Use Base64URL for tokens, URLs, and web-safe contexts.",
    },
    {
      question: "What is Base64 padding (=) and do I need it?",
      answer:
        "Padding '=' is added so the output length is a multiple of 4. Many decoders expect it (especially older or strict ones). Some systems omit padding (common in Base64URL).",
    },
    {
      question: "How do I Base64 encode a string in JavaScript?",
      answer:
        "In browsers you can use btoa for ASCII-only data. For UTF-8/Unicode, use TextEncoder + base64 conversion. This tool handles UTF-8 safely for you.",
    },
    {
      question: "How do I Base64 encode in Node.js?",
      answer:
        "Use Buffer.from(text, 'utf8').toString('base64'). This tool is handy when you want a quick UI and copy/paste output.",
    },
    {
      question: "Can I Base64 encode JSON?",
      answer:
        "Yes. Encode the JSON string (e.g., '{\"a\":1}') to Base64. It’s common for passing structured values through env vars or text fields.",
    },
    {
      question: "Why does my decoded text look broken or like � characters?",
      answer:
        "That usually happens when the encoder/decoder disagrees on character encoding. Use UTF-8 consistently (this tool encodes as UTF-8 by default).",
    },
    {
      question: "When should I NOT use Base64?",
      answer:
        "Avoid Base64 for large files (size overhead) or for security. If you need secrecy, use encryption (AES/GCM etc.) and only then Base64 the ciphertext for transport if needed.",
    },
  ],

  examples: [
    {
      title: "Encode simple text",
      input: "Hello, World!",
      description: "Convert plain ASCII text to Base64.",
    },
    {
      title: "Encode Unicode text (UTF-8)",
      input: "שלום 👋 — café",
      description:
        "UTF-8 encoding preserves Unicode characters (Hebrew, emoji, accents).",
    },
    {
      title: "Encode JSON for a config/env var",
      input: '{"env":"prod","featureFlags":{"newUI":true},"region":"eu-west-1"}',
      description:
        "Encode JSON strings for safe transport in environment variables or text-only systems.",
    },
    {
      title: "HTTP Basic Auth credentials",
      input: "username:password",
      description:
        "Encode 'username:password' for Basic Auth (you’ll prepend 'Basic ' to the result in the header).",
    },
    {
      title: "Encode a JWT-like JSON claims payload (for testing)",
      input: '{"sub":"user_123","scope":"read:users write:users","iat":1700000000}',
      description:
        "Useful for tests/demos where systems expect Base64 strings (not a real JWT signature).",
    },
    {
      title: "Encode a multiline value (cert/key snippet example)",
      input: "-----BEGIN KEY-----\nline1\nline2\n-----END KEY-----",
      description:
        "Base64 can help store multiline values as a single-line string in env vars/configs.",
    },
    {
      title: "Encode a URL-safe-ish payload (use Base64URL for real URLs)",
      input: '{"redirect":"https://example.com/callback?x=1&y=2"}',
      description:
        "Base64 helps bundle complex strings, but prefer Base64URL when putting it in URLs.",
    },
    {
      title: "Encode XML / SOAP payload fragment",
      input: "<user><id>123</id><role>admin</role></user>",
      description: "Encode non-JSON text formats for safe transport.",
    },
  ],

  relatedTools: [
    "base64-encode-decode",
    "base64-decode",
    "base64url-encode",
    "base64url-decode",
    "text-to-base64",
    "url-encode-decode",
    "html-escape-unescape",
    "json-formatter",
    "jwt-decoder",
  ],

  ui: {
    inputPlaceholder:
      'Enter text to encode… e.g. {"name":"Alice","role":"admin"}',
    outputPlaceholder: "Base64 encoded result will appear here…",
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
