import { Tool } from "../types"

export const textTools: Tool[] = [
  {
    id: "case-converter",
    slug: "case-converter",
    name: "Case Converter (camelCase, snake_case, kebab-case)",
    description:
      "Convert text to camelCase, PascalCase, snake_case, kebab-case, CONSTANT_CASE, Title Case, and more — perfect for code, APIs, and SEO slugs",
    category: "text",
    type: "converter",
    keywords: [
      "case converter",
      "camelCase converter",
      "PascalCase converter",
      "snake_case converter",
      "kebab-case converter",
      "CONSTANT_CASE converter",
      "convert text case",
    ],
    metadata: {
      title: "Case Converter: camelCase, snake_case, kebab-case",
      description:
        "Convert text to camelCase, PascalCase, snake_case, kebab-case, CONSTANT_CASE, and Title Case. Fast, accurate case conversion in your browser.",
      keywords: [
        "case converter",
        "convert to camelCase",
        "convert to snake_case",
        "kebab case converter",
        "pascal case converter",
      ],
    },
    info: {
      description:
        "This Case Converter transforms words into popular naming conventions used across codebases and content systems: camelCase for JavaScript variables, PascalCase for class names, snake_case for databases and Python, and kebab-case for URLs and SEO-friendly slugs. Instead of manually editing underscores, hyphens, and capitalization, you can paste any text (including mixed formats) and get consistent output instantly—useful for refactors, API field naming, file renames, and generating clean URL paths.",
      howToUse: [
        "Paste your text (sentence, variable name, or mixed-format string) into the input box",
        "Choose the output case style (camelCase, PascalCase, snake_case, kebab-case, etc.)",
        "Copy the converted result",
        "Use the output in code, database columns, API fields, filenames, or URL slugs",
      ],
      useCases: [
        "Convert plain text into camelCase for JavaScript/TypeScript variables",
        "Convert object keys to snake_case for backend APIs or SQL columns",
        "Generate kebab-case URL slugs for SEO-friendly routes and headings",
        "Standardize naming when migrating between languages (JS ↔ Python ↔ SQL)",
        "Refactor inconsistent naming across a codebase or documentation",
        "Create CONSTANT_CASE values for environment variables and constants",
      ],
      features: [
        "Supports camelCase, PascalCase, snake_case, kebab-case, Title Case, and CONSTANT_CASE",
        "Handles mixed input (spaces, underscores, hyphens, and existing capitalization)",
        "Keeps word boundaries consistent to avoid messy outputs",
        "One-click copy for faster dev workflows",
        "Runs locally in your browser (privacy-friendly)",
      ],
    },
    examples: [
      {
        title: "Text → camelCase",
        input: "hello world example",
        description: "Convert a phrase into camelCase for variables and functions",
      },
      {
        title: "PascalCase → snake_case",
        input: "HelloWorldExample",
        description: "Convert class-style names into snake_case identifiers",
      },
      {
        title: "snake_case → kebab-case",
        input: "my_variable_name",
        description: "Convert underscores into hyphenated URL-friendly text",
      },
      {
        title: "Text → CONSTANT_CASE",
        input: "max value size",
        description: "Convert a phrase into CONSTANT_CASE for constants/env vars",
      },
    ],
    faq: [
      {
        question: "What does a case converter do?",
        answer:
          "A case converter changes capitalization and separators to match naming conventions like camelCase, PascalCase, snake_case, and kebab-case.",
      },
      {
        question: "When should I use camelCase?",
        answer:
          "camelCase is commonly used for variables and functions in JavaScript/TypeScript (example: myVariableName).",
      },
      {
        question: "When should I use snake_case?",
        answer:
          "snake_case is popular in Python, many APIs, and database column naming (example: my_variable_name).",
      },
      {
        question: "PascalCase vs camelCase — what’s the difference?",
        answer:
          "PascalCase starts with an uppercase letter (MyClassName) and is often used for classes. camelCase starts lowercase (myVariableName) and is used for variables/functions.",
      },
      {
        question: "Why is kebab-case used for SEO slugs?",
        answer:
          "kebab-case (my-page-title) is readable, URL-safe, and commonly used for page slugs and routes.",
      },
      {
        question: "Can the converter handle mixed input like 'myVariable_name'?",
        answer:
          "Yes. It detects common separators and casing patterns and normalizes them into the selected output style.",
      },
    ],
    relatedTools: [
      "diff-checker",
      "regex-tester",
      "markdown-html-converter",
      "json-formatter",
      "url-encode-decode",
      "html-escape-unescape",
    ],
    ui: {
      inputPlaceholder: "Paste text or an identifier (e.g., my_variable-name)...",
      outputPlaceholder: "Converted case will appear here...",
      inputLabel: "Text Input",
      outputLabel: "Converted Output",
      convertLabel: "Convert Case",
    },
  },

  {
    id: "diff-checker",
    slug: "diff-checker",
    name: "Text Diff Checker (Side-by-Side Compare)",
    description:
      "Compare two texts side-by-side and highlight additions, deletions, and edits — ideal for code, configs, and document reviews",
    category: "text",
    type: "converter",
    keywords: [
      "diff checker",
      "text diff",
      "compare text",
      "compare two texts",
      "side by side diff",
      "difference checker",
    ],
    metadata: {
      title: "Text Diff Checker (Compare Two Texts Online)",
      description:
        "Compare two texts side-by-side and highlight differences line-by-line. Great for code reviews, config changes, docs, and copy edits.",
      keywords: [
        "text diff checker",
        "diff checker",
        "compare two texts",
        "text compare",
        "difference checker",
      ],
    },
    info: {
      description:
        "Text Diff Checker compares two versions of text and highlights exactly what changed—added lines, removed lines, and modified sections. It’s like a lightweight “git diff” for the browser, useful when you’re reviewing config changes, comparing API responses, checking generated files, or proofreading content edits. Paste your original text on the left, updated text on the right, and instantly see the difference output in a clear, readable format.",
      howToUse: [
        "Paste the original text into the left editor",
        "Paste the updated text into the right editor",
        "Click “Compare Texts” to generate differences",
        "Review additions/removals/changes in the diff output",
        "Copy results if you need to share or document changes",
      ],
      useCases: [
        "Compare code snippets when you don’t have git available",
        "Review .env or config changes before deploying",
        "Compare JSON/YAML outputs to spot unexpected differences",
        "Proofread document revisions and policy updates",
        "Verify generated content changes (templates, builds, exports)",
        "Check marketing/SEO copy changes across A/B variations",
      ],
      features: [
        "Side-by-side layout for fast visual comparison",
        "Highlights added, removed, and changed lines clearly",
        "Works with code, configs, JSON, YAML, Markdown, and plain text",
        "Good for quick reviews and manual merges",
        "Runs locally in your browser (no uploads)",
      ],
    },
    examples: [
      {
        title: "Simple text change",
        input:
          "Hello World\nThis is line 2\nThis is line 3|||Hello World\nThis is line 2 modified\nThis is line 3",
        description: "Identify a small edit between two versions",
      },
      {
        title: "Compare code snippet changes",
        input:
          "function hello() {\n  console.log('Hello');\n}|||function hello() {\n  console.log('Hello World');\n  return true;\n}",
        description: "See exactly what changed in a function implementation",
      },
      {
        title: "Document version comparison",
        input:
          "Version 1.0\nFeature A\nFeature B|||Version 2.0\nFeature A\nFeature B\nFeature C",
        description: "Spot additions between two document versions",
      },
      {
        title: "Compare env/config values",
        input:
          "PORT=3000\nMODE=production\nLOG=true|||PORT=4000\nMODE=production\nLOG=false",
        description: "Catch value changes before rollout",
      },
    ],
    faq: [
      {
        question: "What is a text diff checker?",
        answer:
          "A text diff checker compares two text inputs and highlights differences such as additions, deletions, and edits.",
      },
      {
        question: "Is this similar to git diff?",
        answer:
          "Yes—conceptually. It shows what changed between two versions, but in a quick browser UI without needing a repository.",
      },
      {
        question: "Can I compare code and config files?",
        answer:
          "Yes. It works well with code, JSON, YAML, Markdown, and .env/config text because it preserves line structure.",
      },
      {
        question: "Why do I see differences when text looks identical?",
        answer:
          "Hidden whitespace, line endings, or tabs can create diffs. Try trimming or normalizing formatting to confirm.",
      },
      {
        question: "Does the diff checker store my text?",
        answer:
          "No. It runs locally in your browser—your input isn’t uploaded.",
      },
    ],
    relatedTools: [
      "case-converter",
      "regex-tester",
      "markdown-html-converter",
      "json-formatter",
      "json-to-yaml",
      "yaml-to-json",
    ],
    ui: {
      inputPlaceholder: "Paste the first text...",
      outputPlaceholder: "Diff results will appear here...",
      inputLabel: "Original Text",
      outputLabel: "Diff Output",
      convertLabel: "Compare Texts",
    },
    switcher: {
      enabled: true,
      mode: "category",
      showAllLink: true,
      preserveInput: false,
    },
  },

  {
    id: "regex-tester",
    slug: "regex-tester",
    name: "Regex Tester (Live Matches & Groups)",
    description:
      "Test regular expressions with live matching, highlighted results, and capture group extraction — ideal for validation and parsing",
    category: "text",
    type: "converter",
    keywords: [
      "regex tester",
      "regular expression tester",
      "regexp tester",
      "test regex",
      "regex match",
      "capture groups",
    ],
    metadata: {
      title: "Regex Tester Online (Live Match & Capture Groups)",
      description:
        "Test regex patterns with live matches, capture groups, and flags (g/i/m). Debug validation and parsing fast in your browser.",
      keywords: [
        "regex tester",
        "test regular expression",
        "regexp tester",
        "regex debugger",
        "capture group tester",
      ],
    },
    info: {
      description:
        "Regex Tester helps you build, test, and debug regular expressions against real text with immediate feedback. Regular expressions are used for input validation, parsing logs, extracting IDs, cleaning text, and search/replace automation. This tool shows highlighted matches, supports common flags, and displays captured groups so you can confirm exactly what your pattern is matching (and what it isn’t). Use it when a regex fails in production, matches too much, or behaves differently than expected.",
      howToUse: [
        "Enter your regex pattern (and flags, if applicable)",
        "Paste the text you want to test against",
        "Run “Test Regex” to see matches and groups",
        "Adjust the pattern until matching is correct",
        "Copy the working pattern into your codebase or editor",
      ],
      useCases: [
        "Validate emails, usernames, slugs, IDs, and passwords with regex",
        "Extract values from logs (request IDs, timestamps, IPs, errors)",
        "Parse URLs and query parameters",
        "Build safe search-and-replace rules for editors and scripts",
        "Debug regex edge cases like multiline input or greedy matching",
        "Create capture groups for replacements and transformations",
      ],
      features: [
        "Live match feedback with highlighted output",
        "Capture group extraction for each match",
        "Supports common regex flags (g, i, m)",
        "Works great for JavaScript/TypeScript regex workflows",
        "Fast local processing (no uploads)",
      ],
    },
    examples: [
      {
        title: "Email validation pattern",
        input:
          "/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/\n\njohn@example.com\ninvalid-email\njane.doe@company.io",
        description: "Test which lines match a basic email regex",
      },
      {
        title: "Extract numbers globally",
        input:
          "/\\d+/g\n\nOrder #123 shipped on 2025-10-02. Invoice 999 total: 49.90",
        description: "Find all numeric values using the global flag",
      },
      {
        title: "Capture groups (first and last name)",
        input: "/^(\\w+)\\s(\\w+)$/\n\nJohn Doe\nAlice Smith\nSingleName",
        description: "Validate and extract groups from two-word names",
      },
      {
        title: "Find URLs inside text",
        input:
          "/https?:\\/\\/(www\\.)?[^\\s/$.?#].[^\\s]*/g\n\nVisit https://example.com and http://test.io/page",
        description: "Detect URLs and verify the pattern is not too greedy",
      },
    ],
    faq: [
      {
        question: "What is a regex tester used for?",
        answer:
          "A regex tester lets you verify how a pattern matches real input, so you can debug validation and extraction rules before using them in code.",
      },
      {
        question: "What are capture groups in regex?",
        answer:
          "Capture groups are parentheses in a pattern (like (\\w+)) that let you extract parts of a match for parsing and replacements.",
      },
      {
        question: "What do regex flags g, i, and m mean?",
        answer:
          "g finds all matches, i ignores case, and m enables multiline behavior for ^ and $ anchors.",
      },
      {
        question: "Why is my regex not matching?",
        answer:
          "Common issues include missing escapes, incorrect anchors, wrong flags, hidden whitespace, or greedy patterns consuming unexpected parts of the text.",
      },
      {
        question: "Is this regex tester compatible with JavaScript regex?",
        answer:
          "Yes. It’s designed for JavaScript-style regex patterns and flags, making it ideal for JS/TS debugging.",
      },
    ],
    relatedTools: [
      "diff-checker",
      "case-converter",
      "markdown-html-converter",
      "json-formatter",
      "url-encode-decode",
      "html-escape-unescape",
    ],
    ui: {
      inputPlaceholder: "Paste the text you want to test...",
      outputPlaceholder: "Matches and groups will appear here...",
      inputLabel: "Test Text",
      outputLabel: "Regex Results",
      convertLabel: "Test Regex",
    },
  },

  {
    id: "markdown-html-converter",
    slug: "markdown-html-converter",
    name: "Markdown to HTML / HTML to Markdown Converter",
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
        "Markdown ↔ HTML Converter helps you switch between Markdown syntax and HTML markup without rewriting content manually. Markdown is popular for README files, wikis, and documentation because it’s simple to write, while HTML is the standard format for rendering web pages and rich content. Use this converter to migrate articles, generate HTML for a site, convert HTML from a CMS into editable Markdown, and keep documentation workflows fast and consistent.",
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
  },
]
