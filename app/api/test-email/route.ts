import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function GET() {
  try {
    console.log("=== EMAIL TEST ===")
    console.log("RESEND_API_KEY exists:", !!process.env.RESEND_API_KEY)

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        {
          error: "RESEND_API_KEY not found in environment variables",
        },
        { status: 500 },
      )
    }

    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev", // Use Resend's default domain for testing
      to: ["info@nuvaru.co.uk"],
      subject: "Test Email from Nuvaru Website",
      html: `
        <h2>Test Email</h2>
        <p>This is a test email to verify the email functionality is working.</p>
        <p>Sent at: ${new Date().toLocaleString("en-GB")}</p>
        <hr>
        <p>If you receive this email, the email system is working correctly.</p>
      `,
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json(
        {
          error: "Failed to send email",
          details: error,
        },
        { status: 500 },
      )
    }

    console.log("✅ Test email sent successfully:", data)
    return NextResponse.json({
      success: true,
      message: "Test email sent successfully",
      data,
    })
  } catch (error) {
    console.error("Test email error:", error)
    return NextResponse.json(
      {
        error: "Failed to send test email",
        details: error,
      },
      { status: 500 },
    )
  }
}
