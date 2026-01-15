export interface RegexMatch {
  match: string
  index: number
  groups: string[]
  namedGroups?: Record<string, string>
}

export interface RegexTestResult {
  matches: RegexMatch[]
  totalMatches: number
  isValid: boolean
  flags: string
  pattern: string
}
