import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Define paths that should exist
  const validPaths = [
    "/",
    "/services",
    "/case-studies",
    "/chat",
    "/custom-404",
    // Add all your valid routes here
    "/services/ai-readiness-assessment",
    "/services/custom-ai-solutions",
    "/services/process-automation",
    "/services/data-analysis-optimization",
    "/services/gdpr-compliance-solutions",
    "/services/ai-implementation-training",
  ]

  // Check if path starts with any valid path
  const isValidPath = validPaths.some(
    (path) =>
      pathname === path ||
      pathname.startsWith(`${path}/`) ||
      pathname.startsWith("/_next/") ||
      pathname.startsWith("/api/") ||
      pathname.startsWith("/images/") ||
      pathname.startsWith("/fonts/") ||
      pathname.startsWith("/favicon"),
  )

  // If it's not a valid path, redirect to custom 404 page
  if (!isValidPath) {
    return NextResponse.rewrite(new URL("/custom-404", request.url))
  }

  return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
}
