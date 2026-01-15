# Design Document

## Overview

This design document outlines the refactoring of the dev-converter application from a monolithic utility file structure to a feature-based hybrid architecture. The refactoring focuses on improving code organization, maintainability, and developer experience without changing any business logic or functionality.

The new architecture adopts a hybrid approach that combines feature-first organization with explicit separation of shared concerns, making it easy to locate code while maintaining clear boundaries between features and truly cross-cutting utilities.

## Architecture

### High-Level Structure

```
src/
├── app/                          # Next.js App Router (unchanged)
│
├── features/                     # Feature modules (domain-driven)
│   ├── encoding/
│   │   ├── base64/
│   │   │   ├── encode.ts
│   │   │   ├── decode.ts
│   │   │   ├── validate.ts
│   │   │   ├── detect.ts
│   │   │   ├── types.ts
│   │   │   ├── constants.ts
│   │   │   └── index.ts
│   │   ├── url/
│   │   ├── html/
│   │   ├── json/
│   │   └── index.ts
│   │
│   ├── security/
│   │   ├── jwt/
│   │   ├── hash/
│   │   ├── password/
│   │   ├── uuid/
│   │   └── index.ts
│   │
│   ├── data-transform/
│   │   ├── json/
│   │   ├── csv/
│   │   ├── yaml/
│   │   └── index.ts
│   │
│   ├── text/
│   │   ├── case-converter/
│   │   ├── diff/
│   │   ├── markdown/
│   │   ├── regex/
│   │   └── index.ts
│   │
│   └── time/
│       ├── timestamp-converter/
│       └── index.ts
│
├── tools/                        # Tool registry & configs
│   ├── configs/
│   │   ├── encoding/
│   │   │   ├── base64-encode-decode.ts
│   │   │   ├── url-encode-decode.ts
│   │   │   ├── html-escape-unescape.ts
│   │   │   ├── json-escape-unescape.ts
│   │   │   ├── file-to-base64.ts
│   │   │   └── index.ts
│   │   ├── security/
│   │   │   ├── jwt-decoder.ts
│   │   │   ├── hash-generator.ts
│   │   │   ├── uuid-generator.ts
│   │   │   ├── password-generator.ts
│   │   │   └── index.ts
│   │   ├── data/
│   │   ├── text/
│   │   ├── time/
│   │   └── index.ts
│   ├── registry.ts
│   ├── component-loader.ts
│   ├── categories.ts
│   └── types.ts
│
├── components/                   # UI components (unchanged)
│
├── shared/                       # Truly shared code
│   ├── types/
│   │   ├── conversion-result.ts
│   │   └── index.ts
│   ├── utils/
│   │   ├── validation.ts
│   │   └── index.ts
│   └── constants/
│       └── index.ts
│
├── lib/                          # Legacy/external integrations
│   ├── seo/
│   └── share.ts
│
└── hooks/
```

### Design Principles

1. **Feature-First Organization**: Code is organized by business domain (encoding, security, data-transform) rather than technical type
2. **Sub-Feature Isolation**: Each sub-feature is self-contained with its own types, constants, and utilities
3. **Explicit Shared Code**: Truly cross-cutting concerns live in `src/shared/` with clear naming
4. **Backward Compatibility**: Old import paths continue to work through barrel exports
5. **Maximum File Size**: No file exceeds 150 lines of code
6. **Consistent Naming**: kebab-case for files and directories, descriptive suffixes for file types

## Components and Interfaces

### Feature Module Structure

Each feature follows this structure:

```
features/{feature-name}/
├── {sub-feature-1}/
│   ├── {action}.ts           # Pure functions (encode, decode, validate, etc.)
│   ├── types.ts              # Sub-feature specific types
│   ├── constants.ts          # Sub-feature specific constants
│   └── index.ts              # Barrel export
├── {sub-feature-2}/
│   └── ...
└── index.ts                  # Feature-level barrel export
```

**Example: Base64 Sub-Feature**

```typescript
// features/encoding/base64/encode.ts
import { ConversionResult } from '@/shared/types'
import { CharacterEncoding } from './types'

export function encodeToBase64(
  input: string,
  options: { encoding?: CharacterEncoding; urlSafe?: boolean; removePadding?: boolean }
): ConversionResult<string> {
  // Implementation
}
```

