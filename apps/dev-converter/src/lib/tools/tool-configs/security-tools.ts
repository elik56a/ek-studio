import HashGeneratorTool from "@/components/tools/hash-generator"
import JWTDecoderTool from "@/components/tools/jwt-decoder"
import PasswordGeneratorTool from "@/components/tools/password-generator"
import UUIDGeneratorTool from "@/components/tools/uuid-generator"

import { Tool } from "../types"

export const securityTools: Tool[] = [
  {
    id: "jwt-decoder",
    slug: "jwt-decoder",
    name: "JWT Decoder",
    description: "Decode JWT tokens to view header, payload, and signature",
    category: "security",
    keywords: ["jwt", "decode", "token", "json web token"],
    metadata: {
      title: "JWT Decoder - Decode JSON Web Tokens Online",
      description:
        "Free online JWT decoder. Decode JWT tokens to view header, payload, and signature information.",
      keywords: [
        "jwt decoder",
        "json web token",
        "jwt parser",
        "token decoder",
      ],
    },
    examples: [
      {
        title: "Decode JWT Token",
        input:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
        description: "Decode a sample JWT token to view its contents",
      },
      {
        title: "View Token Claims",
        input:
          "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI0MjEiLCJlbWFpbCI6InVzZXJAZXhhbXBsZS5jb20iLCJyb2xlcyI6WyJ1c2VyIiwiYWRtaW4iXSwiZXhwIjoxNzM2MjA4MDAwfQ.signature",
        description: "Decode a JWT with user claims and roles",
      },
    ],
    faq: [
      {
        question: "What is a JWT token?",
        answer:
          "JWT (JSON Web Token) is a compact, URL-safe means of representing claims to be transferred between two parties. It consists of three parts: header, payload, and signature, separated by dots.",
      },
      {
        question: "Is it safe to decode JWT tokens online?",
        answer:
          "This tool only decodes the token locally in your browser - no data is sent to any server. However, never paste production tokens containing sensitive information into any online tool.",
      },
      {
        question: "Can this tool verify JWT signatures?",
        answer:
          "No, this tool only decodes the token to view its contents. Signature verification requires the secret key and should be done on your server.",
      },
      {
        question: "Why can't I decode my JWT?",
        answer:
          "Make sure your JWT has three parts separated by dots (header.payload.signature) and uses valid Base64 encoding. Some tokens may use URL-safe Base64 encoding.",
      },
    ],
    relatedTools: ["hash-generator", "base64-encode-decode"],
    ui: {
      inputPlaceholder: "Paste your JWT token here...",
      outputPlaceholder: "Decoded JWT will appear here...",
      inputLabel: "JWT Token",
      outputLabel: "Decoded JWT",
      convertLabel: "Decode JWT",
    },
    component: JWTDecoderTool,
  },
  {
    id: "hash-generator",
    slug: "hash-generator",
    name: "Hash Generator",
    description: "Generate MD5, SHA-256, SHA-384, and SHA-512 hashes from text",
    category: "security",
    keywords: ["hash", "md5", "sha256", "sha384", "sha512", "checksum"],
    metadata: {
      title:
        "Hash Generator - Generate MD5, SHA-256, SHA-384, SHA-512 Hashes Online",
      description:
        "Free online hash generator. Create MD5, SHA-256, SHA-384, and SHA-512 hashes from any text input for checksums and data integrity.",
      keywords: [
        "hash generator",
        "md5 generator",
        "sha256 generator",
        "checksum generator",
        "sha512 hash",
      ],
    },
    examples: [
      {
        title: "Hash a password",
        input: "MySecurePassword123!",
        description: "Generate hashes for a password string",
      },
      {
        title: "Hash a file content",
        input: "The quick brown fox jumps over the lazy dog",
        description: "Generate checksums for file content verification",
      },
      {
        title: "Hash JSON data",
        input: '{"userId":123,"action":"login","timestamp":1704537600}',
        description: "Create a hash of JSON data for integrity checking",
      },
    ],
    faq: [
      {
        question: "What is a hash function?",
        answer:
          "A hash function is a one-way cryptographic algorithm that converts input data of any size into a fixed-size string of characters. The same input always produces the same hash, but it's computationally infeasible to reverse the process.",
      },
      {
        question: "Which hash algorithm should I use?",
        answer:
          "For security purposes, use SHA-256 or SHA-512. MD5 and SHA-1 are considered weak for cryptographic purposes but can still be used for checksums. SHA-256 is the most commonly used for modern applications.",
      },
      {
        question: "Can I use these hashes for password storage?",
        answer:
          "No! Never store passwords using simple hashes. Use proper password hashing algorithms like bcrypt, Argon2, or PBKDF2 which include salting and key stretching. These hashes are for data integrity, not password security.",
      },
      {
        question: "What are hashes used for?",
        answer:
          "Hashes are used for data integrity verification, file checksums, digital signatures, blockchain, and as part of authentication systems. They ensure data hasn't been tampered with during transmission or storage.",
      },
    ],
    relatedTools: ["jwt-decoder", "uuid-generator", "base64-encode-decode"],
    ui: {
      inputPlaceholder: "Enter text to hash...",
      outputPlaceholder: "Generated hashes will appear here...",
      inputLabel: "Text Input",
      outputLabel: "Hash Output",
      convertLabel: "Generate Hashes",
    },
    component: HashGeneratorTool,
  },
  {
    id: "uuid-generator",
    slug: "uuid-generator",
    name: "UUID v4 Generator",
    description: "Generate random UUID v4 identifiers for your applications",
    category: "security",
    keywords: ["uuid", "guid", "unique id", "random", "identifier"],
    metadata: {
      title: "UUID v4 Generator - Generate Random UUIDs Online",
      description:
        "Free online UUID v4 generator. Create random universally unique identifiers (UUIDs) for databases, APIs, and applications.",
      keywords: [
        "uuid generator",
        "guid generator",
        "unique id generator",
        "random uuid",
        "uuid v4",
      ],
    },
    examples: [
      {
        title: "Single UUID",
        input: "550e8400-e29b-41d4-a716-446655440000",
        description: "Generate a single UUID for database records",
      },
      {
        title: "Multiple UUIDs",
        input:
          "550e8400-e29b-41d4-a716-446655440000\n6ba7b810-9dad-11d1-80b4-00c04fd430c8\n6ba7b811-9dad-11d1-80b4-00c04fd430c8",
        description: "Generate multiple UUIDs at once for batch operations",
      },
    ],
    faq: [
      {
        question: "What is a UUID?",
        answer:
          "UUID (Universally Unique Identifier) is a 128-bit number used to uniquely identify information in computer systems. UUID v4 uses random numbers to generate identifiers with extremely low probability of collision.",
      },
      {
        question: "Are UUIDs truly unique?",
        answer:
          "While not mathematically guaranteed, UUID v4 has such a large number space (2^122 possible values) that the probability of generating duplicate UUIDs is negligibly small - approximately 1 in 5.3 billion billion billion.",
      },
      {
        question: "When should I use UUIDs?",
        answer:
          "Use UUIDs for distributed systems, database primary keys, API request IDs, session identifiers, or any scenario where you need globally unique identifiers without central coordination.",
      },
      {
        question: "What's the difference between UUID and GUID?",
        answer:
          "GUID (Globally Unique Identifier) is Microsoft's implementation of the UUID standard. They are essentially the same thing, with GUID being the term used in Microsoft technologies.",
      },
    ],
    relatedTools: ["hash-generator", "jwt-decoder"],
    ui: {
      inputPlaceholder: "Click generate to create UUIDs...",
      outputPlaceholder: "Generated UUIDs will appear here...",
      inputLabel: "Options",
      outputLabel: "Generated UUIDs",
      convertLabel: "Generate UUIDs",
    },
    component: UUIDGeneratorTool,
  },
  {
    id: "password-generator",
    slug: "password-generator",
    name: "Password Generator",
    description:
      "Generate secure random passwords with customizable length and character types",
    category: "security",
    keywords: ["password", "generator", "random", "secure", "strong password"],
    metadata: {
      title: "Password Generator - Create Secure Random Passwords Online",
      description:
        "Free online password generator. Create strong, secure random passwords with customizable length and character types including uppercase, lowercase, numbers, and symbols.",
      keywords: [
        "password generator",
        "random password",
        "secure password",
        "strong password generator",
        "password creator",
      ],
    },
    faq: [
      {
        question: "How secure are the generated passwords?",
        answer:
          "The passwords are generated using the browser's crypto.getRandomValues() API, which provides cryptographically secure random numbers. This ensures high-quality randomness suitable for security-sensitive applications.",
      },
      {
        question: "What makes a strong password?",
        answer:
          "A strong password should be at least 12-16 characters long and include a mix of uppercase letters, lowercase letters, numbers, and symbols. Avoid using dictionary words, personal information, or common patterns.",
      },
      {
        question: "Should I use symbols in my password?",
        answer:
          "Yes, including symbols significantly increases password strength by expanding the character set. However, some systems may not accept certain symbols, so adjust based on your requirements.",
      },
      {
        question: "How long should my password be?",
        answer:
          "For most accounts, 16 characters is recommended. For highly sensitive accounts (banking, email), consider 20+ characters. The longer the password, the more secure it is against brute-force attacks.",
      },
      {
        question: "Is it safe to generate passwords online?",
        answer:
          "This tool generates passwords entirely in your browser using client-side JavaScript. No passwords are sent to any server or stored anywhere. However, for maximum security, consider using a dedicated password manager.",
      },
    ],
    relatedTools: ["hash-generator", "uuid-generator", "jwt-decoder"],
    ui: {
      inputPlaceholder: "",
      outputPlaceholder: "Generated password will appear here...",
      inputLabel: "",
      outputLabel: "Generated Password",
      convertLabel: "Generate Password",
    },
    component: PasswordGeneratorTool,
  },
]
