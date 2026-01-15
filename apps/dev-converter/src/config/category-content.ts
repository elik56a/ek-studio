export interface CategoryFAQ {
  question: string
  answer: string
}

export interface CategoryContent {
  description: string
  faqs: CategoryFAQ[]
}

export const categoryContent: Record<string, CategoryContent> = {
  "json-data": {
    description:
      "JSON and data transformation tools help developers convert, format, and validate structured data formats. Whether you're working with JSON, YAML, CSV, or other data formats, these tools make it easy to transform data between formats, validate syntax, and prepare data for APIs, databases, and applications. All tools run locally in your browser for maximum privacy and speed.",
    faqs: [
      {
        question: "What are JSON data tools used for?",
        answer:
          "JSON data tools are used for formatting, validating, and converting JSON data. They help developers work with API responses, configuration files, and structured data by beautifying minified JSON, validating syntax, and converting between formats like JSON, YAML, and CSV.",
      },
      {
        question: "Can I convert JSON to CSV for Excel?",
        answer:
          "Yes, our JSON to CSV converter transforms JSON arrays into CSV format that can be opened in Excel, Google Sheets, and other spreadsheet applications. This is perfect for exporting API data, creating reports, and analyzing structured data.",
      },
      {
        question: "How do I convert YAML to JSON?",
        answer:
          "Use our YAML to JSON converter to transform YAML configuration files into JSON format. This is useful when working with Kubernetes configs, Docker Compose files, or CI/CD pipelines that need JSON input.",
      },
      {
        question: "Are these JSON tools safe to use with sensitive data?",
        answer:
          "Yes, all our JSON and data tools run entirely in your browser. No data is uploaded to servers, ensuring your API responses, configuration files, and sensitive information remain private and secure.",
      },
      {
        question: "What's the difference between JSON and YAML?",
        answer:
          "JSON is a lightweight data format commonly used in APIs and web applications. YAML is more human-readable and supports comments, making it popular for configuration files. Both represent structured data, and our tools help you convert between them easily.",
      },
    ],
  },
  encoding: {
    description:
      "Encoding and decoding tools help developers safely transform data for web transmission, storage, and display. From Base64 encoding for images and credentials to URL encoding for query parameters, these tools ensure your data is properly formatted for HTTP requests, APIs, HTML rendering, and JSON payloads. All encoding happens locally in your browser for complete privacy.",
    faqs: [
      {
        question: "What is Base64 encoding used for?",
        answer:
          "Base64 encoding converts binary data into text format, making it safe for transmission in JSON, HTTP headers, and email. It's commonly used for encoding images as data URLs, API authentication credentials, and embedding files in HTML or CSS.",
      },
      {
        question: "When should I use URL encoding?",
        answer:
          "URL encoding (percent encoding) is essential when URLs contain special characters, spaces, or non-ASCII characters. Use it for query parameters, form submissions, UTM tracking links, and any URL that needs to be safely transmitted over HTTP.",
      },
      {
        question: "What's the difference between HTML escape and URL encoding?",
        answer:
          "HTML escaping converts characters like <, >, and & into HTML entities to prevent XSS attacks and display code safely. URL encoding converts characters into percent-encoded format for safe URL transmission. Use HTML escape for displaying content in HTML and URL encoding for query parameters.",
      },
      {
        question: "Is Base64 encoding secure for passwords?",
        answer:
          "No, Base64 is not encryption—it's encoding. Base64-encoded data can be easily decoded, so never use it alone for passwords or sensitive data. Use proper encryption or hashing algorithms like bcrypt or SHA-256 for security.",
      },
      {
        question: "Can I decode Base64 images?",
        answer:
          "Yes, our Base64 decoder can decode Base64-encoded images back to their original format. However, our File to Base64 tool is specifically designed for encoding images into Base64 data URLs for embedding in HTML, CSS, or JSON.",
      },
    ],
  },
  security: {
    description:
      "Security and cryptography tools help developers work with authentication tokens, generate secure identifiers, and create cryptographic hashes. From decoding JWT tokens to generating UUIDs and strong passwords, these tools are essential for API security, user authentication, and data integrity verification. All operations run locally in your browser to keep your sensitive data secure.",
    faqs: [
      {
        question: "What is a JWT token and how do I decode it?",
        answer:
          "A JWT (JSON Web Token) is a secure token format used for authentication and authorization in web applications and APIs. Our JWT decoder reveals the header, payload, and signature, helping you inspect user claims, expiration times, and token structure for debugging.",
      },
      {
        question: "What's the difference between MD5, SHA-256, and SHA-512?",
        answer:
          "MD5, SHA-256, and SHA-512 are cryptographic hash algorithms. MD5 is fast but considered weak for security. SHA-256 is widely used and secure for most applications. SHA-512 provides even stronger security with longer hash outputs. Use SHA-256 or SHA-512 for password hashing and data integrity.",
      },
      {
        question: "When should I use UUIDs instead of auto-increment IDs?",
        answer:
          "Use UUIDs when you need globally unique identifiers across distributed systems, want to avoid exposing sequential IDs publicly, or need to generate IDs offline without database coordination. UUIDs are perfect for user IDs, transaction IDs, and API request tracking.",
      },
      {
        question: "How do I create a strong password?",
        answer:
          "Use our password generator to create cryptographically secure passwords with a mix of uppercase, lowercase, numbers, and symbols. Aim for at least 12-16 characters for strong security. Never reuse passwords across different accounts.",
      },
      {
        question: "Are these security tools safe to use?",
        answer:
          "Yes, all our security tools run entirely in your browser. No tokens, passwords, or hashes are uploaded to servers. Your sensitive data remains on your device, ensuring complete privacy and security.",
      },
    ],
  },
  text: {
    description:
      "Text manipulation and analysis tools help developers transform, compare, and validate text and code. From converting text cases for variable names to testing regex patterns and comparing file differences, these tools streamline common text processing tasks. Perfect for code refactoring, documentation, and debugging workflows.",
    faqs: [
      {
        question: "What text case formats are supported?",
        answer:
          "Our case converter supports camelCase, PascalCase, snake_case, kebab-case, CONSTANT_CASE, Title Case, and more. These formats are essential for naming variables, functions, API fields, file names, and URL slugs according to different coding conventions.",
      },
      {
        question: "How do I test regular expressions?",
        answer:
          "Use our regex tester to test patterns against sample text with live matching and group extraction. It supports common regex flags (g, i, m) and helps you debug patterns for validation, parsing, and data extraction in JavaScript, Python, and other languages.",
      },
      {
        question: "What's the best way to compare two text files?",
        answer:
          "Our diff checker compares two texts side-by-side and highlights additions, deletions, and changes line-by-line. It works like git diff but runs in your browser, making it perfect for code reviews, document revisions, and configuration validation.",
      },
      {
        question: "Can I convert Markdown to HTML?",
        answer:
          "Yes, our Markdown to HTML converter transforms Markdown syntax into HTML markup and vice versa. It supports headers, lists, links, images, code blocks, and tables—perfect for documentation, blogging, and content migration.",
      },
      {
        question: "Are these text tools free to use?",
        answer:
          "Yes, all our text tools are completely free with no limits, no signup required, and no hidden costs. They run locally in your browser for maximum privacy and speed.",
      },
    ],
  },
  time: {
    description:
      "Time and date conversion tools help developers work with Unix timestamps, timezones, and date formats. Essential for debugging server logs, validating API timestamps, and preventing timezone-related bugs in distributed systems. Convert between Unix epoch time and human-readable dates instantly.",
    faqs: [
      {
        question: "What is a Unix timestamp?",
        answer:
          "A Unix timestamp (also called epoch time) represents the number of seconds since January 1, 1970 at 00:00:00 UTC. It's a timezone-independent way to represent time, commonly used in programming, APIs, databases, and system logs.",
      },
      {
        question: "How do I convert Unix timestamp to readable date?",
        answer:
          "Use our Unix timestamp converter to transform epoch time into human-readable dates. It supports both seconds (10-digit) and milliseconds (13-digit) timestamps and displays results in UTC and local timezones.",
      },
      {
        question:
          "What's the difference between seconds and milliseconds timestamps?",
        answer:
          "Unix timestamps can be in seconds (10 digits, e.g., 1704067200) or milliseconds (13 digits, e.g., 1704067200000). JavaScript uses milliseconds, while many backend systems use seconds. Our converter automatically detects the format.",
      },
      {
        question: "How do I handle timezone conversions?",
        answer:
          "Our Unix timestamp converter displays results in both UTC and your local timezone, helping you debug timezone-related issues. Unix timestamps are always in UTC, making them ideal for storing time in databases and APIs.",
      },
      {
        question: "Can I convert dates to Unix timestamps?",
        answer:
          "Yes, our converter works both ways. Paste a date string (ISO 8601, natural language, etc.) and it will convert it to a Unix timestamp. This is useful for creating timestamps for API requests, database queries, and scheduled tasks.",
      },
    ],
  },
  utility: {
    description:
      "Utility tools provide essential functionality for web development and design workflows. From converting color formats for CSS to looking up MIME types for file handling, these tools solve common development challenges. Perfect for frontend developers, designers, and anyone working with web technologies.",
    faqs: [
      {
        question: "How do I convert HEX colors to RGB?",
        answer:
          "Use our color converter to transform HEX color codes (like #FF5733) into RGB format (rgb(255, 87, 51)). It also supports RGBA, HSL, and HSLA formats with live color preview, making it perfect for CSS styling and design systems.",
      },
      {
        question: "What is a MIME type and why is it important?",
        answer:
          "A MIME type (also called Content-Type) tells browsers and servers how to handle a file. For example, image/png for PNG images or application/json for JSON data. Setting correct MIME types prevents broken file handling, ensures proper caching, and improves security.",
      },
      {
        question: "When should I use HSL instead of HEX or RGB?",
        answer:
          "HSL (Hue, Saturation, Lightness) is great for color manipulation because you can easily adjust brightness or saturation. Use HSL when building color themes, creating color variations, or implementing dark mode. HEX and RGB are more common for static color values.",
      },
      {
        question: "How do I find the MIME type for a file extension?",
        answer:
          "Use our MIME type lookup tool to find the correct Content-Type for any file extension. Just enter the extension (like .pdf, .png, or .json) and get the standard MIME type for HTTP headers, file uploads, and API responses.",
      },
      {
        question: "Are these utility tools free?",
        answer:
          "Yes, all our utility tools are completely free with no limits, no signup required, and no hidden costs. They run locally in your browser for maximum privacy and instant results.",
      },
    ],
  },
}
