import { Tool } from "@/lib/tools/types"

/**
 * HTML Entity Decode Tool Configuration (SEO Variant)
 *
 * Dedicated page for decoding HTML entities back to characters.
 * Same behavior as html-unescape but targets "entity decode" search intent.
 */
export const htmlEntityDecodeTool: Tool = {
  id: "html-entity-decode",
  slug: "html-entity-decode",
  name: "HTML Entity Decode",
  description:
    "Decode HTML entities back to original characters for parsing and content processing",
  category: "encoding",
  type: "converter",

  // Hide from header dropdown
  nav: {
    showInHeader: false,
  },

  // Reuse html-escape-unescape component
  componentId: "html-escape-unescape",

  // Preset for unescape mode
  preset: {
    mode: "unescape",
  },

  keywords: [
    "html entity decode",
    "decode html entities",
    "html entity decoder",
    "convert html entities",
    "html character decoding",
    "decode html characters",
    "html entity parser",
  ],

  metadata: {
    title: "HTML Entity Decode Tool - Convert HTML Entities to Characters",
    description:
      "Decode HTML entities (&lt; &gt; &amp; &quot;) back to original characters. Free online tool for parsing HTML entities and processing web content.",
    keywords: [
      "html entity decode",
      "decode html entities",
      "html entity decoder",
      "html character decoding",
    ],
  },

  info: {
    description:
      "This HTML Entity Decode tool converts HTML entities back into their original character representations. When working with web content, APIs, or databases, you often encounter encoded entities like &lt;, &gt;, &amp;, &quot;, and &copy;. This tool decodes these entities back to <, >, &, quotes, ©, and other characters, making the content readable and usable. It handles both named entities and numeric entities (decimal and hexadecimal).",
    howToUse: [
      "Paste HTML content containing entities (e.g., &lt;div&gt; or &#60;)",
      "Click Decode to convert entities back to characters",
      "Copy the decoded output for use in your application",
      "Use for API parsing, content processing, or debugging",
    ],
    useCases: [
      "Decode entities from API responses and web services",
      "Parse RSS feeds and XML data with HTML entities",
      "Convert CMS output with encoded special characters",
      "Process email templates containing HTML entities",
      "Debug web scraping results with visible entities",
      "Convert legacy content with entity encoding",
    ],
    features: [
      "Decodes all standard HTML entities",
      "Supports named entities (&lt;, &copy;, &nbsp;)",
      "Handles numeric entities (&#60;, &#x3C;)",
      "One-click copy to clipboard",
      "Works locally in your browser - no server upload",
    ],
  },

  examples: [
    {
      title: "Decode named entities",
      input: "&lt;p&gt;Hello &amp; Welcome&lt;/p&gt;",
      description: "Convert named entities to characters",
    },
    {
      title: "Decode numeric entities",
      input: "&#60;div&#62;Copyright &#169; 2024&#60;/div&#62;",
      description: "Convert numeric entities to characters",
    },
    {
      title: "Decode mixed content",
      input: "&copy; 2024 &bull; Price: &#36;99 &bull; Rating: &#9733;&#9733;&#9733;",
      description: "Decode both named and numeric entities",
    },
  ],

  faq: [
    {
      question: "What is HTML entity decoding?",
      answer:
        "HTML entity decoding converts entity representations like &lt;, &gt;, &amp;, and &copy; back into their original characters (<, >, &, ©). This reverses the encoding process and makes the content readable or usable as actual HTML.",
    },
    {
      question: "When do I need to decode HTML entities?",
      answer:
        "You need to decode HTML entities when processing API responses, parsing RSS/XML feeds, converting CMS output, debugging scraped content, or working with any data source that stores or transmits HTML with encoded entities.",
    },
    {
      question: "What types of entities can be decoded?",
      answer:
        "This tool decodes named entities (&lt;, &gt;, &amp;, &quot;, &copy;, &nbsp;, etc.), decimal numeric entities (&#60;, &#169;), and hexadecimal numeric entities (&#x3C;, &#xA9;). It handles all standard HTML entities and most Unicode characters.",
    },
    {
      question: "Is decoding the same as unescaping?",
      answer:
        "Yes, in HTML context, decoding and unescaping are essentially the same operation. Both convert entities back to their original characters. The terms are often used interchangeably, though 'decoding' emphasizes the character conversion aspect.",
    },
    {
      question: "Can I decode entities in JavaScript?",
      answer:
        "Yes, you can decode HTML entities in JavaScript using methods like creating a temporary DOM element with innerHTML, using DOMParser, or using libraries with decode functions. This tool provides a quick way to decode entities without writing code.",
    },
    {
      question: "What happens if I decode and display user content?",
      answer:
        "Be careful when decoding user-generated content. If you decode entities and then render the result as HTML, you could expose your site to XSS attacks. Only decode content from trusted sources, or re-encode it before displaying to users.",
    },
    {
      question: "Why do some characters show as entities in my HTML?",
      answer:
        "Characters appear as entities when the content was encoded (often for safety or compatibility) but the browser is displaying the raw HTML instead of rendering it. This can happen with improperly configured content types, double-encoding, or when viewing source code.",
    },
    {
      question: "Can I decode entities from XML or RSS feeds?",
      answer:
        "Yes, XML and RSS feeds often contain HTML entities for special characters. This tool can decode those entities, making the content readable. This is especially useful when processing feed content for display or further processing.",
    },
  ],

  relatedTools: [
    "html-escape-unescape",
    "html-entity-encode",
    "html-unescape",
    "html-escape",
    "url-encode-decode",
    "json-escape-unescape",
    "base64-encode-decode",
  ],

  ui: {
    inputPlaceholder: "Enter HTML entities to decode (e.g., &lt;div&gt;)...",
    outputPlaceholder: "Decoded characters will appear here...",
    inputLabel: "HTML Entities",
    outputLabel: "Characters (Decoded)",
    convertLabel: "Decode",
  },
}
