import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(req: NextRequest) {
  const p = req.nextUrl.pathname

  // decode to catch encoded forms too (best effort)
  let decoded = p
  try {
    decoded = decodeURIComponent(p)
  } catch {}

  const isBrokenHttpPath =
    /^\/https?:\/\//i.test(p) || // /http://...
    /^\/https?:\//i.test(p) || // /http:/...  (Vercel normalization)
    /^\/https?:\/\//i.test(decoded) ||
    /^\/https?:\//i.test(decoded)

  if (isBrokenHttpPath) {
    return new NextResponse("Gone", { status: 410 })
  }

  return NextResponse.next()
}

export const config = { matcher: ["/:path*"] }
