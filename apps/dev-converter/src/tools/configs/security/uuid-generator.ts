import { Tool } from "@/lib/tools/types"

export const uuidGeneratorTool: Tool = {
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
      'Click "Generate UUIDs" to create one or more UUID v4 values',
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
      description:
        "Generate several UUIDs at once for fixtures or bulk inserts",
    },
  ],
  faq: [
    {
      question: "What is a UUID and why do developers use it?",
      answer:
        "A UUID is a 128-bit identifier designed to be globally unique. It's commonly used for database IDs, public identifiers, and distributed systems.",
    },
    {
      question: "Is UUID v4 random?",
      answer:
        "Yes. UUID v4 is generated from random values, which makes collisions extremely unlikely in real-world usage.",
    },
    {
      question: "UUID vs GUID — what's the difference?",
      answer:
        "GUID is Microsoft's name for UUID. In practice they refer to the same format and standard.",
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
}
