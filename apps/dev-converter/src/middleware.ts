import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(req: NextRequest) {
  const p = req.nextUrl.pathname
  const decoded = decodeURIComponent(p)

  if (
    p.startsWith("/http://") ||
    p.startsWith("/https://") ||
    decoded.startsWith("/http://") ||
    decoded.startsWith("/https://")
  ) {
    return new NextResponse("Gone", { status: 410 })
  }

  return NextResponse.next()
}

export const config = { matcher: ["/:path*"] }
