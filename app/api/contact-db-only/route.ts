import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    console.log("📝 Contact submission started")

    const body = await request.json()
    const { name, email, phone, company, serviceType, challenge, source } = body

    // Validate required fields
    if (!name || !email || !company || !challenge) {
      console.log("❌ Missing required fields")
      return NextResponse.json({
        success: false,
        message: "Please fill in all required fields.",
      }, { status: 400 })
    }

    console.log("📋 Form data:", { name, email, company, serviceType })

    // Log the submission
    console.log("📞 NEW CONTACT SUBMISSION:", {
      name,
      email,
      phone,
      company,
      serviceType,
      challenge: challenge.substring(0, 100) + "...",
      source,
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json({
      success: true,
      message: `Thank you ${name}! We've received your enquiry and will get back to you within 24 hours.`,
      database: false,
    })

  } catch (error: any) {
    console.error("❌ Contact API error:", error)
    return NextResponse.json({
      success: false,
      message: "Sorry, there was an error submitting your form. Please try again or contact us directly.",
    }, { status: 500 })
  }
} 