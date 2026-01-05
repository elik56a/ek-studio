# DevConverter

A comprehensive collection of developer tools and converters built with Next.js.

## Project Structure

This is part of the EK Studio monorepo:

```
ek-studio/
├── apps/
│   └── dev-converter/          # This Next.js application
│       ├── src/
│       │   ├── app/           # Next.js App Router
│       │   ├── components/    # React components
│       │   ├── hooks/         # Custom React hooks
│       │   └── lib/           # Utility functions
│       └── package.json
├── packages/
│   └── ui/                    # Shared UI components (@ek-studio/ui)
└── pnpm-workspace.yaml        # Monorepo configuration
```

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

Open [http://localhost:4000](http://localhost:4000) with your browser to see the result.

## Available Scripts

From this directory:

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm format` - Format code with Prettier
- `pnpm format:check` - Check code formatting

## Shared UI Components

This app uses the shared UI component library `@ek-studio/ui` which includes:

- All Radix UI primitives (Button, Card, Input, etc.)
- Consistent styling with Tailwind CSS
- Utility functions (cn for className merging)
- Reusable across all EK Studio applications

## Technology Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: @ek-studio/ui (Radix UI primitives)
- **State Management**: Zustand
- **Package Manager**: pnpm (with workspaces)
- **Code Formatting**: Prettier
- **Linting**: ESLint

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
