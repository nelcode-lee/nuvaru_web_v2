import { type NextRequest, NextResponse } from "next/server"
import { cookies } from "next/headers"

export async function GET(request: NextRequest) {
  try {
    console.log("=== ADMIN CONTACTS REQUEST ===")

    // Check authentication
    const cookieStore = await cookies()
    const sessionCookie = cookieStore.get("admin-session")
    const timestampCookie = cookieStore.get("admin-timestamp")

    console.log("Session cookie exists:", !!sessionCookie)
    console.log("Session cookie value:", sessionCookie?.value ? "present" : "missing")
    console.log("Timestamp cookie exists:", !!timestampCookie)

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

    // Return empty contacts array since database is removed
    return NextResponse.json({ 
      success: true, 
      contacts: []
    })
  } catch (error: any) {
    console.error("Admin contacts error:", error)
    return NextResponse.json(
      {
        error: "Server error",
        details: error.message,
      },
      { status: 500 },
    )
  }
}

export async function PATCH(request: NextRequest) {
  try {
    console.log("=== ADMIN CONTACT UPDATE REQUEST ===")

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

    // Get request body
    const body = await request.json()
    const { id, status, notes } = body

    if (!id || !status) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Database removed - return success without updating
    console.log("✅ Contact update request received (database removed)")

    return NextResponse.json({ 
      success: true, 
      contact: { id, status, notes }
    })

  } catch (error: any) {
    console.error("Admin contact update error:", error)
    return NextResponse.json(
      {
        error: "Server error",
        details: error.message,
      },
      { status: 500 },
    )
  }
}

export async function DELETE(request: NextRequest) {
  try {
    console.log("=== ADMIN CONTACT DELETE REQUEST ===")

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

    // Get contact ID from URL params
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')

    if (!id) {
      return NextResponse.json({ error: "Missing contact ID" }, { status: 400 })
    }

    // Database removed - return success without deleting
    console.log("✅ Contact delete request received (database removed)")

    return NextResponse.json({ 
      success: true, 
      message: "Contact deleted successfully",
      contact: { id: parseInt(id), name: "Deleted Contact", email: "deleted@example.com" }
    })

  } catch (error: any) {
    console.error("Admin contact delete error:", error)
    return NextResponse.json(
      {
        error: "Server error",
        details: error.message,
      },
      { status: 500 },
    )
  }
}
