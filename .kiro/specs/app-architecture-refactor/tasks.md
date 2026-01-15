# Implementation Plan: App Architecture Refactor

## Overview

This implementation plan breaks down the refactoring of the dev-converter application into discrete, manageable tasks. Each task builds on previous work and includes validation steps to ensure the application remains functional throughout the migration.

The refactoring will be done in phases, starting with shared types, then feature modules, and finally tool configurations. Backward compatibility will be maintained throughout to avoid breaking existing code.

## Tasks

- [x] 1. Setup shared types and directory structure
  - Create `src/shared/types/` directory
  - Extract `ConversionResult` interface to `src/shared/types/conversion-result.ts`
  - Create barrel export at `src/shared/types/index.ts`
  - Update tsconfig.json with path aliases (@/shared, @/features, @/tools)
  - _Requirements: 10.1, 10.3_

- [x] 2. Update all ConversionResult imports
  - Find all files importing ConversionResult from utils files
  - Update imports to use `@/shared/types`
  - Verify no import errors
  - Run existing tests to ensure no breakage
  - _Requirements: 10.1, 6.3_

- [x] 3. Create feature directory structure
  - Create `src/features/` directory
  - Create subdirectories: `encoding/`, `security/`, `data-transform/`, `text/`, `time/`
  - Create placeholder index.ts files for each feature
  - _Requirements: 2.1, 2.2_

- [x] 4. Checkpoint - Verify structure and imports
  - Ensure all tests pass
  - Verify no TypeScript errors
  - Confirm path aliases work correctly
  - Ask the user if questions arise

- [x] 5. Split encoding/base64 feature
  - [x] 5.1 Create base64 sub-feature structure
    - Create `src/features/encoding/base64/` directory
    - Create files: `encode.ts`, `decode.ts`, `validate.ts`, `detect.ts`, `types.ts`, `constants.ts`
    - _Requirements: 1.1, 1.3, 2.3_

  - [x] 5.2 Extract Base64 encoding logic
    - Move `encodeUtf8ToBase64`, `base64ToBase64Url` functions to `encode.ts`
    - Keep functions under 150 lines
    - Add proper imports and exports
    - _Requirements: 1.2, 7.1_

  - [x] 5.3 Extract Base64 decoding logic
    - Move `decodeBase64ToUtf8`, `base64UrlToBase64` functions to `decode.ts`
    - Move main `base64Convert` function logic to `decode.ts`
    - _Requirements: 1.1, 7.1_

  - [x] 5.4 Extract Base64 validation logic
    - Move `validateBase64` function to `validate.ts`
    - Ensure ValidationResult interface is defined
    - _Requirements: 7.3_

  - [x] 5.5 Extract Base64 detection logic
    - Move `detectBase64`, `detectBase64Url` functions to `detect.ts`
    - _Requirements: 7.1_

  - [x] 5.6 Create Base64 types and constants
    - Move `CharacterEncoding` type to `types.ts`
    - Create `constants.ts` with Base64 character sets
    - _Requirements: 4.3, 4.4_

  - [x] 5.7 Create Base64 barrel export
    - Create `index.ts` that exports all Base64 functions and types
    - _Requirements: 1.4, 7.7_

- [x] 6. Split encoding/url feature
  - [x] 6.1 Create url sub-feature structure
    - Create `src/features/encoding/url/` directory
    - Create files: `encode.ts`, `decode.ts`, `validate.ts`, `detect.ts`
    - _Requirements: 1.1, 2.3_

  - [x] 6.2 Extract URL encoding/decoding logic
    - Move `urlEncodeDecode` function logic to `encode.ts` and `decode.ts`
    - Move `validateUrlEncoded` to `validate.ts`
    - Move `detectUrlEncoded` to `detect.ts`
    - _Requirements: 1.1, 1.2_

  - [x] 6.3 Create URL barrel export
    - Create `index.ts` that exports all URL functions
    - _Requirements: 1.4_

