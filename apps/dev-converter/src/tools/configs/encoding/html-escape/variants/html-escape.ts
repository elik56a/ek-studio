import { Tool } from "@/lib/tools/types"

/**
 * HTML Escape Tool Configuration (SEO Variant)
 *
 * Dedicated page for escaping HTML characters into entities.
 * Converts <, >, &, quotes to their entity equivalents (&lt;, &gt;, &amp;, etc.).
 */
export const htmlEscapeTool: Tool = {
  id: "html-escape",
  slug: "html-escape",
  name: "HTML Escape",
  description:
    "Escape HTML characters into entities for safe display in web pages and prevent XSS attacks",
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
    "html escape",
    "escape html",
    "html encode",
    "escape html characters",
    "html entities",
    "escape html online",
    "convert html to entities",
  ],

  metadata: {
    title: "HTML Escape Tool - Convert HTML to Entities Online",
    description:
      "Escape HTML characters into entities (&lt; &gt; &amp; &quot;) for safe display. Free online tool for XSS prevention and displaying code snippets.",
    keywords: [
      "html escape",
      "escape html",
      "html encode",
      "html entities",
      "xss prevention",
    ],
  },

  info: {
    description:
      "This HTML Escape tool converts raw HTML characters into safe HTML entities. When you need to display HTML code as text on a web page, escaping prevents the browser from interpreting it as markup. This is essential for showing code examples, displaying user-generated content safely, and preventing XSS (Cross-Site Scripting) attacks. Characters like <, >, &, and quotes are converted to their entity equivalents (&lt;, &gt;, &amp;, &quot;).",
    howToUse: [
      "Paste your HTML code or text containing HTML characters",
      "Click Escape to convert characters to entities",
      "Copy the escaped output for safe display in your web page",
      "Use in HTML templates, documentation, or anywhere you need to show HTML as text",
    ],
    useCases: [
      "Display HTML code snippets in documentation and tutorials",
      "Safely render user-generated content without executing HTML",
      "Prevent XSS attacks by escaping untrusted input",
      "Show HTML examples in blog posts and technical articles",
      "Escape HTML for use in XML, JSON strings, or database storage",
      "Convert HTML for display in CMS systems and forums",
    ],
    features: [
      "Instant HTML character escaping",
      "Converts <, >, &, quotes, and other special characters",
      "Helps prevent XSS vulnerabilities",
      "One-click copy to clipboard",
      "Works locally in your browser - no server upload",
    ],
  },

  examples: [
    {
      title: "Escape HTML tags",
      input: '<div class="container">Hello World</div>',
      description: "Convert HTML tags to entities for safe display",
    },
    {
      title: "Escape special characters",
      input: 'Text with <brackets> & "quotes"',
      description: "Escape all special HTML characters",
    },
    {
      title: "Escape code snippet",
      input: '<script>alert("XSS")</script>',
      description: "Safely escape JavaScript code for display",
    },
  ],

  faq: [
    {
      question: "What does HTML escaping do?",
      answer:
        "HTML escaping converts special characters like <, >, &, and quotes into their HTML entity equivalents (&lt;, &gt;, &amp;, &quot;). This prevents browsers from interpreting them as HTML markup, allowing you to display them as plain text.",
    },
    {
      question: "Why do I need to escape HTML?",
      answer:
        "You need to escape HTML when displaying code examples, showing user-generated content, or preventing XSS attacks. Without escaping, browsers will interpret HTML characters as markup, which can break your page layout or create security vulnerabilities.",
    },
    {
      question: "Does HTML escaping prevent XSS attacks?",
      answer:
        "Yes, HTML escaping is a crucial defense against XSS (Cross-Site Scripting) attacks. By converting special characters to entities, you prevent malicious scripts from being executed when displaying untrusted user input. However, it should be combined with other security practices for complete protection.",
    },
    {
      question: "What characters are escaped?",
      answer:
        "Common escaped characters include: < becomes &lt;, > becomes &gt;, & becomes &amp;, double quotes become &quot;, and single quotes become &#39; or &apos;. Some tools also escape additional characters for maximum safety.",
    },
    {
      question: "Can I escape HTML in JavaScript?",
      answer:
        "Yes, you can escape HTML in JavaScript using various methods. The most common approach is creating a temporary DOM element and using textContent, or using libraries that provide escaping functions. This tool provides a quick way to escape HTML without writing code.",
    },
    {
      question: "Is escaped HTML safe to store in databases?",
      answer:
        "Escaped HTML is safe to store in databases and won't cause SQL injection issues. However, it's generally better to store raw data and escape it when displaying, rather than storing pre-escaped content. This gives you more flexibility in how you present the data.",
    },
    {
      question: "Will escaping affect my HTML's appearance?",
      answer:
        "When you escape HTML and display it on a web page, it will appear as plain text showing the actual HTML code, not as rendered HTML. This is exactly what you want when displaying code examples or showing HTML syntax to users.",
    },
    {
      question: "Is this tool safe for sensitive data?",
      answer:
        "Yes, this tool runs entirely in your browser using JavaScript. Your data is never uploaded to any server, making it safe for sensitive or confidential HTML content.",
    },
  ],

  relatedTools: [
    "html-escape-unescape",
    "html-unescape",
    "html-entity-encode",
    "html-entity-decode",
    "url-encode-decode",
    "json-escape-unescape",
    "base64-encode-decode",
  ],

  ui: {
    inputPlaceholder: 'Enter HTML to escape (e.g., <div>Hello</div>)...',
    outputPlaceholder: "Escaped HTML entities will appear here...",
    inputLabel: "HTML (Plain)",
    outputLabel: "HTML (Escaped)",
    convertLabel: "Escape",
  },
}
