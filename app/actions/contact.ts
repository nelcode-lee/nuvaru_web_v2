"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function submitContactForm(formData: FormData) {
  return submitForm(formData, "Contact Form")
}

export async function submitConsultationForm(formData: FormData) {
  return submitForm(formData, "Consultation Form")
}

async function submitForm(formData: FormData, formType: string) {
  try {
    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "Nuvaru Website <website@nuvaru.co.uk>",
      to: ["info@nuvaru.co.uk"],
      subject: `New ${formType} from ${formData.get("name")}`,
      html: `
    <h3>New ${formType} from Nuvaru website</h3>
    <p><strong>Name:</strong> ${formData.get("name")}</p>
    <p><strong>Email:</strong> ${formData.get("email")}</p>
    <p><strong>Company:</strong> ${formData.get("company") || "Not provided"}</p>
    <p><strong>Phone:</strong> ${formData.get("phone") || "Not provided"}</p>
    <p><strong>Message:</strong></p>
    <p>${formData.get("message")?.toString().replace(/\n/g, "<br>")}</p>
  `,
      reply_to: formData.get("email") as string,
    })

    if (error) {
      console.error("Resend error:", error)
      throw new Error("Failed to send email")
    }

    return { message: "Thank you for your message! We will be in touch soon." }
  } catch (e: any) {
    return { message: "Failed to send message." }
  }
}
