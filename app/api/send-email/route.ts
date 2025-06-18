import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, email, and message are required" }, { status: 400 })
    }

    // In a production environment, you would use an email service like Resend, SendGrid, etc.
    // For now, we'll log the email that would be sent
    console.log(`
----- EMAIL TO: ontario2801@gmail.com -----
From: ${name} <${email}>
Subject: ${subject || "New message from Nuvaru website"}

${message}
----- END EMAIL -----
    `)

    // In production, you would send the actual email here
    // Example with Resend:
    /*
    const { data, error } = await resend.emails.send({
      from: 'Nuvaru Website <website@nuvaru.co.uk>',
      to: ['ontario2801@gmail.com'],
      subject: subject || `New message from ${name}`,
      text: message,
      reply_to: email,
    });
    */

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}
