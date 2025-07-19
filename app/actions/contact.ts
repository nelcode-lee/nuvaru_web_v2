"use server"

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

    // Database removed - log submission only
    console.log("📝 Contact submission logged (database removed)")

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