```typescript
// features/encoding/base64/decode.ts
import { ConversionResult } from '@/shared/types'

export function decodeFromBase64(
  input: string,
  options: { encoding?: CharacterEncoding }
): ConversionResult<string> {
  // Implementation
}
```

```typescript
// features/encoding/base64/validate.ts
export interface ValidationResult {
  isValid: boolean
  error?: string
  suggestion?: string
}

export function validateBase64(input: string, isUrlSafe?: boolean): ValidationResult {
  // Implementation
}
```

```typescript
// features/encoding/base64/detect.ts
export function detectBase64(input: string): boolean {
  // Implementation
}

export function detectBase64Url(input: string): boolean {
  // Implementation
}
```

```typescript
// features/encoding/base64/types.ts
export type CharacterEncoding = 'utf8' | 'binary'

export interface Base64Options {
  useUrlSafe?: boolean
  removePadding?: boolean
  encoding?: CharacterEncoding
}
```

```typescript
// features/encoding/base64/constants.ts
export const BASE64_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
export const BASE64_URL_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_'
```

```typescript
// features/encoding/base64/index.ts
export * from './encode'
export * from './decode'
export * from './validate'
export * from './detect'
export * from './types'
export * from './constants'
```

### Tool Configuration Structure

Tool configs are organized by category with one file per tool:

```typescript
// tools/configs/encoding/base64-encode-decode.ts
import { Tool } from '@/tools/types'

export const base64EncodeDecodeTool: Tool = {
  id: 'base64-encode-decode',
  slug: 'base64-encode-decode',
  name: 'Base64 Encoder / Decoder',
  category: 'encoding',
  // ... rest of config
}
```

```typescript
// tools/configs/encoding/index.ts
export { base64EncodeDecodeTool } from './base64-encode-decode'
export { urlEncodeDecodeTool } from './url-encode-decode'
export { htmlEscapeUnescapeTool } from './html-escape-unescape'
export { jsonEscapeUnescapeTool } from './json-escape-unescape'
export { fileToBase64Tool } from './file-to-base64'
```

```typescript
// tools/configs/index.ts
export * from './encoding'
export * from './security'
export * from './data'
export * from './text'
export * from './time'
```

### Shared Types

```typescript
// shared/types/conversion-result.ts
export interface ConversionResult<T = any> {
  success: boolean
  data?: T
  error?: string
  message?: string
  details?: string
  metadata?: Record<string, any>
}
```

```typescript
// shared/types/index.ts
export * from './conversion-result'
```

### Registry Pattern

```typescript
// tools/registry.ts
import { getToolComponent } from './component-loader'
import * as allToolConfigs from './configs'
import { Tool } from './types'

// Collect all tool configs from category exports
const toolConfigs = Object.values(allToolConfigs).filter(
  (config): config is Tool => typeof config === 'object' && 'id' in config
)

// Add components dynamically
const toolsWithComponents: Tool[] = toolConfigs.map(tool => ({
  ...tool,
  component: getToolComponent(tool.id) || undefined,
}))

export const tools: Tool[] = toolsWithComponents

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
      tool.keywords.some(keyword => keyword.toLowerCase().includes(lowercaseQuery))
  )
}
```

## Data Models

### Feature Module Mapping

| Current File | New Location | Split Into |
|-------------|--------------|------------|
| `lib/utils/encoding-utils.ts` (500+ lines) | `features/encoding/` | `base64/encode.ts`, `base64/decode.ts`, `base64/validate.ts`, `base64/detect.ts`, `url/encode.ts`, `url/decode.ts`, `url/validate.ts`, `html/escape.ts`, `html/unescape.ts`, `html/validate.ts`, `json/escape.ts`, `json/unescape.ts`, `json/validate.ts` |
| `lib/utils/security-utils.ts` (300+ lines) | `features/security/` | `jwt/decode.ts`, `hash/generate.ts`, `hash/types.ts`, `password/generate.ts`, `password/types.ts`, `uuid/generate.ts` |
| `lib/utils/json-utils.ts` (200+ lines) | `features/data-transform/` | `json/format.ts`, `json/to-csv.ts`, `json/to-yaml.ts`, `csv/to-json.ts`, `yaml/to-json.ts` |
| `lib/utils/text-utils.ts` (400+ lines) | `features/text/` | `case-converter/convert.ts`, `case-converter/types.ts`, `diff/compare.ts`, `diff/types.ts`, `markdown/convert.ts`, `regex/test.ts`, `regex/parse.ts`, `regex/types.ts` |
| `lib/utils/time-utils.ts` (150 lines) | `features/time/` | `timestamp-converter/convert.ts`, `timestamp-converter/types.ts` |

