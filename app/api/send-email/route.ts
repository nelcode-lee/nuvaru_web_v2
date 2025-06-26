import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    console.log("[SERVER] === EMAIL SEND REQUEST ===")

    if (!process.env.RESEND_API_KEY) {
      console.log("[SERVER] ⚠️ No RESEND_API_KEY configured")
      return NextResponse.json({ error: "Email service not configured" }, { status: 500 })
    }

    const { name, email, phone, company, service_type, message } = await request.json()

    console.log("[SERVER] Sending email for contact:", { name, email, service_type })

    const emailContent = `
New Contact Form Submission

Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}
Company: ${company || "Not provided"}
Service Interest: ${service_type || "Not specified"}

Message:
${message}

---
Submitted at: ${new Date().toISOString()}
    `.trim()

    const { data, error } = await resend.emails.send({
      from: "noreply@nuvaru.com",
      to: ["info@nuvaru.com"],
      subject: `New Contact Form Submission from ${name}`,
      text: emailContent,
    })

    if (error) {
      console.error("[SERVER] ❌ Resend error:", error)
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
    }

    console.log("[SERVER] ✅ Email sent successfully:", data)
    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error("[SERVER] ❌ Email send error:", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}
