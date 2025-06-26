import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json()

    // Simple authentication (use proper hashing in production)
    const validUsername = process.env.ADMIN_USERNAME || "admin"
    const validPassword = process.env.ADMIN_PASSWORD || "nuvaru2024!"

    if (username === validUsername && password === validPassword) {
      const response = NextResponse.json({ success: true })

      // Set authentication cookie
      response.cookies.set("admin-session", "admin-authenticated", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 24, // 24 hours
      })

      return response
    } else {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 })
    }
  } catch (error) {
    console.error("Login error:", error)
    return NextResponse.json({ error: "Login failed" }, { status: 500 })
  }
}
