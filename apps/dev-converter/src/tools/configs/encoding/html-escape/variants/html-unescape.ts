import { Tool } from "@/lib/tools/types"

/**
 * HTML Unescape Tool Configuration (SEO Variant)
 *
 * Dedicated page for unescaping HTML entities back to characters.
 * Converts &lt;, &gt;, &amp;, &quot; back to <, >, &, quotes.
 */
export const htmlUnescapeTool: Tool = {
  id: "html-unescape",
  slug: "html-unescape",
  name: "HTML Unescape",
  description:
    "Unescape HTML entities back to readable characters for parsing and display",
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
    "html unescape",
    "unescape html",
    "html decode",
    "decode html entities",
    "html entity decoder",
    "unescape html online",
    "convert entities to html",
  ],

  metadata: {
    title: "HTML Unescape Tool - Decode HTML Entities Online",
    description:
      "Unescape HTML entities (&lt; &gt; &amp; &quot;) back to readable characters. Free online tool for decoding HTML entities and parsing web content.",
    keywords: [
      "html unescape",
      "unescape html",
      "html decode",
      "decode html entities",
      "html entity decoder",
    ],
  },

  info: {
    description:
      "This HTML Unescape tool converts HTML entities back into their original characters. When you receive HTML content with escaped entities like &lt;, &gt;, &amp;, or &quot;, this tool decodes them back to <, >, &, and quotes. This is useful when parsing API responses, debugging web scraping results, or converting escaped HTML from databases and CMS systems back to readable format.",
    howToUse: [
      "Paste HTML content containing entities (e.g., &lt;div&gt;)",
      "Click Unescape to convert entities back to characters",
      "Copy the unescaped output for use in your application",
      "Use for parsing API responses, debugging, or content processing",
    ],
    useCases: [
      "Decode HTML entities from API responses and web scraping",
      "Convert escaped HTML from CMS or database output",
      "Debug HTML content that appears with visible entities",
      "Parse RSS feeds and XML data containing HTML entities",
      "Convert legacy content with escaped characters",
      "Process email templates with HTML entities",
    ],
    features: [
      "Instant HTML entity decoding",
      "Converts all common entities (&lt;, &gt;, &amp;, &quot;, etc.)",
      "Handles numeric entities (&#39;, &#60;)",
      "One-click copy to clipboard",
      "Works locally in your browser - no server upload",
    ],
  },

  examples: [
    {
      title: "Unescape HTML entities",
      input: "&lt;div&gt;Hello World&lt;/div&gt;",
      description: "Convert entities back to HTML characters",
    },
    {
      title: "Decode mixed entities",
      input: "Text with &lt;brackets&gt; &amp; &quot;quotes&quot;",
      description: "Unescape all types of HTML entities",
    },
    {
      title: "Decode numeric entities",
      input: "&#60;p&#62;Copyright &#169; 2024&#60;/p&#62;",
      description: "Convert numeric HTML entities to characters",
    },
  ],

  faq: [
    {
      question: "What does HTML unescaping do?",
      answer:
        "HTML unescaping converts HTML entities like &lt;, &gt;, &amp;, and &quot; back into their original characters (<, >, &, quotes). This reverses the escaping process and makes the content readable or usable as actual HTML.",
    },
    {
      question: "When should I unescape HTML entities?",
      answer:
        "You should unescape HTML entities when you need to convert encoded text back to readable characters, such as when parsing API responses, debugging scraped content, processing CMS output, or converting legacy data that was stored with escaped entities.",
    },
    {
      question: "What's the difference between escaping and unescaping?",
      answer:
        "Escaping converts special characters to entities (< becomes &lt;) to display them safely as text. Unescaping does the reverse, converting entities back to characters (&lt; becomes <) so they can be interpreted as HTML or displayed normally.",
    },
    {
      question: "Can I unescape numeric HTML entities?",
      answer:
        "Yes, this tool handles both named entities (&lt;, &gt;) and numeric entities (&#60;, &#62;, &#x3C;). Numeric entities use decimal or hexadecimal codes to represent characters and are commonly found in XML and older HTML content.",
    },
    {
      question: "Is it safe to unescape user-generated content?",
      answer:
        "Be cautious when unescaping user-generated content. If you unescape and then render the content as HTML, you could expose your site to XSS attacks. Only unescape content from trusted sources, or re-escape it before displaying.",
    },
    {
      question: "Why does my HTML show entities instead of characters?",
      answer:
        "If you see entities like &lt; or &gt; displayed as text instead of being rendered as HTML, it means the content was escaped (often for safety) but needs to be unescaped for proper display. This tool can convert those entities back to characters.",
    },
    {
      question: "Can I unescape HTML in JavaScript?",
      answer:
        "Yes, you can unescape HTML in JavaScript using various methods, such as creating a temporary DOM element and using innerHTML, or using libraries with unescape functions. This tool provides a quick way to unescape HTML without writing code.",
    },
    {
      question: "Is this tool safe for sensitive data?",
      answer:
        "Yes, this tool runs entirely in your browser using JavaScript. Your data is never uploaded to any server, making it safe for sensitive or confidential HTML content.",
    },
  ],

  relatedTools: [
    "html-escape-unescape",
    "html-escape",
    "html-entity-decode",
    "html-entity-encode",
    "url-encode-decode",
    "json-escape-unescape",
    "base64-encode-decode",
  ],

  ui: {
    inputPlaceholder: "Enter HTML entities to unescape (e.g., &lt;div&gt;)...",
    outputPlaceholder: "Unescaped HTML will appear here...",
    inputLabel: "HTML (Escaped)",
    outputLabel: "HTML (Unescaped)",
    convertLabel: "Unescape",
  },
}
