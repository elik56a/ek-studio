# Requirements Document

## Introduction

This specification defines the requirements for refactoring the dev-converter application's directory structure and file organization. The current codebase has grown organically, resulting in large utility files (500+ lines), unclear separation between tools/tool-configs/tool-utils, and inconsistent organization patterns. This refactoring will improve maintainability, discoverability, and developer experience without changing any business logic or functionality.

## Glossary

- **Tool**: A converter or utility feature (e.g., Base64 Encoder, JSON Formatter)
- **Tool_Config**: Metadata and configuration for a tool (UI labels, SEO, FAQ)
- **Tool_Component**: React component that implements the tool's UI
- **Utility_Function**: Pure function that performs data transformation
- **Feature_Module**: A self-contained directory with related functionality
- **Barrel_Export**: An index.ts file that re-exports from multiple files

## Requirements

### Requirement 1: Utility File Splitting

**User Story:** As a developer, I want utility files split by specific functionality, so that I can quickly find and modify individual conversion functions without navigating through 500+ line files.

#### Acceptance Criteria

1. WHEN a utility file contains multiple unrelated functions THEN the system SHALL split them into separate files grouped by specific purpose
2. WHEN splitting utility files THEN the system SHALL maintain a maximum file size of 150 lines per file
3. WHEN creating split files THEN the system SHALL use descriptive names that indicate the specific functionality (e.g., `base64-encode.ts`, `base64-decode.ts`)
4. WHEN utility files are split THEN the system SHALL provide a barrel export (index.ts) for backward compatibility
5. WHEN organizing split files THEN the system SHALL group related functions in feature-based subdirectories

### Requirement 2: Feature-Based Directory Structure (Hybrid Architecture)

**User Story:** As a developer, I want a clear feature-based directory structure with explicit separation of shared code, so that all related code for a feature is co-located and truly shared utilities are clearly identified.

#### Acceptance Criteria

1. WHEN organizing utilities THEN the system SHALL create feature-based subdirectories under `src/features/`
2. WHEN a feature has multiple sub-features THEN the system SHALL organize each sub-feature with its own types, utils, and constants
3. WHEN creating sub-feature directories THEN the system SHALL follow the pattern: `src/features/{feature-name}/{sub-feature}/`
4. WHEN a utility is used by ALL features THEN the system SHALL place it in `src/shared/`
5. WHEN organizing features THEN the system SHALL keep sub-feature code self-contained with local types and utilities

### Requirement 3: Tool Configuration Organization (Categorized)

**User Story:** As a developer, I want tool configurations organized by category subdirectories with one file per tool, so that I can easily locate related tools and update specific tool metadata.

#### Acceptance Criteria

1. WHEN organizing tool configs THEN the system SHALL create category subdirectories in `src/tools/configs/{category}/`
2. WHEN a tool config file is created THEN the system SHALL place it in the appropriate category directory as `{tool-slug}.ts`
3. WHEN tool configs are organized THEN the system SHALL provide a barrel export (index.ts) per category
4. WHEN accessing tool configs THEN the system SHALL provide a centralized registry that imports from category barrels
5. WHEN adding a new tool THEN the system SHALL require creating a config file in the category directory and exporting it from the category barrel

### Requirement 4: Clear Separation of Concerns

**User Story:** As a developer, I want clear separation between data transformation logic, UI configuration, and component code, so that I can work on each concern independently.

#### Acceptance Criteria

1. WHEN organizing code THEN the system SHALL separate pure utility functions from UI components
2. WHEN organizing code THEN the system SHALL separate tool metadata/config from transformation logic
3. WHEN organizing code THEN the system SHALL place shared types in dedicated type files
4. WHEN organizing code THEN the system SHALL place constants in dedicated constant files
5. WHEN organizing code THEN the system SHALL avoid mixing concerns within a single file

### Requirement 5: Consistent Naming Conventions

**User Story:** As a developer, I want consistent file and directory naming conventions, so that I can predict file locations and understand the codebase structure intuitively.

#### Acceptance Criteria

1. WHEN naming directories THEN the system SHALL use kebab-case for all directory names
2. WHEN naming files THEN the system SHALL use kebab-case with descriptive suffixes (`.utils.ts`, `.types.ts`, `.config.ts`, `.constants.ts`)
3. WHEN naming feature directories THEN the system SHALL use singular nouns for features (e.g., `encoding`, not `encodings`)
4. WHEN naming utility files THEN the system SHALL use verb-noun patterns (e.g., `encode-base64.ts`, `decode-jwt.ts`)
5. WHEN creating barrel exports THEN the system SHALL always name them `index.ts`

### Requirement 6: Backward Compatibility

**User Story:** As a developer, I want the refactoring to maintain backward compatibility, so that existing imports continue to work without breaking the application.

