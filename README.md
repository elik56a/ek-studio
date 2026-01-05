# EK Studio Monorepo

A TypeScript monorepo containing developer tools and shared UI components.

## Project Structure

```
ek-studio/
├── apps/
│   └── dev-converter/          # Next.js developer tools app
└── packages/
    └── ui/                     # Shared UI component library
```

## Apps

### DevConverter
A comprehensive collection of developer tools and converters built with Next.js. Features include data format conversion, encoding/decoding utilities, and various developer productivity tools.

## Packages

### @ek-studio/ui
Shared UI component library built with Radix UI primitives and Tailwind CSS. Provides consistent components across all EK Studio applications.

## Getting Started

Install dependencies:
```bash
pnpm install
```

Run the dev-converter app:
```bash
pnpm dev-converter:dev
```

## Available Scripts

- `pnpm dev-converter:dev` - Start dev-converter in development mode
- `pnpm dev-converter:build` - Build dev-converter for production
- `pnpm dev-converter:start` - Start dev-converter in production mode

## Technology Stack

- **Package Manager**: pnpm with workspaces
- **Language**: TypeScript
- **Framework**: Next.js 16
- **UI Library**: Radix UI + Tailwind CSS
- **Monorepo**: pnpm workspaces

## Development

This project uses pnpm workspaces for monorepo management. Each app and package can be developed independently while sharing common dependencies and the UI component library.