import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    console.log("[SERVER] === CONTACT API REQUEST ===")

    const contactData = await request.json()
    console.log("[SERVER] Contact data received:", contactData)

    // Log the contact submission
    console.log("[SERVER] 📧 NEW CONTACT SUBMISSION (API):")
    console.log("[SERVER] Name:", contactData.name)
    console.log("[SERVER] Email:", contactData.email)
    console.log("[SERVER] Phone:", contactData.phone)
    console.log("[SERVER] Company:", contactData.company)
    console.log("[SERVER] Service:", contactData.service_type)
    console.log("[SERVER] Message:", contactData.message)

    return NextResponse.json({
      success: true,
      message: "Contact submission received",
      database: false,
    })
  } catch (error) {
    console.error("[SERVER] ❌ Contact API error:", error)
    return NextResponse.json({ error: "Failed to process contact" }, { status: 500 })
  }
}
