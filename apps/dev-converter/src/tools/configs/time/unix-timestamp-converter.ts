import { Tool } from "@/lib/tools/types"

/**
 * Unix Timestamp Converter Tool Configuration
 *
 * Converts Unix epoch timestamps to human-readable dates and vice versa.
 * Auto-detects seconds (10-digit) vs milliseconds (13-digit) timestamps.
 * Displays both UTC and local timezone results to prevent timezone confusion.
 * Essential for debugging logs, APIs, JWT tokens, and database timestamps.
 */
export const unixTimestampConverterTool: Tool = {
  id: "unix-timestamp-converter",
  slug: "unix-timestamp-converter",
  name: "Unix Timestamp Converter",
  description:
    "Convert Unix timestamps to human-readable dates (and back) with UTC/local timezone display — supports seconds and milliseconds",
  category: "time",
  type: "converter",
  keywords: [
    "unix timestamp converter",
    "epoch time converter",
    "timestamp to date",
    "date to timestamp",
    "unix time",
    "epoch converter",
    "seconds to date",
    "milliseconds to date",
    "utc timestamp",
  ],
  metadata: {
    title: "Unix Timestamp Converter (Epoch to Date & Back)",
    description:
      "Convert Unix epoch timestamps to dates and convert dates to timestamps. Auto-detects seconds vs milliseconds and shows UTC + local timezone output.",
    keywords: [
      "unix timestamp converter",
      "epoch to date",
      "timestamp to date",
      "date to unix timestamp",
      "epoch time converter",
      "unix time converter",
      "seconds vs milliseconds timestamp",
    ],
  },
  info: {
    description:
      "Unix Timestamp Converter helps you convert epoch time to a readable date and convert a date back to a Unix timestamp. Unix time is the number of seconds (or milliseconds) since January 1, 1970 (UTC) and shows up everywhere: server logs, database fields, API responses, analytics events, job schedulers, and JWT expiration claims. This tool auto-detects 10-digit timestamps (seconds) vs 13-digit timestamps (milliseconds), displays the result in UTC and local time, and makes it easy to avoid common timezone mistakes when debugging production systems.",
    howToUse: [
      "Paste a Unix timestamp (seconds or milliseconds) into the input",
      "Or paste a date/time string (ISO 8601, common formats, or readable dates)",
      "Click Convert to generate the result instantly",
      "Review UTC and local timezone output to confirm the expected time",
      "Copy the converted timestamp or formatted date for logs, APIs, or code",
    ],
    useCases: [
      "Convert timestamps from server logs into readable incident timelines",
      "Verify API event times by converting timestamp fields to dates",
      "Convert database epoch columns into human-readable values for debugging",
      "Fix timezone bugs by comparing UTC output with local time output",
      "Create timestamps for cron jobs, schedules, and delayed execution",
      "Check JWT exp/iat/nbf timestamps when debugging authentication",
    ],
    features: [
      "Two-way conversion: epoch → date and date → epoch",
      "Auto-detects seconds (10-digit) vs milliseconds (13-digit) timestamps",
      "Displays UTC and local timezone results to reduce confusion",
      "Accepts ISO 8601 inputs (e.g., 2024-01-08T00:00:00Z)",
      "Accepts readable date formats (e.g., December 25, 2022)",
      "Instant in-browser conversion (no uploads, privacy-friendly)",
    ],
  },
  examples: [
    {
      title: "Unix timestamp in seconds → date",
      input: "1704672000",
      description: "Convert a 10-digit timestamp (seconds) into a UTC date",
    },
    {
      title: "Unix timestamp in milliseconds → date",
      input: "1609459200000",
      description: "Convert a 13-digit timestamp (milliseconds) to a date",
    },
    {
      title: "ISO 8601 → timestamp",
      input: "2023-06-15T14:30:00Z",
      description: "Convert an ISO timestamp into Unix epoch time",
    },
    {
      title: "Readable date → timestamp",
      input: "December 25, 2022",
      description: "Convert a human-readable date into a Unix timestamp",
    },
  ],
  faq: [
    {
      question: "What is a Unix timestamp (epoch time)?",
      answer:
        "Unix timestamp (epoch time) is the number of seconds since 1970-01-01 00:00:00 UTC. Some systems store milliseconds instead of seconds.",
    },
    {
      question: "How can I tell if a timestamp is seconds or milliseconds?",
      answer:
        "Most seconds timestamps are 10 digits, while milliseconds timestamps are usually 13 digits. This tool auto-detects the format for you.",
    },
    {
      question: "How do I convert a Unix timestamp to a date?",
      answer:
        "Paste the timestamp and convert. You'll see a readable date/time in UTC and your local timezone to help with debugging.",
    },
    {
      question: "Can I convert a date back to a Unix timestamp?",
      answer:
        "Yes. Paste an ISO 8601 date/time or a readable date format and the tool outputs the matching Unix epoch timestamp.",
    },
    {
      question: 'Why do timestamps look "wrong" in my timezone?',
      answer:
        "Unix timestamps are always UTC-based. If you compare them to local time without converting timezones, the displayed hour/day can look off.",
    },
    {
      question: "Is this Unix timestamp converter safe for production data?",
      answer:
        "Yes. Conversion runs locally in your browser and doesn't upload timestamps or dates to a server.",
    },
  ],
  relatedTools: [
    "hash-generator",
    "uuid-generator",
    "jwt-decoder",
    "json-formatter",
    "base64-encode-decode",
    "color-converter",
  ],
  ui: {
    inputPlaceholder: "1704672000 or 2024-01-08T00:00:00Z",
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
}
