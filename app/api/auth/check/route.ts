import { type NextRequest, NextResponse } from "next/server"
import { cookies } from "next/headers"

export async function GET(request: NextRequest) {
  try {
    const cookieStore = await cookies()
    const sessionToken = cookieStore.get("admin-session")?.value

    if (!sessionToken) {
      return NextResponse.json({ authenticated: false }, { status: 401 })
    }

    // Check session validity (in production, use Redis/database)
    if (typeof global !== "undefined" && global.adminSessions) {
      const session = global.adminSessions.get(sessionToken)

      if (!session || Date.now() > session.expiresAt) {
        // Clean up expired session
        if (session) {
          global.adminSessions.delete(sessionToken)
        }

        // Clear cookie
        cookieStore.delete("admin-session")
        return NextResponse.json({ authenticated: false }, { status: 401 })
      }

      return NextResponse.json({
        authenticated: true,
        session: {
          loginTime: session.loginTime,
          ip: session.ip,
        },
      })
    }

    return NextResponse.json({ authenticated: false }, { status: 401 })
  } catch (error) {
    console.error("Auth check error:", error)
    return NextResponse.json({ authenticated: false }, { status: 500 })
  }
}
