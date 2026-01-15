# DevConverter

A comprehensive collection of developer tools and converters built with Next.js.

## Project Structure

```
dev-converter/
├── src/
│   ├── app/                    # Next.js App Router pages
│   ├── components/             # React components
│   │   ├── tools/             # Tool-specific components
│   │   ├── common/            # Shared UI components
│   │   └── layout/            # Layout components
│   ├── features/              # Feature modules (business logic)
│   │   ├── encoding/          # Base64, URL, HTML, JSON encoding
│   │   ├── security/          # JWT, Hash, Password, UUID
│   │   ├── text/              # Case converter, Diff, Markdown, Regex
│   │   ├── time/              # Timestamp converter
│   │   ├── data-transform/    # JSON, CSV, YAML conversions
│   │   ├── data/              # MIME type lookups
│   │   └── ui/                # UI utilities (color, diff, json-viewer)
│   ├── tools/                 # Tool configurations
│   │   └── configs/           # Tool metadata by category
│   ├── shared/                # Shared types and utilities
│   ├── hooks/                 # Custom React hooks
│   ├── lib/                   # Core utilities
│   └── config/                # App configuration
└── package.json
```

## Architecture

### Features Directory

Business logic is organized by domain in `src/features/`. Each feature is self-contained with its own types, functions, and exports.

**Structure:**

- Each feature has focused modules (e.g., `encode.ts`, `decode.ts`, `validate.ts`)
- All functions use `export const =>` style
- No comments in code (documentation in tool configs)
- Barrel exports via `index.ts` files

**Example:**

```
features/security/jwt/
├── decode.ts       # JWT decoding logic
├── types.ts        # TypeScript interfaces
└── index.ts        # Public exports
```

### Tools Directory

Tool configurations define metadata, UI text, examples, and FAQs. Located in `src/tools/configs/` organized by category.

### Components Directory

React components for UI. Tool components in `src/components/tools/` use the `useTool` hook and `ToolLayout` for consistent behavior.

## Getting Started

From the monorepo root:

```bash
pnpm install
pnpm dev-converter:dev
```

Or from this directory:

```bash
pnpm dev
```

Open [http://localhost:4000](http://localhost:4000) to view the app.

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm format` - Format code with Prettier
- `pnpm format:check` - Check code formatting

## Technology Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: @ek-studio/ui (Radix UI primitives)
- **State Management**: Zustand
- **Package Manager**: pnpm (with workspaces)

## Code Style

- Use `export const =>` for all functions
- No comments in feature code
- TypeScript strict mode enabled
- Prettier for formatting

## Adding New Tools

See [CREATING_TOOLS.md](./CREATING_TOOLS.md) for a step-by-step guide.
