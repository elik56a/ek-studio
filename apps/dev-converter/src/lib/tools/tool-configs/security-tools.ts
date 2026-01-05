import { ComingSoonPlaceholder } from "@/components/coming-soon-placeholder"
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
    examples: [],
    faq: [],
    relatedTools: ["hash-generator", "base64-encode-decode"],
    ui: {
      inputPlaceholder: "Paste your JWT token here...",
      outputPlaceholder: "Decoded JWT will appear here...",
      inputLabel: "JWT Token",
      outputLabel: "Decoded JWT",
      convertLabel: "Decode JWT",
    },
    component: ComingSoonPlaceholder,
  },
  {
    id: "hash-generator",
    slug: "hash-generator",
    name: "Hash Generator",
    description: "Generate MD5, SHA-1, SHA-256, and SHA-512 hashes from text",
    category: "security",
    keywords: ["hash", "md5", "sha1", "sha256", "sha512"],
    metadata: {
      title:
        "Hash Generator - Generate MD5, SHA-1, SHA-256, SHA-512 Hashes Online",
      description:
        "Free online hash generator. Create MD5, SHA-1, SHA-256, and SHA-512 hashes from any text input.",
      keywords: [
        "hash generator",
        "md5 generator",
        "sha256 generator",
        "checksum generator",
      ],
    },
    examples: [],
    faq: [],
    relatedTools: ["jwt-decoder", "uuid-generator"],
    ui: {
      inputPlaceholder: "Enter text to hash...",
      outputPlaceholder: "Generated hashes will appear here...",
      inputLabel: "Text Input",
      outputLabel: "Hash Output",
      convertLabel: "Generate Hash",
    },
    component: ComingSoonPlaceholder,
  },
  {
    id: "uuid-generator",
    slug: "uuid-generator",
    name: "UUID v4 Generator",
    description: "Generate random UUID v4 identifiers for your applications",
    category: "security",
    keywords: ["uuid", "guid", "unique id", "random"],
    metadata: {
      title: "UUID v4 Generator - Generate Random UUIDs Online",
      description:
        "Free online UUID v4 generator. Create random universally unique identifiers for your applications.",
      keywords: [
        "uuid generator",
        "guid generator",
        "unique id generator",
        "random uuid",
      ],
    },
    examples: [],
    faq: [],
    relatedTools: ["hash-generator", "jwt-decoder"],
    ui: {
      inputPlaceholder: "Click generate to create UUIDs...",
      outputPlaceholder: "Generated UUIDs will appear here...",
      inputLabel: "Options",
      outputLabel: "Generated UUIDs",
      convertLabel: "Generate UUID",
    },
    component: ComingSoonPlaceholder,
  },
]
