import { type NextRequest, NextResponse } from "next/server"
import { getResponseForQuery } from "@/lib/site-content"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { messages } = body

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: "Messages array is required" }, { status: 400 })
    }

    // Get the last user message
    const lastMessage = messages[messages.length - 1]
    const userQuery = lastMessage?.content || ""

    if (!userQuery.trim()) {
      return NextResponse.json({ error: "Message content is required" }, { status: 400 })
    }

    // Get contextual response based on site content
    const response = getResponseForQuery(userQuery)

    return NextResponse.json({
      message: response,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error("Chat API error:", error)
    return NextResponse.json({ error: "Failed to process chat request" }, { status: 500 })
  }
}
