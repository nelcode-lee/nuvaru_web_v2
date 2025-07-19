import { type NextRequest, NextResponse } from "next/server"
import { cookies } from "next/headers"

export async function GET(request: NextRequest) {
  try {
    console.log("=== AUTH CHECK REQUEST ===")

    const cookieStore = await cookies()
    const sessionCookie = cookieStore.get("admin-session")
    const timestampCookie = cookieStore.get("admin-timestamp")

    console.log("Session cookie exists:", !!sessionCookie)
    console.log("Session cookie value:", sessionCookie?.value ? "present" : "missing")
    console.log("Timestamp cookie exists:", !!timestampCookie)

    // Check if session exists and is valid
    if (sessionCookie && sessionCookie.value) {
      // Handle old session format (just "authenticated")
      if (sessionCookie.value === "authenticated") {
        console.log("✅ Authentication successful (old format)")
        return NextResponse.json({
          authenticated: true,
          timestamp: new Date().toISOString(),
          sessionAge: 0,
        })
      }
      
      // Handle new session format (with timestamp)
      if (timestampCookie) {
        const sessionAge = Date.now() - parseInt(timestampCookie.value)
        const maxAge = 24 * 60 * 60 * 1000 // 24 hours

        if (sessionAge < maxAge) {
          console.log("✅ Authentication successful")
          return NextResponse.json({
            authenticated: true,
            timestamp: new Date().toISOString(),
            sessionAge: Math.floor(sessionAge / 1000 / 60), // minutes
          })
        } else {
          console.log("❌ Session expired")
          // Clear expired cookies
          cookieStore.delete("admin-session")
          cookieStore.delete("admin-timestamp")
        }
      }
    }

    console.log("❌ Authentication failed")
    return NextResponse.json({
      authenticated: false,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error("Auth check error:", error)
    return NextResponse.json(
      {
        authenticated: false,
        error: "Server error",
        timestamp: new Date().toISOString(),
      },
      { status: 500 },
    )
  }
}
