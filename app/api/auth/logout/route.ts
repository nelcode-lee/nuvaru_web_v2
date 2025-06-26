import { type NextRequest, NextResponse } from "next/server"
import { cookies } from "next/headers"

export async function POST(request: NextRequest) {
  try {
    console.log("=== LOGOUT REQUEST ===")

    const cookieStore = cookies()
    cookieStore.delete("admin-session")

    console.log("Session cookie deleted")

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Logout error:", error)
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 })
  }
}
