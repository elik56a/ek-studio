import { Tool } from "@/lib/tools/types"

export const base64NoPaddingTool: Tool = {
  id: "base64-no-padding",
  slug: "base64-no-padding",
  name: "Base64 Without Padding",
  description: "Encode text to Base64 without padding (no = characters)",
  category: "encoding",
  type: "converter",

  nav: {
    showInHeader: false,
  },

  componentId: "base64-encode-decode",

  preset: {
    direction: "encode",
    urlSafe: false,
    noPadding: false,
    encoding: "utf8",
  },

  keywords: [
    "base64 no padding",
    "base64 without padding",
    "base64 no equals",
    "unpadded base64",
    "base64 encode no padding",
  ],

  metadata: {
    title: "Base64 Without Padding - Encode Base64 Without = Characters",
    description:
      "Encode text to Base64 without padding characters. Creates unpadded Base64 strings without = for cleaner output.",
    keywords: [
      "base64 no padding",
      "base64 without padding",
      "unpadded base64",
      "base64 no equals",
    ],
  },

  info: {
    description:
      "Encode text to Base64 format without padding characters (=). Some systems and APIs prefer or require Base64 strings without padding for cleaner output or specific protocol requirements. This tool creates standard Base64-encoded strings but omits the trailing = padding characters. The resulting strings are still valid Base64 and can be decoded by most Base64 decoders.",
    howToUse: [
      "Type or paste your text",
      "The tool encodes to Base64 without padding",
      "Copy the unpadded Base64 result",
      "Use in systems that prefer no padding",
    ],
    useCases: [
      "Create Base64 for APIs that reject padding",
      "Generate cleaner Base64 strings",
      "Encode data for systems with padding restrictions",
      "Create compact Base64 representations",
      "Match specific protocol requirements",
    ],
    features: [
      "Instant Base64 encoding without padding",
      "Standard Base64 format (+ and /)",
      "Full UTF-8 Unicode support",
      "Cleaner output without = characters",
      "One-click copy to clipboard",
    ],
  },

  faq: [
    {
      question: "What is Base64 padding?",
      answer:
        "Padding (=) is added to Base64 strings to make their length a multiple of 4. It's optional in many contexts and some systems prefer Base64 without it.",
    },
    {
      question: "Can I decode Base64 without padding?",
      answer:
        "Yes. Most Base64 decoders can handle strings with or without padding. The padding is primarily for alignment and can be inferred during decoding.",
    },
    {
      question: "When should I use Base64 without padding?",
      answer:
        "Use it when working with APIs or systems that prefer or require unpadded Base64, or when you want cleaner-looking encoded strings.",
    },
    {
      question: "Is Base64 without padding the same as Base64URL?",
      answer:
        "No. Base64URL also replaces + with - and / with _. This tool creates standard Base64 (with + and /) but without padding.",
    },
    {
      question: "Will removing padding break my Base64?",
      answer:
        "No. The padding is optional and can be reconstructed during decoding. Most decoders handle unpadded Base64 correctly.",
    },
  ],

  relatedTools: [
    "base64-encode-decode",
    "base64-encode",
    "base64url-no-padding",
    "text-to-base64",
    "base64url-encode",
  ],

  ui: {
    inputPlaceholder: "Enter text to encode...",
    outputPlaceholder: "Base64 without padding will appear here...",
    inputLabel: "Text (Plain)",
    outputLabel: "Base64 (No Padding)",
    convertLabel: "Encode Without Padding",
    showSwapButton: true,
    autoDetect: {
      enabled: true,
      emptyLabel: "paste text to encode",
      labels: {
        detected: "Base64 → Decoding",
        plain: "Plain text → Encoding",
      },
      inputLabels: {
        detected: "Base64 (Encoded)",
        plain: "Text (Plain)",
      },
      outputLabels: {
        detected: "Text (Decoded)",
        plain: "Base64 (Encoded)",
      },
    },
  },
}
