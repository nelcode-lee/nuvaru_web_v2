import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Add security headers
  const response = NextResponse.next()

  response.headers.set("X-Frame-Options", "DENY")
  response.headers.set("X-Content-Type-Options", "nosniff")
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin")
  response.headers.set("X-XSS-Protection", "1; mode=block")
  response.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()")
  response.headers.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains")
  response.headers.set("Content-Security-Policy", "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https:; frame-ancestors 'none';")

  // Check admin routes
  if (request.nextUrl.pathname.startsWith("/admin")) {
    // Allow access to login page and API routes
    if (request.nextUrl.pathname === "/admin/login" || request.nextUrl.pathname.startsWith("/api/")) {
      return response
    }

    // Check for admin session cookie
    const sessionCookie = request.cookies.get("admin-session")
    
    if (!sessionCookie || sessionCookie.value === "authenticated") {
      // Allow access if session is "authenticated" (old format)
      return response
    }
    
    // Check for new session format
    if (sessionCookie && sessionCookie.value && sessionCookie.value !== "authenticated") {
      // Check if session is valid (has timestamp)
      const timestampCookie = request.cookies.get("admin-timestamp")
      if (timestampCookie) {
        const sessionAge = Date.now() - parseInt(timestampCookie.value)
        const maxAge = 24 * 60 * 60 * 1000 // 24 hours
        
        if (sessionAge < maxAge) {
          return response
        }
      }
    }

    // Redirect to login page if not authenticated
    const loginUrl = new URL("/admin/login", request.url)
    loginUrl.searchParams.set("redirect", request.nextUrl.pathname)
    return NextResponse.redirect(loginUrl)
  }

  return response
}

export const config = {
  matcher: [
    "/admin/:path*", 
    "/((?!api|_next/static|_next/image|favicon.ico|uploads).*)"
  ],
}
