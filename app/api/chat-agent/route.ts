import { type NextRequest, NextResponse } from "next/server"
import { getResponseForQuery } from "@/lib/site-content"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { messages } = body

    console.log("Chat agent received:", { messages })

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: "Messages array is required" }, { status: 400 })
    }

    // Get the last user message
    const lastMessage = messages[messages.length - 1]
    const userQuery = lastMessage?.content || ""

    if (!userQuery.trim()) {
      return NextResponse.json({ error: "Message content is required" }, { status: 400 })
    }

    console.log("Processing query:", userQuery)

    // Get contextual response based on site content
    const response = getResponseForQuery(userQuery)

    console.log("Generated response:", response)

    return NextResponse.json({
      message: response,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error("Chat agent error:", error)
    return NextResponse.json({ error: "Failed to process chat request" }, { status: 500 })
  }
}
