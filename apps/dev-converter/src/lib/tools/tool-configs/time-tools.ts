import { ComingSoonPlaceholder } from "@/components/coming-soon-placeholder"

import { Tool } from "../types"

export const timeTools: Tool[] = [
  {
    id: "unix-timestamp-converter",
    slug: "unix-timestamp-converter",
    name: "Unix Timestamp Converter",
    description: "Convert between Unix timestamps and human-readable dates",
    category: "time",
    keywords: ["unix", "timestamp", "date", "time", "convert"],
    metadata: {
      title: "Unix Timestamp Converter - Convert Unix Time Online",
      description:
        "Free online Unix timestamp converter. Convert between Unix timestamps and human-readable dates with timezone support.",
      keywords: [
        "unix timestamp converter",
        "epoch converter",
        "time converter",
        "date converter",
      ],
    },
    examples: [],
    faq: [],
    relatedTools: ["case-converter", "hash-generator"],
    ui: {
      inputPlaceholder: "Enter Unix timestamp or date...",
      outputPlaceholder: "Converted date/timestamp will appear here...",
      inputLabel: "Input",
      outputLabel: "Converted Output",
      convertLabel: "Convert",
    },
    component: ComingSoonPlaceholder,
  },
]
