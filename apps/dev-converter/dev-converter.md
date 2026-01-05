# DevConvert — Full Product Spec (MVP + Scalable Foundation)
Version: 1.0  
Date: 2026-01-01  
Goal: Build a developer-focused conversion/tools website (Dev Converters) designed for SEO growth and later monetization via Ads + Pro/API.

---

## 1) Overview & Business Goals

### 1.1 What is the product?
DevConvert is a web platform offering online tools for developers: converters, encoders/decoders, formatters, time utilities, hashing utilities, etc.

**Key idea:** Each tool has its own dedicated page/URL for strong SEO ranking and discoverability.

### 1.2 Core goals
- Ship MVP fast (2–3 weeks)
- SEO-first architecture: one tool = one URL/page
- Premium UX: modern UI, fast, copy/share/download, dark mode
- Future-ready: easy to add Pro + API later

### 1.3 Success Metrics (KPIs)
- Lighthouse score 90+ for performance on tool pages
- Average page load < 1.5s
- MVP with 20 tools (focus on Tier 1 demand)
- Full indexing support: sitemap.xml + canonical + structured data
- Analytics: track tool usage and key events (convert/copy/share)

---

## 2) Product Principles

### 2.1 UX principles
- Each tool follows a consistent “Input → Output” workflow
- Core actions must always be visible:
  - Copy output
  - Download output
  - Clear/reset
  - Prettify/minify (when relevant)
  - Share link (deep link)
- Dark Mode (default to system preference)
- Basic keyboard shortcuts:
  - Cmd/Ctrl + Enter → Convert/Run
  - Cmd/Ctrl + Shift + C → Copy Output
  - Esc → Clear
- Clear error handling with human-friendly messages + tips
- No aggressive ads (keep dev trust)

### 2.2 Engineering principles
- Client-side first (avoid server cost)
- Use Web Workers for heavy transformations when needed
- No file processing heavy features in MVP (avoid ffmpeg, large uploads)
- Stable tool URLs (do not change once published)

---

## 3) MVP Scope (Phase 1)

### 3.1 MVP Tool List (20 tools)
These are the first tools to build. They have strong search volume + frequent usage.

#### Tier 1 (Must-have)
1. JSON Formatter & Validator (prettify/minify + validation errors)
2. JSON → YAML Converter
3. YAML → JSON Converter
4. JSON → CSV Converter
5. CSV → JSON Converter
6. JWT Decoder (decode + show exp/iat as readable dates)
7. Base64 Encode/Decode (support URL-safe mode)
8. URL Encode/Decode
9. Unix Timestamp Converter (now button + timezone + ISO)
10. UUID v4 Generator (single + bulk)
11. Hash Generator (MD5 / SHA1 / SHA256 / SHA512)
12. HTML Escape/Unescape
13. JSON Escape/Unescape
14. Case Converter (camel/snake/kebab/pascal/title)
15. Diff Checker (text diff)
16. Color Converter (HEX/RGB/HSL)
17. Regex Tester (basic)
18. Markdown → HTML Converter
19. HTML → Markdown Converter
20. MIME Type Lookup (extension → mime + mime → extension)

> Note: All tools must be implemented client-side where possible.

---

## 4) Pages & Navigation Structure

### 4.1 Required Pages
- `/` Home: search + categories + featured tools
- `/tools/[slug]` Tool page (each tool has a unique slug)
- `/categories/[category]` Category page (lists tools)
- `/about` About (short)
- `/privacy-policy` Privacy
- `/terms` Terms
- `/contact` Contact (simple form or mailto)
- `/sitemap.xml` auto-generated
- `/robots.txt`

### 4.2 Tool URL structure examples
- `/tools/json-formatter`
- `/tools/json-to-yaml`
- `/tools/jwt-decoder`
- `/tools/base64-encode-decode`
- `/tools/unix-timestamp-converter`

### 4.3 Navigation requirements
- Top nav: Home, Categories, All Tools
- Sidebar inside tool pages:
  - Search bar
  - Categories
  - “Related tools” section

### 4.4 Category taxonomy (MVP)
- JSON & Data
- Encoding & Decoding
- Time & Date
- Crypto & Hashing
- Text Utilities
- Web Utilities

---

## 5) Tool Page Requirements (Critical for SEO)

Each tool page must contain:

### 5.1 UI Layout
- Tool title + short description
- Input editor (Monaco or CodeMirror recommended)
- Output editor
- Toolbar:
  - Convert/Run
  - Copy Output
  - Download
  - Clear
  - Share
- “Examples” section (with sample input + output)
- “FAQ” section (3–6 Q&As)
- “Related Tools” links (minimum 5 internal links)

