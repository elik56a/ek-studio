import { Tool } from "@/lib/tools/types";

/**
 * URL Encoder/Decoder Tool Configuration
 * 
 * Provides percent-encoding (URL encoding) functionality for URLs and query parameters.
 * Handles special characters, spaces, Unicode, and emojis to create valid URLs.
 * Essential for query strings, UTM parameters, redirects, and API requests.
 */
export const urlEncodeDecodeTool: Tool = {
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
      description: "Encode symbols so query parameters don't break",
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
      question: "What's the difference between encodeURI and encodeURIComponent?",
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
};