- [x] 7. Split encoding/html feature
  - [x] 7.1 Create html sub-feature structure
    - Create `src/features/encoding/html/` directory
    - Create files: `escape.ts`, `unescape.ts`, `validate.ts`, `detect.ts`
    - _Requirements: 1.1, 2.3_

  - [x] 7.2 Extract HTML escape/unescape logic
    - Move `htmlEscapeUnescape` function logic to `escape.ts` and `unescape.ts`
    - Move `validateHtmlEscaped` to `validate.ts`
    - Move `detectHtmlEscaped` to `detect.ts`
    - _Requirements: 1.1, 1.2_

  - [x] 7.3 Create HTML barrel export
    - Create `index.ts` that exports all HTML functions
    - _Requirements: 1.4_

- [x] 8. Split encoding/json feature
  - [x] 8.1 Create json sub-feature structure
    - Create `src/features/encoding/json/` directory
    - Create files: `escape.ts`, `unescape.ts`, `validate.ts`, `detect.ts`
    - _Requirements: 1.1, 2.3_

  - [x] 8.2 Extract JSON escape/unescape logic
    - Move `jsonEscapeUnescape` function logic to `escape.ts` and `unescape.ts`
    - Move `validateJsonEscaped` to `validate.ts`
    - Move `detectJsonEscaped` to `detect.ts`
    - _Requirements: 1.1, 1.2_

  - [x] 8.3 Create JSON barrel export
    - Create `index.ts` that exports all JSON functions
    - _Requirements: 1.4_

- [x] 9. Create encoding feature barrel export
  - Create `src/features/encoding/index.ts`
  - Export all sub-features (base64, url, html, json)
  - _Requirements: 1.4, 2.5_

- [x] 10. Create backward compatibility layer for encoding
  - Update `src/lib/utils/encoding-utils.ts` to re-export from new locations
  - Verify all existing imports still work
  - Run tests to ensure no breakage
  - _Requirements: 6.1, 6.2, 6.3_

- [x] 11. Checkpoint - Verify encoding refactor
  - Ensure all tests pass
  - Verify no TypeScript errors
  - Confirm backward compatibility works
  - Ask the user if questions arise

- [x] 12. Split security/jwt feature
  - [x] 12.1 Create jwt sub-feature structure
    - Create `src/features/security/jwt/` directory
    - Create files: `decode.ts`, `types.ts`
    - _Requirements: 1.1, 2.3_

  - [x] 12.2 Extract JWT decoding logic
    - Move `decodeJWT` function to `decode.ts`
    - _Requirements: 1.1, 8.1_

  - [x] 12.3 Create JWT barrel export
    - Create `index.ts` that exports JWT functions
    - _Requirements: 1.4_

- [x] 13. Split security/hash feature
  - [x] 13.1 Create hash sub-feature structure
    - Create `src/features/security/hash/` directory
    - Create files: `generate.ts`, `types.ts`
    - _Requirements: 1.1, 2.3_

  - [x] 13.2 Extract hash generation logic
    - Move `generateHash`, `generateHashes` functions to `generate.ts`
    - Move `HashAlgorithm` type to `types.ts`
    - _Requirements: 1.1, 8.2, 8.4_

  - [x] 13.3 Create hash barrel export
    - Create `index.ts` that exports hash functions and types
    - _Requirements: 1.4_

- [x] 14. Split security/password feature
  - [x] 14.1 Create password sub-feature structure
    - Create `src/features/security/password/` directory
    - Create files: `generate.ts`, `types.ts`, `constants.ts`
    - _Requirements: 1.1, 2.3_

  - [x] 14.2 Extract password generation logic
    - Move `generatePassword` function to `generate.ts`
    - Move `PasswordOptions` interface to `types.ts`
    - Move character sets to `constants.ts`
    - _Requirements: 1.1, 8.2, 8.5_

  - [x] 14.3 Create password barrel export
    - Create `index.ts` that exports password functions and types
    - _Requirements: 1.4_

- [x] 15. Split security/uuid feature
  - [x] 15.1 Create uuid sub-feature structure
    - Create `src/features/security/uuid/` directory
    - Create file: `generate.ts`
    - _Requirements: 1.1, 2.3_

  - [x] 15.2 Extract UUID generation logic
    - Move `generateUUIDs` function to `generate.ts`
    - _Requirements: 1.1, 8.2_

  - [x] 15.3 Create UUID barrel export
    - Create `index.ts` that exports UUID functions
    - _Requirements: 1.4_

