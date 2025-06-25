import { NextResponse } from "next/server"

export async function POST(request: Request) {
  console.log("=== EMAIL API ROUTE CALLED ===")

  try {
    const body = await request.json()
    console.log("Parsed body:", body)

    const { name, email, subject, message } = body

    if (!name || !email || !message) {
      console.log("❌ Validation failed - missing fields")
      return NextResponse.json({ error: "Name, email, and message are required" }, { status: 400 })
    }

    console.log("✅ Validation passed")
    console.log("Environment check - RESEND_API_KEY exists:", !!process.env.RESEND_API_KEY)

    if (process.env.RESEND_API_KEY) {
      console.log("🔄 Attempting Resend email...")

      try {
        const { Resend } = await import("resend")
        const resend = new Resend(process.env.RESEND_API_KEY)

        const emailData = {
          from: "Nuvaru Website <onboarding@resend.dev>",
          to: ["info@nuvaru.co.uk"],
          subject: subject || `New consultation request from ${name}`,
          html: `
            <h2>New Consultation Request</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject || "No subject provided"}</p>
            <hr>
            <h3>Message:</h3>
            <div style="background: #f9f9f9; padding: 15px; border-left: 4px solid #007acc;">
              ${message.replace(/\n/g, "<br>")}
            </div>
          `,
          reply_to: email,
        }

        console.log("📧 Sending email with data:", emailData)

        const result = await resend.emails.send(emailData)

        if (result.error) {
          console.error("❌ Resend API error:", result.error)
          throw new Error(`Resend error: ${JSON.stringify(result.error)}`)
        }

        console.log("✅ Email sent successfully via Resend:", result.data)
        return NextResponse.json({
          success: true,
          method: "resend",
          id: result.data?.id,
        })
      } catch (resendError) {
        console.error("❌ Resend failed:", resendError)
      }
    }

    console.log("📧 EMAIL LOGGED (would be sent to info@nuvaru.co.uk):")
    console.log("From:", name, "<" + email + ">")
    console.log("Subject:", subject || "No subject provided")
    console.log("Message:", message)

    return NextResponse.json({
      success: true,
      method: "logged",
      message: "Email logged successfully",
    })
  } catch (error) {
    console.error("❌ Email API error:", error)
    return NextResponse.json({ error: "Failed to process email request" }, { status: 500 })
  }
}
