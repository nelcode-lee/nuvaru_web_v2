import { type NextRequest, NextResponse } from "next/server"
import { cookies } from "next/headers"
import { neon } from "@neondatabase/serverless"

const sql = neon(process.env.DATABASE_URL!)

async function verifyAdminSession(request: NextRequest) {
  const cookieStore = await cookies()
  const sessionToken = cookieStore.get("admin-session")

  if (!sessionToken?.value) {
    return false
  }

  const sessions = global.adminSessions || new Map()
  const sessionData = sessions.get(sessionToken.value)

  if (!sessionData || Date.now() > sessionData.expiresAt) {
    return false
  }

  return true
}

export async function GET(request: NextRequest) {
  try {
    // Verify admin session
    const isAuthenticated = await verifyAdminSession(request)
    if (!isAuthenticated) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // Fetch contacts from database
    const contacts = await sql`
      SELECT 
        id,
        name,
        email,
        phone,
        company,
        service,
        message,
        created_at,
        ip_address,
        user_agent
      FROM contact_submissions 
      ORDER BY created_at DESC
    `

    return NextResponse.json({ contacts })
  } catch (error) {
    console.error("Error fetching contacts:", error)
    return NextResponse.json({ error: "Failed to fetch contacts" }, { status: 500 })
  }
}
