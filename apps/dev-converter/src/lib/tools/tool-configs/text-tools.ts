import { ComingSoonPlaceholder } from "@/components/coming-soon-placeholder"
import CaseConverterTool from "@/components/tools/case-converter"

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
    ],
    faq: [
      {
        question: "What is camelCase?",
        answer:
          "camelCase is a naming convention where the first word is lowercase and subsequent words start with uppercase letters, with no spaces or separators (e.g., myVariableName).",
      },
      {
        question: "When should I use snake_case?",
        answer:
          "snake_case is commonly used in Python, Ruby, and database column names. Words are lowercase and separated by underscores (e.g., my_variable_name).",
      },
      {
        question: "What's the difference between PascalCase and camelCase?",
        answer:
          "PascalCase (also called UpperCamelCase) starts with an uppercase letter, while camelCase starts with a lowercase letter. PascalCase is often used for class names.",
      },
      {
        question: "What is CONSTANT_CASE?",
        answer:
          "CONSTANT_CASE uses all uppercase letters with underscores separating words. It's commonly used for constants in many programming languages (e.g., MAX_VALUE).",
      },
    ],
    relatedTools: ["diff-checker", "regex-tester"],
    ui: {
      inputPlaceholder: "Enter text to convert case...",
      outputPlaceholder: "Converted text will appear here...",
      inputLabel: "Text Input",
      outputLabel: "Converted Text",
      convertLabel: "Convert Case",
    },
    component: CaseConverterTool,
  },
  {
    id: "diff-checker",
    slug: "diff-checker",
    name: "Diff Checker",
    description: "Compare two texts side-by-side and highlight differences",
    category: "text",
    type: "converter",
    keywords: ["diff", "compare", "difference", "text"],
    metadata: {
      title: "Diff Checker - Compare Text Differences Online",
      description:
        "Free online diff checker. Compare two texts side-by-side and highlight differences with detailed analysis.",
      keywords: [
        "diff checker",
        "text compare",
        "difference checker",
        "text diff",
      ],
    },
    examples: [],
    faq: [],
    relatedTools: ["case-converter", "regex-tester"],
    ui: {
      inputPlaceholder: "Enter first text to compare...",
      outputPlaceholder: "Differences will be highlighted here...",
      inputLabel: "Text 1",
      outputLabel: "Comparison Result",
      convertLabel: "Compare",
    },
    component: ComingSoonPlaceholder,
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
    examples: [],
    faq: [],
    relatedTools: ["diff-checker", "case-converter"],
    ui: {
      inputPlaceholder: "Enter text to test against regex...",
      outputPlaceholder: "Regex matches will appear here...",
      inputLabel: "Test Text",
      outputLabel: "Match Results",
      convertLabel: "Test Regex",
    },
    component: ComingSoonPlaceholder,
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
    examples: [],
    faq: [],
    relatedTools: ["html-escape-unescape", "case-converter"],
    ui: {
      inputPlaceholder: "Enter Markdown or HTML...",
      outputPlaceholder: "Converted output will appear here...",
      inputLabel: "Input",
      outputLabel: "Converted Output",
      convertLabel: "Convert",
    },
    component: ComingSoonPlaceholder,
  },
]
