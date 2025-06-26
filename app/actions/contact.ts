"use server"

import { Resend } from "resend"
import { neon } from "@neondatabase/serverless"
import { redirect } from "next/navigation"
import { headers } from "next/headers"

const resend = new Resend(process.env.RESEND_API_KEY)
const sql = neon(process.env.DATABASE_URL!)

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
    const company = formData.get("company") as string
    const phone = formData.get("phone") as string
    const serviceType = formData.get("service-type") as string
    const challenge = formData.get("challenge") as string
    const source = formData.get("source") as string

    console.log("Form data:", { name, email, company, serviceType })

    // Input validation
    if (!name || !email || !company || !challenge) {
      return {
        success: false,
        message: "Please fill in all required fields.",
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

    // Check if Resend API key exists
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY not found")
      return {
        success: false,
        message: "Email service not configured. Please contact us directly at info@nuvaru.co.uk",
      }
    }

    try {
      const { data, error } = await resend.emails.send({
        from: "onboarding@resend.dev", // Use Resend's default domain
        to: ["info@nuvaru.co.uk"],
        subject: `New Contact Form Submission from ${name} - ${company}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company}</p>
          <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
          <p><strong>Service Interest:</strong> ${serviceType || "Not specified"}</p>
          <p><strong>How they heard about us:</strong> ${source || "Not specified"}</p>
          <hr>
          <h3>Message:</h3>
          <div style="background: #f9f9f9; padding: 15px; border-left: 4px solid #007acc;">
            ${challenge.replace(/\n/g, "<br>")}
          </div>
          <hr>
          <p><small>Submitted at: ${new Date().toLocaleString("en-GB")}</small></p>
        `,
        reply_to: email,
      })

      if (error) {
        console.error("Resend error:", error)
        throw new Error(`Resend error: ${JSON.stringify(error)}`)
      }

      console.log("✅ Email sent successfully:", data)

      // Insert into database with security info
      await sql`
        INSERT INTO contact_submissions (
          name, 
          email, 
          phone, 
          company, 
          service_type, 
          source, 
          challenge,
          ip_address, 
          user_agent,
          created_at
        ) VALUES (
          ${name}, 
          ${email}, 
          ${phone}, 
          ${company}, 
          ${serviceType}, 
          ${source}, 
          ${challenge},
          ${clientIP}, 
          ${userAgent},
          NOW()
        )
      `

      // Redirect to thank you page or back to contact with success message
      redirect("/?submitted=true")
    } catch (emailError) {
      console.error("Email sending failed:", emailError)

      // Log the submission for manual follow-up
      console.log("📧 CONTACT FORM LOGGED (Email failed):")
      console.log("Name:", name)
      console.log("Email:", email)
      console.log("Company:", company)
      console.log("Service:", serviceType)
      console.log("Message:", challenge)

      return {
        success: false,
        message:
          "There was an issue sending your message. Please contact us directly at info@nuvaru.co.uk or try again later.",
      }
    }
  } catch (error) {
    console.error("Contact form error:", error)
    return {
      success: false,
      message: "Sorry, there was an error submitting your message. Please contact us directly at info@nuvaru.co.uk",
    }
  }
}

export async function submitConsultationForm(formData: FormData) {
  return submitContactForm(formData)
}
