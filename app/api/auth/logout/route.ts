import { NextResponse } from "next/server"

export async function POST() {
  try {
    console.log("=== LOGOUT REQUEST ===")

    const response = NextResponse.json({ success: true })

    // Clear authentication cookie
    response.cookies.delete("admin-session")

    console.log("✅ Logout successful")
    return response
  } catch (error) {
    console.error("Logout error:", error)
    return NextResponse.json({ error: "Logout failed" }, { status: 500 })
  }
}
