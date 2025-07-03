"use server"

import { neon } from "@neondatabase/serverless"

const sql = neon(process.env.DATABASE_URL!)

export async function submitContactForm(prevState: any, formData: FormData) {
  try {
    console.log("📝 Contact form submission started")

    // Extract form data with null checks
    const name = formData.get("name")?.toString() || ""
    const email = formData.get("email")?.toString() || ""
    const phone = formData.get("phone")?.toString() || ""
    const company = formData.get("company")?.toString() || ""
    const serviceType = formData.get("serviceType")?.toString() || ""
    const challenge = formData.get("challenge")?.toString() || ""
    const source = formData.get("source")?.toString() || ""

    // Validate required fields
    if (!name || !email || !company || !challenge) {
      console.log("❌ Missing required fields")
      return {
        success: false,
        message: "Please fill in all required fields.",
      }
    }

    console.log("📋 Form data:", { name, email, company, serviceType })

    // Always log the contact submission
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

    // Try to save to database with retry logic
    let dbSaved = false
    for (let attempt = 1; attempt <= 3; attempt++) {
      try {
        console.log(`💾 Database save attempt ${attempt}/3`)

        await sql`
          INSERT INTO contact_submissions (
            name, email, phone, company, service_type, message, source, status, created_at
          ) VALUES (
            ${name}, ${email}, ${phone}, ${company}, ${serviceType}, ${challenge}, ${source}, 'new', NOW()
          )
        `

        console.log("✅ Contact saved to database successfully")
        dbSaved = true
        break
      } catch (dbError: any) {
        console.log(`❌ Database attempt ${attempt} failed:`, dbError.message)

        if (attempt === 3) {
          console.log("❌ All database attempts failed, but continuing...")
        } else {
          // Wait before retry (database might be sleeping)
          await new Promise((resolve) => setTimeout(resolve, 2000))
        }
      }
    }

    // Try to send email notification (non-blocking)
    try {
      console.log("📧 Attempting to send email notification")

      const emailResponse = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/api/send-email`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            phone,
            company,
            serviceType,
            challenge,
            source,
          }),
        },
      )

      if (emailResponse.ok) {
        console.log("✅ Email notification sent successfully")
      } else {
        const errorText = await emailResponse.text()
        console.log("❌ Email notification failed:", errorText)
      }
    } catch (emailError: any) {
      console.log("❌ Email notification error:", emailError.message)
    }

    // Return success regardless of email status
    return {
      success: true,
      message: `Thank you ${name}! We've received your enquiry and will get back to you within 24 hours.`,
    }
  } catch (error: any) {
    console.error("❌ Contact form error:", error)
    return {
      success: false,
      message: "Sorry, there was an error submitting your form. Please try again or contact us directly.",
    }
  }
}
