import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    console.log("=== LOGIN REQUEST ===")

    const { username, password } = await request.json()

    console.log("Login attempt for username:", username)

    // Get credentials from environment variables
    const validUsername = process.env.ADMIN_USERNAME || "admin"
    const validPassword = process.env.ADMIN_PASSWORD || "nuvaru2024!"

    console.log("Expected username:", validUsername)
    console.log("Password provided:", !!password)

    if (username === validUsername && password === validPassword) {
      console.log("✅ Login successful")

      const response = NextResponse.json({ success: true })

      // Set authentication cookie
      response.cookies.set("admin-session", "admin-authenticated", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 24, // 24 hours
        path: "/",
      })

      return response
    } else {
      console.log("❌ Login failed - invalid credentials")
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 })
    }
  } catch (error) {
    console.error("Login error:", error)
    return NextResponse.json({ error: "Login failed" }, { status: 500 })
  }
}
