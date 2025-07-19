import { type NextRequest, NextResponse } from "next/server"
import { cookies } from "next/headers"

export async function POST(request: NextRequest) {
  try {
    console.log("=== LOGOUT REQUEST ===")

    const cookieStore = await cookies()
    
    // Clear all admin session cookies
    cookieStore.delete("admin-session")
    cookieStore.delete("admin-timestamp")

    console.log("✅ Logout successful - cookies cleared")

    return NextResponse.json({
      success: true,
      message: "Logged out successfully"
    })
  } catch (error) {
    console.error("Logout error:", error)
    return NextResponse.json(
      { success: false, error: "Server error" },
      { status: 500 }
    )
  }
}
