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
        title: "Unix timestamp example (seconds)",
        input: "1704672000",
        description:
          "Convert a Unix timestamp in seconds to a readable date (UTC-based)",
      },
      {
        title: "Milliseconds timestamp",
        input: "1609459200000",
        description:
          "Convert a Unix timestamp in milliseconds to a readable date (Jan 1, 2021)",
      },
      {
        title: "ISO date string to timestamp",
        input: "2023-06-15T14:30:00Z",
        description: "Convert an ISO 8601 date string into a Unix timestamp",
      },
      {
        title: "Human-readable date to timestamp",
        input: "December 25, 2022",
        description: "Convert a natural language date into a Unix timestamp",
      },
    ],
    faq: [
      {
        question: "What is a Unix timestamp (epoch time)?",
        answer:
          "A Unix timestamp (also called epoch time) is the number of seconds that have passed since January 1, 1970 at 00:00:00 UTC. It is widely used in programming, databases, APIs, and logging systems to represent time consistently.",
      },
      {
        question:
          "What is the difference between seconds and milliseconds timestamps?",
        answer:
          "Unix timestamps can be stored in seconds (10 digits) or milliseconds (13 digits). This tool automatically detects which format you're using and converts it correctly without needing manual selection.",
      },
      {
        question: "How do I convert a Unix timestamp to a human-readable date?",
        answer:
          "Paste your timestamp (in seconds or milliseconds) into the input, and the converter will instantly return the readable date and time. You can also view the result in different timezones for easier debugging.",
      },
      {
        question: "Can I convert a date back into a Unix timestamp?",
        answer:
          "Yes. You can paste ISO 8601 dates (like 2024-01-08T00:00:00Z), common formats (01/08/2024), or natural language dates (January 8, 2024), and the tool will generate the equivalent Unix timestamp.",
      },
      {
        question:
          "Why is timezone support important when converting timestamps?",
        answer:
          "Unix timestamps are always based on UTC, but humans often work in local timezones. Timezone conversion helps prevent mistakes when debugging logs, scheduling jobs, or comparing timestamps across systems and regions.",
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
