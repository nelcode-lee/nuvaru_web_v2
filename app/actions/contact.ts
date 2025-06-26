"use server"

import { Resend } from "resend"
import { neon } from "@neondatabase/serverless"
import { headers } from "next/headers"
import { redirect } from "next/navigation"

const resend = new Resend(process.env.RESEND_API_KEY)

function getClientIP(headersList: Headers): string {
  const forwarded = headersList.get("x-forwarded-for")
  const realIP = headersList.get("x-real-ip")
  return forwarded?.split(",")[0] || realIP || "unknown"
}

export async function submitContactForm(formData: FormData) {
  try {
    console.log("=== CONTACT FORM SUBMISSION ===")

    const headersList = await headers()
    const clientIP = getClientIP(headersList)
    const userAgent = headersList.get("user-agent") || "unknown"

    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const company = formData.get("company") as string
    const serviceType = formData.get("serviceType") as string
    const message = formData.get("message") as string

    console.log("Form data:", { name, email, company, serviceType })

    // Validate required fields
    if (!name || !email || !message) {
      return {
        success: false,
        message: "Name, email, and message are required",
      }
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return {
        success: false,
        message: "Please enter a valid email address",
      }
    }

    // Check if DATABASE_URL exists
    if (!process.env.DATABASE_URL) {
      console.error("DATABASE_URL not found")
      return {
        success: false,
        message: "Database not configured. Please contact us directly at info@nuvaru.co.uk",
      }
    }

    const sql = neon(process.env.DATABASE_URL)

    // Insert into database
    try {
      const result = await sql`
        INSERT INTO contact_submissions (
          name, 
          email, 
          phone, 
          company, 
          service_type, 
          message,
          ip_address, 
          user_agent,
          created_at
        ) VALUES (
          ${name}, 
          ${email}, 
          ${phone || null}, 
          ${company || null}, 
          ${serviceType || "General Inquiry"}, 
          ${message},
          ${clientIP}, 
          ${userAgent},
          NOW()
        )
        RETURNING id
      `

      console.log("✅ Contact stored in database successfully with ID:", result[0]?.id)
    } catch (dbError) {
      console.error("Database storage failed:", dbError)
      return {
        success: false,
        message:
          "Sorry, there was an error storing your message. Please try again or contact us directly at info@nuvaru.co.uk",
      }
    }

    // Try to send email notification (secondary - not critical)
    if (process.env.RESEND_API_KEY) {
      try {
        const { data, error } = await resend.emails.send({
          from: "onboarding@resend.dev",
          to: ["info@nuvaru.co.uk"],
          subject: `New Contact Form Submission from ${name}${company ? ` - ${company}` : ""}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Company:</strong> ${company || "Not provided"}</p>
            <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
            <p><strong>Service Interest:</strong> ${serviceType || "General Inquiry"}</p>
            <hr>
            <h3>Message:</h3>
            <div style="background: #f9f9f9; padding: 15px; border-left: 4px solid #007acc; border-radius: 4px;">
              ${message.replace(/\n/g, "<br>")}
            </div>
            <hr>
            <p><small>Submitted at: ${new Date().toLocaleString("en-GB", { timeZone: "Europe/London" })}</small></p>
            <p><small>IP: ${clientIP}</small></p>
            <p><small>User Agent: ${userAgent}</small></p>
          `,
          reply_to: email,
        })

        if (error) {
          console.error("Resend error:", error)
        } else {
          console.log("✅ Email notification sent successfully:", data)
        }
      } catch (emailError) {
        console.error("Email sending failed:", emailError)
        // Don't fail the form submission if email fails
      }
    }

    // Redirect to success page
    redirect("/?success=true")
  } catch (error) {
    console.error("Contact form submission error:", error)
    return {
      success: false,
      message:
        "Sorry, there was an error submitting your enquiry. Please try again or contact us directly at info@nuvaru.co.uk",
    }
  }
}

export async function submitConsultationForm(formData: FormData) {
  return submitContactForm(formData)
}
