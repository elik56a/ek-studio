import { Tool } from "../types"

export const securityTools: Tool[] = [
  {
    id: "jwt-decoder",
    slug: "jwt-decoder",
    name: "JWT Decoder",
    description:
      "Decode JSON Web Tokens (JWT) locally to inspect header, payload claims, expiration, issuer/audience, and debug OAuth2/OIDC authentication issues",
    category: "security",
    type: "converter",
    keywords: [
      "jwt decoder",
      "decode jwt",
      "jwt claims",
      "jwt payload",
      "oauth2 token",
      "oidc token",
      "bearer token",
      "jwt inspector",
    ],
    metadata: {
      title: "JWT Decoder & Claims Inspector (OAuth2 / OIDC)",
      description:
        "Decode JWT tokens online (locally). Inspect header/payload claims, check exp/nbf/iat, issuer & audience, and debug OAuth2/OIDC bearer tokens securely.",
      keywords: [
        "jwt decoder",
        "jwt claims inspector",
        "decode jwt token",
        "oauth2 token decoder",
        "oidc id token decoder",
        "jwt payload decoder",
        "jwt header decoder",
      ],
    },
    info: {
      description:
        "JWT Decoder & Claims Inspector is a developer-focused tool for decoding JSON Web Tokens used in OAuth2, OpenID Connect (OIDC), SSO, and API authentication. Paste a token and instantly view the decoded header and payload as readable JSON, including common claims like exp (expiration), nbf (not before), iat (issued at), iss (issuer), aud (audience), sub (subject), scope, and roles. This helps you debug 401/403 errors, confirm what your identity provider is sending, and spot risky configurations such as unexpected algorithms or missing validation-critical claims. Decoding runs entirely in your browser using Base64URL parsing—no requests, no storage, and no token logging.",
      howToUse: [
        "Copy the full JWT (three dot-separated parts) from an Authorization header, cookie, or API response",
        "Paste the token into the JWT input field",
        "Click “Decode JWT” to display the decoded header and payload JSON",
        "Review exp/nbf/iat timestamps to confirm token validity window",
        "Check iss (issuer) and aud (audience) for common OAuth2/OIDC misconfigurations",
        "Inspect scopes/roles/permissions to verify authorization behavior",
        "Copy decoded JSON for debugging notes or bug reports (avoid sharing real production data)",
      ],
      useCases: [
        "Fix 401 Unauthorized: Identify expired tokens (exp), wrong issuer (iss), or mismatched audience (aud)",
        "Debug OAuth2/OIDC flows: Inspect scopes, client_id, nonce, and identity claims for login issues",
        "Inspect RBAC permissions: Confirm roles/permissions claims match expected access rules",
        "Troubleshoot microservices auth: Compare tokens at gateway vs downstream services to find where claims change",
        "Validate SSO integrations: Verify what your IdP includes in the token without guessing",
        "Detect suspicious headers: Spot unexpected alg values or missing token fields that break verification",
      ],
      features: [
        "Instant Base64URL decoding of header and payload",
        "Readable JSON output with formatting for fast claim inspection",
        "Highlights common validation-critical claims (exp, nbf, iat, iss, aud, sub)",
        "Helps debug OAuth2/OIDC bearer tokens and ID tokens",
        "No network calls: runs fully in-browser for privacy",
        "Copy-friendly decoded output for troubleshooting",
      ],
    },
    examples: [
      {
        title: "Decode a JWT with identity claims",
        input:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
        description:
          "Inspect common claims like sub (user id), name, and iat (issued at) to understand what the token represents",
      },
      {
        title: "Inspect an OAuth2 token with roles",
        input:
          "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI0MjEiLCJlbWFpbCI6InVzZXJAZXhhbXBsZS5jb20iLCJyb2xlcyI6WyJ1c2VyIiwiYWRtaW4iXSwiZXhwIjoxNzM2MjA4MDAwfQ.signature",
        description:
          "Verify roles/permissions and the exp timestamp when debugging RBAC authorization",
      },
      {
        title: "Find why a token is rejected (expired exp)",
        input:
          "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiIxMDAxIiwiZXhwIjoxNzM2MjA4MDAwfQ.signature",
        description:
          "Check the exp claim to confirm whether expiration is causing 401 errors",
      },
      {
        title: "Validate issuer and audience (SSO troubleshooting)",
        input:
          "eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhdXRoLmV4YW1wbGUuY29tIiwiYXVkIjoiYXBpLmV4YW1wbGUuY29tIn0.signature",
        description:
          "Confirm iss/aud values match your OAuth provider and API verification settings",
      },
      {
        title: "Spot risky algorithm choice (header inspection)",
        input:
          "eyJhbGciOiJub25lIiwidHlwIjoiSldUIn0.eyJzdWIiOiJhdHRhY2tlciIsImFkbWluIjp0cnVlfQ.",
        description:
          "Inspect the header alg field and flag unsafe configurations (never accept 'none' in production verification)",
      },
      {
        title: "Inspect an OIDC ID token payload",
        input:
          "eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJ1c2VyMTIzIiwiZW1haWwiOiJ1c2VyQGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsIm5hbWUiOiJKb2huIERvZSIsInBpY3R1cmUiOiJodHRwczovL2V4YW1wbGUuY29tL3Bob3RvLmpwZyJ9.signature",
        description:
          "Verify identity claims like email/email_verified/name when debugging OIDC login flows",
      },
    ],
    faq: [
      {
        question: "What is a JWT (JSON Web Token)?",
        answer:
          "A JWT is a compact token format used for authentication and authorization. It has three parts: header, payload (claims), and signature, separated by dots.",
      },
      {
        question: "How do I decode a JWT token to debug 401 errors?",
        answer:
          "Decode the token and check exp (expired), iss (wrong issuer), aud (wrong audience), and missing fields like sub/scope/roles. These are common causes of 401/403 failures.",
      },
      {
        question: "Does this JWT decoder verify the signature?",
        answer:
          "No. This tool decodes and displays the header/payload only. Signature verification must be done server-side using the correct secret/public key and allowed algorithms.",
      },
      {
        question: "What do exp, iat, and nbf mean in a JWT?",
        answer:
          "exp is expiration time, iat is issued-at time, and nbf is not-before time. They are Unix timestamps that define when a token is valid.",
      },
      {
        question: "What is the difference between an OAuth2 access token and an OIDC ID token?",
        answer:
          "Access tokens authorize API access (often contain scopes/permissions). ID tokens represent user identity for the client app (often contain profile claims like email/name).",
      },
      {
        question: "Is it safe to paste a production JWT into an online decoder?",
        answer:
          "This decoder runs locally in your browser and doesn’t send tokens to a server. Still, treat JWTs like sensitive data—avoid sharing real production tokens in screenshots or bug reports.",
      },
      {
        question: "Why is 'alg: none' considered dangerous?",
        answer:
          "'none' means no signature. If a backend mistakenly accepts it during verification, attackers can forge tokens. Always restrict allowed algorithms on the server.",
      },
      {
        question: "Why does my token fail to decode or look corrupted?",
        answer:
          "Common causes are missing segments (not three parts), whitespace/newlines added during copy, or the token isn’t a JWT (it might be an opaque token or a JWE with five parts).",
      },
    ],
    relatedTools: [
      "hash-generator",
      "base64-encode-decode",
      "uuid-generator",
      "password-generator",
      "json-formatter",
      "url-encode-decode",
    ],
    ui: {
      inputPlaceholder: "Paste your JWT token (header.payload.signature)...",
      outputPlaceholder: "Decoded header and payload will appear here...",
      inputLabel: "JWT Token",
      outputLabel: "Decoded JWT",
      convertLabel: "Decode JWT",
    },
  },

  {
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
        "Hash Generator creates deterministic cryptographic hashes from any text input using MD5, SHA-256, SHA-384, and SHA-512. Hashes are fixed-length fingerprints used to verify integrity, detect changes, compare values, and generate checksums. Unlike encryption, hashing is one-way: you can’t reconstruct the original input from the hash. Use this tool to compare expected vs actual checksums, create stable fingerprints for strings, or quickly validate that content hasn’t changed during copy/paste, builds, or deployments.",
      howToUse: [
        "Paste the text you want to hash",
        "Click “Generate Hashes”",
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
          "A hash is a fixed-length fingerprint of data. It’s used for integrity checks, checksums, comparisons, and detecting whether content has changed.",
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
          "Don’t store passwords using basic hashes. Use a password hashing algorithm like Argon2, bcrypt, or PBKDF2 with salt and key stretching.",
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
  },

  {
    id: "uuid-generator",
    slug: "uuid-generator",
    name: "UUID Generator",
    description:
      "Generate random UUID v4 values for databases, APIs, request tracing, and distributed systems",
    category: "security",
    type: "generator",
    keywords: [
      "uuid generator",
      "uuid v4",
      "guid generator",
      "random uuid",
      "rfc 4122",
      "unique identifier",
    ],
    metadata: {
      title: "UUID v4 Generator (RFC 4122) Online",
      description:
        "Generate UUID v4 (RFC 4122) identifiers online. Create random GUID/UUID values for APIs, databases, tracing, and test data — locally in your browser.",
      keywords: [
        "uuid generator",
        "uuid v4 generator",
        "guid generator",
        "random uuid",
        "rfc 4122 uuid",
      ],
    },
    info: {
      description:
        "UUID v4 Generator creates random RFC 4122 UUIDs (also called GUIDs) for unique identification across systems. UUID v4 uses random values, making collisions extremely unlikely and avoiding database coordination. Use UUIDs for database primary keys, public IDs in URLs, request/correlation IDs for logs, event identifiers, and test fixtures. This tool generates valid UUID v4 strings quickly and supports batch generation for seeding and automation.",
      howToUse: [
        "Click “Generate UUIDs” to create one or more UUID v4 values",
        "Copy the UUID output",
        "Use UUIDs in databases, APIs, or message/event systems",
        "Generate multiple values for fixtures, seeds, or bulk inserts",
        "Use as request IDs for tracing and log correlation",
      ],
      useCases: [
        "Generate primary keys for distributed systems without a central counter",
        "Create public-facing IDs that are hard to guess",
        "Add request/correlation IDs for debugging and observability",
        "Generate identifiers for events, jobs, and background tasks",
        "Seed test data with unique values for integration tests",
      ],
      features: [
        "Generates valid UUID v4 in RFC 4122 format",
        "Supports batch generation for bulk use",
        "Fast and lightweight with one-click copy",
        "Great for tracing IDs and database keys",
        "Runs locally in your browser (privacy-friendly)",
      ],
    },
    examples: [
      {
        title: "Generate a single UUID v4",
        input: "550e8400-e29b-41d4-a716-446655440000",
        description: "Use as a unique ID for a database record or API resource",
      },
      {
        title: "Generate multiple UUIDs for seeding",
        input:
          "550e8400-e29b-41d4-a716-446655440000\n6ba7b810-9dad-11d1-80b4-00c04fd430c8\n6ba7b811-9dad-11d1-80b4-00c04fd430c8",
        description: "Generate several UUIDs at once for fixtures or bulk inserts",
      },
    ],
    faq: [
      {
        question: "What is a UUID and why do developers use it?",
        answer:
          "A UUID is a 128-bit identifier designed to be globally unique. It’s commonly used for database IDs, public identifiers, and distributed systems.",
      },
      {
        question: "Is UUID v4 random?",
        answer:
          "Yes. UUID v4 is generated from random values, which makes collisions extremely unlikely in real-world usage.",
      },
      {
        question: "UUID vs GUID — what’s the difference?",
        answer:
          "GUID is Microsoft’s name for UUID. In practice they refer to the same format and standard.",
      },
      {
        question: "Are UUIDs good database primary keys?",
        answer:
          "They work well for distributed systems and public IDs, but can impact index locality compared to sequential integers. Many teams use UUIDs successfully with proper indexing strategies.",
      },
      {
        question: "When should I prefer UUIDs over incremental IDs?",
        answer:
          "Use UUIDs when you need IDs generated across multiple services, want non-guessable public IDs, or need offline/client-side ID creation.",
      },
    ],
    relatedTools: [
      "hash-generator",
      "jwt-decoder",
      "password-generator",
      "base64-encode-decode",
      "json-formatter",
      "url-encode-decode",
    ],
    ui: {
      inputPlaceholder: "Click generate to create UUIDs...",
      outputPlaceholder: "Generated UUIDs will appear here...",
      inputLabel: "Options",
      outputLabel: "Generated UUIDs",
      convertLabel: "Generate UUIDs",
    },
  },

  {
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
        "Click “Generate Password”",
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
          "They’re generated using the browser’s cryptographic random generator (crypto.getRandomValues), which is suitable for creating strong passwords.",
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
          "Modern best practice is to use long, unique passwords and enable MFA. Rotate passwords when there’s suspected compromise or reuse risk.",
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
  },
]

