export const encodeUtf8ToBase64 = (str: string): string => {
  const encoder = new TextEncoder()
  const uint8Array = encoder.encode(str)
  let binaryString = ""
  for (let i = 0; i < uint8Array.length; i++) {
    binaryString += String.fromCharCode(uint8Array[i])
  }
  return btoa(binaryString)
}

export const base64ToBase64Url = (
  base64: string,
  removePadding: boolean = true
): string => {
  let result = base64.replace(/\+/g, "-").replace(/\//g, "_")
  if (removePadding) {
    result = result.replace(/=+$/, "")
  }
  return result
}
