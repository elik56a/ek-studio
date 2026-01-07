import { ComingSoonPlaceholder } from "@/components/custom/coming-soon-placeholder"
import UnixTimestampConverter from "@/components/tools/unix-timestamp-converter"

import { Tool } from "../types"

export const timeTools: Tool[] = [
  {
    id: "unix-timestamp-converter",
    slug: "unix-timestamp-converter",
    name: "Unix Timestamp Converter",
    description:
      "Convert between Unix timestamps and human-readable dates with timezone support",
    category: "time",
    type: "converter",
    keywords: ["unix", "timestamp", "epoch", "date", "time", "convert"],
    metadata: {
      title: "Unix Timestamp Converter - Convert Unix Time Online",
      description:
        "Free online Unix timestamp converter. Convert between Unix timestamps and human-readable dates with timezone support and relative time display.",
      keywords: [
        "unix timestamp converter",
        "epoch converter",
        "time converter",
        "date converter",
        "timestamp to date",
      ],
    },
    examples: [
      {
        title: "Unix timestamp example",
        input: "1704672000",
        description:
          "Convert a Unix timestamp to human-readable date (Jan 8, 2024)",
      },
      {
        title: "Milliseconds timestamp",
        input: "1609459200000",
        description: "Convert timestamp in milliseconds (Jan 1, 2021)",
      },
      {
        title: "ISO date string",
        input: "2023-06-15T14:30:00Z",
        description: "Convert ISO date to Unix timestamp",
      },
      {
        title: "Human-readable date",
        input: "December 25, 2022",
        description: "Convert natural date format to timestamp",
      },
    ],
    faq: [
      {
        question: "What is a Unix timestamp?",
        answer:
          "A Unix timestamp is the number of seconds that have elapsed since January 1, 1970 (midnight UTC/GMT), also known as the Unix epoch. It's a standard way to represent time in computing.",
      },
      {
        question: "Can I use milliseconds?",
        answer:
          "Yes! The tool automatically detects whether your timestamp is in seconds or milliseconds. Timestamps with more than 10 digits are treated as milliseconds.",
      },
      {
        question: "What date formats are supported?",
        answer:
          "The tool supports various formats including ISO 8601 (2024-01-08T00:00:00Z), natural language (January 8, 2024), and standard formats (01/08/2024). It uses JavaScript's Date parser for maximum compatibility.",
      },
      {
        question: "What is relative time?",
        answer:
          "Relative time shows how long ago (or how far in the future) a timestamp is from the current moment, like '2 days ago' or '3 hours from now'.",
      },
    ],
    relatedTools: ["hash-generator", "uuid-generator"],
    ui: {
      inputPlaceholder:
        "Enter Unix timestamp (e.g., 1704672000) or date (e.g., 2024-01-08)...",
      outputPlaceholder: "Converted date/timestamp will appear here...",
      inputLabel: "Timestamp or Date",
      outputLabel: "Converted Result",
      convertLabel: "Convert",
    },
    switcher: {
      enabled: true,
      mode: "category",
      showAllLink: true,
      preserveInput: true,
    },
    component: UnixTimestampConverter,
  },
]
