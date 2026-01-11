/**
 * Validation result interface
 */
interface ValidationResult {
  valid: boolean
  errors: string[]
}

/**
 * Validates that a value is a non-empty string
 */
function isNonEmptyString(value: any): boolean {
  return typeof value === "string" && value.trim().length > 0
}

/**
 * Validates that a value is a valid URL
 */
function isValidUrl(value: any): boolean {
  if (typeof value !== "string") return false

  try {
    const url = new URL(value)
    return url.protocol === "http:" || url.protocol === "https:"
  } catch {
    return false
  }
}

/**
 * Validates that a value is an array of non-empty strings
 */
function isStringArray(value: any): boolean {
  return Array.isArray(value) && value.every(item => isNonEmptyString(item))
}

/**
 * Validates WebApplication schema structure and required fields
 */
export function validateWebApplicationSchema(schema: any): ValidationResult {
  const errors: string[] = []

  // Validate @context
  if (schema["@context"] !== "https://schema.org") {
    errors.push("@context must be 'https://schema.org'")
  }

  // Validate @type
  if (schema["@type"] !== "WebApplication") {
    errors.push("@type must be 'WebApplication'")
  }

  // Validate required string fields
  const requiredStringFields = ["@id", "name", "description", "url"]
  for (const field of requiredStringFields) {
    if (!isNonEmptyString(schema[field])) {
      errors.push(`${field} must be a non-empty string`)
    }
  }

  // Validate URLs are absolute
  const urlFields = ["@id", "url", "image"]
  for (const field of urlFields) {
    if (schema[field] && !isValidUrl(schema[field])) {
      errors.push(`${field} must be a valid absolute URL`)
    }
  }

  // Validate isAccessibleForFree is present and boolean
  if (typeof schema.isAccessibleForFree !== "boolean") {
    errors.push("isAccessibleForFree must be a boolean")
  }

  // Validate featureList if present
  if (schema.featureList !== undefined) {
    if (!isStringArray(schema.featureList)) {
      errors.push("featureList must be an array of non-empty strings")
    }
  }

  // Validate offers structure
  if (!schema.offers || typeof schema.offers !== "object") {
    errors.push("offers must be an object")
  } else {
    if (schema.offers["@type"] !== "Offer") {
      errors.push("offers.@type must be 'Offer'")
    }
    if (schema.offers.price !== "0") {
      errors.push("offers.price must be '0'")
    }
    if (schema.offers.priceCurrency !== "USD") {
      errors.push("offers.priceCurrency must be 'USD'")
    }
  }

  // Validate creator structure
  if (!schema.creator || typeof schema.creator !== "object") {
    errors.push("creator must be an object")
  } else {
    if (schema.creator["@type"] !== "Organization") {
      errors.push("creator.@type must be 'Organization'")
    }
    if (!isNonEmptyString(schema.creator.name)) {
      errors.push("creator.name must be a non-empty string")
    }
    if (!isValidUrl(schema.creator.url)) {
      errors.push("creator.url must be a valid absolute URL")
    }
  }

  return {
    valid: errors.length === 0,
    errors,
  }
}

/**
 * Validates BreadcrumbList schema structure and required fields
 */
export function validateBreadcrumbListSchema(schema: any): ValidationResult {
  const errors: string[] = []

  // Validate @context
  if (schema["@context"] !== "https://schema.org") {
    errors.push("@context must be 'https://schema.org'")
  }

  // Validate @type
  if (schema["@type"] !== "BreadcrumbList") {
    errors.push("@type must be 'BreadcrumbList'")
  }

  // Validate itemListElement
  if (!Array.isArray(schema.itemListElement)) {
    errors.push("itemListElement must be an array")
  } else {
    schema.itemListElement.forEach((item: any, index: number) => {
      // Validate @type
      if (item["@type"] !== "ListItem") {
        errors.push(`itemListElement[${index}].@type must be 'ListItem'`)
      }

      // Validate position
      if (typeof item.position !== "number" || item.position !== index + 1) {
        errors.push(`itemListElement[${index}].position must be ${index + 1}`)
      }

      // Validate name
      if (!isNonEmptyString(item.name)) {
        errors.push(`itemListElement[${index}].name must be a non-empty string`)
      }

      // Validate item URL if present (should not be on last item)
      if (item.item !== undefined) {
        if (!isValidUrl(item.item)) {
          errors.push(
            `itemListElement[${index}].item must be a valid absolute URL`
          )
        }

        // Last item should not have an item URL
        if (index === schema.itemListElement.length - 1) {
          errors.push(
            `itemListElement[${index}] is the last item and should not have an 'item' property`
          )
        }
      }
    })
  }

  return {
    valid: errors.length === 0,
    errors,
  }
}

/**
 * Validates FAQPage schema structure and required fields
 */
export function validateFAQPageSchema(schema: any): ValidationResult {
  const errors: string[] = []

  // Validate @context
  if (schema["@context"] !== "https://schema.org") {
    errors.push("@context must be 'https://schema.org'")
  }

  // Validate @type
  if (schema["@type"] !== "FAQPage") {
    errors.push("@type must be 'FAQPage'")
  }

  // Validate mainEntity
  if (!Array.isArray(schema.mainEntity)) {
    errors.push("mainEntity must be an array")
  } else {
    if (schema.mainEntity.length === 0) {
      errors.push("mainEntity must contain at least one question")
    }

    schema.mainEntity.forEach((question: any, index: number) => {
      // Validate @type
      if (question["@type"] !== "Question") {
        errors.push(`mainEntity[${index}].@type must be 'Question'`)
      }

      // Validate name (question text)
      if (!isNonEmptyString(question.name)) {
        errors.push(`mainEntity[${index}].name must be a non-empty string`)
      }

      // Validate acceptedAnswer
      if (
        !question.acceptedAnswer ||
        typeof question.acceptedAnswer !== "object"
      ) {
        errors.push(`mainEntity[${index}].acceptedAnswer must be an object`)
      } else {
        if (question.acceptedAnswer["@type"] !== "Answer") {
          errors.push(
            `mainEntity[${index}].acceptedAnswer.@type must be 'Answer'`
          )
        }

        if (!isNonEmptyString(question.acceptedAnswer.text)) {
          errors.push(
            `mainEntity[${index}].acceptedAnswer.text must be a non-empty string`
          )
        }

        // Check for HTML entities that might break validation
        const text = question.acceptedAnswer.text
        if (
          text.includes("&lt;") ||
          text.includes("&gt;") ||
          text.includes("&amp;")
        ) {
          errors.push(
            `mainEntity[${index}].acceptedAnswer.text contains HTML entities that should be decoded`
          )
        }
      }
    })
  }

  return {
    valid: errors.length === 0,
    errors,
  }
}
