export const detectJsonEscaped = (input: string): boolean => {
  if (!input.trim()) return false
  
  if (!input.includes('\\')) return false
  
  const validEscapes = input.match(/\\["\\/bfnrt]|\\u[0-9A-Fa-f]{4}/g) || []
  const invalidEscapes = input.match(/\\[^"\\/bfnrtu]|\\u(?![0-9A-Fa-f]{4})/g) || []
  
  if (validEscapes.length === 0) return false
  
  if (invalidEscapes.length > 0 && invalidEscapes.length >= validEscapes.length) {
    return false
  }
  
  if (invalidEscapes.length > 0 && /[A-Za-z]:\\/.test(input)) {
    return false
  }
  
  return true
}
