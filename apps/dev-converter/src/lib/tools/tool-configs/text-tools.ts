import { Tool } from "../types"

export const textTools: Tool[] = [
  {
    id: "case-converter",
    slug: "case-converter",
    name: "Case Converter",
    description:
      "Convert text to different cases: camelCase, PascalCase, snake_case, and more",
    category: "text",
    type: "converter",
    keywords: ["case", "convert", "camel", "pascal", "snake", "kebab"],
    metadata: {
      title: "Case Converter - Convert Text Cases Online",
      description:
        "Free online case converter. Convert text to camelCase, PascalCase, snake_case, kebab-case, and more formats.",
      keywords: [
        "case converter",
        "camelcase converter",
        "snake case converter",
        "text converter",
      ],
    },
    info: {
      description:
        "A case converter is a text utility that transforms your text into different naming conventions such as camelCase, PascalCase, snake_case, kebab-case, CONSTANT_CASE, Title Case, and more. Developers and content creators use case conversion daily to standardize variable names, function names, API fields, file names, and URL slugs. Instead of manually editing capitalization and separators, this online case converter makes it instant and error-free. It helps ensure consistent naming conventions across codebases, databases, documentation, and SEO-friendly URLs.",
      howToUse: [
        "Paste or type your text into the input field",
        "Select the desired case format (camelCase, snake_case, PascalCase, kebab-case, etc.)",
        "The tool will instantly convert your text into the selected case",
        "Copy the converted text using the copy button",
        "Use the result in your code, database, API fields, file names, or URLs",
      ],
      useCases: [
        "Convert variable names: Quickly turn plain text into camelCase for JavaScript variables",
        "Convert database columns: Convert field names into snake_case for SQL schemas",
        "Generate SEO slugs: Convert headings into kebab-case for clean URL paths",
        "Rename files: Convert strings into file-system friendly formats like kebab-case",
        "Standardize APIs: Convert object keys into consistent naming conventions",
        "Refactor code: Convert old naming styles into new naming rules during migrations",
      ],
      features: [
        "Supports Multiple Naming Styles: camelCase, PascalCase, snake_case, kebab-case, CONSTANT_CASE and more",
        "Instant Conversion: Convert text cases immediately without clicking extra buttons",
        "Preserves Word Structure: Detects spaces, underscores, hyphens, and capitalization changes intelligently",
        "Developer Friendly Output: Perfect formatting for code, databases, and APIs",
        "One-Click Copy: Copy converted output instantly",
        "Privacy First: Runs locally in your browser — no text is sent to servers",
      ],
    },
    examples: [
      {
        title: "Convert to camelCase",
        input: "hello world example",
        description: "Convert text to camelCase format",
      },
      {
        title: "Convert to snake_case",
        input: "HelloWorldExample",
        description: "Convert PascalCase to snake_case",
      },
      {
        title: "Convert to kebab-case",
        input: "my_variable_name",
        description: "Convert snake_case to kebab-case",
      },
      {
        title: "Convert to CONSTANT_CASE",
        input: "max value size",
        description: "Convert plain text into CONSTANT_CASE for constants",
      },
    ],
    faq: [
      {
        question: "What is a case converter and why is it useful?",
        answer:
          "A case converter is a text tool that transforms your text into formats like camelCase, snake_case, PascalCase, and kebab-case. It's useful for developers when naming variables, functions, file names, and database fields consistently.",
      },
      {
        question: "What is camelCase and when should I use it?",
        answer:
          "camelCase is a naming style where the first word is lowercase and each following word starts with a capital letter (e.g., myVariableName). It's commonly used in JavaScript, TypeScript, and many programming languages for variables and functions.",
      },
      {
        question: "What is snake_case and where is it commonly used?",
        answer:
          "snake_case uses lowercase words separated by underscores (e.g., my_variable_name). It's commonly used in Python, Ruby, database column names, and REST API fields.",
      },
      {
        question: "What's the difference between PascalCase and camelCase?",
        answer:
          "PascalCase starts with an uppercase letter (MyClassName) and is often used for class names. camelCase starts with a lowercase letter (myVariableName) and is typically used for variables and functions.",
      },
      {
        question: "What is kebab-case and where should I use it?",
        answer:
          "kebab-case uses lowercase words separated by hyphens (e.g., my-file-name). It's widely used in URLs, SEO-friendly slugs, and file names because it reads naturally and is web-safe.",
      },
    ],
    relatedTools: ["diff-checker", "regex-tester", "markdown-html-converter", "json-formatter", "url-encode-decode", "html-escape-unescape"],
    ui: {
      inputPlaceholder: "Enter text to convert case...",
      outputPlaceholder: "Converted text will appear here...",
      inputLabel: "Text Input",
      outputLabel: "Converted Text",
      convertLabel: "Convert Case",
    },
  },

  {
    id: "diff-checker",
    slug: "diff-checker",
    name: "Text Diff Checker",
    description:
      "Compare two texts side-by-side and highlight differences line by line",
    category: "text",
    type: "converter",
    keywords: ["diff", "compare", "difference", "text", "merge", "changes"],
    metadata: {
      title: "Text Diff Checker - Compare Text Differences Online",
      description:
        "Free online text diff checker. Compare two texts side-by-side and highlight differences with detailed line-by-line analysis.",
      keywords: [
        "diff checker",
        "text compare",
        "difference checker",
        "text diff",
        "compare texts",
      ],
    },
    info: {
      description:
        "A text diff checker is a tool that compares two versions of text and highlights the differences between them, including additions, deletions, and modified lines. It works similarly to git diff, but in a fast browser-based format. Developers, writers, QA engineers, and DevOps teams use diff tools to compare code changes, configuration files, documentation revisions, and content updates. This online diff checker helps you quickly identify exactly what changed between two texts, making reviews easier and preventing mistakes during deployments or edits.",
      howToUse: [
        "Paste the original text into the left input box",
        "Paste the updated text into the right input box",
        "Click Compare Texts to generate the diff output",
        "Review highlighted additions, removals, and changed lines",
        "Copy or export the results if needed for review or documentation",
      ],
      useCases: [
        "Code Reviews: Compare code snippets to understand what changed between versions",
        "Document Editing: Compare drafts and revisions of documentation, contracts, or articles",
        "Config Validation: Compare .env and config files to spot incorrect settings before deployment",
        "Debugging: Compare API responses or JSON outputs to detect unexpected differences",
        "Copywriting: Compare landing page text changes for SEO and marketing experiments",
        "Merge Conflicts: Understand differences between two blocks of text before merging manually",
      ],
      features: [
        "Side-by-Side Comparison: Compare original and modified text in parallel view",
        "Line-by-Line Highlighting: Shows added, removed, and changed lines clearly",
        "Developer Friendly: Works with code, JSON, YAML, config files, and any text format",
        "Fast and Accurate Diffing: Instant output for quick change detection",
        "One-Click Copy: Copy results for reporting or documentation",
        "Privacy First: Comparison happens locally in your browser — no uploads",
      ],
    },
    examples: [
      {
        title: "Simple text comparison",
        input:
          "Hello World\nThis is line 2\nThis is line 3|||Hello World\nThis is line 2 modified\nThis is line 3",
        description: "Compare two similar texts with minor changes",
      },
      {
        title: "Code comparison",
        input:
          "function hello() {\n  console.log('Hello');\n}|||function hello() {\n  console.log('Hello World');\n  return true;\n}",
        description: "Compare code snippets to see modifications",
      },
      {
        title: "Document versions",
        input:
          "Version 1.0\nFeature A\nFeature B|||Version 2.0\nFeature A\nFeature B\nFeature C",
        description: "Compare different versions of a document",
      },
      {
        title: "Compare configuration changes",
        input:
          "PORT=3000\nMODE=production\nLOG=true|||PORT=4000\nMODE=production\nLOG=false",
        description:
          "Compare .env or config files to quickly spot changed values",
      },
    ],
    faq: [
      {
        question: "What is a text diff checker?",
        answer:
          "A text diff checker compares two blocks of text and highlights differences such as additions, deletions, and changes. It's useful for comparing file versions, documents, and code.",
      },
      {
        question: "How does the diff checker highlight changes?",
        answer:
          "The tool compares the two texts line by line and marks differences visually. Added lines appear as additions, removed lines show as deletions, and unchanged lines remain neutral for easy review.",
      },
      {
        question: "Can I use this tool to compare code?",
        answer:
          "Yes. This tool works well for comparing code snippets, JSON, config files, markdown, and any text format. It preserves spacing and indentation, making it useful for programming work.",
      },
      {
        question: "Is this similar to git diff?",
        answer:
          "Yes. The diff checker works similarly to git diff by showing what has changed between two versions. It’s helpful when you don’t have access to git or need a fast browser-based comparison.",
      },
      {
        question: "What are common use cases for diff checking?",
        answer:
          "Common use cases include reviewing document edits, comparing website copy, validating config changes, checking JSON differences, and ensuring code refactors didn’t introduce unintended changes.",
      },
    ],
    relatedTools: ["case-converter", "regex-tester", "markdown-html-converter", "json-formatter", "json-to-yaml", "yaml-to-json"],
    ui: {
      inputPlaceholder: "Enter first text to compare...",
      outputPlaceholder: "Differences will be highlighted here...",
      inputLabel: "Original Text",
      outputLabel: "Comparison Result",
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
    name: "Regex Tester",
    description:
      "Test regular expressions with live matching and group extraction",
    category: "text",
    type: "converter",
    keywords: ["regex", "regexp", "pattern", "match", "test"],
    metadata: {
      title: "Regex Tester - Test Regular Expressions Online",
      description:
        "Free online regex tester. Test regular expressions with live matching, group extraction, and detailed results.",
      keywords: [
        "regex tester",
        "regexp tester",
        "regular expression",
        "pattern matcher",
      ],
    },
    info: {
      description:
        "A regex tester is an online tool that helps you test, debug, and validate regular expressions (regex) against real text input. Regular expressions are used for searching, matching, extracting, validating, and replacing text patterns in programming languages like JavaScript, Python, Java, PHP, and many more. This regex tester provides live matching, highlights results, shows captured groups, supports common regex flags like g, i, and m, and helps you quickly build correct patterns without wasting time. It’s essential for developers working with validation, parsing, scraping, data extraction, and text processing.",
      howToUse: [
        "Paste your regex pattern into the regex input field (including flags like /pattern/g)",
        "Paste your test text in the text input area",
        "Click Test Regex to run matching and preview results",
        "View highlighted matches and capture groups in the output",
        "Adjust the pattern or flags until the regex behaves as expected",
      ],
      useCases: [
        "Validate User Input: Test patterns for email validation, phone validation, usernames, and passwords",
        "Extract Data: Capture numbers, IDs, names, and fields from logs or text files",
        "Debug Regex Bugs: Quickly understand why your regex isn’t matching or matches too much",
        "Parse URLs: Match and extract domain names, query strings, and paths",
        "Log Analysis: Extract values from server logs and structured messages",
        "Replace and Cleanup: Build regexes used for search-and-replace in code editors and scripts",
      ],
      features: [
        "Live Matching: Instantly see matches as you update the pattern or text",
        "Capture Group Extraction: Preview group values for each match",
        "Supports Regex Flags: Works with g, i, m and standard JavaScript-style syntax",
        "Highlighting Output: Matches are visually highlighted for fast debugging",
        "Developer Friendly: Great for JavaScript, TypeScript, and general regex testing",
        "Privacy First: Runs locally in your browser — no text is uploaded",
      ],
    },
    examples: [
      {
        title: "Validate email addresses",
        input:
          "/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/\n\njohn@example.com\ninvalid-email\njane.doe@company.io",
        description:
          "Test a regex to validate email formats and see which lines match",
      },
      {
        title: "Extract numbers from text",
        input:
          "/\\d+/g\n\nOrder #123 shipped on 2025-10-02. Invoice 999 total: 49.90",
        description:
          "Match all numeric values and verify global matches are detected",
      },
      {
        title: "Capture groups (first + last name)",
        input: "/^(\\w+)\\s(\\w+)$/\n\nJohn Doe\nAlice Smith\nSingleName",
        description:
          "Test capture groups and preview extracted group values per match",
      },
      {
        title: "Match URLs",
        input:
          "/https?:\\/\\/(www\\.)?[^\\s/$.?#].[^\\s]*/g\n\nVisit https://example.com and http://test.io/page",
        description:
          "Detect URLs inside text and validate your URL pattern works",
      },
    ],
    faq: [
      {
        question: "What is a regex tester and why do I need one?",
        answer:
          "A regex tester helps you test and debug regular expressions quickly. It shows live matches, capture groups, and allows you to validate patterns before using them in code, search, or validation rules.",
      },
      {
        question: "What are capture groups in regular expressions?",
        answer:
          "Capture groups are parts of a regex wrapped in parentheses ( ). They let you extract specific sections of a match, such as a username, domain, or number, which is essential for parsing and replacements.",
      },
      {
        question: "How do regex flags like g, i, and m work?",
        answer:
          "Regex flags modify how matching behaves. 'g' finds all matches, 'i' ignores case sensitivity, and 'm' enables multiline matching where ^ and $ apply to each line instead of the whole text.",
      },
      {
        question: "Why is my regex not matching anything?",
        answer:
          "Common causes include missing escaping (like \\d or \\.), incorrect anchors (^ or $), not using the correct flags, or testing against text that includes hidden whitespace or line breaks.",
      },
      {
        question: "Can I use this tool for regex validation in JavaScript?",
        answer:
          "Yes. This tester is ideal for JavaScript and TypeScript regex debugging. You can test patterns exactly as you would write them in JS, including flags, groups, and global searches.",
      },
    ],
    relatedTools: ["diff-checker", "case-converter", "markdown-html-converter", "json-formatter", "url-encode-decode", "html-escape-unescape"],
    ui: {
      inputPlaceholder: "Enter text to test against regex...",
      outputPlaceholder: "Regex matches will appear here...",
      inputLabel: "Test Text",
      outputLabel: "Match Results",
      convertLabel: "Test Regex",
    },
  },

  {
    id: "markdown-html-converter",
    slug: "markdown-html-converter",
    name: "Markdown ↔ HTML Converter",
    description: "Convert between Markdown and HTML formats with split view",
    category: "text",
    type: "converter",
    keywords: ["markdown", "html", "convert", "md"],
    metadata: {
      title: "Markdown HTML Converter - Convert Markdown to HTML Online",
      description:
        "Free online Markdown to HTML converter. Convert between Markdown and HTML formats with split view preview.",
      keywords: [
        "markdown to html",
        "html to markdown",
        "md converter",
        "markdown converter",
      ],
    },
    info: {
      description:
        "A Markdown ↔ HTML converter transforms content between Markdown syntax and HTML markup. Markdown is widely used for documentation, README files, blogging platforms, and note-taking because it is easy to write and read. HTML is the standard format for web rendering and full layout control. This tool lets you instantly convert Markdown to HTML or HTML back to Markdown, making it useful for content migration, documentation workflows, blogging, CMS editing, and developer documentation. It supports common Markdown features such as headers, lists, links, images, code blocks, and tables.",
      howToUse: [
        "Paste Markdown or HTML into the input field",
        "Select the conversion direction (Markdown → HTML or HTML → Markdown)",
        "Click Convert to generate the output instantly",
        "Review the converted output and verify formatting",
        "Copy the result and use it in your docs, CMS, or web project",
      ],
      useCases: [
        "Documentation: Convert Markdown docs into HTML for websites and portals",
        "Content Migration: Convert HTML articles into Markdown for GitHub, Notion, or Markdown editors",
        "Blogging: Convert Markdown drafts into HTML for publishing platforms",
        "Markdown Editors: Generate HTML previews or embed HTML output into templates",
        "Web Development: Convert Markdown input into HTML content for rendering",
        "Clean Formatting: Convert messy HTML into simplified Markdown for easy editing",
      ],
      features: [
        "Two-Way Conversion: Convert Markdown to HTML and HTML to Markdown",
        "Supports Common Markdown: Headers, lists, links, bold, italic, images, code blocks, and tables",
        "Clean Output Formatting: Produces readable HTML and markdown results",
        "Split View Friendly: Ideal for preview workflows and live editing",
        "One-Click Copy: Copy converted content instantly",
        "Privacy First: Works locally in your browser without uploading text",
      ],
    },
    examples: [
      {
        title: "Convert Markdown to HTML",
        input:
          "# Hello World\n\nThis is **bold** text and this is *italic*.\n\n- Item 1\n- Item 2",
        description:
          "Convert a Markdown document into HTML while preserving formatting",
      },
      {
        title: "Convert HTML to Markdown",
        input:
          "<h1>Hello World</h1><p>This is <strong>bold</strong> text.</p><ul><li>Item 1</li><li>Item 2</li></ul>",
        description:
          "Convert HTML output back into clean Markdown for documentation",
      },
      {
        title: "Convert Markdown links and images",
        input:
          "Check this out: [OpenAI](https://openai.com)\n\n![Logo](https://example.com/logo.png)",
        description: "Convert Markdown links and images into valid HTML tags",
      },
      {
        title: "Convert Markdown tables",
        input: "| Name | Age |\n|------|-----|\n| John | 30 |\n| Alice | 25 |",
        description:
          "Convert Markdown tables into HTML table markup automatically",
      },
    ],
    faq: [
      {
        question: "What is a Markdown to HTML converter?",
        answer:
          "A Markdown to HTML converter transforms Markdown syntax into valid HTML markup. This is useful for blogs, documentation, GitHub README files, and websites that store content as Markdown.",
      },
      {
        question: "Can I convert HTML back to Markdown?",
        answer:
          "Yes. This tool supports converting HTML back into Markdown, which is useful when migrating content from websites into docs, wikis, or markdown-based editors.",
      },
      {
        question: "Does the converter support tables, code blocks, and lists?",
        answer:
          "Yes. The converter supports common Markdown features including headers, lists, bold/italic formatting, code blocks, inline code, links, images, and Markdown tables.",
      },
      {
        question: "Why does my converted HTML look different than expected?",
        answer:
          "Markdown can have multiple valid interpretations depending on the parser rules. Differences may happen in whitespace, nested formatting, or unsupported syntax. Try simplifying your input to isolate the issue.",
      },
      {
        question: "When should I use Markdown instead of HTML?",
        answer:
          "Use Markdown when you want easy-to-write, readable formatting for documentation or content creation. Use HTML when you need full control over structure, attributes, and advanced layouts.",
      },
    ],
    relatedTools: ["html-escape-unescape", "case-converter", "diff-checker", "regex-tester", "json-formatter", "url-encode-decode"],
    ui: {
      inputPlaceholder: "Enter Markdown or HTML...",
      outputPlaceholder: "Converted output will appear here...",
      inputLabel: "Input",
      outputLabel: "Converted Output",
      convertLabel: "Convert",
    },
  },
]
