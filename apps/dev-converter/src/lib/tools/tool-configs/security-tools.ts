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
    type: "converter",
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
      {
        title: "Decode JWT and check expiration (exp)",
        input:
          "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiIxMDAxIiwiZXhwIjoxNzM2MjA4MDAwfQ.signature",
        description:
          "Decode a JWT and inspect the exp (expiration) timestamp claim",
      },
      {
        title: "Decode JWT to inspect issuer (iss) and audience (aud)",
        input:
          "eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhdXRoLmV4YW1wbGUuY29tIiwiYXVkIjoiYXBpLmV4YW1wbGUuY29tIn0.signature",
        description:
          "Decode a JWT to verify issuer and audience values in the payload",
      },
    ],
    faq: [
      {
        question: "What is a JWT token and how does it work?",
        answer:
          "JWT (JSON Web Token) is a compact token format used for authentication and authorization. It contains three parts: a Base64-encoded header, payload (claims), and a signature used to verify integrity.",
      },
      {
        question: "How do I decode a JWT token online?",
        answer:
          "Paste your JWT token into the input field and click Decode JWT. The tool instantly shows the decoded header, payload, and signature so you can inspect claims like exp, iss, sub, and roles.",
      },
      {
        question: "Can this tool verify a JWT signature?",
        answer:
          "No. This tool only decodes the token contents. Verifying signatures requires the correct secret/public key and must be done server-side to ensure authenticity.",
      },
      {
        question: "Why is my JWT not decoding correctly?",
        answer:
          "JWT tokens must contain three dot-separated parts: header.payload.signature. If the token is missing a part or uses invalid Base64URL encoding, decoding will fail.",
      },
      {
        question: "Is it safe to decode JWT tokens online?",
        answer:
          "This tool decodes tokens locally in your browser and does not send data to a server. Still, avoid pasting real production tokens that contain sensitive information into any online tool.",
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
    type: "converter",
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
      {
        title: "Hash an API key or token",
        input: "sk_live_51JxExampleSecretKey123",
        description:
          "Generate a SHA-256 hash of a token to safely compare values without storing raw text",
      },
    ],
    faq: [
      {
        question: "What is a hash function and what is it used for?",
        answer:
          "A hash function converts input data into a fixed-length output string. Hashes are used for data integrity checks, file verification, digital signatures, and detecting changes in content.",
      },
      {
        question: "Which hashing algorithm should I use (MD5 vs SHA-256)?",
        answer:
          "Use SHA-256 or SHA-512 for modern security and integrity purposes. MD5 is fast and useful for checksums but is not secure for cryptographic applications due to known collisions.",
      },
      {
        question: "Can I use these hashes to store passwords securely?",
        answer:
          "No. Do not store passwords using basic hashes like SHA-256. Use password hashing algorithms such as bcrypt, Argon2, or PBKDF2 which include salting and key stretching.",
      },
      {
        question: "What is the difference between hashing and encryption?",
        answer:
          "Hashing is one-way (you cannot reverse it), while encryption is reversible with a key. Hashing is used for integrity and verification, while encryption is used to protect confidential data.",
      },
      {
        question: "What is a checksum and how is it related to hashes?",
        answer:
          "A checksum is a hash value used to verify that data has not changed. You can compare two checksums to confirm that files or messages are identical and untampered.",
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
    type: "generator",
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
      {
        title: "Generate UUIDs for API request tracing",
        input:
          "req-550e8400-e29b-41d4-a716-446655440000\nreq-6ba7b810-9dad-11d1-80b4-00c04fd430c8",
        description:
          "Generate UUIDs to use as request IDs for debugging and log correlation",
      },
      {
        title: "UUID as database primary key",
        input: "d9428888-122b-11e1-b85c-61cd3cbb3210",
        description: "Use UUID v4 identifiers as globally unique database keys",
      },
    ],
    faq: [
      {
        question: "What is a UUID and why is it used?",
        answer:
          "A UUID (Universally Unique Identifier) is a 128-bit identifier used to uniquely identify data across systems. UUIDs are commonly used for database IDs, API request IDs, and distributed systems.",
      },
      {
        question: "Is UUID v4 random and safe to use?",
        answer:
          "Yes. UUID v4 is generated using random values with an extremely low chance of collision. It is safe for most applications requiring unique identifiers.",
      },
      {
        question: "Should I use UUIDs as primary keys in databases?",
        answer:
          "UUIDs are great for distributed databases and public IDs because they’re hard to guess. However, they may impact index performance compared to sequential integers. Many systems still use UUIDs successfully with proper indexing.",
      },
      {
        question: "What is the difference between UUID and GUID?",
        answer:
          "GUID is the Microsoft term for UUID. They follow the same standard and format, and are effectively the same type of identifier.",
      },
      {
        question: "When should I use UUIDs instead of incremental IDs?",
        answer:
          "Use UUIDs when you need globally unique IDs across multiple services, want to avoid exposing sequential IDs publicly, or need offline ID generation without database coordination.",
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
    type: "generator",
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
    examples: [
      {
        title: "Generate a 16-character strong password",
        input: "Length: 16, Uppercase: Yes, Numbers: Yes, Symbols: Yes",
        description: "Generate a strong password for email or social accounts",
      },
      {
        title: "Generate a password without symbols",
        input: "Length: 14, Uppercase: Yes, Numbers: Yes, Symbols: No",
        description:
          "Generate a password for systems that block special characters",
      },
      {
        title: "Generate a high-security password (24 characters)",
        input: "Length: 24, Uppercase: Yes, Numbers: Yes, Symbols: Yes",
        description:
          "Generate a long password recommended for banking and admin accounts",
      },
      {
        title: "Generate a memorable strong password",
        input: "Length: 18, Uppercase: Yes, Numbers: Yes, Symbols: No",
        description:
          "Generate a longer password that is easier to type while still strong",
      },
    ],
    faq: [
      {
        question: "How secure are the passwords generated by this tool?",
        answer:
          "Passwords are generated using the browser’s crypto.getRandomValues() API, which produces cryptographically secure randomness suitable for generating strong passwords.",
      },
      {
        question: "What is considered a strong password in 2026?",
        answer:
          "A strong password should be at least 16 characters long and contain uppercase and lowercase letters, numbers, and symbols. Longer passwords (20+ characters) are recommended for sensitive accounts like email and banking.",
      },
      {
        question: "Should I include symbols in my password?",
        answer:
          "Yes. Symbols increase password strength by expanding the character set. However, some systems reject symbols, so you may need to disable them depending on the site or system.",
      },
      {
        question: "Is it safe to generate passwords online?",
        answer:
          "This tool generates passwords locally in your browser and does not send data to any server. For maximum security and storage, a password manager is still recommended.",
      },
      {
        question: "How often should I change my password?",
        answer:
          "Only change passwords when there is a suspected breach or if your password is weak. Modern best practice is to use long unique passwords and enable multi-factor authentication rather than frequent forced rotation.",
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
