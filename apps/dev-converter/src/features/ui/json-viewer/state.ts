import { NodeState } from './types'

export const collectAllPaths = (obj: any, currentPath: string = ""): string[] => {
  const allPaths: string[] = []

  const collectPaths = (obj: any, currentPath: string = "") => {
    if (obj && typeof obj === "object") {
      if (currentPath) allPaths.push(currentPath)
      if (Array.isArray(obj)) {
        obj.forEach((item, index) => {
          collectPaths(item, `${currentPath}[${index}]`)
        })
      } else {
        Object.keys(obj).forEach(key => {
          collectPaths(obj[key], currentPath ? `${currentPath}.${key}` : key)
        })
      }
    }
  }

  collectPaths(obj, currentPath)
  return allPaths
}

export const createCollapsedState = (parsedData: any): NodeState => {
  const allPaths = collectAllPaths(parsedData, "root")
  const newState: NodeState = {}
  allPaths.forEach(path => {
    newState[path] = true
  })
  return newState
}
