"use server"

interface ContactFormData {
  name: string
  company: string
  email: string
  phone?: string
  serviceType: string
  challenge: string
  source?: string
}

interface ConsultationFormData {
  name: string
  company: string
  email: string
  phone?: string
  jobTitle: string
  primaryService: string
  currentChallenges: string
  timeframe?: string
  preferredTime?: string
  consultationType: string
}

export async function submitContactForm(formData: ContactFormData) {
  try {
    // In a real implementation, you would use a service like Resend, SendGrid, or Nodemailer
    // For now, we'll simulate the email sending

    const emailContent = `
New Contact Form Submission

Name: ${formData.name}
Company: ${formData.company}
Email: ${formData.email}
Phone: ${formData.phone || "Not provided"}
Service Type: ${formData.serviceType}
Challenge: ${formData.challenge}
Source: ${formData.source || "Not provided"}

---
Submitted from: Nuvaru Contact Form
    `.trim()

    // Here you would integrate with your email service
    // Example with fetch to a webhook or email service:
    /*
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'website@nuvaru.co.uk',
        to: 'ontario2801@gmail.com',
        subject: `New Contact Form Submission from ${formData.name}`,
        text: emailContent,
      }),
    })
    */

    // For now, log the submission (in production, this would be the actual email sending)
    console.log("Contact form submission for info@nuvaru.co.uk:", emailContent)

    return {
      success: true,
      message: "Thank you for your inquiry! We'll be in touch soon.",
    }
  } catch (error) {
    console.error("Error submitting contact form:", error)
    return {
      success: false,
      message:
        "Sorry, there was an error submitting your form. Please try again or email us directly at info@nuvaru.co.uk",
    }
  }
}

export async function submitConsultationForm(formData: ConsultationFormData) {
  try {
    const emailContent = `
New Consultation Booking Request

CONTACT INFORMATION:
Name: ${formData.name}
Job Title: ${formData.jobTitle}
Company: ${formData.company}
Email: ${formData.email}
Phone: ${formData.phone || "Not provided"}

SERVICE DETAILS:
Primary Service: ${formData.primaryService}
Current Challenges: ${formData.currentChallenges}
Implementation Timeframe: ${formData.timeframe || "Not specified"}

CONSULTATION PREFERENCES:
Preferred Time: ${formData.preferredTime || "Not specified"}
Consultation Type: ${formData.consultationType}

---
Submitted from: Nuvaru Consultation Booking Form
Please contact this prospect within 24 hours to schedule their consultation.
    `.trim()

    // Here you would integrate with your email service
    // Example with fetch to a webhook or email service:
    /*
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'website@nuvaru.co.uk',
        to: 'ontario2801@gmail.com',
        subject: `New Consultation Booking Request from ${formData.name} - ${formData.company}`,
        text: emailContent,
      }),
    })
    */

    // For now, log the submission (in production, this would be the actual email sending)
    console.log("Consultation booking for info@nuvaru.co.uk:", emailContent)

    return {
      success: true,
      message: "Thank you! We'll contact you within 24 hours to schedule your consultation.",
    }
  } catch (error) {
    console.error("Error submitting consultation form:", error)
    return {
      success: false,
      message:
        "Sorry, there was an error submitting your booking. Please try again or email us directly at info@nuvaru.co.uk",
    }
  }
}
