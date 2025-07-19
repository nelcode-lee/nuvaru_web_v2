import { NextResponse } from "next/server"

export async function GET() {
  try {
    console.log("[SERVER] === DEBUG ENDPOINT ===")

    const envVars = {
      DATABASE_URL: false, // Database removed
      RESEND_API_KEY: !!process.env.RESEND_API_KEY,
      ADMIN_USERNAME: "***", // Hidden for security
      ADMIN_PASSWORD: "***", // Hidden for security
      NODE_ENV: process.env.NODE_ENV,
      VERCEL_URL: process.env.VERCEL_URL,
    }

    console.log("[SERVER] Environment variables:", envVars)

    return NextResponse.json({
      timestamp: new Date().toISOString(),
      environment: envVars,
      database: {
        status: "Removed",
        tableExists: false,
      },
      message: "Debug information retrieved successfully (database removed)",
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
