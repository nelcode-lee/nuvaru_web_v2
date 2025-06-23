import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, email, and message are required" }, { status: 400 })
    }

    // Send the actual email using Resend
    const { data, error } = await resend.emails.send({
      from: "Nuvaru Website <website@nuvaru.co.uk>",
      to: ["info@nuvaru.co.uk"],
      subject: subject || `New message from ${name}`,
      html: `
    <h3>New message from Nuvaru website</h3>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Subject:</strong> ${subject || "No subject"}</p>
    <p><strong>Message:</strong></p>
    <p>${message.replace(/\n/g, "<br>")}</p>
  `,
      reply_to: email,
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
    }

    // Remove or comment out the console.log section since we're now sending real emails.
    // console.log(`
    // ----- EMAIL TO: info@nuvaru.co.uk -----
    // From: ${name} <${email}>
    // Subject: ${subject || "New message from Nuvaru website"}

    // ${message}
    // ----- END EMAIL -----
    // `)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}
