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

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    // Verify admin session
    const isAuthenticated = await verifyAdminSession(request)
    if (!isAuthenticated) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const id = Number.parseInt(params.id)
    if (isNaN(id)) {
      return NextResponse.json({ error: "Invalid ID" }, { status: 400 })
    }

    // Delete contact from database
    const result = await sql`
      DELETE FROM contact_submissions 
      WHERE id = ${id}
      RETURNING id
    `

    if (result.length === 0) {
      return NextResponse.json({ error: "Contact not found" }, { status: 404 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error deleting contact:", error)
    return NextResponse.json({ error: "Failed to delete contact" }, { status: 500 })
  }
}