- [x] 16. Create security feature barrel export
  - Create `src/features/security/index.ts`
  - Export all sub-features (jwt, hash, password, uuid)
  - _Requirements: 1.4, 2.5_

- [x] 17. Create backward compatibility layer for security
  - Update `src/lib/utils/security-utils.ts` to re-export from new locations
  - Verify all existing imports still work
  - Run tests to ensure no breakage
  - _Requirements: 6.1, 6.2, 6.3_

- [x] 18. Checkpoint - Verify security refactor
  - Ensure all tests pass
  - Verify no TypeScript errors
  - Confirm backward compatibility works
  - Ask the user if questions arise

- [x] 19. Split data-transform/json feature
  - [x] 19.1 Create json sub-feature structure
    - Create `src/features/data-transform/json/` directory
    - Create files: `format.ts`, `to-csv.ts`, `to-yaml.ts`, `from-csv.ts`, `from-yaml.ts`
    - _Requirements: 1.1, 2.3_

  - [x] 19.2 Extract JSON formatting logic
    - Move `formatJson` function to `format.ts`
    - _Requirements: 1.1, 9.2_

  - [x] 19.3 Extract JSON to CSV logic
    - Move `jsonToCsv` function to `to-csv.ts`
    - _Requirements: 1.1, 9.2_

  - [x] 19.4 Extract JSON to YAML logic
    - Move `jsonToYaml` function to `to-yaml.ts`
    - _Requirements: 1.1, 9.2_

  - [x] 19.5 Extract CSV to JSON logic
    - Move `csvToJson` function to `from-csv.ts`
    - _Requirements: 1.1, 9.2_

  - [x] 19.6 Extract YAML to JSON logic
    - Move `yamlToJson` function to `from-yaml.ts`
    - _Requirements: 1.1, 9.2_

  - [x] 19.7 Create JSON barrel export
    - Create `index.ts` that exports all JSON functions
    - _Requirements: 1.4_

- [x] 20. Create data-transform feature barrel export
  - Create `src/features/data-transform/index.ts`
  - Export json sub-feature
  - _Requirements: 1.4, 2.5_

- [x] 21. Create backward compatibility layer for data-transform
  - Update `src/lib/utils/json-utils.ts` to re-export from new locations
  - Remove ConversionResult definition (now in shared)
  - Verify all existing imports still work
  - Run tests to ensure no breakage
  - _Requirements: 6.1, 6.2, 6.3_

- [x] 22. Split text/case-converter feature
  - [x] 22.1 Create case-converter sub-feature structure
    - Create `src/features/text/case-converter/` directory
    - Create files: `convert.ts`, `types.ts`
    - _Requirements: 1.1, 2.3_

  - [x] 22.2 Extract case conversion logic
    - Move `convertCase` function to `convert.ts`
    - Move `TextCaseType` type to `types.ts`
    - _Requirements: 1.1, 1.2_

  - [x] 22.3 Create case-converter barrel export
    - Create `index.ts` that exports case conversion functions and types
    - _Requirements: 1.4_

- [x] 23. Split text/diff feature
  - [x] 23.1 Create diff sub-feature structure
    - Create `src/features/text/diff/` directory
    - Create files: `compare.ts`, `types.ts`
    - _Requirements: 1.1, 2.3_

  - [x] 23.2 Extract diff comparison logic
    - Move `compareDiff` function to `compare.ts`
    - Move `DiffResult` interface to `types.ts`
    - _Requirements: 1.1, 1.2_

  - [x] 23.3 Create diff barrel export
    - Create `index.ts` that exports diff functions and types
    - _Requirements: 1.4_

- [x] 24. Split text/markdown feature
  - [x] 24.1 Create markdown sub-feature structure
    - Create `src/features/text/markdown/` directory
    - Create files: `convert.ts`, `format-html.ts`, `types.ts`
    - _Requirements: 1.1, 2.3_

  - [x] 24.2 Extract markdown conversion logic
    - Move `convertMarkdownHtml` function to `convert.ts`
    - Move `formatHtml` helper to `format-html.ts`
    - Move `ConversionMode` type to `types.ts`
    - _Requirements: 1.1, 1.2_

  - [x] 24.3 Create markdown barrel export
    - Create `index.ts` that exports markdown functions and types
    - _Requirements: 1.4_

