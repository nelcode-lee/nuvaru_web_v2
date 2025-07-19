import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"
import { ContactStorage } from "@/lib/contact-storage"

// Only create Resend instance if API key is available
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

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

    // Save to local storage
    const savedSubmission = ContactStorage.saveSubmission({
      name: contactData.name,
      email: contactData.email,
      phone: contactData.phone,
      company: contactData.company,
      service_type: contactData.service_type,
      message: contactData.message,
      source: contactData.source,
      ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown',
      userAgent: request.headers.get('user-agent') || 'unknown',
    })

    // Send email notification if Resend is configured
    if (resend) {
      try {
        console.log("[SERVER] 📧 Sending email notification")
        
        const { data, error } = await resend.emails.send({
          from: "Nuvaru Contact Form <onboarding@resend.dev>",
          to: ["info@nuvaru.co.uk"],
          replyTo: contactData.email,
          subject: `New Contact Form Submission from ${contactData.name} at ${contactData.company}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #1e40af; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">
                New Contact Form Submission
              </h2>
              
              <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="color: #374151; margin-top: 0;">Contact Information</h3>
                <p><strong>Name:</strong> ${contactData.name}</p>
                <p><strong>Email:</strong> ${contactData.email}</p>
                <p><strong>Phone:</strong> ${contactData.phone || "Not provided"}</p>
                <p><strong>Company:</strong> ${contactData.company}</p>
                <p><strong>Service Interest:</strong> ${contactData.service_type || "Not specified"}</p>
              </div>

              <div style="background-color: #fef3c7; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="color: #92400e; margin-top: 0;">Message</h3>
                <p style="white-space: pre-wrap;">${contactData.message}</p>
              </div>

              <div style="background-color: #e0f2fe; padding: 15px; border-radius: 8px; margin: 20px 0;">
                <p style="margin: 0; color: #0369a1;">
                  <strong>Next Steps:</strong> Reply to this email to respond directly to ${contactData.name} at ${contactData.email}
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
          console.error("[SERVER] ❌ Email notification failed:", error)
        } else {
          console.log("[SERVER] ✅ Email notification sent successfully:", data?.id)
        }
      } catch (emailError) {
        console.error("[SERVER] ❌ Email notification error:", emailError)
      }
    } else {
      console.log("[SERVER] ⚠️ Email service not configured - contact submission logged only")
    }

    return NextResponse.json({
      success: true,
      message: "Contact submission received and logged",
      emailSent: !!resend,
    })
  } catch (error) {
    console.error("[SERVER] ❌ Contact API error:", error)
    return NextResponse.json({ error: "Failed to process contact" }, { status: 500 })
  }
}
