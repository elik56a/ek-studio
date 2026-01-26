import { Tool } from "@/lib/tools/types"

/**
 * Text Diff Checker Tool Configuration
 *
 * Compare two texts side-by-side and highlight differences (adds/removes/edits).
 * Developer-friendly: great for code reviews, config diffs, API outputs, and docs.
 * Includes real-world examples, common pitfalls (whitespace/line endings), and best practices.
 */
export const diffCheckerTool: Tool = {
  id: "diff-checker",
  slug: "diff-checker",
  name: "Text Diff Checker",
  description:
    "Compare two texts side-by-side and highlight additions, deletions, edits, and whitespace changes — perfect for code, configs, JSON/YAML, and docs.",
  category: "text",
  type: "converter",
  order: 1,

  keywords: [
    "diff checker",
    "text diff checker",
    "text diff",
    "compare text",
    "compare two texts",
    "compare two strings",
    "difference checker",
    "side by side diff",
    "online diff tool",
    "git diff online",
    "compare files text",
    "compare json",
    "compare yaml",
    "compare config",
    "compare env files",
    "whitespace diff",
    "line ending diff",
    "unix windows line endings diff",
  ],

  metadata: {
    title: "Text Diff Checker (Side-by-Side Compare Two Texts Online)",
    description:
      "Compare two texts side-by-side and highlight changes line-by-line. Spot additions, deletions, edits, whitespace, and line ending differences — locally in your browser.",
    keywords: [
      "text diff checker",
      "diff checker",
      "compare two texts",
      "side by side diff",
      "difference checker",
      "compare text online",
      "whitespace diff",
      "line endings diff",
    ],
  },

  info: {
    description:
      "Text Diff Checker compares two versions of text and highlights exactly what changed—added lines, removed lines, and modified sections—similar to a lightweight browser-based “git diff”. It’s ideal for code reviews without a repo, comparing config changes before deployment, validating generated outputs, and proofreading document revisions. Paste the original text on the left and the updated text on the right to instantly see a clear, readable diff. Everything runs locally in your browser, so your content isn’t uploaded.",
    howToUse: [
      "Paste the original text into the left editor (Version A)",
      "Paste the updated text into the right editor (Version B)",
      'Click “Compare Texts” to generate the diff output',
      "Review highlights for additions, deletions, and modified lines",
      "If you see unexpected diffs, check whitespace and line endings (CRLF vs LF)",
      "Copy/share the diff results or use them to manually merge changes",
    ],
    useCases: [
      "Compare code snippets when you don’t have git access (or you’re reviewing a patch in chat/ticket)",
      "Review .env / config changes before deploying to production",
      "Compare JSON/YAML API outputs to find breaking changes or missing fields",
      "Validate generated files (codegen, templates, exports) across builds",
      "Proofread doc revisions, policy updates, and release notes changes",
      "Compare SEO/marketing copy versions in A/B experiments",
      "Spot whitespace-only differences that break tests or linters",
      "Check logs or stack traces differences between environments",
    ],
    features: [
      "Side-by-side comparison for quick visual scanning",
      "Highlights added, removed, and changed lines clearly",
      "Useful for code, JSON, YAML, Markdown, .env files, and plain text",
      "Helps catch whitespace diffs (spaces/tabs) and line ending differences",
      "Great for quick reviews and manual merges (without repositories)",
      "Local-only processing: runs in your browser (no uploads)",
      "Copy-friendly output for sharing in tickets, PRs, or docs",
    ],
  },

  // NOTE: Your examples use a "A|||B" convention to pack two texts into a single input.
  // Kept that, but added more practical examples and edge cases.
  examples: [
    {
      title: "Simple line edit (one line modified)",
      input:
        "Hello World\nThis is line 2\nThis is line 3|||Hello World\nThis is line 2 modified\nThis is line 3",
      description: "Identify a small edit between two versions.",
    },
    {
      title: "Add and remove lines (changelog style)",
      input:
        "v1.0\n- Add login\n- Fix navbar\n- Improve SEO|||v1.1\n- Add login\n- Improve SEO\n- Add rate limiting",
      description:
        "Spot removed items and newly added lines in a typical changelog.",
    },
    {
      title: "Compare a code snippet (function changes)",
      input:
        "function hello() {\n  console.log('Hello');\n}|||function hello() {\n  console.log('Hello World');\n  return true;\n}",
      description:
        "See exactly what changed in an implementation (content + new lines).",
    },
    {
      title: "Bugfix diff (guard clause + error handling)",
      input:
        "export function parse(input) {\n  return JSON.parse(input)\n}\n|||export function parse(input) {\n  if (!input) return null\n  try {\n    return JSON.parse(input)\n  } catch (e) {\n    return null\n  }\n}\n",
      description:
        "Catch subtle logic changes and added defensive code in reviews.",
    },
    {
      title: "Compare env/config values (.env)",
      input:
        "PORT=3000\nMODE=production\nLOG=true|||PORT=4000\nMODE=production\nLOG=false",
      description: "Catch value changes before rollout.",
    },
    {
      title: "YAML config diff (indentation matters)",
      input:
        "services:\n  api:\n    replicas: 2\n    image: acme/api:1.0.0\n|||services:\n  api:\n    replicas: 3\n    image: acme/api:1.0.1\n",
      description:
        "Great for deployment manifests where small changes have big effects.",
    },
    {
      title: "JSON response diff (API field added/removed)",
      input:
        '{"id":1,"name":"Alice","role":"user"}|||{"id":1,"name":"Alice","roles":["user"],"active":true}',
      description:
        "Detect breaking changes like renamed fields or type changes (role → roles array).",
    },
    {
      title: "Whitespace-only changes (tabs vs spaces)",
      input:
        "if (ok) {\n\treturn true\n}\n|||if (ok) {\n  return true\n}\n",
      description:
        "Hidden whitespace can break linting/tests; diff helps reveal tabs vs spaces.",
    },
    {
      title: "Line ending differences (Windows CRLF vs Unix LF)",
      input:
        "line1\r\nline2\r\nline3\r\n|||line1\nline2\nline3\n",
      description:
        "Detect CRLF vs LF differences that can cause noisy diffs in repos.",
    },
    {
      title: "Markdown doc comparison (content + headings)",
      input:
        "# Title\n\n- Item A\n- Item B\n|||# Title\n\n- Item A\n- Item B\n- Item C\n",
      description:
        "Quickly review doc edits and additions (docs, README, policies).",
    },
    {
      title: "Compare generated output (template placeholder changed)",
      input:
        "Hello {{name}},\nYour plan is {{plan}}.\n|||Hello {{name}},\nYour plan is {{tier}}.\n",
      description:
        "Catch template variable renames that break rendering at runtime.",
    },
    {
      title: "Logs diff (prod vs staging hint)",
      input:
        "INFO requestId=abc route=/api/users status=200\n|||INFO requestId=abc route=/api/users status=500 error=E_TIMEOUT\n",
      description:
        "Compare logs between environments to find what changed.",
    },
  ],

  faq: [
    {
      question: "What is a text diff checker?",
      answer:
        "A text diff checker compares two text inputs and highlights differences such as additions, deletions, and edits—usually line-by-line.",
    },
    {
      question: "Is this similar to git diff?",
      answer:
        "Yes, conceptually. It shows what changed between two versions, but it works directly in your browser without needing a repository.",
    },
    {
      question: "Can I compare code and config files (JSON/YAML/.env)?",
      answer:
        "Yes. Line-based diffs work great for code, JSON, YAML, Markdown, and .env files because they preserve structure and make changes easy to scan.",
    },
    {
      question: "Why do I see differences when the text looks identical?",
      answer:
        "Hidden whitespace (spaces vs tabs), trailing spaces, or different line endings (CRLF vs LF) can create diffs even when text looks the same.",
    },
    {
      question: "Does the diff checker store or upload my text?",
      answer:
        "No. It runs locally in your browser—your input isn’t uploaded to a server.",
    },
    {
      question: "How can I reduce noisy diffs from formatting changes?",
      answer:
        "Normalize formatting first (format JSON, run a code formatter, or normalize line endings) and then compare again to isolate real logic/content changes.",
    },
    {
      question: "Can this help me manually merge changes?",
      answer:
        "Yes. A side-by-side diff is great for copying small parts from Version B into Version A when you don’t have a merge tool available.",
    },
    {
      question: "What’s the best way to compare two JSON payloads?",
      answer:
        "Format both JSON payloads first (pretty print) so the structure is stable, then run a diff. This makes missing keys and type changes easy to spot.",
    },
  ],

  relatedTools: [
    "json-formatter",
    "json-validator",
    "json-minify",
    "json-to-yaml",
    "yaml-to-json",
    "regex-tester",
    "case-converter",
    "markdown-html-converter",
    "url-encode-decode",
  ],

  ui: {
    inputPlaceholder: "Paste the first text (Version A)…",
    outputPlaceholder: "Diff results will appear here…",
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
}
