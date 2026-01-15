import { Tool } from "@/lib/tools/types";

/**
 * Text Diff Checker Tool Configuration
 * 
 * Compares two texts side-by-side and highlights differences.
 * Shows additions, deletions, and modifications line-by-line.
 * Essential for code reviews, config changes, document comparisons, and debugging.
 */
export const diffCheckerTool: Tool = {
  id: "diff-checker",
  slug: "diff-checker",
  name: "Text Diff Checker",
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
      "Text Diff Checker compares two versions of text and highlights exactly what changed—added lines, removed lines, and modified sections. It's like a lightweight \"git diff\" for the browser, useful when you're reviewing config changes, comparing API responses, checking generated files, or proofreading content edits. Paste your original text on the left, updated text on the right, and instantly see the difference output in a clear, readable format.",
    howToUse: [
      "Paste the original text into the left editor",
      "Paste the updated text into the right editor",
      "Click \"Compare Texts\" to generate differences",
      "Review additions/removals/changes in the diff output",
      "Copy results if you need to share or document changes",
    ],
    useCases: [
      "Compare code snippets when you don't have git available",
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
        "No. It runs locally in your browser—your input isn't uploaded.",
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
};
