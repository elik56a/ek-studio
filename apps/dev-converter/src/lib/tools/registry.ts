import JsonFormatterTool from "@/components/tools/json-formatter"
import JsonToYamlTool from "@/components/tools/json-to-yaml"
import YamlToJsonTool from "@/components/tools/yaml-to-json"
import JsonToCsvTool from "@/components/tools/json-to-csv"
import CsvToJsonTool from "@/components/tools/csv-to-json"
import Base64EncodeDecodeTool from "@/components/tools/base64-encode-decode"
import { ComingSoonPlaceholder } from "@/components/coming-soon-placeholder"

import { Tool } from "./types"

export const tools: Tool[] = [
  {
    id: "json-formatter",
    slug: "json-formatter",
    name: "JSON Formatter & Validator",
    description:
      "Format, validate, and beautify JSON data with error highlighting",
    category: "json-data",
    keywords: ["json", "format", "validate", "prettify", "minify"],
    metadata: {
      title: "JSON Formatter & Validator - Format and Validate JSON Online",
      description:
        "Free online JSON formatter and validator. Beautify, minify, and validate JSON data with syntax highlighting and error detection.",
      keywords: [
        "json formatter",
        "json validator",
        "json beautifier",
        "json minifier",
        "json parser",
      ],
    },
    examples: [
      {
        title: "Basic JSON formatting",
        input: '{"name":"John","age":30,"city":"New York"}',
        description: "Format a simple JSON object",
      },
      {
        title: "Nested JSON",
        input: '{"users":[{"id":1,"name":"Alice"},{"id":2,"name":"Bob"}]}',
        description: "Format JSON with nested arrays and objects",
      },
    ],
    faq: [
      {
        question: "What is JSON formatting?",
        answer:
          "JSON formatting adds proper indentation and line breaks to make JSON data more readable.",
      },
      {
        question: "Can this validate JSON?",
        answer:
          "Yes, the tool will show an error if your JSON syntax is invalid.",
      },
    ],
    relatedTools: ["json-to-yaml", "json-to-csv"],
    ui: {
      inputPlaceholder: "Paste your JSON here...",
      outputPlaceholder: "Formatted JSON will appear here...",
      inputLabel: "JSON Input",
      outputLabel: "Formatted JSON",
      convertLabel: "Format JSON",
    },
    switcher: {
      enabled: true,
      mode: 'category',
      showAllLink: true,
      preserveInput: true,
    },
    component: JsonFormatterTool,
  },
  {
    id: "json-to-yaml",
    slug: "json-to-yaml",
    name: "JSON to YAML Converter",
    description: "Convert JSON data to YAML format with proper indentation",
    category: "json-data",
    keywords: ["json", "yaml", "convert", "transform"],
    metadata: {
      title: "JSON to YAML Converter - Convert JSON to YAML Online",
      description:
        "Free online JSON to YAML converter. Transform JSON data to YAML format with proper indentation and structure.",
      keywords: [
        "json to yaml",
        "yaml converter",
        "json converter",
        "data transformation",
      ],
    },
    examples: [
      {
        title: "Simple object",
        input: '{"name":"John Doe","age":30,"city":"New York"}',
        description: "Convert a simple JSON object to YAML",
      },
      {
        title: "Nested structure",
        input: '{"user":{"name":"Alice","email":"alice@example.com","settings":{"theme":"dark","notifications":true}}}',
        description: "Convert nested JSON with multiple levels",
      },
      {
        title: "Array of objects",
        input: '[{"id":1,"name":"Product A","price":29.99},{"id":2,"name":"Product B","price":49.99}]',
        description: "Convert JSON array to YAML list",
      },
    ],
    faq: [
      {
        question: "What is YAML?",
        answer:
          "YAML (YAML Ain't Markup Language) is a human-readable data serialization format commonly used for configuration files. It uses indentation to represent structure instead of brackets.",
      },
      {
        question: "When should I use YAML instead of JSON?",
        answer:
          "YAML is often preferred for configuration files because it's more readable and supports comments. JSON is better for data exchange between systems and APIs.",
      },
      {
        question: "Does this tool validate my JSON?",
        answer:
          "Yes, the tool will show an error if your JSON is invalid and cannot be parsed.",
      },
    ],
    relatedTools: ["yaml-to-json", "json-formatter"],
    ui: {
      inputPlaceholder: "Paste your JSON here...",
      outputPlaceholder: "YAML output will appear here...",
      inputLabel: "JSON Input",
      outputLabel: "YAML Output",
      convertLabel: "Convert to YAML",
    },
    switcher: {
      enabled: true,
      mode: 'category',
      showAllLink: true,
      preserveInput: true,
    },
    component: JsonToYamlTool,
  },
  {
    id: "yaml-to-json",
    slug: "yaml-to-json",
    name: "YAML to JSON Converter",
    description: "Convert YAML data to JSON format with proper formatting",
    category: "json-data",
    keywords: ["yaml", "json", "convert", "transform"],
    metadata: {
      title: "YAML to JSON Converter - Convert YAML to JSON Online",
      description:
        "Free online YAML to JSON converter. Transform YAML data to JSON format with proper formatting and validation.",
      keywords: [
        "yaml to json",
        "json converter",
        "yaml converter",
        "data transformation",
      ],
    },
    examples: [
      {
        title: "Simple YAML object",
        input: "name: John Doe\nage: 30\ncity: New York",
        description: "Convert a simple YAML object to JSON",
      },
      {
        title: "Nested YAML structure",
        input: "user:\n  name: Alice\n  email: alice@example.com\n  settings:\n    theme: dark\n    notifications: true",
        description: "Convert nested YAML with multiple levels",
      },
      {
        title: "YAML list",
        input: "- id: 1\n  name: Product A\n  price: 29.99\n- id: 2\n  name: Product B\n  price: 49.99",
        description: "Convert YAML list to JSON array",
      },
    ],
    faq: [
      {
        question: "What is YAML?",
        answer:
          "YAML (YAML Ain't Markup Language) is a human-readable data serialization format that uses indentation to represent structure. It's commonly used for configuration files.",
      },
      {
        question: "Can YAML have comments?",
        answer:
          "Yes, YAML supports comments using the # symbol. However, comments are not preserved when converting to JSON since JSON doesn't support comments.",
      },
      {
        question: "Does this tool validate my YAML?",
        answer:
          "Yes, the tool will show an error if your YAML syntax is invalid and cannot be parsed.",
      },
    ],
    relatedTools: ["json-to-yaml", "json-formatter"],
    ui: {
      inputPlaceholder: "Paste your YAML here...",
      outputPlaceholder: "JSON output will appear here...",
      inputLabel: "YAML Input",
      outputLabel: "JSON Output",
      convertLabel: "Convert to JSON",
    },
    switcher: {
      enabled: true,
      mode: 'category',
      showAllLink: true,
      preserveInput: true,
    },
    component: YamlToJsonTool,
  },
  {
    id: "json-to-csv",
    slug: "json-to-csv",
    name: "JSON to CSV Converter",
    description: "Convert JSON data to CSV format for spreadsheet applications",
    category: "json-data",
    keywords: ["json", "csv", "convert", "spreadsheet"],
    metadata: {
      title: "JSON to CSV Converter - Convert JSON to CSV Online",
      description:
        "Free online JSON to CSV converter. Transform JSON arrays to CSV format for Excel and spreadsheet applications.",
      keywords: [
        "json to csv",
        "csv converter",
        "json converter",
        "spreadsheet converter",
      ],
    },
    examples: [
      {
        title: "Array of objects",
        input: '[{"name":"John","age":30,"city":"New York"},{"name":"Alice","age":25,"city":"London"},{"name":"Bob","age":35,"city":"Paris"}]',
        description: "Convert JSON array to CSV with headers",
      },
      {
        title: "Product data",
        input: '[{"id":1,"product":"Laptop","price":999.99,"stock":15},{"id":2,"product":"Mouse","price":29.99,"stock":50}]',
        description: "Convert product data to CSV format",
      },
      {
        title: "Single object",
        input: '{"name":"John Doe","email":"john@example.com","role":"Developer"}',
        description: "Convert a single JSON object to CSV",
      },
    ],
    faq: [
      {
        question: "What JSON format is required?",
        answer:
          "The tool accepts either a JSON array of objects or a single JSON object. Arrays are converted to multi-row CSV files, while single objects create a single-row CSV.",
      },
      {
        question: "How are nested objects handled?",
        answer:
          "Nested objects are flattened and converted to string representation. For complex nested structures, consider flattening your JSON first.",
      },
      {
        question: "Can I use this CSV in Excel?",
        answer:
          "Yes! The generated CSV format is compatible with Excel, Google Sheets, and other spreadsheet applications.",
      },
    ],
    relatedTools: ["csv-to-json", "json-formatter"],
    ui: {
      inputPlaceholder: "Paste your JSON array here...",
      outputPlaceholder: "CSV output will appear here...",
      inputLabel: "JSON Input",
      outputLabel: "CSV Output",
      convertLabel: "Convert to CSV",
    },
    switcher: {
      enabled: true,
      mode: 'category',
      showAllLink: true,
      preserveInput: true,
    },
    component: JsonToCsvTool,
  },
  {
    id: "csv-to-json",
    slug: "csv-to-json",
    name: "CSV to JSON Converter",
    description:
      "Convert CSV data to JSON format with automatic header detection",
    category: "json-data",
    keywords: ["csv", "json", "convert", "spreadsheet"],
    metadata: {
      title: "CSV to JSON Converter - Convert CSV to JSON Online",
      description:
        "Free online CSV to JSON converter. Transform CSV data to JSON format with automatic header detection and validation.",
      keywords: [
        "csv to json",
        "json converter",
        "csv converter",
        "data transformation",
      ],
    },
    examples: [
      {
        title: "Simple CSV",
        input: "name,age,city\nJohn,30,New York\nAlice,25,London\nBob,35,Paris",
        description: "Convert CSV with headers to JSON array",
      },
      {
        title: "Product data",
        input: "id,product,price,stock\n1,Laptop,999.99,15\n2,Mouse,29.99,50\n3,Keyboard,79.99,30",
        description: "Convert product CSV to JSON",
      },
      {
        title: "Contact list",
        input: "name,email,phone\nJohn Doe,john@example.com,555-0100\nJane Smith,jane@example.com,555-0101",
        description: "Convert contact CSV to JSON",
      },
    ],
    faq: [
      {
        question: "Does the CSV need headers?",
        answer:
          "Yes, the first row of your CSV should contain column headers. These will become the keys in the resulting JSON objects.",
      },
      {
        question: "How are data types handled?",
        answer:
          "The tool automatically detects and converts numbers and booleans to their proper types. Text values remain as strings.",
      },
      {
        question: "What if my CSV has errors?",
        answer:
          "The tool will show specific error messages indicating which row has issues, making it easy to fix your CSV data.",
      },
    ],
    relatedTools: ["json-to-csv", "json-formatter"],
    ui: {
      inputPlaceholder: "Paste your CSV here...",
      outputPlaceholder: "JSON output will appear here...",
      inputLabel: "CSV Input",
      outputLabel: "JSON Output",
      convertLabel: "Convert to JSON",
    },
    switcher: {
       enabled: true,
      mode: 'category',
      showAllLink: true,
      preserveInput: true,
    },
    component: CsvToJsonTool,
  },
  {
    id: "base64-encode-decode",
    slug: "base64-encode-decode",
    name: "Base64 Encoder & Decoder",
    description: "Encode text to Base64 or decode Base64 back to text",
    category: "encoding",
    keywords: ["base64", "encode", "decode", "binary"],
    metadata: {
      title: "Base64 Encoder & Decoder - Encode and Decode Base64 Online",
      description:
        "Free online Base64 encoder and decoder. Convert text to Base64 encoding or decode Base64 back to readable text.",
      keywords: [
        "base64 encoder",
        "base64 decoder",
        "base64 converter",
        "binary encoding",
      ],
    },
    examples: [
      {
        title: "Encode text",
        input: "Hello, World!",
        description: "Encode plain text to Base64",
      },
      {
        title: "Decode Base64",
        input: "SGVsbG8sIFdvcmxkIQ==",
        description: "Decode Base64 back to text",
      },
      {
        title: "Encode JSON",
        input: '{"name":"John","age":30}',
        description: "Encode JSON data to Base64",
      },
    ],
    faq: [
      {
        question: "What is Base64 encoding?",
        answer:
          "Base64 is a binary-to-text encoding scheme that represents binary data in ASCII string format. It uses 64 different ASCII characters (A-Z, a-z, 0-9, +, /) to encode data.",
      },
      {
        question: "When should I use Base64?",
        answer:
          "Base64 is commonly used for encoding binary data in URLs, emails, data URIs, and when transmitting data over text-based protocols. It's also used in authentication tokens and embedding images in HTML/CSS.",
      },
      {
        question: "Does Base64 encrypt data?",
        answer:
          "No, Base64 is an encoding method, not encryption. It makes data unreadable to casual observers but can be easily decoded by anyone. Never use Base64 alone for securing sensitive data.",
      },
      {
        question: "How does auto-detection work?",
        answer:
          "The tool automatically detects if your input is valid Base64 (contains only Base64 characters and proper padding) and decodes it. Otherwise, it encodes your text to Base64.",
      },
    ],
    relatedTools: ["url-encode-decode", "html-escape-unescape"],
    ui: {
      inputPlaceholder: "Enter text to encode or Base64 to decode...",
      outputPlaceholder: "Encoded/decoded result will appear here...",
      inputLabel: "Text Input",
      outputLabel: "Base64 Output",
      convertLabel: "Encode/Decode",
    },
    component: Base64EncodeDecodeTool,
  },
  {
    id: "url-encode-decode",
    slug: "url-encode-decode",
    name: "URL Encoder & Decoder",
    description: "Encode URLs for safe transmission or decode URL-encoded text",
    category: "encoding",
    keywords: ["url", "encode", "decode", "percent"],
    metadata: {
      title: "URL Encoder & Decoder - Encode and Decode URLs Online",
      description:
        "Free online URL encoder and decoder. Encode URLs for safe transmission or decode URL-encoded text.",
      keywords: [
        "url encoder",
        "url decoder",
        "percent encoding",
        "uri encoding",
      ],
    },
    examples: [],
    faq: [],
    relatedTools: ["base64-encode-decode", "html-escape-unescape"],
    ui: {
      inputPlaceholder: "Enter URL to encode or encoded URL to decode...",
      outputPlaceholder: "Encoded/decoded URL will appear here...",
      inputLabel: "URL Input",
      outputLabel: "URL Output",
      convertLabel: "Encode/Decode",
    },
    component: ComingSoonPlaceholder,
  },
  {
    id: "html-escape-unescape",
    slug: "html-escape-unescape",
    name: "HTML Escape & Unescape",
    description:
      "Escape HTML characters for safe display or unescape HTML entities",
    category: "encoding",
    keywords: ["html", "escape", "unescape", "entities"],
    metadata: {
      title: "HTML Escape & Unescape - Escape HTML Characters Online",
      description:
        "Free online HTML escape and unescape tool. Convert HTML characters to entities or decode HTML entities back to text.",
      keywords: [
        "html escape",
        "html unescape",
        "html entities",
        "html encoder",
      ],
    },
    examples: [],
    faq: [],
    relatedTools: ["url-encode-decode", "json-escape-unescape"],
    ui: {
      inputPlaceholder: "Enter HTML to escape or HTML entities to unescape...",
      outputPlaceholder: "Escaped/unescaped HTML will appear here...",
      inputLabel: "HTML Input",
      outputLabel: "HTML Output",
      convertLabel: "Escape/Unescape",
    },
    component: ComingSoonPlaceholder,
  },
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
  {
    id: "case-converter",
    slug: "case-converter",
    name: "Case Converter",
    description:
      "Convert text to different cases: camelCase, PascalCase, snake_case, and more",
    category: "text",
    keywords: ["case", "convert", "camel", "pascal", "snake", "kebab"],
    metadata: {
      title: "Case Converter - Convert Text Cases Online",
      description:
        "Free online case converter. Convert text to camelCase, PascalCase, snake_case, kebab-case, and more formats.",
      keywords: [
        "case converter",
        "camelcase converter",
        "snake case converter",
        "text converter",
      ],
    },
    examples: [],
    faq: [],
    relatedTools: ["diff-checker", "regex-tester"],
    ui: {
      inputPlaceholder: "Enter text to convert case...",
      outputPlaceholder: "Converted text will appear here...",
      inputLabel: "Text Input",
      outputLabel: "Converted Text",
      convertLabel: "Convert Case",
    },
    component: ComingSoonPlaceholder,
  },
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
  {
    id: "json-escape-unescape",
    slug: "json-escape-unescape",
    name: "JSON Escape & Unescape",
    description: "Escape text for JSON strings or unescape JSON-encoded text",
    category: "encoding",
    keywords: ["json", "escape", "unescape", "string"],
    metadata: {
      title: "JSON Escape & Unescape - Escape JSON Strings Online",
      description:
        "Free online JSON escape and unescape tool. Escape text for JSON strings or decode JSON-encoded text.",
      keywords: [
        "json escape",
        "json unescape",
        "json encoder",
        "string escape",
      ],
    },
    examples: [],
    faq: [],
    relatedTools: ["json-formatter", "html-escape-unescape"],
    ui: {
      inputPlaceholder: "Enter text to escape or JSON string to unescape...",
      outputPlaceholder: "Escaped/unescaped text will appear here...",
      inputLabel: "Text Input",
      outputLabel: "JSON String Output",
      convertLabel: "Escape/Unescape",
    },
    component: ComingSoonPlaceholder,
  },
  {
    id: "diff-checker",
    slug: "diff-checker",
    name: "Diff Checker",
    description: "Compare two texts side-by-side and highlight differences",
    category: "text",
    keywords: ["diff", "compare", "difference", "text"],
    metadata: {
      title: "Diff Checker - Compare Text Differences Online",
      description:
        "Free online diff checker. Compare two texts side-by-side and highlight differences with detailed analysis.",
      keywords: [
        "diff checker",
        "text compare",
        "difference checker",
        "text diff",
      ],
    },
    examples: [],
    faq: [],
    relatedTools: ["case-converter", "regex-tester"],
    ui: {
      inputPlaceholder: "Enter first text to compare...",
      outputPlaceholder: "Differences will be highlighted here...",
      inputLabel: "Text 1",
      outputLabel: "Comparison Result",
      convertLabel: "Compare",
    },
    component: ComingSoonPlaceholder,
  },
  {
    id: "color-converter",
    slug: "color-converter",
    name: "Color Converter",
    description: "Convert colors between HEX, RGB, and HSL formats",
    category: "text",
    keywords: ["color", "hex", "rgb", "hsl", "convert"],
    metadata: {
      title: "Color Converter - Convert HEX, RGB, HSL Colors Online",
      description:
        "Free online color converter. Convert colors between HEX, RGB, and HSL formats with visual color picker.",
      keywords: ["color converter", "hex to rgb", "rgb to hex", "color picker"],
    },
    examples: [],
    faq: [],
    relatedTools: ["case-converter", "hash-generator"],
    ui: {
      inputPlaceholder: "Enter color value (HEX, RGB, HSL)...",
      outputPlaceholder: "Converted color values will appear here...",
      inputLabel: "Color Input",
      outputLabel: "Color Output",
      convertLabel: "Convert Color",
    },
    component: ComingSoonPlaceholder,
  },
  {
    id: "regex-tester",
    slug: "regex-tester",
    name: "Regex Tester",
    description:
      "Test regular expressions with live matching and group extraction",
    category: "text",
    keywords: ["regex", "regexp", "pattern", "match", "test"],
    metadata: {
      title: "Regex Tester - Test Regular Expressions Online",
      description:
        "Free online regex tester. Test regular expressions with live matching, group extraction, and detailed results.",
      keywords: [
        "regex tester",
        "regexp tester",
        "regular expression",
        "pattern matcher",
      ],
    },
    examples: [],
    faq: [],
    relatedTools: ["diff-checker", "case-converter"],
    ui: {
      inputPlaceholder: "Enter text to test against regex...",
      outputPlaceholder: "Regex matches will appear here...",
      inputLabel: "Test Text",
      outputLabel: "Match Results",
      convertLabel: "Test Regex",
    },
    component: ComingSoonPlaceholder,
  },
  {
    id: "markdown-html-converter",
    slug: "markdown-html-converter",
    name: "Markdown ↔ HTML Converter",
    description: "Convert between Markdown and HTML formats with split view",
    category: "text",
    keywords: ["markdown", "html", "convert", "md"],
    metadata: {
      title: "Markdown HTML Converter - Convert Markdown to HTML Online",
      description:
        "Free online Markdown to HTML converter. Convert between Markdown and HTML formats with split view preview.",
      keywords: [
        "markdown to html",
        "html to markdown",
        "md converter",
        "markdown converter",
      ],
    },
    examples: [],
    faq: [],
    relatedTools: ["html-escape-unescape", "case-converter"],
    ui: {
      inputPlaceholder: "Enter Markdown or HTML...",
      outputPlaceholder: "Converted output will appear here...",
      inputLabel: "Input",
      outputLabel: "Converted Output",
      convertLabel: "Convert",
    },
    component: ComingSoonPlaceholder,
  },
  {
    id: "mime-type-lookup",
    slug: "mime-type-lookup",
    name: "MIME Type Lookup",
    description: "Find MIME types for file extensions with search suggestions",
    category: "utility",
    keywords: ["mime", "type", "extension", "file", "lookup"],
    metadata: {
      title: "MIME Type Lookup - Find MIME Types for File Extensions",
      description:
        "Free online MIME type lookup tool. Find MIME types for file extensions with search suggestions and detailed information.",
      keywords: [
        "mime type lookup",
        "file extension",
        "content type",
        "mime database",
      ],
    },
    examples: [],
    faq: [],
    relatedTools: ["hash-generator", "base64-encode-decode"],
    ui: {
      inputPlaceholder: "Enter file extension (e.g., .pdf, .jpg)...",
      outputPlaceholder: "MIME type information will appear here...",
      inputLabel: "File Extension",
      outputLabel: "MIME Type",
      convertLabel: "Lookup",
    },
    component: ComingSoonPlaceholder,
  },
]

export const getToolBySlug = (slug: string): Tool | undefined => {
  return tools.find(tool => tool.slug === slug)
}

export const getToolById = (id: string): Tool | undefined => {
  return tools.find(tool => tool.id === id)
}

export const getToolsByCategory = (categoryId: string): Tool[] => {
  return tools.filter(tool => tool.category === categoryId)
}

export const getAllTools = (): Tool[] => {
  return tools
}

export const searchTools = (query: string): Tool[] => {
  const lowercaseQuery = query.toLowerCase()
  return tools.filter(
    tool =>
      tool.name.toLowerCase().includes(lowercaseQuery) ||
      tool.description.toLowerCase().includes(lowercaseQuery) ||
      tool.keywords.some(keyword =>
        keyword.toLowerCase().includes(lowercaseQuery)
      )
  )
}