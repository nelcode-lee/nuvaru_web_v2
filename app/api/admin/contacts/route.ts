import { type NextRequest, NextResponse } from "next/server"
import { cookies } from "next/headers"
import { neon } from "@neondatabase/serverless"

export async function GET(request: NextRequest) {
  try {
    console.log("=== ADMIN CONTACTS REQUEST ===")

    // Check authentication
    const cookieStore = cookies()
    const sessionCookie = cookieStore.get("admin-session")

    console.log("Session cookie exists:", !!sessionCookie)
    console.log("Session cookie value:", sessionCookie?.value)

    if (!sessionCookie || sessionCookie.value !== "authenticated") {
      console.log("❌ Unauthorized access attempt")
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    console.log("✅ Authentication successful")

    // Get database connection
    const databaseUrl = process.env.DATABASE_URL
    if (!databaseUrl) {
      console.log("❌ No database URL configured")
      return NextResponse.json({ error: "Database not configured" }, { status: 500 })
    }

    const sql = neon(databaseUrl)

    // Try to fetch contacts with retry logic for sleeping database
    let contacts = []
    let retries = 3

    while (retries > 0) {
      try {
        console.log(`Attempting to fetch contacts (${4 - retries}/3)...`)

        contacts = await sql`
          SELECT id, name, email, company, message, created_at 
          FROM contact_submissions 
          ORDER BY created_at DESC
        `

        console.log(`✅ Successfully fetched ${contacts.length} contacts`)
        break
      } catch (dbError: any) {
        console.log(`Database error (attempt ${4 - retries}/3):`, dbError.message)

        if (retries === 1) {
          // Last attempt failed
          console.log("❌ All database attempts failed")
          return NextResponse.json(
            {
              error: "Database connection failed",
              details: dbError.message,
            },
            { status: 500 },
          )
        }

        // Wait before retry (database might be waking up)
        await new Promise((resolve) => setTimeout(resolve, 2000))
        retries--
      }
    }

    return NextResponse.json({ contacts })
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