- [x] 25. Split text/regex feature
  - [x] 25.1 Create regex sub-feature structure
    - Create `src/features/text/regex/` directory
    - Create files: `test.ts`, `parse.ts`, `format.ts`, `types.ts`
    - _Requirements: 1.1, 2.3_

  - [x] 25.2 Extract regex testing logic
    - Move `testRegex` function to `test.ts`
    - Move `testRegexWithFormatting` function to `format.ts`
    - Move `parseRegexString` function to `parse.ts`
    - Move `RegexMatch`, `RegexTestResult` interfaces to `types.ts`
    - _Requirements: 1.1, 1.2_

  - [x] 25.3 Create regex barrel export
    - Create `index.ts` that exports regex functions and types
    - _Requirements: 1.4_

- [x] 26. Create text feature barrel export
  - Create `src/features/text/index.ts`
  - Export all sub-features (case-converter, diff, markdown, regex)
  - _Requirements: 1.4, 2.5_

- [x] 27. Create backward compatibility layer for text
  - Update `src/lib/utils/text-utils.ts` to re-export from new locations
  - Remove ConversionResult definition (now in shared)
  - Verify all existing imports still work
  - Run tests to ensure no breakage
  - _Requirements: 6.1, 6.2, 6.3_

- [x] 28. Split time/timestamp-converter feature
  - [x] 28.1 Create timestamp-converter sub-feature structure
    - Create `src/features/time/timestamp-converter/` directory
    - Create files: `convert.ts`, `types.ts`
    - _Requirements: 1.1, 2.3_

  - [x] 28.2 Extract timestamp conversion logic
    - Move `convertTimestamp`, `convertTimestampToDate`, `convertDateToTimestamp` functions to `convert.ts`
    - Move `TimestampConversionResult` interface to `types.ts`
    - _Requirements: 1.1, 1.2_

  - [x] 28.3 Create timestamp-converter barrel export
    - Create `index.ts` that exports timestamp functions and types
    - _Requirements: 1.4_

- [x] 29. Create time feature barrel export
  - Create `src/features/time/index.ts`
  - Export timestamp-converter sub-feature
  - _Requirements: 1.4, 2.5_

- [x] 30. Create backward compatibility layer for time
  - Update `src/lib/utils/time-utils.ts` to re-export from new locations
  - Remove ConversionResult import (now in shared)
  - Verify all existing imports still work
  - Run tests to ensure no breakage
  - _Requirements: 6.1, 6.2, 6.3_

- [x] 31. Checkpoint - Verify all feature refactors
  - Ensure all tests pass
  - Verify no TypeScript errors
  - Confirm all backward compatibility layers work
  - Ask the user if questions arise

- [x] 32. Create tool config category directories
  - Create `src/tools/configs/encoding/` directory
  - Create `src/tools/configs/security/` directory
  - Create `src/tools/configs/data/` directory
  - Create `src/tools/configs/text/` directory
  - Create `src/tools/configs/time/` directory
  - _Requirements: 3.1_

- [x] 33. Split encoding tool configs
  - [x] 33.1 Extract base64-encode-decode config
    - Create `src/tools/configs/encoding/base64-encode-decode.ts`
    - Move base64-encode-decode tool config from encoding-tools.ts
    - Export as named export
    - _Requirements: 3.2, 3.3_

  - [x] 33.2 Extract url-encode-decode config
    - Create `src/tools/configs/encoding/url-encode-decode.ts`
    - Move url-encode-decode tool config
    - _Requirements: 3.2_

  - [x] 33.3 Extract html-escape-unescape config
    - Create `src/tools/configs/encoding/html-escape-unescape.ts`
    - Move html-escape-unescape tool config
    - _Requirements: 3.2_

  - [x] 33.4 Extract json-escape-unescape config
    - Create `src/tools/configs/encoding/json-escape-unescape.ts`
    - Move json-escape-unescape tool config
    - _Requirements: 3.2_

  - [x] 33.5 Extract file-to-base64 config
    - Create `src/tools/configs/encoding/file-to-base64.ts`
    - Move file-to-base64 tool config
    - _Requirements: 3.2_

  - [x] 33.6 Create encoding category barrel export
    - Create `src/tools/configs/encoding/index.ts`
    - Export all encoding tool configs
    - _Requirements: 3.3, 3.4_

