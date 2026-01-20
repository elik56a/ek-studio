export type CharacterEncoding = "utf8" | "binary"

export type Base64Direction = "encode" | "decode"

export interface Base64Preset {
  direction?: Base64Direction
  urlSafe?: boolean
  noPadding?: boolean
  encoding?: CharacterEncoding
}


export interface FileToBase64Preset {
  accept?: string[] 
  label?: string
}