### Tool Config Mapping

| Current File | New Location |
|-------------|--------------|
| `lib/tools/tool-configs/encoding-tools.ts` | `tools/configs/encoding/base64-encode-decode.ts`, `tools/configs/encoding/url-encode-decode.ts`, etc. |
| `lib/tools/tool-configs/security-tools.ts` | `tools/configs/security/jwt-decoder.ts`, `tools/configs/security/hash-generator.ts`, etc. |
| `lib/tools/tool-configs/json-data-tools.ts` | `tools/configs/data/json-formatter.ts`, `tools/configs/data/json-to-csv.ts`, etc. |
| `lib/tools/tool-configs/text-tools.ts` | `tools/configs/text/case-converter.ts`, `tools/configs/text/text-diff.ts`, etc. |
| `lib/tools/tool-configs/time-tools.ts` | `tools/configs/time/timestamp-converter.ts` |

### Backward Compatibility Layer

Old import paths will continue to work through barrel exports:

```typescript
// lib/utils/encoding-utils.ts (compatibility layer)
export * from '@/features/encoding/base64'
export * from '@/features/encoding/url'
export * from '@/features/encoding/html'
export * from '@/features/encoding/json'
```

```typescript
// lib/utils/json-utils.ts (compatibility layer)
export * from '@/shared/types/conversion-result'
export * from '@/features/data-transform/json'
export * from '@/features/data-transform/csv'
export * from '@/features/data-transform/yaml'
```

## Error Handling

### Validation Error Patterns

All validation functions follow a consistent pattern:

```typescript
export interface ValidationResult {
  isValid: boolean
  error?: string
  suggestion?: string
}
```

Example:
```typescript
export function validateBase64(input: string, isUrlSafe: boolean = false): ValidationResult {
  if (isUrlSafe) {
    const invalidChars = input.match(/[^A-Za-z0-9_-]/g)
    if (invalidChars) {
      return {
        isValid: false,
        error: `Invalid Base64URL characters: ${[...new Set(invalidChars)].join(', ')}`,
        suggestion: 'Base64URL only uses A-Z, a-z, 0-9, -, and _. Remove invalid characters.',
      }
    }
  }
  
  // More validation...
  
  return { isValid: true }
}
```

### Conversion Error Patterns

All conversion functions use the shared `ConversionResult` type:

```typescript
export function encodeToBase64(input: string, options: Base64Options): ConversionResult<string> {
  if (!input.trim()) {
    return {
      success: false,
      error: 'Input is empty',
    }
  }

  try {
    // Encoding logic
    return {
      success: true,
      data: encoded,
      message: 'Text encoded to Base64 successfully',
    }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Encoding failed',
      details: 'Additional context about the error',
    }
  }
}
```

## Testing Strategy

### Unit Testing

Each feature module will have corresponding test files:

```
features/encoding/base64/
├── encode.ts
├── encode.test.ts
├── decode.ts
├── decode.test.ts
├── validate.ts
├── validate.test.ts
```

Test files will:
- Test individual functions in isolation
- Cover edge cases (empty input, invalid input, boundary conditions)
- Verify error messages and suggestions
- Test with various options/configurations

### Integration Testing

Integration tests will verify:
- Barrel exports work correctly
- Backward compatibility layer functions
- Tool registry correctly loads all configs
- Feature modules integrate properly with components

### Migration Testing

During migration:
- Run full test suite after each file split
- Verify no import errors
- Check that all existing functionality works
- Validate backward compatibility

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system—essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Property 1: File Size Constraint