### 5.2 SEO Meta Requirements
For each tool page:
- `title` (max 60 chars, high intent)
- `meta description` (max 160 chars)
- `H1` matches tool name
- `canonical` URL
- `OpenGraph` meta
- structured data (JSON-LD):
  - WebApplication or SoftwareApplication schema
  - FAQ schema if FAQ exists

### 5.3 Content Requirements
Each tool page must include:
- 100–250 words of helpful explanation (not fluff)
- At least 3 FAQs
- At least 1 code/example block

---

## 6) Sharing & Deep Links (State in URL)

### 6.1 Requirements
- Users can click “Share” and get a URL that reconstructs the tool state.
- State includes: input text, tool options, selected modes.
- Must not store sensitive data.
- Should compress input where possible.

### 6.2 Implementation options
- Query params with compression (e.g. LZ-string)
- OR store server-side + short token (Phase 2)

MVP recommendation: Query params with compression + limit max length.

---

## 7) Ads & Monetization (Phase 2)

### 7.1 Ads MVP setup (optional but planned)
- Only one ad slot per tool page (top or sidebar)
- Must not block UI usage
- Use lazy-loading

### 7.2 Pro plan (Phase 2)
- Remove Ads
- Saved history of conversions
- Presets
- Bulk tools (batch input)
- Faster processing (if server-based APIs added)

### 7.3 API plan (Phase 3)
Offer API endpoints:
- `POST /api/json-to-yaml`
- `POST /api/decode-jwt`
- `POST /api/hash`
With rate limits:
- Free tier: 100 req/day
- Pro: 10,000 req/day
- Team: unlimited

---

## 8) Analytics & Tracking

### 8.1 Events to track
- page_view (tool page)
- convert_run
- copy_output
- download_output
- share_link
- error_shown

### 8.2 Tools
- Plausible / PostHog / Google Analytics (choose one)
- Must be privacy-compliant (especially in EU)

---

## 9) Tech Stack Requirements

### 9.1 Frontend
- Next.js (App Router)
- TypeScript
- TailwindCSS
- Monaco Editor or CodeMirror
- Zustand (or React Context) for tool state management

### 9.2 Backend (MVP minimal)
- None required for conversions
- Only required for:
  - contact form (optional)
  - server-side share state (Phase 2)

### 9.3 Hosting
- Frontend: Vercel or Cloudflare Pages
- Future API: Railway / Fly.io

---

## 10) Performance Requirements
- Must be static-friendly (SSG where possible)
- Avoid heavy libraries in initial bundle
- Use dynamic imports for Monaco and heavy components
- Use caching and memoization for conversions
- Web Worker for expensive operations

---

## 11) Security Considerations
- Do not log user input
- No file uploads in MVP
- Use CSP headers
- Ensure converters do not execute user JS code
- Sanitize any HTML output rendering

---

## 12) Deliverables (What the agent must produce)

### 12.1 MVP Deliverables
- 20 tools implemented
- Tool registry/config system (easy to add more tools)
- All pages listed in section 4
- SEO metadata + sitemap + canonical for all tool pages
- Dark mode + responsive UI
- Share link working (query-based)
- Analytics events tracked

### 12.2 Documentation
- README: how to run locally + deploy
- “How to add a new tool” guide
- Tool registry structure explained

---

## 13) Tool Registry (Developer Experience)

### 13.1 Requirements
Tools must be defined in a central registry:
- `id`
- `slug`
- `name`
- `description`
- `category`
- `keywords`
- `metaTitle`
- `metaDescription`
- `faq[]`
- `examples[]`
- `component` reference

This allows:
- Auto-generating category pages
- Auto-generating sitemap
- Auto-generating related tools
- Auto-populating SEO metadata

---

## 14) Suggested Folder Structure (Next.js App Router)
- `/app`
  - `/page.tsx` (home)
  - `/tools/[slug]/page.tsx`
  - `/categories/[category]/page.tsx`
  - `/about/page.tsx`
  - `/privacy-policy/page.tsx`
  - `/terms/page.tsx`
  - `/contact/page.tsx`
- `/lib/tools`
  - `registry.ts`
  - `categories.ts`
- `/components`
  - `ToolLayout.tsx`
  - `Editor.tsx`
  - `ToolToolbar.tsx`
  - `FAQ.tsx`
  - `Examples.tsx`
- `/tools`
  - `json-formatter/Tool.tsx`
  - `jwt-decoder/Tool.tsx`
  - etc...

---

## 15) Future Extensions (Not in MVP)
- Account system
- Saved history
- Pro subscription
- API service
- Bulk conversions
- CLI tool
- Chrome extension

---

## Final Notes
This is not “one page with multiple tools”.  
This is a scalable SEO-first tool platform where every tool is a dedicated searchable asset.

The MVP must focus on:
- Speed
- SEO correctness
- Clean UX
- Tool quality
- Easy expansion

If those are done right, traffic + monetization becomes realistic.