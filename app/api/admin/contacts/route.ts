import { type NextRequest, NextResponse } from "next/server"
import { cookies } from "next/headers"
import { neon } from "@neondatabase/serverless"

async function checkAuth() {
  try {
    const cookieStore = await cookies()
    const sessionToken = cookieStore.get("admin-session")?.value
    return sessionToken === "admin-authenticated"
  } catch (error) {
    console.error("Auth check error:", error)
    return false
  }
}

export async function GET(request: NextRequest) {
  try {
    console.log("=== ADMIN CONTACTS GET REQUEST ===")

    const isAuthenticated = await checkAuth()
    console.log("Authentication status:", isAuthenticated)

    if (!isAuthenticated) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // Check if DATABASE_URL exists
    if (!process.env.DATABASE_URL) {
      console.error("DATABASE_URL not found in environment variables")
      return NextResponse.json({ error: "Database not configured" }, { status: 500 })
    }

    console.log("Connecting to database...")
    const sql = neon(process.env.DATABASE_URL)

    // Test database connection first
    try {
      const testQuery = await sql`SELECT 1 as test`
      console.log("Database connection test:", testQuery)
    } catch (dbTestError) {
      console.error("Database connection test failed:", dbTestError)
      return NextResponse.json({ error: "Database connection failed" }, { status: 500 })
    }

    // Check if table exists
    try {
      const tableExists = await sql`
        SELECT EXISTS (
          SELECT FROM information_schema.tables 
          WHERE table_schema = 'public' 
          AND table_name = 'contact_submissions'
        );
      `
      console.log("Table exists check:", tableExists)

      if (!tableExists[0]?.exists) {
        return NextResponse.json(
          {
            error: "Contact submissions table does not exist. Please run the database migration script first.",
            contacts: [],
          },
          { status: 200 },
        )
      }
    } catch (tableCheckError) {
      console.error("Table check error:", tableCheckError)
      return NextResponse.json({ error: "Failed to check table existence" }, { status: 500 })
    }

    // Fetch contacts
    console.log("Fetching contacts from database...")
    const contacts = await sql`
      SELECT 
        id, 
        name, 
        email, 
        phone, 
        company, 
        service_type, 
        message, 
        status, 
        notes,
        created_at,
        updated_at
      FROM contact_submissions 
      ORDER BY created_at DESC
    `

    console.log(`Found ${contacts.length} contacts`)
    return NextResponse.json({ contacts })
  } catch (error) {
    console.error("Error in GET /api/admin/contacts:", error)
    return NextResponse.json(
      {
        error: "Failed to fetch contacts",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const isAuthenticated = await checkAuth()
    if (!isAuthenticated) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { id, status, notes } = await request.json()

    if (!id) {
      return NextResponse.json({ error: "ID is required" }, { status: 400 })
    }

    const sql = neon(process.env.DATABASE_URL!)

    await sql`
      UPDATE contact_submissions 
      SET 
        status = ${status || "new"}, 
        notes = ${notes || ""}, 
        updated_at = NOW()
      WHERE id = ${id}
    `

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error updating contact:", error)
    return NextResponse.json({ error: "Failed to update contact" }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const isAuthenticated = await checkAuth()
    if (!isAuthenticated) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const id = searchParams.get("id")

    if (!id) {
      return NextResponse.json({ error: "ID required" }, { status: 400 })
    }

    const sql = neon(process.env.DATABASE_URL!)

    await sql`DELETE FROM contact_submissions WHERE id = ${id}`

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error deleting contact:", error)
    return NextResponse.json({ error: "Failed to delete contact" }, { status: 500 })
  }
}
