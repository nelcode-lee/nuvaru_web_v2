import { type NextRequest, NextResponse } from "next/server"
import { cookies } from "next/headers"

export async function GET(request: NextRequest) {
  try {
    console.log("=== AUTH CHECK REQUEST ===")

    const cookieStore = await cookies()
    const sessionToken = cookieStore.get("admin-session")?.value

    console.log("Session token exists:", !!sessionToken)
    console.log("Session token value:", sessionToken)

    // Simple session validation
    if (sessionToken === "admin-authenticated") {
      console.log("✅ Authentication successful")
      return NextResponse.json({ authenticated: true })
    } else {
      console.log("❌ Authentication failed")
      return NextResponse.json({ authenticated: false }, { status: 401 })
    }
  } catch (error) {
    console.error("Auth check error:", error)
    return NextResponse.json({ authenticated: false }, { status: 401 })
  }
}
