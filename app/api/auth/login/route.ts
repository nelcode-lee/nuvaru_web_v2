import { type NextRequest, NextResponse } from "next/server"
import { cookies } from "next/headers"

export async function POST(request: NextRequest) {
  try {
    console.log("=== LOGIN REQUEST ===")

    const body = await request.json()
    const { username, password } = body

    console.log("Login attempt for username:", username)

    const adminUsername = process.env.ADMIN_USERNAME || "admin"
    const adminPassword = process.env.ADMIN_PASSWORD || "nuvaru2024!"

    console.log("Expected username:", adminUsername)
    console.log("Expected password exists:", !!adminPassword)

    if (username === adminUsername && password === adminPassword) {
      console.log("✅ Login successful")

      // Set cookie
      const cookieStore = cookies()
      cookieStore.set("admin-session", "authenticated", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24, // 24 hours
      })

      console.log("Cookie set successfully")

      return NextResponse.json({ success: true })
    } else {
      console.log("❌ Invalid credentials")
      return NextResponse.json({ success: false, error: "Invalid credentials" }, { status: 401 })
    }
  } catch (error) {
    console.error("Login error:", error)
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 })
  }
}
