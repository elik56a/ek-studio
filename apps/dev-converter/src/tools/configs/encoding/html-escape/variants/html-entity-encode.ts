import { Tool } from "@/lib/tools/types"

/**
 * HTML Entity Encode Tool Configuration (SEO Variant)
 *
 * Dedicated page for encoding HTML characters into entities.
 * Same behavior as html-escape but targets "entity encode" search intent.
 */
export const htmlEntityEncodeTool: Tool = {
  id: "html-entity-encode",
  slug: "html-entity-encode",
  name: "HTML Entity Encode",
  description:
    "Encode HTML characters into named entities for safe web display and XML compatibility",
  category: "encoding",
  type: "converter",

  // Hide from header dropdown
  nav: {
    showInHeader: false,
  },

  // Reuse html-escape-unescape component
  componentId: "html-escape-unescape",

  // Preset for escape mode
  preset: {
    mode: "escape",
  },

  keywords: [
    "html entity encode",
    "encode html entities",
    "html character encoding",
    "convert to html entities",
    "html entity encoder",
    "encode html characters",
    "html entity conversion",
  ],

  metadata: {
    title: "HTML Entity Encode Tool - Convert Characters to HTML Entities",
    description:
      "Encode HTML characters into named entities (&lt; &gt; &amp; &quot;). Free online tool for XML compatibility and safe HTML display.",
    keywords: [
      "html entity encode",
      "encode html entities",
      "html character encoding",
      "html entity encoder",
    ],
  },

  info: {
    description:
      "This HTML Entity Encode tool converts special HTML characters into their named entity equivalents. Entity encoding is essential for XML compatibility, displaying special characters in HTML, and ensuring content renders correctly across different systems. Characters like <, >, &, quotes, and other special symbols are converted to standard HTML entities (&lt;, &gt;, &amp;, &quot;, etc.) that are universally recognized by browsers and parsers.",
    howToUse: [
      "Paste text or HTML containing special characters",
      "Click Encode to convert characters to HTML entities",
      "Copy the encoded output with named entities",
      "Use in XML documents, HTML attributes, or data interchange",
    ],
    useCases: [
      "Encode special characters for XML and XHTML compatibility",
      "Convert characters for use in HTML attributes and meta tags",
      "Prepare content for RSS feeds and XML APIs",
      "Encode data for safe transmission in JSON strings",
      "Convert special characters for database storage",
      "Ensure cross-platform character compatibility",
    ],
    features: [
      "Converts characters to standard HTML entities",
      "Supports all common special characters",
      "XML and XHTML compatible output",
      "One-click copy to clipboard",
      "Works locally in your browser - no server upload",
    ],
  },

  examples: [
    {
      title: "Encode special characters",
      input: 'Copyright © 2024 & "Company Name"',
      description: "Convert special characters to HTML entities",
    },
    {
      title: "Encode for XML",
      input: '<item price="$19.99" qty="5">Product & Service</item>',
      description: "Encode HTML for XML compatibility",
    },
    {
      title: "Encode symbols",
      input: "Price: $99 • Rating: ★★★★★ • Status: ✓",
      description: "Convert symbols to HTML entities",
    },
  ],

  faq: [
    {
      question: "What is HTML entity encoding?",
      answer:
        "HTML entity encoding converts special characters into their named entity representations. For example, < becomes &lt;, > becomes &gt;, and & becomes &amp;. These entities are standardized codes that browsers and parsers recognize and convert back to the original characters when rendering.",
    },
    {
      question: "Why use HTML entities instead of regular characters?",
      answer:
        "HTML entities ensure compatibility across different systems, prevent parsing errors in XML/HTML, allow special characters to display correctly in HTML attributes, and provide a safe way to include characters that might otherwise be interpreted as markup or cause encoding issues.",
    },
    {
      question: "What's the difference between encoding and escaping?",
      answer:
        "In HTML context, encoding and escaping are often used interchangeably. Both convert special characters to entities. However, 'encoding' typically emphasizes the character representation aspect, while 'escaping' emphasizes the security and safety aspect of preventing code execution.",
    },
    {
      question: "Do I need to encode characters for XML?",
      answer:
        "Yes, XML has strict parsing rules and requires certain characters to be encoded. At minimum, you must encode <, >, &, quotes in attributes, and apostrophes in some contexts. Encoding ensures your XML is well-formed and parseable.",
    },
    {
      question: "What are named entities vs numeric entities?",
      answer:
        "Named entities use descriptive names (&lt;, &gt;, &copy;) while numeric entities use character codes (&#60;, &#62;, &#169;). Named entities are more readable but limited to predefined characters. Numeric entities can represent any Unicode character but are less human-readable.",
    },
    {
      question: "Can I encode Unicode characters?",
      answer:
        "Yes, Unicode characters can be encoded using numeric entities. For example, the emoji 😀 can be encoded as &#128512; or &#x1F600;. This tool focuses on common HTML entities, but you can use numeric encoding for any Unicode character.",
    },
    {
      question: "Is entity encoding necessary for modern HTML5?",
      answer:
        "HTML5 is more lenient than older standards, but entity encoding is still important for: displaying code examples, preventing XSS attacks, ensuring XML compatibility, using special characters in attributes, and maintaining cross-platform compatibility.",
    },
    {
      question: "Is this tool safe for sensitive data?",
      answer:
        "Yes, this tool runs entirely in your browser using JavaScript. Your data is never uploaded to any server, making it safe for sensitive or confidential content.",
    },
  ],

  relatedTools: [
    "html-escape-unescape",
    "html-entity-decode",
    "html-escape",
    "html-unescape",
    "url-encode-decode",
    "json-escape-unescape",
    "base64-encode-decode",
  ],

  ui: {
    inputPlaceholder: "Enter text with special characters to encode...",
    outputPlaceholder: "HTML entities will appear here...",
    inputLabel: "Text (Plain)",
    outputLabel: "HTML Entities",
    convertLabel: "Encode",
  },
}
