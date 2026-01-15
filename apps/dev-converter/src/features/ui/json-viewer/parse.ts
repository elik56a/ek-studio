export const parseJsonOrYaml = (value: string): any => {
  if (!value || value.trim() === "") return null

  try {
    return JSON.parse(value)
  } catch {
    try {
      const lines = value.split("\n")
      const result: any = {}
      let currentObj: any = result
      const stack: any[] = [result]
      let lastIndent = 0

      for (const line of lines) {
        if (line.trim() === "" || line.trim().startsWith("#")) continue

        const indent = line.search(/\S/)
        const trimmed = line.trim()

        if (trimmed.includes(":")) {
          const [key, ...valueParts] = trimmed.split(":")
          const valueStr = valueParts.join(":").trim()

          if (indent < lastIndent) {
            const diff = Math.floor((lastIndent - indent) / 2)
            for (let i = 0; i < diff; i++) {
              stack.pop()
            }
            currentObj = stack[stack.length - 1]
          }

          if (valueStr === "" || valueStr === "{}") {
            currentObj[key.trim()] = {}
            currentObj = currentObj[key.trim()]
            stack.push(currentObj)
          } else if (valueStr === "[]") {
            currentObj[key.trim()] = []
          } else {
            let parsedValue: any = valueStr
            if (valueStr === "true") parsedValue = true
            else if (valueStr === "false") parsedValue = false
            else if (valueStr === "null") parsedValue = null
            else if (!isNaN(Number(valueStr))) parsedValue = Number(valueStr)
            else if (valueStr.startsWith('"') && valueStr.endsWith('"')) {
              parsedValue = valueStr.slice(1, -1)
            }
            currentObj[key.trim()] = parsedValue
          }

          lastIndent = indent
        }
      }

      return Object.keys(result).length > 0 ? result : null
    } catch {
      return null
    }
  }
}
