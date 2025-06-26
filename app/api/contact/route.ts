import { NextResponse } from "next/server"
import { neon } from "@neondatabase/serverless"

const sql = neon(process.env.DATABASE_URL!)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, company, phone, serviceType, challenge, source } = body

    if (!name || !email || !company || !challenge) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Insert into database
    await sql`
      INSERT INTO contact_submissions (name, email, company, phone, service_type, challenge, source)
      VALUES (${name}, ${email}, ${company}, ${phone || null}, ${serviceType || null}, ${challenge}, ${source || null})
    `

    return NextResponse.json({
      success: true,
      message: "Thank you for your message! We'll be in touch within 24 hours.",
    })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Failed to submit form" }, { status: 500 })
  }
}
