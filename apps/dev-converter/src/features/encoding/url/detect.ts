export const detectUrlEncoded = (input: string): boolean => {
  if (!input.trim()) return false
  return /%[0-9A-Fa-f]{2}/.test(input)
}
