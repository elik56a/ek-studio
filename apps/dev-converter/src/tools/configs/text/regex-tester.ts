import { Tool } from "@/lib/tools/types"

/**
 * Regex Tester Tool Configuration
 *
 * Tests regular expressions with live matching and capture group extraction.
 * Supports common regex flags (g, i, m) and highlights matches in real-time.
 * Essential for validation patterns, parsing, and debugging regex edge cases.
 */
export const regexTesterTool: Tool = {
  id: "regex-tester",
  slug: "regex-tester",
  name: "Regex Tester",
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
      "Regex Tester helps you build, test, and debug regular expressions against real text with immediate feedback. Regular expressions are used for input validation, parsing logs, extracting IDs, cleaning text, and search/replace automation. This tool shows highlighted matches, supports common flags, and displays captured groups so you can confirm exactly what your pattern is matching (and what it isn't). Use it when a regex fails in production, matches too much, or behaves differently than expected.",
    howToUse: [
      "Enter your regex pattern (and flags, if applicable)",
      "Paste the text you want to test against",
      'Run "Test Regex" to see matches and groups',
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
        "Yes. It's designed for JavaScript-style regex patterns and flags, making it ideal for JS/TS debugging.",
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
}
