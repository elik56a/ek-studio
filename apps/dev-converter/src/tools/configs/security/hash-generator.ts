import { Tool } from "@/lib/tools/types";

/**
 * Hash Generator Tool Configuration
 * 
 * Generates cryptographic hashes (MD5, SHA-256, SHA-384, SHA-512) from text input.
 * Used for checksums, integrity verification, fingerprinting, and detecting content changes.
 * Hashing is one-way and deterministic - same input always produces the same hash.
 */
export const hashGeneratorTool: Tool = {
  id: "hash-generator",
  slug: "hash-generator",
  name: "Hash Generator",
  description:
    "Generate MD5, SHA-256, SHA-384, and SHA-512 hashes from text for checksums, integrity checks, and fingerprints",
  category: "security",
  type: "converter",
  keywords: [
    "hash generator",
    "md5 hash",
    "sha256 hash",
    "sha512 hash",
    "checksum",
    "text hash",
    "data integrity",
  ],
  metadata: {
    title: "Hash Generator: MD5, SHA-256, SHA-384, SHA-512",
    description:
      "Generate MD5, SHA-256, SHA-384, and SHA-512 hashes online. Create checksums, compare outputs, and verify text integrity locally in your browser.",
    keywords: [
      "hash generator",
      "md5 generator",
      "sha256 generator",
      "sha512 generator",
      "checksum generator",
      "text to hash",
    ],
  },
  info: {
    description:
      "Hash Generator creates deterministic cryptographic hashes from any text input using MD5, SHA-256, SHA-384, and SHA-512. Hashes are fixed-length fingerprints used to verify integrity, detect changes, compare values, and generate checksums. Unlike encryption, hashing is one-way: you can't reconstruct the original input from the hash. Use this tool to compare expected vs actual checksums, create stable fingerprints for strings, or quickly validate that content hasn't changed during copy/paste, builds, or deployments.",
    howToUse: [
      "Paste the text you want to hash",
      "Click \"Generate Hashes\"",
      "Copy MD5, SHA-256, SHA-384, or SHA-512 output",
      "Compare hashes to verify whether two inputs match exactly",
      "Use the checksum in scripts, CI checks, or documentation",
    ],
    useCases: [
      "Generate checksums for quick text integrity verification",
      "Compare two values by hashing them (detect tiny differences)",
      "Create stable fingerprints for config strings and environment values",
      "Debug mismatched hashes in pipelines or build steps",
      "Prepare message digests for signing workflows (hash-then-sign)",
    ],
    features: [
      "MD5, SHA-256, SHA-384, and SHA-512 in one click",
      "Deterministic outputs (same input → same hash)",
      "Fast hashing for developer workflows",
      "One-click copy for each algorithm",
      "Local processing (no uploads)",
    ],
  },
  examples: [
    {
      title: "Hash a short string",
      input: "hello-world",
      description: "Generate multiple hashes for the same input to compare algorithms",
    },
    {
      title: "Hash JSON text for integrity checks",
      input: '{"userId":123,"action":"login","timestamp":1704537600}',
      description: "Create a deterministic fingerprint for a JSON string (exact match required)",
    },
    {
      title: "Detect hidden whitespace differences",
      input: "value\n",
      description: "Hashing helps reveal differences caused by newlines or spaces",
    },
  ],
  faq: [
    {
      question: "What is a hash and what is it used for?",
      answer:
        "A hash is a fixed-length fingerprint of data. It's used for integrity checks, checksums, comparisons, and detecting whether content has changed.",
    },
    {
      question: "Is MD5 secure?",
      answer:
        "MD5 is not recommended for security-sensitive uses because collisions exist. It can still be useful for non-cryptographic checksums in legacy contexts.",
    },
    {
      question: "Which hash should I use for integrity checks?",
      answer:
        "SHA-256 is a strong default for integrity checks. SHA-512 is also widely used when you want a longer digest.",
    },
    {
      question: "Is hashing the same as encryption?",
      answer:
        "No. Encryption is reversible with a key. Hashing is one-way and is mainly used for integrity and fingerprints.",
    },
    {
      question: "Can I store passwords using SHA-256?",
      answer:
        "Don't store passwords using basic hashes. Use a password hashing algorithm like Argon2, bcrypt, or PBKDF2 with salt and key stretching.",
    },
  ],
  relatedTools: [
    "jwt-decoder",
    "uuid-generator",
    "base64-encode-decode",
    "password-generator",
    "json-formatter",
    "url-encode-decode",
  ],
  ui: {
    inputPlaceholder: "Enter text to hash...",
    outputPlaceholder: "Hashes will appear here...",
    inputLabel: "Text Input",
    outputLabel: "Hash Output",
    convertLabel: "Generate Hashes",
  },
};
