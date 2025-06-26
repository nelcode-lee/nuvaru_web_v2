import { NextResponse } from "next/server"
import { neon } from "@neondatabase/serverless"

export async function GET() {
  try {
    console.log("[SERVER] === DEBUG ENDPOINT ===")

    const envVars = {
      DATABASE_URL: !!process.env.DATABASE_URL,
      RESEND_API_KEY: !!process.env.RESEND_API_KEY,
      ADMIN_USERNAME: process.env.ADMIN_USERNAME || "admin",
      ADMIN_PASSWORD: !!process.env.ADMIN_PASSWORD,
      NODE_ENV: process.env.NODE_ENV,
      VERCEL_URL: process.env.VERCEL_URL,
    }

    console.log("[SERVER] Environment variables:", envVars)

    let databaseStatus = "Not configured"
    let tableExists = false

    if (process.env.DATABASE_URL) {
      try {
        console.log("[SERVER] Testing database connection...")
        const sql = neon(process.env.DATABASE_URL)

        // Test connection
        const testQuery = await sql`SELECT NOW() as current_time`
        console.log("[SERVER] Database connection successful:", testQuery)
        databaseStatus = "Connected"

        // Check if table exists
        const tableCheck = await sql`
          SELECT EXISTS (
            SELECT FROM information_schema.tables 
            WHERE table_schema = 'public' 
            AND table_name = 'contact_submissions'
          );
        `
        tableExists = tableCheck[0]?.exists || false
        console.log("[SERVER] Table exists:", tableExists)
      } catch (dbError) {
        console.error("[SERVER] Database error:", dbError)
        databaseStatus = `Error: ${dbError instanceof Error ? dbError.message : "Unknown error"}`
      }
    }

    return NextResponse.json({
      timestamp: new Date().toISOString(),
      environment: envVars,
      database: {
        status: databaseStatus,
        tableExists,
      },
      message: "Debug information retrieved successfully",
    })
  } catch (error) {
    console.error("[SERVER] Debug endpoint error:", error)
    return NextResponse.json(
      {
        error: "Debug endpoint failed",
        details: error instanceof Error ? error.message : "Unknown error",
        timestamp: new Date().toISOString(),
      },
      { status: 500 },
    )
  }
}
