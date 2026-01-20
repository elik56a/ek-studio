import { Tool } from "@/lib/tools/types"

/**
 * Query String Encode Tool Configuration (SEO Variant)
 *
 * Alternative SEO-focused page for encoding query strings.
 * Targets "querystring encode" keyword variations.
 */
export const querystringEncodeTool: Tool = {
  id: "querystring-encode",
  slug: "querystring-encode",
  name: "Query String Encode",
  description:
    "Encode query string parameters using percent-encoding for safe URL transmission",
  category: "encoding",
  type: "converter",

  // Hide from header dropdown
  nav: {
    showInHeader: false,
  },

  // Reuse url-encode-decode component
  componentId: "url-encode-decode",

  // Preset for encode mode
  preset: {
    mode: "encode",
  },

  keywords: [
    "querystring encode",
    "query string encode",
    "encode query string",
    "query parameter encode",
    "encode url parameters",
    "querystring encoder",
  ],

  metadata: {
    title: "Query String Encode Tool - Encode URL Parameters Online",
    description:
      "Encode query string parameters using percent-encoding. Convert spaces, ampersands, and special characters for safe URL transmission.",
    keywords: [
      "querystring encode",
      "query string encode",
      "encode query parameters",
      "url parameter encoder",
    ],
  },

  info: {
    description:
      "This Query String Encode tool helps you encode URL parameters and query strings using percent-encoding. When building URLs with query parameters, special characters like spaces, ampersands (&), equals signs (=), and question marks (?) must be properly encoded to prevent breaking the URL structure. This tool converts these characters to %XX format, ensuring your query strings work correctly in APIs, tracking links, form submissions, and web applications.",
    howToUse: [
      "Paste query string parameters or values to encode",
      "Click Encode to convert to percent-encoded format",
      "Copy the encoded output for use in your URLs",
      "Append to URLs after ? or & for query parameters",
    ],
    useCases: [
      "Encode query parameters for GET requests",
      "Build search URLs with encoded search terms",
      "Create UTM tracking links with encoded campaign names",
      "Encode form data for URL submission",
      "Prepare API query parameters with special characters",
      "Encode filter and sort parameters for web applications",
    ],
    features: [
      "Encodes all special characters in query strings",
      "Handles spaces, ampersands, equals, and symbols",
      "Supports Unicode and emoji in parameters",
      "One-click copy to clipboard",
      "Client-side processing - privacy-friendly",
    ],
  },

  examples: [
    {
      title: "Encode search query",
      input: "q=coffee & tea",
      description: "Encode ampersand and space in search term",
    },
    {
      title: "Encode multiple parameters",
      input: "name=John Doe&city=New York",
      description: "Encode spaces in parameter values",
    },
    {
      title: "Encode special characters",
      input: "filter=price>100&sort=name",
      description: "Encode comparison operators",
    },
    {
      title: "Encode UTM parameters",
      input: "utm_campaign=Summer Sale 2024&utm_source=email",
      description: "Encode campaign name with spaces",
    },
    {
      title: "Encode Unicode query",
      input: "search=café résumé",
      description: "Encode accented characters in query",
    },
  ],

  faq: [
    {
      question: "What is query string encoding?",
      answer:
        "Query string encoding is the process of converting special characters in URL parameters to percent-encoded format (%XX). This ensures query strings don't break URL syntax and can be safely transmitted over the internet.",
    },
    {
      question: "Why do query strings need encoding?",
      answer:
        "Query strings use special characters like & (separates parameters), = (separates key from value), and ? (starts query string). If these characters appear in parameter values, they must be encoded to prevent misinterpretation. Spaces and Unicode characters also need encoding.",
    },
    {
      question: "Should I encode the entire query string or just values?",
      answer:
        "Typically, you only encode the parameter values, not the structure characters (?, &, =). For example, in 'name=John Doe', encode 'John Doe' to 'John%20Doe', resulting in 'name=John%20Doe'. Don't encode the = sign.",
    },
    {
      question: "What's the difference between + and %20 for spaces?",
      answer:
        "Both + and %20 represent spaces in query strings. The + is a legacy form specific to application/x-www-form-urlencoded format. %20 is the standard percent-encoding and works everywhere. This tool uses %20 for consistency.",
    },
    {
      question: "Can I encode array parameters?",
      answer:
        "Yes! For arrays, you can use formats like 'tags[]=value1&tags[]=value2' or 'tags=value1,value2'. Encode the values and any special characters in the parameter names if needed.",
    },
    {
      question: "How do I encode nested parameters?",
      answer:
        "For nested parameters, use formats like 'user[name]=John' or 'filter[price][min]=100'. Encode the values and any special characters in the keys. Different frameworks may have different conventions.",
    },
    {
      question: "Does encoding affect API requests?",
      answer:
        "Yes, proper query string encoding is essential for API requests. Most HTTP libraries automatically encode query parameters, but when building URLs manually, you must encode values to prevent errors.",
    },
    {
      question: "Is this tool safe for sensitive data?",
      answer:
        "Yes, this tool runs entirely in your browser. No data is sent to any server, making it safe for encoding sensitive query parameters.",
    },
  ],

  relatedTools: [
    "url-encode-decode",
    "url-encode",
    "querystring-decode",
    "percent-encode",
    "base64-encode-decode",
    "json-escape-unescape",
  ],

  ui: {
    inputPlaceholder: "Enter query string to encode (e.g., name=John Doe)...",
    outputPlaceholder: "Encoded query string will appear here...",
    inputLabel: "Query String (Plain)",
    outputLabel: "Query String (Encoded)",
    convertLabel: "Encode",
  },
}
