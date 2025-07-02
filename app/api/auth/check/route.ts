import { type NextRequest, NextResponse } from "next/server"
import { cookies } from "next/headers"

export async function GET(request: NextRequest) {
  try {
    console.log("=== AUTH CHECK REQUEST ===")

    const cookieStore = await cookies()
    const sessionCookie = cookieStore.get("admin-session")

    console.log("Session cookie exists:", !!sessionCookie)
    console.log("Session cookie value:", sessionCookie?.value)

    if (sessionCookie && sessionCookie.value === "authenticated") {
      console.log("✅ Authentication successful")
      return NextResponse.json({
        authenticated: true,
        timestamp: new Date().toISOString(),
      })
    } else {
      console.log("❌ Authentication failed")
      return NextResponse.json({
        authenticated: false,
        timestamp: new Date().toISOString(),
      })
    }
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
