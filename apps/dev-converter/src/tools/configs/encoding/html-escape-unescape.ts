import { Tool } from "@/lib/tools/types"

/**
 * HTML Escape/Unescape Tool Configuration
 *
 * Converts HTML characters to entities and vice versa.
 * Essential for displaying code snippets, preventing XSS, and handling user-generated content.
 * Escapes characters like <, >, &, quotes to their entity equivalents (&lt;, &gt;, &amp;, etc.).
 */
export const htmlEscapeUnescapeTool: Tool = {
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
      "This HTML Escape & Unescape tool converts raw HTML characters into safe HTML entities and can also decode entities back into readable text. Escaping is essential when displaying user-generated content, code snippets, or HTML examples so the browser does not interpret them as markup. It's a common, practical step for preventing HTML injection and reducing XSS risk when rendering untrusted text.",
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
        "Yes. It runs locally in your browser and doesn't upload your data.",
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
}
