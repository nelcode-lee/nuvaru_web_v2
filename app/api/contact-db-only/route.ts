import { type NextRequest, NextResponse } from "next/server"
import { neon } from "@neondatabase/serverless"

const sql = neon(process.env.DATABASE_URL!)

export async function POST(request: NextRequest) {
  try {
    console.log("📝 Database-only contact submission started")

    const body = await request.json()
    const { name, email, phone, company, serviceType, challenge, source } = body

    // Validate required fields
    if (!name || !email || !company || !challenge) {
      console.log("❌ Missing required fields")
      return NextResponse.json({
        success: false,
        message: "Please fill in all required fields.",
      }, { status: 400 })
    }

    console.log("📋 Form data:", { name, email, company, serviceType })

    // Save to database with retry logic
    let dbSaved = false
    for (let attempt = 1; attempt <= 3; attempt++) {
      try {
        console.log(`💾 Database save attempt ${attempt}/3`)

        const result = await sql`
          INSERT INTO contact_submissions (
            name, email, phone, company, service_type, message, source, status, created_at
          ) VALUES (
            ${name}, ${email}, ${phone || ""}, ${company}, ${serviceType || ""}, ${challenge}, ${source || ""}, 'new', NOW()
          ) RETURNING id, name, email, created_at
        `

        console.log("✅ Contact saved to database successfully")
        console.log("📊 Saved record:", result[0])
        dbSaved = true
        break
      } catch (dbError: any) {
        console.log(`❌ Database attempt ${attempt} failed:`, dbError.message)

        if (attempt === 3) {
          console.log("❌ All database attempts failed")
          return NextResponse.json({
            success: false,
            message: "Database error. Please try again later.",
          }, { status: 500 })
        } else {
          // Wait before retry (database might be sleeping)
          await new Promise((resolve) => setTimeout(resolve, 2000))
        }
      }
    }

    // Log the successful submission
    console.log("📞 NEW CONTACT SUBMISSION (DB ONLY):", {
      id: dbSaved ? "saved" : "failed",
      name,
      email,
      phone,
      company,
      serviceType,
      challenge: challenge.substring(0, 100) + "...",
      source,
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json({
      success: true,
      message: `Thank you ${name}! We've received your enquiry and will get back to you within 24 hours.`,
      database: dbSaved,
    })

  } catch (error: any) {
    console.error("❌ Contact API error:", error)
    return NextResponse.json({
      success: false,
      message: "Sorry, there was an error submitting your form. Please try again or contact us directly.",
    }, { status: 500 })
  }
} 