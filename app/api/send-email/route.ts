import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

// Only create Resend instance if API key is available
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

export async function POST(request: NextRequest) {
  try {
    console.log("📧 Email API called")

    const body = await request.json()
    const { name, email, phone, company, serviceType, challenge, source } = body

    console.log("📧 Sending email for:", { name, email, company })

    if (!resend) {
      console.error("❌ Resend not configured")
      return NextResponse.json({ error: "Email service not configured" }, { status: 500 })
    }

    // Send email using verified Resend domain
    const { data, error } = await resend.emails.send({
      from: "Nuvaru Contact Form <onboarding@resend.dev>",
      to: ["info@nuvaru.co.uk"],
      replyTo: email,
      subject: `New Contact Form Submission from ${name} at ${company}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e40af; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
            <p><strong>Company:</strong> ${company}</p>
            <p><strong>Service Interest:</strong> ${serviceType || "Not specified"}</p>
            <p><strong>How they heard about us:</strong> ${source || "Not specified"}</p>
          </div>

          <div style="background-color: #fef3c7; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #92400e; margin-top: 0;">Project Details</h3>
            <p style="white-space: pre-wrap;">${challenge}</p>
          </div>

          <div style="background-color: #e0f2fe; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; color: #0369a1;">
              <strong>Next Steps:</strong> Reply to this email to respond directly to ${name} at ${email}
            </p>
          </div>

          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
          <p style="color: #6b7280; font-size: 14px;">
            This email was sent from the Nuvaru website contact form on ${new Date().toLocaleString("en-GB", { timeZone: "Europe/London" })}
          </p>
        </div>
      `,
    })

    if (error) {
      console.error("❌ Resend error:", error)
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
    }

    console.log("✅ Email sent successfully:", data?.id)
    return NextResponse.json({ success: true, id: data?.id })
  } catch (error: any) {
    console.error("❌ Email API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
