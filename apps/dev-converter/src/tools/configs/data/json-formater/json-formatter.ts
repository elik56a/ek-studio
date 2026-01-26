import { Tool } from "@/lib/tools/types"

export const jsonFormatterTool: Tool = {
  id: "json-formatter",
  slug: "json-formatter",
  name: "JSON Formatter & Validator",
  description:
    "Format, validate, beautify, and minify JSON — instantly detect errors and debug API payloads safely in your browser.",
  category: "json-data",
  type: "converter",
  order: 1,
  keywords: [
    "json formatter",
    "json formatter online",
    "json validator",
    "json validator online",
    "json beautifier",
    "beautify json",
    "format json",
    "minify json",
    "json minifier",
    "pretty print json",
    "json pretty printer",
    "json syntax checker",
    "fix json",
    "json viewer",
  ],
  metadata: {
    title: "JSON Formatter & Validator Online (Pretty Print, Minify, Fix Errors)",
    description:
      "Format and validate JSON online. Pretty print or minify JSON, highlight syntax errors, and debug API responses fast. Runs locally in your browser — no uploads.",
    keywords: [
      "json formatter",
      "json validator online",
      "json beautifier",
      "json pretty printer",
      "pretty print json",
      "format json online",
      "json minifier",
      "minify json",
      "json syntax checker",
      "validate json",
      "json viewer online",
      "fix json errors",
    ],
  },
  info: {
    description:
      "JSON Formatter & Validator is a fast, developer-friendly tool to format (pretty print), validate, view, and minify JSON. It’s designed for real-world work with APIs, webhooks, configs, and logs — where JSON is often minified, deeply nested, or slightly broken. Paste any JSON payload to instantly validate syntax, spot common errors (missing commas, trailing commas, unquoted keys, mismatched brackets), and render a clean structured output. When you're ready to ship, switch to minify mode to reduce payload size. Everything runs locally in your browser for privacy and speed — no server uploads.",
    howToUse: [
      "Paste or type JSON into the input editor (API response, config, webhook payload, etc.)",
      "Instant validation checks syntax and highlights errors (line/column) when possible",
      "Choose a view mode: Tree for navigation, Pretty for readable formatting, or Minify for compact output",
      "Fix syntax issues (missing commas, quotes, or brackets) and re-validate instantly",
      "Copy the formatted/minified output for your codebase, docs, or API requests",
    ],
    useCases: [
      "Debugging REST/GraphQL API responses and request bodies",
      "Validating JSON before sending it in Postman, curl, Insomnia, or a client SDK",
      "Beautifying minified JSON from logs to understand structure quickly",
      "Minifying JSON fixtures for production or bundling",
      "Reviewing webhook payloads (Stripe/GitHub/etc.) and extracting fields",
      "Normalizing config files (e.g., app settings, feature flags, translations)",
      "Learning JSON nesting by exploring objects/arrays in a tree viewer",
      "Comparing payload shapes during refactors and API version upgrades",
    ],
    features: [
      "Real-time JSON validation: Highlights syntax errors to help you fix JSON fast",
      "Tree + Pretty + Minify modes: Switch between readable views and compact output",
      "Developer-focused UX: Copy, clear, share, and examples for quick testing",
      "Handles nested data: Great for large objects and arrays from APIs and logs",
      "Local processing (privacy-first): Runs entirely in your browser (no uploads)",
      "Useful for docs & debugging: Clean formatting ideal for tickets, PRs, and documentation",
      "Works with common JSON pitfalls: Detects malformed structures and common syntax mistakes",
      "Fast & lightweight: Designed for speed and smooth interactions",
    ],
  },

  // A LOT more examples (real-world oriented). These drive SEO (long-tail) and help devs instantly.
  examples: [
    {
      title: "Pretty print compact JSON (common API response)",
      input:
        '{"id":123,"user":{"name":"Alice","email":"alice@example.com"},"roles":["admin","editor"],"active":true}',
      description:
        "Convert compact JSON into a readable, indented structure for debugging.",
    },
    {
      title: "Validate nested arrays and objects",
      input:
        '{"users":[{"id":1,"name":"Alice","meta":{"plan":"pro","flags":["beta","new-ui"]}},{"id":2,"name":"Bob","meta":{"plan":"free","flags":[]}}]}',
      description:
        "Validate deeply nested JSON and make it easier to inspect in Tree view.",
    },
    {
      title: "Minify formatted JSON for production",
      input:
        '{\n  "name": "John",\n  "age": 30,\n  "tags": ["dev", "api", "json"],\n  "active": true\n}',
      description:
        "Remove whitespace and line breaks to reduce payload size.",
    },
    {
      title: "Webhook payload example (GitHub-style)",
      input:
        '{"action":"opened","pull_request":{"id":999,"title":"Fix auth edge case","user":{"login":"octocat"},"labels":[{"name":"bug"},{"name":"security"}]},"repository":{"full_name":"acme/api"}}',
      description:
        "Typical webhook JSON: format it to quickly locate fields like title, labels, and repo.",
    },
    {
      title: "Error case: Missing comma (common JSON mistake)",
      input:
        '{\n  "name": "Alice"\n  "age": 28\n}',
      description:
        "Shows how validation catches missing commas between properties.",
    },
    {
      title: "Error case: Trailing comma (invalid in strict JSON)",
      input:
        '{\n  "name": "Alice",\n  "age": 28,\n}',
      description:
        "Strict JSON does not allow trailing commas — validate and fix quickly.",
    },
    {
      title: "Escape-heavy strings (logs / stack traces)",
      input:
        '{"level":"error","message":"Unexpected token \\"}\\" at position 42","path":"/api/users","meta":{"requestId":"req_abc123"}}',
      description:
        "Format JSON that contains lots of escaped quotes and debug logs.",
    },
    {
      title: "Config file example (feature flags)",
      input:
        '{"features":{"newCheckout":true,"fastSearch":false},"rollout":{"percentage":15,"allowlist":["user_1","user_2"]},"env":"production"}',
      description:
        "Great for formatting feature-flag configs and validating before deployment.",
    },
    {
      title: "GeoJSON-like structure (mapping / location data)",
      input:
        '{"type":"Feature","geometry":{"type":"Point","coordinates":[34.7818,32.0853]},"properties":{"name":"Tel Aviv","category":"city"}}',
      description:
        "Format nested coordinate arrays and properties for inspection.",
    },
    {
      title: "Large list example (pagination response)",
      input:
        '{"page":2,"pageSize":3,"total":12,"items":[{"id":"a1","status":"ok"},{"id":"a2","status":"ok"},{"id":"a3","status":"failed","error":{"code":"E_TIMEOUT","retry":true}}]}',
      description:
        "Format paginated responses and drill into error objects.",
    },
    {
      title: "Boolean/null/number types (type sanity check)",
      input:
        '{"isActive":false,"deletedAt":null,"count":0,"ratio":0.75,"meta":{"verified":true}}',
      description:
        "Confirm types quickly when debugging parsing or schema issues.",
    },
    {
      title: "JWT claims JSON (payload-style example)",
      input:
        '{"sub":"user_123","iat":1700000000,"exp":1700003600,"iss":"https://auth.example.com","aud":"api","scope":["read:users","write:users"]}',
      description:
        "Format token claims to inspect fields like exp/iat/iss/aud/scope.",
    },
    {
      title: "HTTP headers as JSON (common in tooling)",
      input:
        '{"content-type":"application/json","x-request-id":"req_789","cache-control":"no-store","accept":"application/json"}',
      description:
        "Format JSON-style headers for readability and troubleshooting.",
    },
  ],

  faq: [
    {
      question: "What is a JSON formatter?",
      answer:
        "A JSON formatter (pretty printer) restructures JSON using indentation and line breaks so it’s easier to read, review, and debug.",
    },
    {
      question: "What does a JSON validator check?",
      answer:
        "A JSON validator checks that your JSON is syntactically valid — correct commas, quotes, brackets/braces, and valid value types (strings, numbers, booleans, null, arrays, objects).",
    },
    {
      question: "Why is my JSON invalid even though it looks correct?",
      answer:
        "Common causes include trailing commas, missing commas between fields, unquoted keys, using single quotes instead of double quotes, or mismatched braces/brackets.",
    },
    {
      question: "Does this tool fix JSON automatically?",
      answer:
        "It validates and highlights what’s wrong. Many errors are quick to fix (missing commas/quotes, extra brackets). After edits, validation updates instantly.",
    },
    {
      question: "Can I minify JSON here?",
      answer:
        "Yes. Switch to Minify mode to produce compact JSON without whitespace — useful for production payloads and smaller network transfers.",
    },
    {
      question: "Is my JSON uploaded to a server?",
      answer:
        "No. Formatting and validation run locally in your browser. Your JSON stays on your device.",
    },
    {
      question: "What’s the difference between JSON and JavaScript objects?",
      answer:
        "JSON is a strict data format: keys must be in double quotes, strings must use double quotes, and trailing commas are not allowed. JavaScript objects are more flexible.",
    },
    {
      question: "How do I pretty print JSON in JavaScript/Node.js?",
      answer:
        "Use JSON.stringify(value, null, 2) to format with 2-space indentation. This tool provides a quick UI alternative when debugging payloads.",
    },
    {
      question: "How do I validate JSON in Python?",
      answer:
        "Use json.loads(text) to parse. If it throws an exception, the JSON is invalid. This tool helps you spot and fix the syntax visually.",
    },
    {
      question: "Can this handle large JSON payloads?",
      answer:
        "It’s built to work with large and deeply nested JSON. For extremely large payloads, Tree view helps you navigate without getting lost.",
    },
  ],

  relatedTools: [
    "json-validator",
    "json-minify",
    "beautify-json",
    "json-viewer",
    "json-to-yaml",
    "yaml-to-json",
    "json-to-csv",
    "csv-to-json",
    "base64-encode",
    "url-encode",
    "jwt-decoder",
  ],

  ui: {
    inputPlaceholder:
      'Paste JSON here… e.g. {"users":[{"id":1,"name":"Alice"}]}',
    outputPlaceholder:
      "Formatted JSON output will appear here…",
    inputLabel: "JSON Input",
    outputLabel: "Formatted JSON",
    convertLabel: "Format JSON",
  },
}
