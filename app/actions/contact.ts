"use server"

import { neon } from "@neondatabase/serverless"

async function wakeUpDatabase(sql: any, maxRetries = 3) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      console.log(`[SERVER] Database wake-up attempt ${i + 1}/${maxRetries}`)
      await sql`SELECT 1`
      console.log("[SERVER] ✅ Database is awake")
      return true
    } catch (error) {
      console.log(`[SERVER] Database wake-up attempt ${i + 1} failed:`, error)
      if (i < maxRetries - 1) {
        console.log("[SERVER] Waiting 2 seconds before retry...")
        await new Promise((resolve) => setTimeout(resolve, 2000))
      }
    }
  }
  return false
}

export async function submitContactForm(formData: FormData) {
  const contactData = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    phone: formData.get("phone") as string,
    company: formData.get("company") as string,
    service_type: formData.get("service_type") as string,
    message: formData.get("message") as string,
  }

  console.log("[SERVER] === CONTACT FORM SUBMISSION ===")
  console.log("[SERVER] Contact data:", contactData)

  // Always log the contact submission
  console.log("[SERVER] 📧 NEW CONTACT SUBMISSION:")
  console.log("[SERVER] Name:", contactData.name)
  console.log("[SERVER] Email:", contactData.email)
  console.log("[SERVER] Phone:", contactData.phone)
  console.log("[SERVER] Company:", contactData.company)
  console.log("[SERVER] Service:", contactData.service_type)
  console.log("[SERVER] Message:", contactData.message)

  let databaseSuccess = false
  let emailSuccess = false

  // Try to save to database
  if (process.env.DATABASE_URL) {
    try {
      console.log("[SERVER] Attempting to save to database...")
      const sql = neon(process.env.DATABASE_URL)

      // Wake up the database first
      const isAwake = await wakeUpDatabase(sql)
      if (!isAwake) {
        throw new Error("Failed to wake up database after multiple attempts")
      }

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
  } else {
    console.log("[SERVER] ⚠️ No DATABASE_URL configured, contact logged to console")
  }

  // Try to send email notification
  if (process.env.RESEND_API_KEY) {
    try {
      console.log("[SERVER] Attempting to send email notification...")

      const baseUrl = process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : process.env.NODE_ENV === "development"
          ? "http://localhost:3000"
          : "https://nuvaru.com"

      const response = await fetch(`${baseUrl}/api/send-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactData),
      })

      if (response.ok) {
        console.log("[SERVER] ✅ Email notification sent successfully")
        emailSuccess = true
      } else {
        const errorData = await response.text()
        console.error("[SERVER] ❌ Email send failed:", errorData)
      }
    } catch (error) {
      console.error("[SERVER] ❌ Email send error:", error)
    }
  } else {
    console.log("[SERVER] ⚠️ No RESEND_API_KEY configured, email not sent")
  }

  console.log("[SERVER] === SUBMISSION SUMMARY ===")
  console.log("[SERVER] Database:", databaseSuccess ? "✅ Saved" : "❌ Failed")
  console.log("[SERVER] Email:", emailSuccess ? "✅ Sent" : "❌ Failed")
  console.log("[SERVER] Contact logged to console: ✅ Always")

  return {
    success: true,
    message: "Thank you for your message! We'll get back to you soon.",
    details: {
      database: databaseSuccess,
      email: emailSuccess,
      logged: true,
    },
  }
}