- [x] 34. Split security tool configs
  - [x] 34.1 Extract jwt-decoder config
    - Create `src/tools/configs/security/jwt-decoder.ts`
    - Move jwt-decoder tool config from security-tools.ts
    - _Requirements: 3.2_

  - [x] 34.2 Extract hash-generator config
    - Create `src/tools/configs/security/hash-generator.ts`
    - Move hash-generator tool config
    - _Requirements: 3.2_

  - [x] 34.3 Extract uuid-generator config
    - Create `src/tools/configs/security/uuid-generator.ts`
    - Move uuid-generator tool config
    - _Requirements: 3.2_

  - [x] 34.4 Extract password-generator config
    - Create `src/tools/configs/security/password-generator.ts`
    - Move password-generator tool config
    - _Requirements: 3.2_

  - [x] 34.5 Create security category barrel export
    - Create `src/tools/configs/security/index.ts`
    - Export all security tool configs
    - _Requirements: 3.3, 3.4_

- [x] 35. Split remaining tool configs (data, text, time)
  - Split data tool configs into individual files
  - Split text tool configs into individual files
  - Split time tool configs into individual files
  - Create category barrel exports for each
  - _Requirements: 3.1, 3.2, 3.3_

- [x] 36. Create main tool configs barrel export
  - Create `src/tools/configs/index.ts`
  - Export all category barrels
  - _Requirements: 3.4, 3.5_

- [x] 37. Update tool registry
  - Update `src/tools/registry.ts` to import from new category structure
  - Use dynamic imports from category barrels
  - Verify all tools are registered correctly
  - _Requirements: 11.1, 11.2, 11.3_

- [x] 38. Remove old tool config files
  - Delete `src/lib/tools/tool-configs/encoding-tools.ts`
  - Delete `src/lib/tools/tool-configs/security-tools.ts`
  - Delete other old tool config category files
  - Verify no import errors
  - _Requirements: 3.1_

- [x] 39. Checkpoint - Verify tool config refactor
  - Ensure all tests pass
  - Verify no TypeScript errors
  - Confirm all tools load correctly in the UI
  - Ask the user if questions arise

- [x] 40. Update component imports
  - Find all components importing from old utils paths
  - Update to use new feature paths or backward compatibility layers
  - Verify no import errors
  - _Requirements: 6.4_

- [x] 41. Final testing and validation
  - Run full test suite
  - Verify all tools work in the UI
  - Check for any TypeScript errors
  - Validate backward compatibility
  - _Requirements: 6.5_

- [ ] 42. Create documentation
  - [ ] 42.1 Create architecture diagram
    - Document the new directory structure
    - Show relationships between features
    - _Requirements: 12.1_

  - [ ] 42.2 Document directory structure
    - Explain purpose of each top-level directory
    - Document naming conventions
    - _Requirements: 12.2, 12.4_

  - [ ] 42.3 Create developer guide
    - Provide examples of where to place new code
    - Document how to add new features
    - Document how to add new tools
    - _Requirements: 12.3_

  - [ ] 42.4 Create migration guide
    - Document import path changes
    - Provide examples of updating imports
    - _Requirements: 12.5_

- [ ] 43. Final checkpoint
  - Ensure all tests pass
  - Verify no TypeScript errors
  - Confirm application works correctly
  - Review documentation completeness
  - Ask the user for final approval

## Notes

- Each task should be completed with passing tests before moving to the next
- Backward compatibility layers ensure the application continues working during migration
- The refactoring is purely structural - no business logic changes
- Path aliases (@/features, @/shared, @/tools) must be configured in tsconfig.json before starting
- Tasks can be done incrementally over multiple days without breaking the application
- no code commants enlse neccery
- export const => style and not function