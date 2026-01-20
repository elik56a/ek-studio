import { Tool } from "@/lib/tools/types"

/**
 * URL Encode Tool Configuration (SEO Variant)
 *
 * Dedicated page for encoding URLs and text using percent-encoding.
 * Converts spaces, special characters, and Unicode into %XX format.
 */
export const urlEncodeTool: Tool = {
  id: "url-encode",
  slug: "url-encode",
  name: "URL Encode",
  description:
    "Encode URLs and text using percent-encoding to make them safe for web use",
  category: "encoding",
  type: "converter",

  // Hide from header dropdown
  nav: {
    showInHeader: false,
  },

  // Reuse url-encode-decode component
  componentId: "url-encode-decode",

  // Preset for encode mode
  preset: {
    mode: "encode",
  },

  keywords: [
    "url encode",
    "encode url",
    "url encoder",
    "percent encode",
    "encode uri",
    "url encode online",
    "encodeURIComponent",
  ],

  metadata: {
    title: "URL Encode Tool - Percent Encode URLs Online",
    description:
      "Encode URLs and text using percent-encoding. Convert spaces, special characters, and Unicode to %XX format for safe web use. Free online URL encoder.",
    keywords: [
      "url encode",
      "encode url",
      "url encoder",
      "percent encode",
      "encodeURIComponent",
    ],
  },

  info: {
    description:
      "This URL Encode tool converts text and URLs into percent-encoded format, making them safe for use in web addresses, query parameters, and API requests. Special characters like spaces, ampersands, equals signs, and Unicode characters are converted to %XX format (e.g., space becomes %20). This is essential for creating valid URLs, encoding query strings, UTM parameters, and ensuring your links work correctly across all browsers and platforms.",
    howToUse: [
      "Paste the text or URL you want to encode",
      "Click Encode to convert to percent-encoded format",
      "Copy the encoded output for use in your URLs or API calls",
      "Use in query parameters, redirects, or anywhere URLs are needed",
    ],
    useCases: [
      "Encode query parameters with spaces and special characters",
      "Create valid URLs with Unicode characters (emojis, non-English text)",
      "Encode user input for GET requests and form submissions",
      "Build UTM tracking links with encoded parameters",
      "Encode redirect URLs and callback parameters",
      "Prepare text for use in URL fragments and hash values",
    ],
    features: [
      "Instant percent-encoding conversion",
      "Handles spaces, symbols, and Unicode characters",
      "Encodes using UTF-8 standard (encodeURIComponent)",
      "One-click copy to clipboard",
      "Client-side processing - your data stays private",
    ],
  },

  examples: [
    {
      title: "Encode URL with spaces",
      input: "https://example.com/search?q=hello world",
      description: "Convert spaces to %20 for valid URL",
    },
    {
      title: "Encode query parameters",
      input: "name=John Doe&email=john@example.com",
      description: "Encode special characters in query string",
    },
    {
      title: "Encode Unicode text",
      input: "https://example.com/search?q=שלום עולם",
      description: "Encode Hebrew text for URL compatibility",
    },
    {
      title: "Encode special characters",
      input: "value=100% complete & ready!",
      description: "Encode symbols that break URLs",
    },
    {
      title: "Encode emoji in URL",
      input: "https://example.com/search?q=😀 happy",
      description: "Convert emoji to percent-encoded format",
    },
  ],

  faq: [
    {
      question: "What is URL encoding?",
      answer:
        "URL encoding (also called percent-encoding) converts unsafe characters into a format that can be transmitted over the internet. Each unsafe character is replaced with a % sign followed by two hexadecimal digits representing the character's UTF-8 code.",
    },
    {
      question: "Why do I need to encode URLs?",
      answer:
        "URLs can only contain certain characters from the ASCII set. Spaces, special characters, and non-English characters must be encoded to prevent broken links, parsing errors, and security issues. Encoding ensures your URLs work correctly across all browsers and servers.",
    },
    {
      question: "What characters are encoded?",
      answer:
        "Common encoded characters include: space (→ %20), & (→ %26), = (→ %3D), ? (→ %3F), # (→ %23), / (→ %2F), and all Unicode characters. Reserved characters like :, /, ?, #, [, ], @, !, $, &, ', (, ), *, +, ,, ;, = are encoded when used in query parameters.",
    },
    {
      question: "What's the difference between encodeURI and encodeURIComponent?",
      answer:
        "encodeURIComponent is more aggressive and encodes more characters, making it ideal for query parameters and form data. encodeURI preserves URL structure characters like :, /, ?, and # for encoding complete URLs. This tool uses encodeURIComponent for maximum safety.",
    },
    {
      question: "Can I encode entire URLs?",
      answer:
        "Yes, but be aware that encoding an entire URL will also encode the protocol (https://) and slashes. For complete URLs, you typically only want to encode the query parameter values, not the entire URL structure.",
    },
    {
      question: "Does URL encoding affect SEO?",
      answer:
        "Proper URL encoding improves SEO by preventing broken links and ensuring search engines can crawl your pages correctly. However, keep URLs readable when possible—use hyphens instead of spaces in slugs rather than %20.",
    },
    {
      question: "Can I encode Unicode and emoji?",
      answer:
        "Yes! This tool properly encodes all Unicode characters including emojis, Chinese, Arabic, Hebrew, and other non-ASCII text into percent-encoded format that works in any URL.",
    },
    {
      question: "Is this tool safe for sensitive data?",
      answer:
        "Yes, this tool runs entirely in your browser using JavaScript. Your data is never uploaded to any server, making it safe for sensitive URLs and parameters.",
    },
  ],

  relatedTools: [
    "url-encode-decode",
    "url-decode",
    "percent-encode",
    "querystring-encode",
    "base64-encode-decode",
    "html-escape-unescape",
    "json-escape-unescape",
  ],

  ui: {
    inputPlaceholder: "Enter text or URL to encode...",
    outputPlaceholder: "Encoded URL will appear here...",
    inputLabel: "Text (Plain)",
    outputLabel: "URL (Encoded)",
    convertLabel: "Encode",
  },
}