*For any* source file in the features directory, the file size should not exceed 150 lines of code (excluding comments and blank lines)

**Validates: Requirements 1.2**

### Property 2: Backward Compatibility

*For any* existing import path in the codebase, after refactoring, the import should resolve successfully and export the same functions

**Validates: Requirements 6.1, 6.3**

### Property 3: Feature Isolation

*For any* sub-feature module, all imports from other sub-features should go through the parent feature's barrel export, not direct imports

**Validates: Requirements 2.5**

### Property 4: Shared Code Purity

*For any* file in the `src/shared/` directory, it should not import from any feature-specific module

**Validates: Requirements 10.5**

### Property 5: Tool Config Completeness

*For any* tool configuration file, it should contain all required fields (id, slug, name, description, category, metadata, ui, faq)

**Validates: Requirements 3.2**

### Property 6: Naming Convention Consistency

*For any* directory or file in the features directory, the name should use kebab-case format

**Validates: Requirements 5.1, 5.2**

### Property 7: Barrel Export Completeness

*For any* sub-feature directory, it should have an index.ts file that exports all public functions and types

**Validates: Requirements 1.4**

### Property 8: Tool Registry Completeness

*For any* tool config file in the configs directory, it should be exported from its category barrel and included in the main registry

**Validates: Requirements 3.4, 11.1**

### Property 9: Type Import Consistency

*For any* feature module that uses ConversionResult, it should import from `@/shared/types` not from a local definition

**Validates: Requirements 10.1, 10.3**

### Property 10: No Circular Dependencies

*For any* two modules A and B, if A imports from B, then B should not import from A (directly or transitively)

**Validates: Requirements 4.1, 4.2**

## Migration Strategy

### Phase 1: Setup Shared Types (Day 1)

1. Create `src/shared/types/conversion-result.ts`
2. Move `ConversionResult` interface from `lib/utils/json-utils.ts`
3. Update all imports to use `@/shared/types`
4. Run tests to verify no breakage

### Phase 2: Create Feature Structure (Day 1-2)

1. Create directory structure for all features
2. Create empty index.ts files for barrel exports
3. Set up path aliases in tsconfig.json

### Phase 3: Split Encoding Feature (Day 2-3)

1. Split `encoding-utils.ts` into base64, url, html, json sub-features
2. Create types, constants files for each sub-feature
3. Update imports within feature
4. Create backward compatibility layer
5. Run tests

### Phase 4: Split Security Feature (Day 3-4)

1. Split `security-utils.ts` into jwt, hash, password, uuid sub-features
2. Create types files for each sub-feature
3. Update imports
4. Create backward compatibility layer
5. Run tests

### Phase 5: Split Data Transform Feature (Day 4-5)

1. Split `json-utils.ts` into json, csv, yaml sub-features
2. Update imports
3. Create backward compatibility layer
4. Run tests

### Phase 6: Split Text Feature (Day 5-6)

1. Split `text-utils.ts` into case-converter, diff, markdown, regex sub-features
2. Create types files
3. Update imports
4. Create backward compatibility layer
5. Run tests

### Phase 7: Split Time Feature (Day 6)

1. Split `time-utils.ts` into timestamp-converter sub-feature
2. Update imports
3. Create backward compatibility layer
4. Run tests

### Phase 8: Reorganize Tool Configs (Day 7-8)

1. Create category directories in `tools/configs/`
2. Split tool config files by tool
3. Create category barrel exports
4. Update registry to import from categories
5. Run tests

### Phase 9: Update Internal Imports (Day 8-9)

1. Update all component imports to use new paths
2. Remove backward compatibility layers (optional)
3. Update documentation
4. Final test run

### Phase 10: Documentation (Day 9-10)

1. Create architecture diagram
2. Document directory structure
3. Create migration guide for future developers
4. Update README with new structure

## Notes

- All refactoring is purely structural - no business logic changes
- Each phase should be completed with passing tests before moving to the next
- Backward compatibility layers can be removed after all internal imports are updated
- The migration can be done incrementally without breaking the application
- Path aliases (@/features, @/shared, @/tools) should be configured in tsconfig.json
