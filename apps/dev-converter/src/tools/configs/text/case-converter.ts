import { Tool } from "@/lib/tools/types";

/**
 * Case Converter Tool Configuration
 * 
 * Converts text between various naming conventions and case styles.
 * Supports camelCase, PascalCase, snake_case, kebab-case, CONSTANT_CASE, and Title Case.
 * Essential for code refactoring, API field naming, URL slugs, and standardizing identifiers.
 */
export const caseConverterTool: Tool = {
  id: "case-converter",
  slug: "case-converter",
  name: "Case Converter",
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
      question: "PascalCase vs camelCase — what's the difference?",
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
};
