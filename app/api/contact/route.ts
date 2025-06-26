import { type NextRequest, NextResponse } from "next/server"
import { neon } from "@neondatabase/serverless"

export async function POST(request: NextRequest) {
  try {
    console.log("[SERVER] === CONTACT API REQUEST ===")

    const contactData = await request.json()
    console.log("[SERVER] Contact data received:", contactData)

    // Always log the contact submission
    console.log("[SERVER] 📧 NEW CONTACT SUBMISSION (API):")
    console.log("[SERVER] Name:", contactData.name)
    console.log("[SERVER] Email:", contactData.email)
    console.log("[SERVER] Phone:", contactData.phone)
    console.log("[SERVER] Company:", contactData.company)
    console.log("[SERVER] Service:", contactData.service_type)
    console.log("[SERVER] Message:", contactData.message)

    let databaseSuccess = false

    // Try to save to database
    if (process.env.DATABASE_URL) {
      try {
        console.log("[SERVER] Attempting to save to database...")
        const sql = neon(process.env.DATABASE_URL)

        await sql`
          INSERT INTO contact_submissions (
            name, email, phone, company, service_type, message, status, created_at, updated_at
          ) VALUES (
            ${contactData.name},
            ${contactData.email},
            ${contactData.phone || ""},
            ${contactData.company || ""},
            ${contactData.service_type || ""},
            ${contactData.message},
            'new',
            NOW(),
            NOW()
          )
        `
        console.log("[SERVER] ✅ Contact saved to database successfully")
        databaseSuccess = true
      } catch (error) {
        console.error("[SERVER] ❌ Database save failed:", error)
        console.log("[SERVER] 💾 Contact logged to console for manual follow-up")
      }
    }

    return NextResponse.json({
      success: true,
      message: "Contact submission received",
      database: databaseSuccess,
    })
  } catch (error) {
    console.error("[SERVER] ❌ Contact API error:", error)
    return NextResponse.json({ error: "Failed to process contact" }, { status: 500 })
  }
}
