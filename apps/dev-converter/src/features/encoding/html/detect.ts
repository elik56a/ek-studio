export const detectHtmlEscaped = (input: string): boolean => {
  if (!input.trim()) return false
  return /&[a-zA-Z]+;|&#\d+;|&#x[0-9A-Fa-f]+;/.test(input)
}