#### Acceptance Criteria

1. WHEN refactoring file structure THEN the system SHALL maintain all existing public exports
2. WHEN moving functions THEN the system SHALL provide barrel exports at old locations that re-export from new locations
3. WHEN splitting files THEN the system SHALL ensure all existing import paths continue to work
4. WHEN reorganizing THEN the system SHALL update internal imports to use new paths
5. WHEN completing refactoring THEN the system SHALL verify no import errors exist in the application

### Requirement 7: Encoding Feature Organization

**User Story:** As a developer, I want encoding-related utilities organized in a dedicated feature directory, so that all Base64, URL, HTML, and JSON encoding logic is co-located.

#### Acceptance Criteria

1. WHEN organizing encoding utilities THEN the system SHALL create `lib/features/encoding/` directory
2. WHEN organizing encoding utilities THEN the system SHALL split by specific encoding type (base64, url, html, json)
3. WHEN organizing Base64 utilities THEN the system SHALL separate encode, decode, and validation logic
4. WHEN organizing encoding utilities THEN the system SHALL include shared types in `lib/features/encoding/types/`
5. WHEN organizing encoding utilities THEN the system SHALL include shared validation in `lib/features/encoding/validation/`

### Requirement 8: Security Feature Organization

**User Story:** As a developer, I want security-related utilities organized in a dedicated feature directory, so that JWT, hashing, UUID, and password generation logic is co-located.

#### Acceptance Criteria

1. WHEN organizing security utilities THEN the system SHALL create `lib/features/security/` directory
2. WHEN organizing security utilities THEN the system SHALL split by specific security function (jwt, hash, uuid, password)
3. WHEN organizing hashing utilities THEN the system SHALL separate hash generation from hash types
4. WHEN organizing security utilities THEN the system SHALL include shared types in `lib/features/security/types/`
5. WHEN organizing security utilities THEN the system SHALL include shared constants in `lib/features/security/constants/`

### Requirement 9: Data Transformation Feature Organization

**User Story:** As a developer, I want data transformation utilities organized in a dedicated feature directory, so that JSON, YAML, CSV conversion logic is co-located.

#### Acceptance Criteria

1. WHEN organizing data utilities THEN the system SHALL create `lib/features/data-transform/` directory
2. WHEN organizing data utilities THEN the system SHALL split by conversion type (json-csv, json-yaml, json-format)
3. WHEN organizing data utilities THEN the system SHALL separate parsing from formatting logic
4. WHEN organizing data utilities THEN the system SHALL include shared types in `lib/features/data-transform/types/`
5. WHEN organizing data utilities THEN the system SHALL include shared validation in `lib/features/data-transform/validation/`

### Requirement 10: Shared Core Utilities (Explicit Shared Directory)

**User Story:** As a developer, I want truly cross-cutting utilities organized in an explicit shared directory, so that I can clearly distinguish between feature-specific and application-wide code.

#### Acceptance Criteria

1. WHEN a utility is used by ALL features THEN the system SHALL place it in `src/shared/`
2. WHEN organizing shared utilities THEN the system SHALL group by purpose (types, utils, constants, validation)
3. WHEN organizing shared types THEN the system SHALL place them in `src/shared/types/`
4. WHEN organizing shared constants THEN the system SHALL place them in `src/shared/constants/`
5. WHEN organizing shared utilities THEN the system SHALL avoid any feature-specific logic

### Requirement 11: Tool Registry Simplification

**User Story:** As a developer, I want a simplified tool registry that automatically discovers tool configs, so that adding new tools requires minimal boilerplate.

#### Acceptance Criteria

1. WHEN organizing the tool registry THEN the system SHALL automatically import all tool configs from the configs directory
2. WHEN organizing the tool registry THEN the system SHALL provide helper functions for tool lookup (by slug, by ID, by category)
3. WHEN organizing the tool registry THEN the system SHALL maintain a single source of truth for all tools
4. WHEN organizing the tool registry THEN the system SHALL separate registry logic from component loading
5. WHEN organizing the tool registry THEN the system SHALL provide type-safe tool access

### Requirement 12: Documentation and Migration Guide

**User Story:** As a developer, I want clear documentation of the new structure and a migration guide, so that I can understand the changes and update my code accordingly.

#### Acceptance Criteria

1. WHEN refactoring is complete THEN the system SHALL provide a directory structure diagram
2. WHEN refactoring is complete THEN the system SHALL document the purpose of each top-level directory
3. WHEN refactoring is complete THEN the system SHALL provide examples of where to place new code
4. WHEN refactoring is complete THEN the system SHALL document naming conventions
5. WHEN refactoring is complete THEN the system SHALL provide a migration guide for updating imports
