import { Tool } from "../types"

export const encodingTools: Tool[] = [
  {
    id: "image-to-base64",
    slug: "image-to-base64",
    name: "Image to Base64 Converter",
    description:
      "Convert images to Base64 data URLs for embedding in HTML, CSS, or JSON",
    category: "encoding",
    type: "converter",
    keywords: ["image", "base64", "data url", "embed", "encode"],
    metadata: {
      title: "Image to Base64 Converter - Convert Images to Base64 Online",
      description:
        "Free online image to Base64 converter. Convert JPG, PNG, GIF, WebP, and SVG images to Base64 data URLs for embedding in HTML, CSS, or JSON.",
      keywords: [
        "image to base64",
        "base64 image encoder",
        "data url converter",
        "image encoder",
        "embed image",
      ],
    },
    info: {
      description:
        "An Image to Base64 converter allows you to encode image files (JPG, PNG, GIF, WebP, SVG and more) into a Base64 data URL that can be embedded directly into HTML, CSS, or JSON. Base64 encoding transforms binary image data into text, enabling you to include images inline without needing to host the file separately. This is especially useful for embedding icons, small graphics, email templates, or generating portable JSON payloads. The output includes the correct MIME type (for example, data:image/png;base64,...) so you can paste it instantly into <img>, CSS background-image, or API requests.",
      howToUse: [
        "Upload an image file using the image upload input",
        "The tool will automatically convert your image into a Base64 data URL",
        "Copy the Base64 output using the copy button",
        "Paste the output into HTML, CSS, JSON, or wherever you need an inline image",
        "Optional: Use the output as a data URL in an <img src='...'> tag or a CSS background property",
      ],
      useCases: [
        "Embed Images in HTML: Insert Base64 images directly into <img src='...'> without separate image files",
        "Inline CSS Backgrounds: Use Base64 in CSS to embed backgrounds and icons",
        "Email Templates: Embed images in HTML emails where external images may be blocked",
        "API Payloads: Send images inside JSON payloads for upload systems or OCR services",
        "Offline Apps & PWA: Embed assets directly for offline support",
        "Reduce Requests for Icons: Inline small images to reduce HTTP requests and improve performance",
      ],
      features: [
        "Supports Common Formats: Convert JPG, PNG, GIF, WebP, and SVG images",
        "Generates Data URLs: Output includes correct MIME type and Base64 prefix",
        "Fast Local Conversion: Runs in your browser with instant output",
        "One-Click Copy: Copy Base64 output to clipboard instantly",
        "Privacy First: No server uploads — your images stay on your device",
        "Optimized for Developers: Works perfectly for HTML, CSS, and JSON embedding workflows",
      ],
    },
    faq: [
      {
        question: "What is Base64 image encoding?",
        answer:
          "Base64 image encoding converts image binary data into a text string (data URL) that can be embedded directly in HTML, CSS, or JSON. This eliminates the need for separate image files and HTTP requests.",
      },
      {
        question: "When should I use Base64 encoded images?",
        answer:
          "Use Base64 for small images like icons, logos, or inline graphics where reducing HTTP requests is beneficial. Avoid it for large images as Base64 increases file size by about 33% and can slow down page load times.",
      },
      {
        question: "What image formats are supported?",
        answer:
          "This tool supports all common image formats including JPG, PNG, GIF, WebP, and SVG. The output is a data URL that includes the MIME type and Base64-encoded image data.",
      },
      {
        question: "How do I use Base64 images in HTML?",
        answer:
          'Simply use the data URL in an img tag: <img src="data:image/png;base64,..." />. You can also use it in CSS backgrounds, JSON payloads, or anywhere a URL is accepted.',
      },
      {
        question: "What is the maximum image size I can convert?",
        answer:
          "This tool supports images up to 10MB. However, for best performance, keep images under 100KB. Large Base64 strings can slow down page rendering and increase memory usage.",
      },
      {
        question: "Does Base64 encoding reduce image quality?",
        answer:
          "No, Base64 encoding is lossless and preserves the original image quality. However, the encoded string is about 33% larger than the original file size due to the encoding format.",
      },
    ],
    relatedTools: ["base64-encode-decode"],
    ui: {
      inputPlaceholder: "Upload an image file...",
      outputPlaceholder: "Base64 data URL will appear here...",
      inputLabel: "Image Upload",
      outputLabel: "Base64 Output",
      convertLabel: "Convert",
    },
  },

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
    info: {
      description:
        "A Base64 encoder and decoder is a tool that converts text or binary data into Base64 format and back again. Base64 is a binary-to-text encoding standard commonly used in web development, APIs, authentication headers, email attachments, and data transmission systems. Encoding ensures that binary or special characters can be safely transmitted through text-based formats like JSON, HTML, and HTTP headers. This tool helps you quickly encode plain text into Base64, decode Base64 back into readable text, and test tokens, payloads, or encoded values instantly.",
      howToUse: [
        "Paste your text or Base64 string into the input field",
        "The tool automatically detects whether you want to encode or decode",
        "Click Encode/Decode to run the conversion instantly",
        "Copy the output result using the copy button",
        "Use the encoded or decoded output in APIs, authentication headers, or applications",
      ],
      useCases: [
        "Encode Text for APIs: Convert text into Base64 for safe transmission in JSON or HTTP headers",
        "Decode Tokens: Decode Base64 tokens to inspect stored data or debug authentication payloads",
        "Email Attachments: Encode binary data for email systems and MIME payloads",
        "Basic Authentication: Encode username:password for HTTP Basic Auth headers",
        "Store Data Safely: Encode configuration strings for environment variables and config files",
        "Debug Encoding Errors: Quickly check whether a value is valid Base64 and decode it",
      ],
      features: [
        "Two-Way Conversion: Encode text to Base64 and decode Base64 back to text",
        "Auto Detection: Automatically detects Base64 vs plain text for easy workflow",
        "Instant Results: Fast conversion in real time",
        "One-Click Copy: Copy output instantly to clipboard",
        "Safe for Developers: Perfect for debugging API payloads and authentication headers",
        "Privacy Friendly: Runs locally in your browser — no data uploaded",
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
    info: {
      description:
        "A URL encoder and decoder converts unsafe characters in a URL into a valid, web-safe encoded format using percent encoding (also called URL encoding). This is essential when URLs contain spaces, symbols, query parameters, emojis, or non-English characters. Encoding ensures browsers, servers, analytics platforms, and search engines interpret the URL correctly. This tool also allows you to decode encoded URLs back into readable format, making it easy to debug encoded query strings, UTM parameters, API requests, and form submissions.",
      howToUse: [
        "Paste your URL or text into the input field",
        "The tool automatically detects whether it should encode or decode",
        "Click Encode/Decode to run the transformation",
        "Copy the output URL using the copy button",
        "Use the encoded URL in APIs, browsers, tracking links, or query parameters safely",
      ],
      useCases: [
        "Encode Query Parameters: Encode spaces, symbols, and special characters in URLs",
        "Decode Tracking URLs: Decode UTM links and analytics URLs to inspect their parameters",
        "Form Submission Debugging: Encode form data safely for GET requests",
        "API Request Encoding: Encode request parameters when building API URLs manually",
        "International URLs: Convert Hebrew, Arabic, Chinese, and Unicode characters into valid URLs",
        "Prevent Broken Links: Ensure URLs are valid and won’t break when shared or copied",
      ],
      features: [
        "Encode & Decode Support: Convert URLs to encoded form and decode encoded URLs",
        "Instant Output: Fast conversion directly in the browser",
        "Handles Unicode: Supports non-English characters and emojis",
        "Safe Encoding: Uses correct percent-encoding rules for query strings",
        "One-Click Copy: Copy results easily",
        "Privacy Friendly: No server storage — everything runs locally",
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
    info: {
      description:
        "An HTML escape and unescape tool converts unsafe HTML characters into safe HTML entities (escaping) and also converts HTML entities back into normal readable text (unescaping). Escaping prevents browsers from interpreting user input as actual HTML markup, making it essential for security, displaying code examples, and preventing XSS (Cross-Site Scripting). Developers use HTML escaping when rendering untrusted input on web pages or when showing HTML snippets inside documentation, blogs, and tutorials.",
      howToUse: [
        "Paste your HTML text or entity-encoded content into the input field",
        "Click Escape/Unescape to process the content",
        "If the input contains raw HTML, it will be escaped into entities like &lt; and &amp;",
        "If the input contains entities, it will be unescaped back into normal characters",
        "Copy the result and use it safely in your web application or documentation",
      ],
      useCases: [
        "Prevent XSS: Escape user input before rendering it as text in HTML pages",
        "Show HTML Code Examples: Display HTML snippets in blogs or documentation without them being executed",
        "Escape Dynamic Data: Encode variables safely before injecting them into HTML templates",
        "Decode Entities: Convert HTML entities back to readable text when scraping or parsing content",
        "Sanitize User-Generated Content: Prevent HTML injection in comments, messages, and forms",
      ],
      features: [
        "Escape & Unescape Support: Convert HTML characters to entities and entities back to characters",
        "Security Friendly: Helps prevent XSS attacks by escaping unsafe input",
        "Instant Conversion: Fast tool for debugging and developer workflows",
        "Supports All Common Entities: Handles <, >, &, quotes, apostrophes, and more",
        "One-Click Copy: Copy the output instantly",
        "Privacy First: Works locally in your browser without uploading data",
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
    info: {
      description:
        'A JSON escape and unescape tool helps you safely encode raw text so it can be inserted into JSON strings without breaking JSON syntax. JSON strings must escape characters like quotes, backslashes, newlines, tabs, and other control characters using escape sequences such as \\n, \\t, \\", and \\\\. This tool converts raw text into JSON-safe escaped strings (escaping) and also converts escaped JSON strings back into readable text (unescaping). It is essential for API payloads, logs, configuration files, and debugging JSON parsing issues.',
      howToUse: [
        "Paste your text or JSON string into the input box",
        "Click Escape/Unescape to process the input",
        "If input contains raw quotes/newlines, it will escape them into JSON-safe sequences",
        'If input contains escape sequences like \\n or \\", it will unescape back into readable text',
        "Copy the output and use it safely in JSON payloads, APIs, or code",
      ],
      useCases: [
        "Fix JSON Parse Errors: Escape problematic strings that break JSON format",
        "Store User Text Safely: Encode user messages before inserting them into JSON fields",
        "Debug API Payloads: Quickly inspect escaped JSON strings from API responses",
        "Prepare Logs & Strings: Convert multi-line text into JSON-safe single-line strings",
        "Escape Windows Paths: Convert backslashes into valid JSON strings",
      ],
      features: [
        "Escape & Unescape Support: Converts raw text to JSON-safe format and decodes JSON strings back to text",
        "Prevents Invalid JSON: Avoids broken payloads caused by quotes and control characters",
        "Handles Common Escapes: Supports quotes, backslashes, newline, tab, carriage return, and more",
        "Instant Conversion: Fast results without needing libraries or scripts",
        "One-Click Copy: Copy output instantly for use in APIs and code",
        "Privacy First: Everything runs locally in your browser",
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
