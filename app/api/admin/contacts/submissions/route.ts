import { type NextRequest, NextResponse } from "next/server"
import { cookies } from "next/headers"
import { ContactStorage } from "@/lib/contact-storage"

export async function GET(request: NextRequest) {
  try {
    console.log("=== ADMIN CONTACT SUBMISSIONS REQUEST ===")

    // Check authentication
    const cookieStore = await cookies()
    const sessionCookie = cookieStore.get("admin-session")
    const timestampCookie = cookieStore.get("admin-timestamp")

    // Check if session exists and is valid
    let isAuthenticated = false
    
    if (sessionCookie && sessionCookie.value) {
      // Handle old session format (just "authenticated")
      if (sessionCookie.value === "authenticated") {
        isAuthenticated = true
      }
      
      // Handle new session format (with timestamp)
      if (timestampCookie) {
        const sessionAge = Date.now() - parseInt(timestampCookie.value)
        const maxAge = 24 * 60 * 60 * 1000 // 24 hours

        if (sessionAge < maxAge) {
          isAuthenticated = true
        } else {
          console.log("❌ Session expired")
          // Clear expired cookies
          cookieStore.delete("admin-session")
          cookieStore.delete("admin-timestamp")
        }
      }
    }

    if (!isAuthenticated) {
      console.log("❌ Unauthorized access attempt")
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    console.log("✅ Authentication successful")

    // Get query parameters
    const { searchParams } = new URL(request.url)
    const limit = parseInt(searchParams.get('limit') || '50')
    const offset = parseInt(searchParams.get('offset') || '0')

    // Get all submissions
    const allSubmissions = ContactStorage.getAllSubmissions()
    const totalCount = allSubmissions.length

    // Apply pagination
    const submissions = allSubmissions.slice(offset, offset + limit)

    return NextResponse.json({
      success: true,
      submissions,
      pagination: {
        total: totalCount,
        limit,
        offset,
        hasMore: offset + limit < totalCount
      }
    })

  } catch (error: any) {
    console.error("Admin contact submissions error:", error)
    return NextResponse.json(
      {
        error: "Server error",
        details: error.message,
      },
      { status: 500 },
    )
  }
} 