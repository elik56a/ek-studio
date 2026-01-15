import { Tool } from "@/lib/tools/types";

/**
 * Markdown ↔ HTML Converter Tool Configuration
 * 
 * Converts between Markdown and HTML formats bidirectionally.
 * Supports headings, lists, links, code blocks, images, and tables.
 * Essential for documentation, README files, CMS migration, and content workflows.
 */
export const markdownHtmlConverterTool: Tool = {
  id: "markdown-html-converter",
  slug: "markdown-html-converter",
  name: "Markdown ↔ HTML Converter",
  description:
    "Convert Markdown to HTML or HTML to Markdown with clean output — great for docs, README files, and content migration",
  category: "text",
  type: "converter",
  keywords: [
    "markdown to html",
    "html to markdown",
    "markdown converter",
    "md to html",
    "convert markdown",
    "convert html",
  ],
  metadata: {
    title: "Markdown ↔ HTML Converter (Clean Output)",
    description:
      "Convert Markdown to HTML or HTML to Markdown instantly. Supports headings, lists, links, code blocks, images, and tables — browser-based.",
    keywords: [
      "markdown to html",
      "html to markdown",
      "markdown html converter",
      "md to html converter",
      "html to md converter",
    ],
  },
  info: {
    description:
      "Markdown ↔ HTML Converter helps you switch between Markdown syntax and HTML markup without rewriting content manually. Markdown is popular for README files, wikis, and documentation because it's simple to write, while HTML is the standard format for rendering web pages and rich content. Use this converter to migrate articles, generate HTML for a site, convert HTML from a CMS into editable Markdown, and keep documentation workflows fast and consistent.",
    howToUse: [
      "Paste Markdown or HTML into the input area",
      "Choose the conversion direction (Markdown → HTML or HTML → Markdown)",
      "Click Convert to generate the output",
      "Review formatting (especially tables and nested lists)",
      "Copy the result into your docs, CMS, or website",
    ],
    useCases: [
      "Convert Markdown docs into HTML for websites and portals",
      "Convert HTML articles into Markdown for GitHub/Notion/wiki editing",
      "Migrate content between a CMS and a Markdown-based docs system",
      "Generate HTML for email templates or static site builders",
      "Clean up messy HTML by converting to simpler Markdown for editing",
    ],
    features: [
      "Two-way conversion: Markdown → HTML and HTML → Markdown",
      "Supports headings, lists, links, images, code blocks, and tables",
      "Produces readable output (not minified noise)",
      "Useful for documentation and content workflows",
      "Runs locally in your browser (no uploads)",
    ],
  },
  examples: [
    {
      title: "Markdown → HTML",
      input:
        "# Hello World\n\nThis is **bold** and this is *italic*.\n\n- Item 1\n- Item 2",
      description: "Convert common Markdown formatting into HTML tags",
    },
    {
      title: "HTML → Markdown",
      input:
        "<h1>Hello World</h1><p>This is <strong>bold</strong> text.</p><ul><li>Item 1</li><li>Item 2</li></ul>",
      description: "Turn HTML back into Markdown for easy editing",
    },
    {
      title: "Links and images",
      input:
        "Check this out: [Example](https://example.com)\n\n![Logo](https://example.com/logo.png)",
      description: "Convert links and images to HTML equivalents",
    },
    {
      title: "Markdown table → HTML table",
      input: "| Name | Age |\n|------|-----|\n| John | 30 |\n| Alice | 25 |",
      description: "Convert a simple Markdown table into HTML",
    },
  ],
  faq: [
    {
      question: "What is a Markdown to HTML converter?",
      answer:
        "It converts Markdown syntax (like # headings and **bold**) into valid HTML tags so content can render on the web.",
    },
    {
      question: "Can I convert HTML back to Markdown?",
      answer:
        "Yes. This tool supports HTML → Markdown, which is useful when moving content into README or docs workflows.",
    },
    {
      question: "Does it support code blocks and tables?",
      answer:
        "Yes. Common Markdown elements like code blocks, lists, links, images, and tables are supported.",
    },
    {
      question: "Why does output sometimes look different?",
      answer:
        "Markdown parsers can vary. Complex HTML structures, nested layouts, and custom Markdown extensions may convert differently depending on rules.",
    },
    {
      question: "When should I use Markdown instead of HTML?",
      answer:
        "Use Markdown for easier writing and editing in docs. Use HTML when you need precise structure, attributes, and advanced layouts.",
    },
  ],
  relatedTools: [
    "html-escape-unescape",
    "case-converter",
    "diff-checker",
    "regex-tester",
    "json-formatter",
    "url-encode-decode",
  ],
  ui: {
    inputPlaceholder: "Paste Markdown or HTML...",
    outputPlaceholder: "Converted content will appear here...",
    inputLabel: "Input",
    outputLabel: "Output",
    convertLabel: "Convert",
  },
};
