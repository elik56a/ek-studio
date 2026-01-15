export const formatHtml = (html: string): string => {
  let formatted = ""
  let indent = 0
  const tab = "  "

  html = html.replace(/>\s+</g, "><").trim()

  const tokens = html.split(/(<[^>]+>)/g).filter(token => token.trim())

  tokens.forEach(token => {
    if (token.match(/^<\/\w/)) {
      indent = Math.max(0, indent - 1)
      formatted += tab.repeat(indent) + token + "\n"
    } else if (token.match(/^<\w[^>]*[^/]>$/)) {
      formatted += tab.repeat(indent) + token + "\n"
      indent++
    } else if (token.match(/^<\w[^>]*\/>$/)) {
      formatted += tab.repeat(indent) + token + "\n"
    } else if (token.trim()) {
      formatted += tab.repeat(indent) + token.trim() + "\n"
    }
  })

  return formatted.trim()
}
