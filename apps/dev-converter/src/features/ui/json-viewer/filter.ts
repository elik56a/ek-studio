export const filterJsonByQuery = (data: any, query: string): any => {
  if (!data || !query.trim()) return data

  const normalizedQuery = query.toLowerCase()

  const filterObject = (obj: any): any => {
    if (typeof obj !== "object" || obj === null) {
      return String(obj).toLowerCase().includes(normalizedQuery) ? obj : null
    }

    if (Array.isArray(obj)) {
      const filtered = obj
        .map(item => filterObject(item))
        .filter(item => item !== null)
      return filtered.length > 0 ? filtered : null
    }

    const filtered: any = {}
    let hasMatch = false

    for (const key of Object.keys(obj)) {
      if (key.toLowerCase().includes(normalizedQuery)) {
        filtered[key] = obj[key]
        hasMatch = true
      } else {
        const filteredValue = filterObject(obj[key])
        if (filteredValue !== null) {
          filtered[key] = filteredValue
          hasMatch = true
        }
      }
    }

    return hasMatch ? filtered : null
  }

  return filterObject(data)
}
