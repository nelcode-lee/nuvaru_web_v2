import { type NextRequest, NextResponse } from "next/server"
import { cookies } from "next/headers"

// Simple in-memory rate limiting (in production, use Redis or similar)
const loginAttempts = new Map<string, { count: number; lastAttempt: number }>()

const MAX_LOGIN_ATTEMPTS = 5
const LOCKOUT_DURATION = 15 * 60 * 1000 // 15 minutes

export async function POST(request: NextRequest) {
  try {
    console.log("=== LOGIN REQUEST ===")

    const body = await request.json()
    const { username, password } = body

    console.log("Login attempt for username:", username)

    // Rate limiting check
    const clientIP = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'
    const now = Date.now()
    const attempts = loginAttempts.get(clientIP)

    if (attempts && attempts.count >= MAX_LOGIN_ATTEMPTS) {
      const timeSinceLastAttempt = now - attempts.lastAttempt
      if (timeSinceLastAttempt < LOCKOUT_DURATION) {
        console.log("❌ Rate limit exceeded for IP:", clientIP)
        return NextResponse.json(
          { 
            success: false, 
            error: "Too many login attempts. Please try again in 15 minutes." 
          }, 
          { status: 429 }
        )
      } else {
        // Reset attempts after lockout period
        loginAttempts.delete(clientIP)
      }
    }

    const adminUsername = process.env.ADMIN_USERNAME || "admin"
    const adminPassword = process.env.ADMIN_PASSWORD || "nuvaru2024!"

    console.log("Expected username:", adminUsername)
    console.log("Expected password exists:", !!adminPassword)

    if (username === adminUsername && password === adminPassword) {
      console.log("✅ Login successful")

      // Reset login attempts on successful login
      loginAttempts.delete(clientIP)

      // Set secure session cookie
      const cookieStore = await cookies()
      const sessionId = generateSessionId()
      
      cookieStore.set("admin-session", sessionId, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        path: "/",
        maxAge: 60 * 60 * 24, // 24 hours
      })

      // Set additional security cookie
      cookieStore.set("admin-timestamp", now.toString(), {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        path: "/",
        maxAge: 60 * 60 * 60 * 24, // 24 hours
      })

      console.log("Session cookies set successfully")

      return NextResponse.json({ 
        success: true,
        message: "Login successful"
      })
    } else {
      console.log("❌ Invalid credentials")

      // Increment failed attempts
      const currentAttempts = loginAttempts.get(clientIP) || { count: 0, lastAttempt: 0 }
      loginAttempts.set(clientIP, {
        count: currentAttempts.count + 1,
        lastAttempt: now
      })

      return NextResponse.json(
        { 
          success: false, 
          error: "Invalid username or password" 
        }, 
        { status: 401 }
      )
    }
  } catch (error) {
    console.error("Login error:", error)
    return NextResponse.json(
      { success: false, error: "Server error" }, 
      { status: 500 }
    )
  }
}

function generateSessionId(): string {
  return Math.random().toString(36).substring(2, 15) + 
         Math.random().toString(36).substring(2, 15) +
         Date.now().toString(36)
}
