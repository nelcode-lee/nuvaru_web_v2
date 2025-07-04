import { type NextRequest, NextResponse } from "next/server"
import { cookies } from "next/headers"
import { neon } from "@neondatabase/serverless"

export async function GET(request: NextRequest) {
  try {
    console.log("=== ADMIN CONTACTS REQUEST ===")

    // Check authentication
    const cookieStore = await cookies()
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
    let contacts: any[] = []
    let retries = 3

    while (retries > 0) {
      try {
        console.log(`Attempting to fetch contacts (${4 - retries}/3)...`)

        contacts = await sql`
          SELECT id, name, email, company, phone, message, created_at 
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

export async function PATCH(request: NextRequest) {
  try {
    console.log("=== ADMIN CONTACT UPDATE REQUEST ===")

    // Check authentication
    const cookieStore = await cookies()
    const sessionCookie = cookieStore.get("admin-session")

    if (!sessionCookie || sessionCookie.value !== "authenticated") {
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

    // Get database connection
    const databaseUrl = process.env.DATABASE_URL
    if (!databaseUrl) {
      console.log("❌ No database URL configured")
      return NextResponse.json({ error: "Database not configured" }, { status: 500 })
    }

    const sql = neon(databaseUrl)

    // Update contact in database
    const result = await sql`
      UPDATE contact_submissions 
      SET status = ${status}, notes = ${notes || ""}, updated_at = NOW()
      WHERE id = ${id}
      RETURNING id, name, email, status, notes
    `

    if (result.length === 0) {
      return NextResponse.json({ error: "Contact not found" }, { status: 404 })
    }

    console.log("✅ Contact updated successfully:", result[0])

    return NextResponse.json({ 
      success: true, 
      contact: result[0] 
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
