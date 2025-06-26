import { type NextRequest, NextResponse } from "next/server"
import { cookies } from "next/headers"
import bcrypt from "bcryptjs"
import { randomBytes } from "crypto"

// Rate limiting store (in production, use Redis)
const loginAttempts = new Map<string, { count: number; lastAttempt: number }>()

// Security configuration
const MAX_LOGIN_ATTEMPTS = 5
const LOCKOUT_DURATION = 15 * 60 * 1000 // 15 minutes
const SESSION_DURATION = 2 * 60 * 60 * 1000 // 2 hours

// Get client IP
function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for")
  const realIP = request.headers.get("x-real-ip")
  return forwarded?.split(",")[0] || realIP || "unknown"
}

// Check rate limiting
function isRateLimited(ip: string): boolean {
  const attempts = loginAttempts.get(ip)
  if (!attempts) return false

  const now = Date.now()
  if (now - attempts.lastAttempt > LOCKOUT_DURATION) {
    loginAttempts.delete(ip)
    return false
  }

  return attempts.count >= MAX_LOGIN_ATTEMPTS
}

// Record failed attempt
function recordFailedAttempt(ip: string) {
  const now = Date.now()
  const attempts = loginAttempts.get(ip) || { count: 0, lastAttempt: now }

  if (now - attempts.lastAttempt > LOCKOUT_DURATION) {
    attempts.count = 1
  } else {
    attempts.count++
  }

  attempts.lastAttempt = now
  loginAttempts.set(ip, attempts)
}

// Validate environment variables
function validateCredentials() {
  const username = process.env.ADMIN_USERNAME
  const password = process.env.ADMIN_PASSWORD

  if (!username || !password) {
    throw new Error("Admin credentials not configured")
  }

  if (password.length < 8) {
    throw new Error("Admin password must be at least 8 characters")
  }

  return { username, password }
}

// Timing-safe string comparison
function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) {
    return false
  }

  let result = 0
  for (let i = 0; i < a.length; i++) {
    result |= a.charCodeAt(i) ^ b.charCodeAt(i)
  }

  return result === 0
}

export async function POST(request: NextRequest) {
  try {
    const clientIP = getClientIP(request)

    // Check rate limiting
    if (isRateLimited(clientIP)) {
      return NextResponse.json({ error: "Too many failed attempts. Please try again later." }, { status: 429 })
    }

    const { username, password } = await request.json()

    // Input validation
    if (!username || !password) {
      recordFailedAttempt(clientIP)
      return NextResponse.json({ error: "Username and password required" }, { status: 400 })
    }

    // Validate credentials from environment
    const { username: adminUsername, password: adminPassword } = validateCredentials()

    // Hash the stored password if it's not already hashed
    let hashedPassword = adminPassword
    if (!adminPassword.startsWith("$2a$")) {
      hashedPassword = await bcrypt.hash(adminPassword, 12)
      console.warn("Admin password should be pre-hashed in production")
    }

    // Verify credentials with timing-safe comparison
    const usernameMatch = timingSafeEqual(username, adminUsername)
    const passwordMatch = await bcrypt.compare(password, hashedPassword)

    if (usernameMatch && passwordMatch) {
      // Generate secure session token
      const sessionToken = randomBytes(32).toString("hex")
      const sessionExpiry = Date.now() + SESSION_DURATION

      // Set secure session cookie
      const cookieStore = await cookies()
      cookieStore.set("admin-session", sessionToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: SESSION_DURATION / 1000,
        path: "/admin",
      })

      // Store session data (in production, use Redis/database)
      // For now, we'll use a simple in-memory store
      if (typeof global !== "undefined") {
        global.adminSessions = global.adminSessions || new Map()
        global.adminSessions.set(sessionToken, {
          ip: clientIP,
          userAgent: request.headers.get("user-agent"),
          loginTime: Date.now(),
          expiresAt: sessionExpiry,
        })
      }

      // Clear failed attempts on successful login
      loginAttempts.delete(clientIP)

      // Log successful login (in production, use proper logging)
      console.log(`Admin login successful from IP: ${clientIP}`)

      return NextResponse.json({ success: true })
    } else {
      recordFailedAttempt(clientIP)

      // Log failed attempt
      console.warn(`Failed admin login attempt from IP: ${clientIP}, Username: ${username}`)

      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 })
    }
  } catch (error) {
    console.error("Login error:", error)
    return NextResponse.json({ error: "Login failed" }, { status: 500 })
  }
}
