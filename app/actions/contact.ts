"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function submitContactForm(prevState: any, formData: FormData) {
  try {
    console.log("=== CONTACT FORM SUBMISSION ===")

    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const company = formData.get("company") as string
    const phone = formData.get("phone") as string
    const serviceType = formData.get("serviceType") as string
    const challenge = formData.get("challenge") as string
    const source = formData.get("source") as string

    console.log("Form data:", { name, email, company, serviceType })

    if (!name || !email || !company || !challenge) {
      return {
        success: false,
        message: "Please fill in all required fields.",
      }
    }

    // Try to send with Resend
    if (process.env.RESEND_API_KEY) {
      try {
        const { data, error } = await resend.emails.send({
          from: "noreply@nuvaru.co.uk", // Use your verified domain
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
          throw new Error("Failed to send email via Resend")
        }

        console.log("✅ Email sent successfully:", data)
        return {
          success: true,
          message: "Thank you for your message! We'll be in touch within 24 hours.",
        }
      } catch (resendError) {
        console.error("Resend failed:", resendError)
      }
    }

    // Fallback: Log the submission
    console.log("📧 CONTACT FORM LOGGED:")
    console.log("Name:", name)
    console.log("Email:", email)
    console.log("Company:", company)
    console.log("Service:", serviceType)
    console.log("Message:", challenge)

    return {
      success: true,
      message:
        "Thank you for your message! We've received your enquiry and will be in touch soon. (Email logged to server)",
    }
  } catch (error) {
    console.error("Contact form error:", error)
    return {
      success: false,
      message:
        "Sorry, there was an error submitting your message. Please try again or contact us directly at info@nuvaru.co.uk",
    }
  }
}

export async function submitConsultationForm(prevState: any, formData: FormData) {
  // Similar implementation for consultation form
  return submitContactForm(prevState, formData)
}
