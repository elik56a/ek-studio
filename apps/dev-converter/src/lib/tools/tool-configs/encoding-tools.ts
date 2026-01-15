import { Tool } from "../types"

export const encodingTools: Tool[] = [
  {
    id: "file-to-base64",
    slug: "file-to-base64",
    name: "File to Base64 Converter",
    description:
      "Convert files to Base64 data URLs for HTML, CSS, JSON, and APIs — locally in your browser",
    category: "encoding",
    type: "converter",
    keywords: [
      "file to base64",
      "image to base64",
      "base64 data url",
      "data uri",
      "embed image",
      "convert file to base64",
    ],
    metadata: {
      title: "File to Base64 Converter (Data URL) Online",
      description:
        "Convert files to Base64 data URLs (data:...) for HTML/CSS/JSON. Supports PNG, JPG, GIF, WebP, SVG and more. Runs locally, no upload.",
      keywords: [
        "file to base64",
        "image to base64",
        "base64 data url",
        "data uri converter",
        "png to base64",
        "jpg to base64",
        "svg to base64",
      ],
    },
    info: {
      description:
        "This File to Base64 Converter turns any file (images, icons, documents, and more) into a Base64 data URL you can paste directly into HTML, CSS, or JSON. Base64 encoding converts binary bytes into text so you can embed files inline without hosting them separately. The output includes the correct MIME type prefix (for example, data:image/png;base64,...) so it works immediately in <img src>, CSS background-image, email templates, and API payloads.",
      howToUse: [
        "Upload a file (PNG, JPG, GIF, WebP, SVG, PDF, etc.)",
        "The tool generates a Base64 data URL automatically",
        "Copy the Base64 output",
        "Paste it into HTML, CSS, JSON, or an API request",
        "Optional: Use it as <img src='data:...'> or CSS background-image: url('data:...')",
      ],
      useCases: [
        "Embed images in HTML: Use Base64 in <img src='data:...'> without a hosted file",
        "Inline icons in CSS: Add Base64 images to background-image for small assets",
        "Email templates: Inline images when external assets might be blocked",
        "API payloads: Send file data inside JSON when required by a service",
        "Offline/PWA assets: Embed small resources to reduce dependency on network requests",
        "Rapid prototyping: Share self-contained HTML snippets that include images",
      ],
      features: [
        "Outputs a valid Base64 data URL with the correct MIME type",
        "Supports common image formats (PNG, JPG, GIF, WebP, SVG) and other files",
        "Fast conversion in your browser (no upload to a server)",
        "One-click copy to clipboard",
        "Great for HTML, CSS, JSON, Markdown, and API debugging",
        "Privacy-first: your file stays on your device",
      ],
    },
    faq: [
      {
        question: "What is a Base64 data URL (data URI)?",
        answer:
          "A Base64 data URL is an inline URL that contains the file content encoded as text (Base64) plus a MIME type, like data:image/png;base64,... It can be pasted anywhere a URL is accepted.",
      },
      {
        question: "When should I use File to Base64 conversion?",
        answer:
          "Use Base64 data URLs for small assets like icons and small images, email templates, and quick prototypes. Avoid large files because Base64 increases size and can slow loading.",
      },
      {
        question: "Which file types are supported?",
        answer:
          "You can convert most file types. For images, PNG/JPG/GIF/WebP/SVG are common. The output includes the correct MIME type prefix when available.",
      },
      {
        question: "How do I embed a Base64 image in HTML or CSS?",
        answer:
          "In HTML, set <img src='data:image/png;base64,...'>. In CSS, use background-image: url('data:image/png;base64,...').",
      },
      {
        question: "Does Base64 reduce image quality?",
        answer:
          "No. Base64 encoding is lossless. It preserves the exact bytes of the original file, but the encoded string is larger than the original binary.",
      },
      {
        question: "Is this tool safe for sensitive files?",
        answer:
          "Conversion happens locally in your browser and isn’t uploaded. Still, avoid using sensitive files on untrusted devices or shared machines.",
      },
    ],
    relatedTools: [
      "base64-encode-decode",
      "url-encode-decode",
      "html-escape-unescape",
      "json-formatter",
      "json-escape-unescape",
      "jwt-decoder",
    ],
    ui: {
      inputPlaceholder: "Upload a file (PNG, JPG, SVG, PDF, etc.)...",
      outputPlaceholder: "Base64 data URL will appear here...",
      inputLabel: "File Upload",
      outputLabel: "Base64 Data URL",
      convertLabel: "Convert to Base64",
    },
  },

  {
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
        "Optionally toggle ‘Without padding’ to remove = characters",
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
          "Base64 represents binary data using text characters, which increases size (often ~33%). It’s about transport compatibility, not compression.",
      },
      {
        question: "What’s the difference between UTF-8 and Binary mode?",
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
  },

  {
    id: "url-encode-decode",
    slug: "url-encode-decode",
    name: "URL Encoder & Decoder",
    description:
      "Encode or decode URL strings and query parameters using percent-encoding (UTF-8)",
    category: "encoding",
    type: "converter",
    keywords: [
      "url encoder",
      "url decoder",
      "percent encoding",
      "encode uri component",
      "decode url",
    ],
    metadata: {
      title: "URL Encoder & Decoder Online (Percent Encoding)",
      description:
        "Encode or decode URL text instantly using percent encoding. Fix broken query strings, UTM links, special characters, and Unicode safely.",
      keywords: [
        "url encoder",
        "url decoder",
        "percent encoding",
        "url encode online",
        "decode url online",
        "encodeURIComponent",
      ],
    },
    info: {
      description:
        "This URL Encoder & Decoder converts unsafe characters into percent-encoded form so URLs and query parameters work correctly in browsers, servers, analytics tools, and APIs. It also decodes encoded URLs back into readable text, which is useful for debugging query strings, UTM parameters, redirects, form submissions, and API requests. Encoding prevents issues with spaces, symbols, emojis, and non-English characters.",
      howToUse: [
        "Paste a URL, query string, or plain text into the input",
        "The tool auto-detects encode vs decode",
        "Click Encode/Decode (or just copy if it updates automatically)",
        "Copy the output and use it in your browser, API call, or tracking link",
      ],
      useCases: [
        "Encode query parameters safely (spaces, &, =, ?, #)",
        "Decode UTM tracking links to inspect parameters",
        "Fix broken URLs copied from logs or apps",
        "Encode user input for GET requests and redirects",
        "Encode Unicode (Hebrew/Arabic/Chinese) and emojis into valid URLs",
      ],
      features: [
        "Encode and decode in one place",
        "Handles Unicode and emoji safely",
        "Great for query strings and API URLs",
        "One-click copy",
        "Local processing (no uploads)",
      ],
    },
    examples: [
      {
        title: "Encode a URL with spaces",
        input: "https://example.com/search?q=hello world",
        description: "Convert spaces to %20 for a valid URL",
      },
      {
        title: "Decode an encoded URL",
        input: "https%3A%2F%2Fexample.com%2Fsearch%3Fq%3Dhello%20world",
        description: "Turn percent-encoding back into readable text",
      },
      {
        title: "Encode special characters",
        input: "name=John Doe&email=john@example.com",
        description: "Encode symbols so query parameters don’t break",
      },
      {
        title: "Encode Unicode text",
        input: "https://example.com/search?q=שלום עולם",
        description: "Encode non-English characters for a valid URL",
      },
    ],
    faq: [
      {
        question: "What is URL encoding (percent encoding)?",
        answer:
          "URL encoding replaces unsafe characters with % followed by hex bytes (UTF-8). For example, a space becomes %20. This prevents broken URLs.",
      },
      {
        question: "When should I URL-encode a value?",
        answer:
          "Encode values used in query parameters, redirects, or API URLs when they include spaces, symbols, or Unicode characters.",
      },
      {
        question: "What’s the difference between encodeURI and encodeURIComponent?",
        answer:
          "encodeURIComponent is safer for query parameters because it encodes reserved characters. encodeURI leaves some reserved characters unencoded for full URLs.",
      },
      {
        question: "Can I decode UTM links and tracking URLs?",
        answer:
          "Yes. Paste the encoded URL and decode it to inspect UTM parameters and query string values.",
      },
      {
        question: "Does URL encoding help SEO?",
        answer:
          "It helps reliability. Proper encoding prevents broken links and ensures crawlers and analytics interpret parameters consistently.",
      },
    ],
    relatedTools: [
      "base64-encode-decode",
      "html-escape-unescape",
      "json-escape-unescape",
      "file-to-base64",
      "jwt-decoder",
      "json-formatter",
    ],
    ui: {
      inputPlaceholder: "Enter URL/text to encode or encoded text to decode...",
      outputPlaceholder: "Result will appear here...",
      inputLabel: "Input",
      outputLabel: "Output",
      convertLabel: "Encode/Decode",
      showSwapButton: true,
      autoDetect: {
        enabled: true,
        emptyLabel: "paste text or URL",
        labels: {
          detected: "URL encoded → Decoding",
          plain: "Plain text → Encoding",
        },
        inputLabels: {
          detected: "URL (Encoded)",
          plain: "Text (Plain)",
        },
        outputLabels: {
          detected: "Text (Decoded)",
          plain: "URL (Encoded)",
        },
      },
    },
  },

  {
    id: "html-escape-unescape",
    slug: "html-escape-unescape",
    name: "HTML Escape & Unescape",
    description:
      "Escape HTML characters into entities or unescape entities back to text (safe for XSS-sensitive output)",
    category: "encoding",
    type: "converter",
    keywords: [
      "html escape",
      "html unescape",
      "html entities",
      "escape html online",
      "decode html entities",
    ],
    metadata: {
      title: "HTML Escape & Unescape Tool (HTML Entities)",
      description:
        "Escape HTML into entities (&lt; &amp; &quot;) or unescape entities back to text. Useful for security, XSS prevention, and docs.",
      keywords: [
        "html escape",
        "html unescape",
        "html entities",
        "escape html",
        "decode html entities",
      ],
    },
    info: {
      description:
        "This HTML Escape & Unescape tool converts raw HTML characters into safe HTML entities and can also decode entities back into readable text. Escaping is essential when displaying user-generated content, code snippets, or HTML examples so the browser does not interpret them as markup. It’s a common, practical step for preventing HTML injection and reducing XSS risk when rendering untrusted text.",
      howToUse: [
        "Paste raw HTML or HTML entities into the input",
        "Click Escape/Unescape",
        "Copy the escaped entities for safe display, or copy unescaped text for readability",
        "Use the result in templates, documentation, or debugging workflows",
      ],
      useCases: [
        "Display HTML code snippets safely in docs and blogs",
        "Escape user-generated input before rendering as text",
        "Decode HTML entities from scraped content or CMS output",
        "Prevent accidental HTML rendering in logs and dashboards",
        "Fix broken strings containing &amp;, &lt;, &gt; and quotes",
      ],
      features: [
        "Escapes and unescapes common HTML entities",
        "Helps prevent unsafe HTML rendering",
        "Instant conversion with one-click copy",
        "Works locally in your browser",
      ],
    },
    examples: [
      {
        title: "Escape HTML tags",
        input: '<div class="container">Hello</div>',
        description: "Convert < and > into entities for safe display",
      },
      {
        title: "Unescape HTML entities",
        input: "&lt;div&gt;Hello&lt;/div&gt;",
        description: "Decode entities back to readable HTML characters",
      },
    ],
    faq: [
      {
        question: "What does it mean to escape HTML?",
        answer:
          "Escaping HTML converts characters like <, >, &, and quotes into entities so they render as text instead of markup.",
      },
      {
        question: "Does HTML escaping prevent XSS?",
        answer:
          "Escaping is a strong defense when outputting text. Full protection also depends on safe rendering practices and avoiding unsafe HTML insertion.",
      },
      {
        question: "What are common HTML entities?",
        answer:
          "Common entities include &lt; for <, &gt; for >, &amp; for &, &quot; for double quotes, and &#39; for apostrophes.",
      },
      {
        question: "When should I unescape HTML entities?",
        answer:
          "Unescape when you need to convert encoded text back to readable characters, such as debugging API output or parsing HTML content.",
      },
      {
        question: "Is this tool safe for sensitive text?",
        answer:
          "Yes. It runs locally in your browser and doesn’t upload your data.",
      },
    ],
    relatedTools: [
      "url-encode-decode",
      "json-escape-unescape",
      "base64-encode-decode",
      "file-to-base64",
      "jwt-decoder",
      "json-formatter",
    ],
    ui: {
      inputPlaceholder: "Enter HTML to escape or entities to unescape...",
      outputPlaceholder: "Result will appear here...",
      inputLabel: "Input",
      outputLabel: "Output",
      convertLabel: "Escape/Unescape",
      showSwapButton: true,
      autoDetect: {
        enabled: true,
        emptyLabel: "paste HTML or entities",
        labels: {
          detected: "Escaped → Unescaping",
          plain: "Plain HTML → Escaping",
        },
        inputLabels: {
          detected: "HTML (Escaped)",
          plain: "HTML (Plain)",
        },
        outputLabels: {
          detected: "HTML (Unescaped)",
          plain: "HTML (Escaped)",
        },
      },
    },
  },

  {
    id: "json-escape-unescape",
    slug: "json-escape-unescape",
    name: "JSON Escape & Unescape",
    description:
      "Escape text for JSON strings (quotes, slashes, newlines) or unescape JSON-encoded strings back to readable text",
    category: "encoding",
    type: "converter",
    keywords: [
      "json escape",
      "json unescape",
      "escape json string",
      "json string encoder",
      "unescape json",
    ],
    metadata: {
      title: "JSON Escape & Unescape Tool (JSON String Encoder)",
      description:
        "Escape text for JSON strings (\\n, \\t, \\, \\\\) or unescape JSON back to readable text. Fix invalid JSON payloads fast.",
      keywords: [
        "json escape",
        "json unescape",
        "escape json string",
        "json string encoder",
        "unescape json string",
      ],
    },
    info: {
      description:
        "This JSON Escape & Unescape tool helps you convert raw text into JSON-safe strings and decode escaped JSON strings back into readable text. JSON requires special characters like quotes, backslashes, and newlines to be escaped using sequences such as \\\", \\\\, and \\n. If you’ve ever hit a “Unexpected token” error in a JSON parser, escaping strings correctly is often the fix—especially for multiline text, Windows file paths, and user-generated content.",
      howToUse: [
        "Paste plain text (to escape) or an escaped JSON string (to unescape)",
        "Click Escape/Unescape",
        "Copy the output and paste it into your JSON payload, config, or logs",
        "Use a JSON validator/formatter to confirm the final JSON is valid",
      ],
      useCases: [
        "Fix JSON parse errors caused by quotes and newlines",
        "Escape multiline text to store inside JSON fields",
        "Escape Windows paths and backslashes for JSON configs",
        "Unescape API responses that contain JSON-encoded strings",
        "Prepare safe string values for logs and configuration files",
      ],
      features: [
        "Escapes quotes, backslashes, newlines, tabs, and control characters",
        "Unescapes JSON sequences back into readable text",
        "Instant conversion with one-click copy",
        "Useful for debugging APIs and JSON config files",
        "Runs locally in your browser (privacy-friendly)",
      ],
    },
    examples: [
      {
        title: "Escape quotes and newlines",
        input: 'Hello "World"\nNew line here',
        description: "Convert raw text into JSON-safe escape sequences",
      },
      {
        title: "Unescape a JSON string",
        input: 'Hello \\"World\\"\\nNew line here',
        description: "Turn escaped JSON text back into readable text",
      },
      {
        title: "Escape Windows path",
        input: "C:\\Users\\Documents\\file.txt",
        description: "Escape backslashes to avoid invalid JSON",
      },
    ],
    faq: [
      {
        question: "Why do JSON strings need escaping?",
        answer:
          "Because JSON uses quotes and backslashes for syntax. Characters like newlines or quotes inside a string must be represented as escape sequences to keep JSON valid.",
      },
      {
        question: "What characters are escaped in JSON?",
        answer:
          'Common escapes include \\\\ for backslash, \\" for quotes, \\n for newline, \\t for tab, \\r for carriage return, \\b and \\f.',
      },
      {
        question: "How do I unescape JSON text?",
        answer:
          "Paste the escaped string (containing sequences like \\n or \\\"), click unescape, and you’ll get readable text back.",
      },
      {
        question: "Is JSON escaping the same as JSON.stringify?",
        answer:
          "JSON.stringify converts full values/objects into JSON. Escaping focuses on safely encoding raw text to be used inside a JSON string value.",
      },
      {
        question: "Can JSON escaping prevent security issues?",
        answer:
          "Escaping helps prevent broken payloads and parsing errors. For security (like injection prevention), also validate inputs and use safe rendering patterns.",
      },
    ],
    relatedTools: [
      "json-formatter",
      "html-escape-unescape",
      "base64-encode-decode",
      "url-encode-decode",
      "file-to-base64",
      "jwt-decoder",
    ],
    ui: {
      inputPlaceholder: "Enter text to escape or JSON string to unescape...",
      outputPlaceholder: "Result will appear here...",
      inputLabel: "Input",
      outputLabel: "Output",
      convertLabel: "Escape/Unescape",
      showSwapButton: true,
      autoDetect: {
        enabled: true,
        emptyLabel: "paste text or JSON",
        labels: {
          detected: "Escaped → Unescaping",
          plain: "Plain text → Escaping",
        },
        inputLabels: {
          detected: "JSON (Escaped)",
          plain: "Text (Plain)",
        },
        outputLabels: {
          detected: "Text (Unescaped)",
          plain: "JSON (Escaped)",
        },
      },
    },
  },
]

