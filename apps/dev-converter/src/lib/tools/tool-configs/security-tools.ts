import { Tool } from "../types"

export const securityTools: Tool[] = [
  {
    id: "jwt-decoder",
    slug: "jwt-decoder",
    name: "JWT Decoder",
    description: "Decode and inspect JWT tokens instantly - debug authentication flows, validate claims, and detect security vulnerabilities in OAuth2 and API tokens",
    category: "security",
    type: "converter",
    keywords: ["jwt", "decode", "token", "json web token", "oauth2", "oidc", "bearer token", "authentication debugging"],
    metadata: {
      title: "JWT Decoder - Instantly Decode & Debug JSON Web Tokens | OAuth2 & API Authentication Inspector",
      description:
        "Professional JWT decoder for developers. Instantly decode OAuth2 access tokens, inspect claims, validate expiration, detect algorithm vulnerabilities, and debug microservices authentication. Browser-based, zero data transmission.",
      keywords: [
        "jwt decoder",
        "json web token decoder",
        "jwt parser",
        "oauth2 token decoder",
        "bearer token inspector",
        "jwt debugger",
        "jwt claims validator",
        "microservices authentication",
      ],
    },
    info: {
      description:
        "A professional JWT decoder built for modern authentication debugging. Instantly decode JSON Web Tokens used in OAuth2, OpenID Connect (OIDC), API authentication, and microservices architectures. This tool reveals the complete token anatomy: algorithm specifications in the header, user identity and permission claims in the payload, and signature integrity markers. Unlike basic decoders, this inspector helps identify common security vulnerabilities including algorithm confusion attacks (RS256 vs HS256 mismatches), dangerous 'none' algorithm usage, missing critical claims, and expired tokens causing silent authentication failures. Essential for debugging SSO integrations, troubleshooting 401 Unauthorized errors, validating JWT structure before server-side verification, inspecting third-party OAuth tokens from providers like Auth0, Okta, Firebase, and AWS Cognito, and understanding why authentication suddenly breaks in distributed systems. The decoder processes tokens entirely in your browser using Base64URL decoding—no network requests, no logging, complete privacy for production token inspection.",
      howToUse: [
        "Copy the JWT token from your Authorization header, cookie, or API response",
        "Paste the complete token (including all three dot-separated segments) into the input field",
        "Click 'Decode JWT' to instantly reveal header, payload, and signature components",
        "Examine the algorithm field in the header for security red flags (watch for 'none' or unexpected algorithms)",
        "Inspect critical claims: exp (expiration timestamp), iat (issued at), nbf (not before), sub (subject/user ID), iss (issuer), aud (audience)",
        "Verify expiration by comparing exp timestamp against current Unix time",
        "Check for missing required claims that might cause validation failures downstream",
        "Copy decoded JSON for documentation, bug reports, or security audits",
      ],
      useCases: [
        "Debug 401 Unauthorized Errors: Decode tokens to discover expired exp claims, mismatched aud values, or missing required fields causing authentication rejections",
        "Troubleshoot Microservices Auth: Inspect tokens passed between services to verify claim propagation, role inheritance, and tenant isolation in multi-service architectures",
        "Validate OAuth2 Integration: Decode access tokens from Auth0, Okta, Firebase, Keycloak, or AWS Cognito to confirm claim structure matches your application expectations",
        "Detect Algorithm Vulnerabilities: Identify dangerous 'none' algorithm usage or RS256/HS256 confusion attacks by examining the alg field in decoded headers",
        "Inspect SSO Token Claims: View SAML-to-JWT conversions, group memberships, custom attributes, and identity provider metadata in enterprise SSO implementations",
        "API Testing & Postman Debugging: Decode bearer tokens from API responses to verify claim contents before writing assertion tests",
        "Investigate Token Expiration Issues: Calculate remaining token lifetime by decoding exp claims when debugging refresh token flows",
        "Security Audits: Review JWT structure for compliance with RFC 7519 standards, proper claim usage, and secure algorithm selection",
        "Debug Mobile App Authentication: Decode tokens from iOS/Android apps to troubleshoot native OAuth flows and deep link authentication",
        "Understand Third-Party Tokens: Inspect JWTs from external APIs, webhooks, or partner integrations to understand their claim structure without documentation",
      ],
      features: [
        "Instant Base64URL Decoding: Reveals header, payload, and signature segments in milliseconds without server round-trips",
        "Algorithm Security Detection: Highlights potentially dangerous algorithms including 'none', weak HS256 with public exposure, and algorithm confusion patterns",
        "Expiration Timestamp Converter: Automatically converts Unix timestamps in exp, iat, and nbf claims to human-readable dates",
        "Claim Validation Hints: Identifies missing standard claims (iss, aud, exp) that commonly cause verification failures",
        "RFC 7519 Compliant: Handles standard JWT structure with proper Base64URL padding and JSON parsing",
        "Zero Network Transmission: All decoding happens in-browser using JavaScript—tokens never leave your device, safe for production debugging",
        "Pretty-Printed JSON: Formatted output with syntax highlighting for rapid claim inspection",
        "Copy-Friendly Output: One-click copying of decoded JSON for Slack messages, bug reports, or documentation",
        "Multi-Algorithm Support: Decodes tokens signed with HS256, HS384, HS512, RS256, RS384, RS512, ES256, ES384, ES512, and PS256",
        "OAuth2 & OIDC Optimized: Recognizes standard OAuth2 claims (scope, client_id) and OIDC claims (email, email_verified, name, picture)",
      ],
    },
    examples: [
      {
        title: "Decode Standard JWT with User Claims",
        input:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
        description: "Decode a basic JWT to reveal subject (sub), name, and issued-at (iat) claims commonly used in authentication systems",
      },
      {
        title: "Inspect OAuth2 Access Token with Roles and Permissions",
        input:
          "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI0MjEiLCJlbWFpbCI6InVzZXJAZXhhbXBsZS5jb20iLCJyb2xlcyI6WyJ1c2VyIiwiYWRtaW4iXSwiZXhwIjoxNzM2MjA4MDAwfQ.signature",
        description: "Decode an OAuth2 token to view user roles, email claims, and expiration—useful for debugging role-based access control (RBAC)",
      },
      {
        title: "Debug Expired Token Causing 401 Errors",
        input:
          "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiIxMDAxIiwiZXhwIjoxNzM2MjA4MDAwfQ.signature",
        description:
          "Decode a JWT to check the exp (expiration) timestamp and determine if token expiration is causing authentication failures",
      },
      {
        title: "Validate Issuer and Audience for SSO Integration",
        input:
          "eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhdXRoLmV4YW1wbGUuY29tIiwiYXVkIjoiYXBpLmV4YW1wbGUuY29tIn0.signature",
        description:
          "Decode a JWT to verify issuer (iss) and audience (aud) claims match your OAuth provider configuration—critical for SSO troubleshooting",
      },
      {
        title: "Detect Algorithm Confusion Security Vulnerability",
        input:
          "eyJhbGciOiJub25lIiwidHlwIjoiSldUIn0.eyJzdWIiOiJhdHRhY2tlciIsImFkbWluIjp0cnVlfQ.",
        description:
          "Decode a JWT with 'none' algorithm to identify a critical security vulnerability where signature verification is bypassed—never accept 'none' in production",
      },
      {
        title: "Inspect OIDC ID Token with Email Verification",
        input:
          "eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJ1c2VyMTIzIiwiZW1haWwiOiJ1c2VyQGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsIm5hbWUiOiJKb2huIERvZSIsInBpY3R1cmUiOiJodHRwczovL2V4YW1wbGUuY29tL3Bob3RvLmpwZyJ9.signature",
        description:
          "Decode an OpenID Connect (OIDC) ID token to view email, email_verified, name, and picture claims used in social login flows",
      },
    ],
    faq: [
      {
        question: "What is a JWT token and how does it work in OAuth2 authentication?",
        answer:
          "JWT (JSON Web Token) is a self-contained token format widely used in OAuth2 and OpenID Connect for stateless authentication. It consists of three Base64URL-encoded parts separated by dots: header (algorithm and token type), payload (claims like user ID, roles, expiration), and signature (cryptographic proof of integrity). When a user authenticates, the authorization server issues a JWT that the client includes in API requests. Resource servers decode and verify the JWT to authorize access without database lookups, enabling scalable microservices architectures.",
      },
      {
        question: "How do I decode a JWT token to debug 401 Unauthorized errors?",
        answer:
          "Paste your complete JWT token (all three dot-separated segments) into the decoder input and click 'Decode JWT'. The tool instantly reveals the header and payload in readable JSON format. Check these common 401 causes: (1) exp claim shows token is expired, (2) aud claim doesn't match your API's expected audience, (3) iss claim doesn't match your OAuth provider, (4) required claims like sub or scope are missing, (5) algorithm in header is 'none' or doesn't match server expectations. Compare decoded values against your server's validation rules to identify the mismatch.",
      },
      {
        question: "Can this tool verify JWT signatures or validate token authenticity?",
        answer:
          "No. This decoder only extracts and displays the header and payload contents—it does NOT verify signatures or validate authenticity. Signature verification requires the secret key (for HMAC algorithms like HS256) or public key (for RSA/ECDSA algorithms like RS256) and must always be performed server-side. Never trust decoded JWT data without proper signature verification in your backend. Use this tool for inspection and debugging only, not for security decisions.",
      },
      {
        question: "Why is my JWT showing 'alg: none' and is this dangerous?",
        answer:
          "If your decoded JWT header shows 'alg: none', this is a critical security vulnerability. The 'none' algorithm means the token has no signature, allowing anyone to forge tokens by simply Base64-encoding arbitrary claims. Attackers exploit this by modifying legitimate tokens to use 'none', then changing payload claims (like setting admin: true) without detection. Production systems must NEVER accept 'none' algorithm tokens. Always configure your JWT library to reject 'none' and enforce specific allowed algorithms like RS256 or HS256.",
      },
      {
        question: "Is it safe to decode production JWT tokens in an online tool?",
        answer:
          "This decoder runs entirely in your browser using JavaScript—no tokens are transmitted to servers, logged, or stored. However, best practice is to avoid pasting production tokens containing real user data into any online tool. For production debugging, use this tool with test tokens, or run it locally. For sensitive production issues, use command-line tools (like jwt-cli) or decode programmatically in your development environment. Remember: decoding reveals all claims in plaintext, so treat JWTs like passwords.",
      },
      {
        question: "What's the difference between OAuth2 access tokens and OIDC ID tokens?",
        answer:
          "Both are often JWTs, but serve different purposes. OAuth2 access tokens authorize API access and contain claims like scope, client_id, and permissions—they're meant for resource servers. OIDC ID tokens prove user identity and contain claims like email, name, email_verified, and picture—they're meant for client applications. When you decode tokens, access tokens typically have broader scopes (read:users, write:posts), while ID tokens have personal identity claims. Never use ID tokens to authorize API requests; use access tokens instead.",
      },
      {
        question: "How do I check if my JWT is expired by decoding it?",
        answer:
          "Decode the JWT and look for the 'exp' claim in the payload—this is a Unix timestamp (seconds since January 1, 1970). Compare it to the current Unix timestamp (Date.now() / 1000 in JavaScript). If exp is less than the current time, the token is expired. Many decoders automatically convert exp to human-readable dates. Also check 'iat' (issued at) and 'nbf' (not before) claims. If current time is before nbf, the token isn't valid yet. Expired tokens cause 401 errors even with valid signatures.",
      },
      {
        question: "What does 'algorithm confusion' mean in JWT security?",
        answer:
          "Algorithm confusion is a critical JWT vulnerability where attackers change the algorithm in the token header from RS256 (asymmetric) to HS256 (symmetric). If your server uses the RSA public key as an HMAC secret, attackers can forge valid signatures. For example: decode a legitimate RS256 token, change 'alg' to 'HS256', modify claims, then sign with the public key (which they can access). The server incorrectly validates it. Prevent this by explicitly specifying allowed algorithms in your JWT library and never using the same key for multiple algorithms.",
      },
      {
        question: "Why does my decoded JWT have weird characters or fail to parse?",
        answer:
          "JWTs must have exactly three parts separated by dots (header.payload.signature). Common issues: (1) Token is truncated—ensure you copied the complete string including the signature, (2) Token uses standard Base64 instead of Base64URL encoding (+ and / instead of - and _), (3) Extra whitespace or line breaks were added when copying, (4) Token is actually a JWE (JSON Web Encryption) with five parts instead of three, (5) Token is not a JWT at all but an opaque reference token. Verify you're using a JWT by checking for three dot-separated segments.",
      },
      {
        question: "How do I decode JWTs in microservices to debug authentication propagation?",
        answer:
          "In microservices, decode tokens at each service boundary to verify claim propagation. Common issues: (1) Gateway strips or modifies tokens before forwarding, (2) Service-to-service calls don't include the Authorization header, (3) Token expires during long request chains, (4) Custom claims added by one service aren't visible to downstream services, (5) Audience (aud) claim doesn't include all services. Decode tokens at each hop and compare payloads to identify where claims are lost or modified. Use correlation IDs (jti claim) to trace tokens across services.",
      },
    ],
    relatedTools: ["hash-generator", "base64-encode-decode", "uuid-generator", "password-generator", "json-formatter", "url-encode-decode"],
    ui: {
      inputPlaceholder: "Paste your JWT token here...",
      outputPlaceholder: "Decoded JWT will appear here...",
      inputLabel: "JWT Token",
      outputLabel: "Decoded JWT",
      convertLabel: "Decode JWT",
    },
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
    info: {
      description:
        "A hash generator is a tool that converts any text input into a fixed-length hash value using cryptographic hashing algorithms such as MD5, SHA-256, SHA-384, and SHA-512. Hashes are commonly used for file integrity verification, checksums, digital signatures, password storage systems, and detecting changes in data. Because hashing is one-way, the output cannot be reversed into the original input, which makes it useful for verifying data integrity and storing non-reversible fingerprints. This online hash generator lets you instantly generate hashes for any string, compare hash values, and validate that content has not been modified or corrupted.",
      howToUse: [
        "Enter or paste the text you want to hash into the input field",
        "Click Generate Hashes to compute MD5, SHA-256, SHA-384, and SHA-512",
        "View the generated hash outputs in the results section",
        "Copy any hash value to use in verification, storage, or comparison",
        "Use hashes to validate file integrity, API payloads, or stored credentials",
      ],
      useCases: [
        "Checksum Verification: Generate hashes to confirm files or payloads are unchanged",
        "Data Integrity: Detect changes in strings, configs, and API responses by comparing hashes",
        "Token Fingerprinting: Store hashed versions of tokens instead of raw tokens for safer comparison",
        "Generate Unique Identifiers: Create deterministic identifiers from consistent input text",
        "Debug Hash Mismatches: Compare expected and actual hash values when debugging systems",
        "Digital Signatures Prep: Generate message hashes used as inputs for signature algorithms",
      ],
      features: [
        "Multiple Algorithms: Generate MD5, SHA-256, SHA-384, and SHA-512 at once",
        "Instant Hashing: Real-time hashing output for fast developer workflows",
        "Deterministic Results: Same input always produces the same hash output",
        "One-Click Copy: Quickly copy hashes to clipboard",
        "Privacy Friendly: Everything runs locally — no data is uploaded",
        "Perfect for Security and DevOps: Useful for integrity checks, config validation, and debugging",
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
    relatedTools: ["jwt-decoder", "uuid-generator", "base64-encode-decode", "password-generator", "json-formatter", "url-encode-decode"],
    ui: {
      inputPlaceholder: "Enter text to hash...",
      outputPlaceholder: "Generated hashes will appear here...",
      inputLabel: "Text Input",
      outputLabel: "Hash Output",
      convertLabel: "Generate Hashes",
    },
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
    info: {
      description:
        "A UUID v4 generator creates random universally unique identifiers (UUIDs) that can be used as IDs in databases, APIs, distributed systems, and application-level entities. UUID v4 is generated using random values and has an extremely low probability of collision, making it a reliable choice for globally unique identifiers. Developers use UUIDs for user IDs, request IDs, transaction IDs, trace identifiers, public references, and anything that must remain unique across multiple services. This online UUID generator creates valid RFC 4122 UUID v4 strings instantly and allows you to generate single or multiple UUIDs for batch operations.",
      howToUse: [
        "Click Generate UUIDs to create one or more random UUID v4 values",
        "Copy the UUID output using the copy button",
        "Use the UUIDs as unique IDs in your database, API, or application logic",
        "Generate multiple UUIDs for batch insertion or data seeding",
        "Use UUIDs for tracing, correlation IDs, and distributed logging systems",
      ],
      useCases: [
        "Database Primary Keys: Use UUID v4 as globally unique identifiers for database rows",
        "Public IDs: Use UUIDs as non-guessable public identifiers in URLs and APIs",
        "Request Tracing: Generate request IDs for debugging and log correlation",
        "Distributed Systems: Generate unique IDs without needing a central database sequence",
        "Offline Generation: Create IDs client-side without needing network access",
        "Testing & Seeding: Generate test data UUIDs for fixtures and integration tests",
      ],
      features: [
        "RFC 4122 UUID v4 Format: Generates valid UUID v4 identifiers",
        "Cryptographically Secure Randomness: Uses strong randomness for low collision probability",
        "Batch Generation Support: Generate multiple UUIDs quickly",
        "Instant Output: Fast and lightweight generator",
        "One-Click Copy: Copy generated UUIDs easily",
        "Privacy First: Runs fully in your browser — no data is sent to servers",
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
    relatedTools: ["hash-generator", "jwt-decoder", "password-generator", "base64-encode-decode", "json-formatter", "url-encode-decode"],
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
    info: {
      description:
        "A password generator is a security tool that creates strong, random passwords using cryptographically secure randomness. Strong passwords are critical for preventing account takeovers, brute-force attacks, credential stuffing, and unauthorized access. This online password generator allows you to generate secure passwords with customizable length and character rules, including uppercase letters, lowercase letters, numbers, and symbols. It is ideal for creating unique passwords for email accounts, banking, social networks, admin dashboards, and developer tools. Using long, random passwords is one of the simplest and most effective cybersecurity practices.",
      howToUse: [
        "Choose your password length (recommended: 16+ characters)",
        "Enable or disable character types: uppercase, lowercase, numbers, symbols",
        "Click Generate Password to generate a secure random password",
        "Copy the generated password using the copy button",
        "Store it safely in a password manager and use it in your account signup or security settings",
      ],
      useCases: [
        "Create Strong Passwords for Email and Banking Accounts",
        "Generate Random Passwords for Admin Dashboards and Dev Tools",
        "Generate Unique Passwords to Prevent Credential Reuse",
        "Create Secure Passwords for Team Tools and Shared Accounts (stored in a manager)",
        "Generate Passwords That Match System Requirements (no symbols, specific length)",
        "Improve Security Hygiene by replacing weak passwords with strong random ones",
      ],
      features: [
        "Cryptographically Secure Randomness: Uses crypto.getRandomValues for strong entropy",
        "Custom Length and Rules: Choose length and required character types",
        "Strong Defaults: Designed for modern security requirements (16+ recommended)",
        "Instant Generation: Generate secure passwords in one click",
        "One-Click Copy: Copy generated passwords instantly",
        "Privacy First: Password generation happens locally in your browser",
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
    relatedTools: ["hash-generator", "uuid-generator", "jwt-decoder", "base64-encode-decode", "json-formatter", "url-encode-decode"],
    ui: {
      inputPlaceholder: "",
      outputPlaceholder: "Generated password will appear here...",
      inputLabel: "",
      outputLabel: "Generated Password",
      convertLabel: "Generate Password",
    },
  },
]
