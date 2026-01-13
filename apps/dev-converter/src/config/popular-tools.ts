import { Database, FileText, Hash, Lock } from "lucide-react"

export interface PopularTool {
  name: string
  slug: string
  icon: any
}

export const popularTools: PopularTool[] = [
  {
    name: "JSON Formatter",
    slug: "json-formatter",
    icon: Database,
  },
  {
    name: "Base64 Encoder",
    slug: "base64-encode-decode",
    icon: Lock,
  },
  {
    name: "JWT Decoder",
    slug: "jwt-decoder",
    icon: FileText,
  },
  {
    name: "Hash Generator",
    slug: "hash-generator",
    icon: Hash,
  },
]
