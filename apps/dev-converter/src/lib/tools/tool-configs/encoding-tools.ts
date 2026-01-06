import Base64EncodeDecodeTool from "@/components/tools/base64-encode-decode"
import HtmlEscapeUnescapeTool from "@/components/tools/html-escape-unescape"
import JsonEscapeUnescapeTool from "@/components/tools/json-escape-unescape"
import UrlEncodeDecodeTool from "@/components/tools/url-encode-decode"

import { Tool } from "../types"

export const encodingTools: Tool[] = [
  {
    id: "base64-encode-decode",
    slug: "base64-encode-decode",
    name: "Base64 Encoder & Decoder",
    description: "Encode text to Base64 or decode Base64 back to text",
    category: "encoding",
    type: "converter",
    keywords: ["base64", "encode", "decode", "binary"],
    metadata: {
      title: "Base64 Encoder & Decoder - Encode and Decode Base64 Online",
      description:
        "Free online Base64 encoder and decoder. Convert text to Base64 encoding or decode Base64 back to readable text.",
      keywords: [
        "base64 encoder",
        "base64 decoder",
        "base64 converter",
        "binary encoding",
      ],
    },
    examples: [
      {
        title: "Encode text",
        input: "Hello, World!",
        description: "Encode plain text to Base64",
      },
      {
        title: "Decode Base64",
        input: "SGVsbG8sIFdvcmxkIQ==",
        description: "Decode Base64 back to text",
      },
      {
        title: "Encode JSON",
        input: '{"name":"John","age":30}',
        description: "Encode JSON data to Base64",
      },
    ],
    faq: [
      {
        question: "What is Base64 encoding?",
        answer:
          "Base64 is a binary-to-text encoding scheme that represents binary data in ASCII string format. It uses 64 different ASCII characters (A-Z, a-z, 0-9, +, /) to encode data.",
      },
      {
        question: "When should I use Base64?",
        answer:
          "Base64 is commonly used for encoding binary data in URLs, emails, data URIs, and when transmitting data over text-based protocols. It's also used in authentication tokens and embedding images in HTML/CSS.",
      },
      {
        question: "Does Base64 encrypt data?",
        answer:
          "No, Base64 is an encoding method, not encryption. It makes data unreadable to casual observers but can be easily decoded by anyone. Never use Base64 alone for securing sensitive data.",
      },
      {
        question: "How does auto-detection work?",
        answer:
          "The tool automatically detects if your input is valid Base64 (contains only Base64 characters and proper padding) and decodes it. Otherwise, it encodes your text to Base64.",
      },
    ],
    relatedTools: ["url-encode-decode", "html-escape-unescape"],
    ui: {
      inputPlaceholder: "Enter text to encode or Base64 to decode...",
      outputPlaceholder: "Encoded/decoded result will appear here...",
      inputLabel: "Text Input",
      outputLabel: "Base64 Output",
      convertLabel: "Encode/Decode",
      showSwapButton: true,
    },
    component: Base64EncodeDecodeTool,
  },
  {
    id: "url-encode-decode",
    slug: "url-encode-decode",
    name: "URL Encoder & Decoder",
    description: "Encode URLs for safe transmission or decode URL-encoded text",
    category: "encoding",
    type: "converter",
    keywords: ["url", "encode", "decode", "percent"],
    metadata: {
      title: "URL Encoder & Decoder - Encode and Decode URLs Online",
      description:
        "Free online URL encoder and decoder. Encode URLs for safe transmission or decode URL-encoded text.",
      keywords: [
        "url encoder",
        "url decoder",
        "percent encoding",
        "uri encoding",
      ],
    },
    examples: [
      {
        title: "Encode URL with spaces",
        input: "https://example.com/search?q=hello world",
        description: "Encode a URL containing spaces",
      },
      {
        title: "Decode URL",
        input: "https%3A%2F%2Fexample.com%2Fsearch%3Fq%3Dhello%20world",
        description: "Decode a percent-encoded URL",
      },
      {
        title: "Encode special characters",
        input: "name=John Doe&email=john@example.com",
        description: "Encode query parameters with special characters",
      },
    ],
    faq: [
      {
        question: "What is URL encoding?",
        answer:
          "URL encoding (also called percent-encoding) converts characters into a format that can be transmitted over the Internet. Special characters are replaced with a '%' followed by two hexadecimal digits.",
      },
      {
        question: "When should I use URL encoding?",
        answer:
          "Use URL encoding when you need to include special characters in URLs, such as spaces, ampersands, or non-ASCII characters. It's essential for query parameters and ensuring URLs are valid.",
      },
      {
        question: "What characters need to be encoded?",
        answer:
          "Characters that need encoding include spaces, special characters like &, =, ?, #, and non-ASCII characters. Reserved characters like : / ? # [ ] @ are also encoded when not used for their reserved purpose.",
      },
      {
        question:
          "What's the difference between encodeURI and encodeURIComponent?",
        answer:
          "This tool uses encodeURIComponent, which encodes all special characters including those reserved for URLs (like :, /, ?). encodeURI only encodes characters that are not valid in URLs.",
      },
    ],
    relatedTools: ["base64-encode-decode", "html-escape-unescape"],
    ui: {
      inputPlaceholder: "Enter URL to encode or encoded URL to decode...",
      outputPlaceholder: "Encoded/decoded URL will appear here...",
      inputLabel: "URL Input",
      outputLabel: "URL Output",
      convertLabel: "Encode/Decode",
      showSwapButton: true,
    },
    component: UrlEncodeDecodeTool,
  },
  {
    id: "html-escape-unescape",
    slug: "html-escape-unescape",
    name: "HTML Escape & Unescape",
    description:
      "Escape HTML characters for safe display or unescape HTML entities",
    category: "encoding",
    type: "converter",
    keywords: ["html", "escape", "unescape", "entities"],
    metadata: {
      title: "HTML Escape & Unescape - Escape HTML Characters Online",
      description:
        "Free online HTML escape and unescape tool. Convert HTML characters to entities or decode HTML entities back to text.",
      keywords: [
        "html escape",
        "html unescape",
        "html entities",
        "html encoder",
      ],
    },
    examples: [
      {
        title: "Escape HTML tags",
        input: '<div class="container">Hello World</div>',
        description: "Escape HTML tags for safe display",
      },
      {
        title: "Unescape HTML entities",
        input: "&lt;div class=&quot;container&quot;&gt;Hello World&lt;/div&gt;",
        description: "Convert HTML entities back to characters",
      },
      {
        title: "Escape special characters",
        input: 'Tom & Jerry said "Hello!"',
        description: "Escape ampersands and quotes",
      },
    ],
    faq: [
      {
        question: "What is HTML escaping?",
        answer:
          "HTML escaping converts special characters like <, >, &, and quotes into HTML entities (&lt;, &gt;, &amp;, etc.) so they display as text instead of being interpreted as HTML code.",
      },
      {
        question: "When should I escape HTML?",
        answer:
          "Always escape user-generated content before displaying it on a webpage to prevent XSS (Cross-Site Scripting) attacks. This is crucial for security when handling untrusted input.",
      },
      {
        question: "What characters are escaped?",
        answer:
          "Common characters that are escaped include: < (&lt;), > (&gt;), & (&amp;), \" (&quot;), and ' (&#39;). These prevent HTML injection and ensure text displays correctly.",
      },
      {
        question: "How does auto-detection work?",
        answer:
          "The tool detects HTML entities like &lt;, &amp;, &#39; in your input and unescapes them. If no entities are found, it escapes your text for safe HTML display.",
      },
    ],
    relatedTools: ["url-encode-decode", "json-escape-unescape"],
    ui: {
      inputPlaceholder: "Enter HTML to escape or HTML entities to unescape...",
      outputPlaceholder: "Escaped/unescaped HTML will appear here...",
      inputLabel: "HTML Input",
      outputLabel: "HTML Output",
      convertLabel: "Escape/Unescape",
      showSwapButton: true,
    },
    component: HtmlEscapeUnescapeTool,
  },
  {
    id: "json-escape-unescape",
    slug: "json-escape-unescape",
    name: "JSON Escape & Unescape",
    description: "Escape text for JSON strings or unescape JSON-encoded text",
    category: "encoding",
    type: "converter",
    keywords: ["json", "escape", "unescape", "string"],
    metadata: {
      title: "JSON Escape & Unescape - Escape JSON Strings Online",
      description:
        "Free online JSON escape and unescape tool. Escape text for JSON strings or decode JSON-encoded text.",
      keywords: [
        "json escape",
        "json unescape",
        "json encoder",
        "string escape",
      ],
    },
    examples: [
      {
        title: "Escape for JSON",
        input: 'Hello "World"\nNew line here',
        description: "Escape text with quotes and newlines for JSON",
      },
      {
        title: "Unescape JSON string",
        input: 'Hello \\"World\\"\\nNew line here',
        description: "Unescape JSON-encoded text",
      },
      {
        title: "Escape path",
        input: "C:\\Users\\Documents\\file.txt",
        description: "Escape backslashes for JSON",
      },
    ],
    faq: [
      {
        question: "What is JSON escaping?",
        answer:
          'JSON escaping converts special characters like quotes, backslashes, and control characters into escape sequences (\\n, \\t, \\", \\\\) so they can be safely included in JSON strings.',
      },
      {
        question: "When do I need to escape for JSON?",
        answer:
          "Escape text when you need to include it as a string value in JSON data. This is essential when the text contains quotes, backslashes, or control characters like newlines and tabs.",
      },
      {
        question: "What characters are escaped?",
        answer:
          'Common escaped characters include: " (\\"), \\ (\\\\), newline (\\n), tab (\\t), carriage return (\\r), backspace (\\b), and form feed (\\f).',
      },
      {
        question: "How does auto-detection work?",
        answer:
          "The tool detects escape sequences like \\n, \\t, \\\\ in your input and unescapes them. If no escape sequences are found, it escapes your text for use in JSON strings.",
      },
    ],
    relatedTools: ["json-formatter", "html-escape-unescape"],
    ui: {
      inputPlaceholder: "Enter text to escape or JSON string to unescape...",
      outputPlaceholder: "Escaped/unescaped text will appear here...",
      inputLabel: "Text Input",
      outputLabel: "JSON String Output",
      convertLabel: "Escape/Unescape",
      showSwapButton: true,
    },
    component: JsonEscapeUnescapeTool,
  },
]
