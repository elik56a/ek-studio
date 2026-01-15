import { Tool } from "@/lib/tools/types";

/**
 * Password Generator Tool Configuration
 * 
 * Generates strong random passwords using cryptographically secure randomness.
 * Supports customizable length and character sets (uppercase, lowercase, numbers, symbols).
 * Essential for creating unique, high-entropy passwords for secure account creation.
 * Uses browser's crypto API for secure random generation.
 */
export const passwordGeneratorTool: Tool = {
  id: "password-generator",
  slug: "password-generator",
  name: "Password Generator",
  description:
    "Generate strong random passwords with custom length, symbols, numbers, and mixed-case options — built for secure account creation",
  category: "security",
  type: "generator",
  keywords: [
    "password generator",
    "strong password",
    "random password",
    "secure password generator",
    "create password",
    "password creator",
  ],
  metadata: {
    title: "Strong Password Generator (Secure Random Passwords)",
    description:
      "Generate strong random passwords online with customizable length, uppercase/lowercase, numbers, and symbols. Runs locally for privacy.",
    keywords: [
      "password generator",
      "strong password generator",
      "secure password generator",
      "random password generator",
      "create strong password",
    ],
  },
  info: {
    description:
      "Strong Password Generator creates high-entropy passwords using cryptographically secure randomness. Long, unique passwords reduce risk from brute-force attempts, credential stuffing, and reused-password breaches. Choose your length and character rules (uppercase, lowercase, numbers, symbols) to match site requirements, then generate a password you can store in a password manager. Password creation runs in your browser, so you can generate secure passwords without sending data to a server.",
    howToUse: [
      "Choose a length (16+ characters is a strong default)",
      "Enable character sets: uppercase, lowercase, numbers, symbols",
      "Click \"Generate Password\"",
      "Copy the password and save it in a password manager",
      "Use it for new accounts or to replace weak/reused passwords",
    ],
    useCases: [
      "Generate unique passwords for email, banking, and admin accounts",
      "Create compliant passwords for systems with length/character rules",
      "Replace weak or reused passwords after a breach",
      "Generate team tool credentials (store securely in a manager)",
      "Create long passwords for MFA-recovery and vault accounts",
    ],
    features: [
      "Cryptographically secure randomness (browser crypto API)",
      "Custom length and character selection",
      "Fast one-click generation and copy",
      "Designed for modern password hygiene (unique + long)",
      "Local generation for privacy",
    ],
  },
  examples: [
    {
      title: "Generate a strong default password (16 chars)",
      input: "Length: 16, Uppercase: Yes, Numbers: Yes, Symbols: Yes",
      description: "A strong default for most accounts and services",
    },
    {
      title: "Generate a password without symbols",
      input: "Length: 14, Uppercase: Yes, Numbers: Yes, Symbols: No",
      description: "Useful for legacy systems that reject special characters",
    },
    {
      title: "Generate a long password (24 chars)",
      input: "Length: 24, Uppercase: Yes, Numbers: Yes, Symbols: Yes",
      description: "Great for high-value accounts and admin dashboards",
    },
  ],
  faq: [
    {
      question: "Are the generated passwords truly random?",
      answer:
        "They're generated using the browser's cryptographic random generator (crypto.getRandomValues), which is suitable for creating strong passwords.",
    },
    {
      question: "How long should my password be?",
      answer:
        "A good baseline is 16+ characters. Use 20–24 characters for high-value accounts like email, password managers, and admin tools.",
    },
    {
      question: "Do symbols make passwords stronger?",
      answer:
        "Yes. Symbols increase the character set and reduce guessability. If a site blocks symbols, increase length instead.",
    },
    {
      question: "Is it safe to generate passwords online?",
      answer:
        "This tool generates passwords locally in your browser without sending data to a server. For storage and reuse, a password manager is still recommended.",
    },
    {
      question: "Should I change passwords frequently?",
      answer:
        "Modern best practice is to use long, unique passwords and enable MFA. Rotate passwords when there's suspected compromise or reuse risk.",
    },
  ],
  relatedTools: [
    "hash-generator",
    "uuid-generator",
    "jwt-decoder",
    "base64-encode-decode",
    "json-formatter",
    "url-encode-decode",
  ],
  ui: {
    inputPlaceholder: "",
    outputPlaceholder: "Generated password will appear here...",
    inputLabel: "",
    outputLabel: "Generated Password",
    convertLabel: "Generate Password",
  },
};
