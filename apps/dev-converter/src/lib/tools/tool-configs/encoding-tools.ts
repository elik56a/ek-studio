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
      {
        title: "Encode URL-safe token",
        input: "user:12345|role:admin",
        description:
          "Encode a string token to Base64 for safe storage or transmission",
      },
    ],
    faq: [
      {
        question: "What is Base64 encoding and why is it used?",
        answer:
          "Base64 is a binary-to-text encoding format that converts data into readable ASCII characters. It is commonly used to safely transfer binary data through text-based systems such as email, JSON payloads, and URL-safe tokens.",
      },
      {
        question: "How do I encode text to Base64 online?",
        answer:
          "Paste your text into the input box and click Encode/Decode. The tool will automatically detect plain text and convert it into Base64 format instantly.",
      },
      {
        question: "How do I decode Base64 back to text?",
        answer:
          "Paste your Base64 string into the input field and the tool will detect it as valid Base64, decode it, and return readable text immediately.",
      },
      {
        question: "Is Base64 encryption? Is it secure?",
        answer:
          "No. Base64 is not encryption and provides no real security. It only encodes data and can be easily decoded by anyone. Never use Base64 as protection for sensitive information.",
      },
      {
        question: "What are common use cases for Base64 encoding?",
        answer:
          "Base64 is widely used for embedding images in HTML/CSS, encoding binary files in JSON or APIs, sending attachments via email, and generating authentication tokens or basic credentials.",
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
      {
        title: "Encode non-English characters",
        input: "https://example.com/search?q=שלום עולם",
        description: "Encode Unicode characters for a valid URL",
      },
    ],
    faq: [
      {
        question: "What is URL encoding (percent encoding)?",
        answer:
          "URL encoding, also called percent encoding, converts special characters into a safe format that can be transmitted in a URL. Characters are replaced with '%' followed by two hexadecimal values (for example, space becomes %20).",
      },
      {
        question: "When should I use URL encoding?",
        answer:
          "You should URL-encode query parameters when they contain spaces, symbols like &, =, ?, #, or non-English characters. This ensures your URLs are valid and correctly interpreted by browsers and servers.",
      },
      {
        question: "How do I decode a URL-encoded string?",
        answer:
          "Paste the encoded string into the tool and click Encode/Decode. The tool will detect percent-encoded characters like %20 and decode them back into readable text.",
      },
      {
        question:
          "What is the difference between encodeURI and encodeURIComponent?",
        answer:
          "encodeURIComponent encodes all special characters including reserved URL characters like :, /, ?, and #. encodeURI keeps reserved characters intact. This tool uses encodeURIComponent because it is safest for query parameters and fragments.",
      },
      {
        question: "Why is URL encoding important for SEO and tracking links?",
        answer:
          "URL encoding ensures tracking parameters (UTM tags), search queries, and special characters do not break a link. A valid URL is easier for browsers, crawlers, and analytics platforms to process reliably.",
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
      {
        title: "Escape user-generated HTML",
        input: '<script>alert("XSS")</script>',
        description:
          "Escape unsafe HTML to prevent it from being executed in a web page",
      },
    ],
    faq: [
      {
        question: "What is HTML escaping and why does it matter?",
        answer:
          "HTML escaping converts characters like <, >, &, and quotes into safe HTML entities so they display as text instead of being interpreted as HTML. It is essential for preventing HTML injection and XSS attacks.",
      },
      {
        question: "When should I escape HTML content?",
        answer:
          "You should escape HTML whenever you're displaying user-generated or untrusted content on a webpage. This prevents malicious input from being executed as code and improves security.",
      },
      {
        question: "How do I unescape HTML entities back to normal text?",
        answer:
          "Paste your entity-encoded text (like &lt; and &amp;) into the tool and click Escape/Unescape. The tool will decode entities into readable characters instantly.",
      },
      {
        question: "Which characters are commonly escaped in HTML?",
        answer:
          "The most common escaped characters are: < (&lt;), > (&gt;), & (&amp;), \" (&quot;), and ' (&#39;). These prevent HTML parsing and ensure proper text rendering.",
      },
      {
        question: "Does HTML escaping protect against XSS attacks?",
        answer:
          "Escaping is a strong defense against XSS when displaying text content. However, full XSS protection also requires safe rendering practices, proper CSP headers, and avoiding unsafe HTML insertion methods.",
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
      {
        title: "Escape multiline JSON message",
        input: 'Line 1\nLine 2\nLine 3 with "quotes"',
        description: "Escape multiline text safely to store inside JSON fields",
      },
    ],
    faq: [
      {
        question: "What is JSON escaping and why is it necessary?",
        answer:
          'JSON escaping converts characters like quotes, backslashes, and control characters into safe escape sequences (such as \\n, \\t, \\", \\\\). This allows text to be safely stored inside JSON string values without breaking JSON syntax.',
      },
      {
        question: "When should I escape text for JSON strings?",
        answer:
          "You should escape text whenever you insert raw strings into JSON values, especially if the content contains quotes, backslashes, newlines, or tabs. It prevents JSON parse errors and keeps data valid.",
      },
      {
        question: "How do I unescape JSON-encoded text?",
        answer:
          'Paste the escaped string (for example containing \\n or \\" ) into the tool and click Escape/Unescape. It will decode escape sequences back into readable text immediately.',
      },
      {
        question: "Which characters are commonly escaped in JSON?",
        answer:
          'Common escaped characters include: " (\\"), \\ (\\\\), newline (\\n), tab (\\t), carriage return (\\r), backspace (\\b), and form feed (\\f).',
      },
      {
        question: "Is JSON escaping the same as JSON stringification?",
        answer:
          "Not exactly. JSON escaping prepares raw text to fit safely inside a JSON string. JSON.stringify converts full objects and strings into valid JSON format. This tool focuses on escaping and unescaping raw text for JSON strings.",
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
  },
]
