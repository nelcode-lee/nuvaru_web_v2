import { type NextRequest, NextResponse } from "next/server"

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

    // Call Anthropic Claude API with a system prompt
    const anthropicApiKey = process.env.ANTHROPIC_API_KEY
    if (!anthropicApiKey) {
      return NextResponse.json({ error: "Claude API key not set" }, { status: 500 })
    }

    const systemPrompt = `
You are Nuvaru's expert AI assistant, specializing in AI, automation, and business transformation for UK SMEs.
- Always use UK English spelling and phrasing.
- Our prices are low and typically structured around low capital investment and a monthly retainer, spreading the cost for clients.
- Provide clear, actionable, and practical advice in a friendly, professional, and concise tone.
- If asked about Nuvaru's services, explain them in detail and offer to connect the user with a human consultant if needed.
- If you don't know the answer, say so honestly and suggest how the user might find out.
- Never make up information or provide legal, medical, or financial advice.
- If asked about pricing, explain that solutions are tailored, highlight the low-cost structure, and offer to arrange a consultation.`;

    // Prepare messages for Claude API (no system message)
    const claudeMessages = messages.map(msg => ({
      role: msg.role === "user" ? "user" : "assistant",
      content: msg.content
    }))

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "x-api-key": anthropicApiKey,
        "anthropic-version": "2023-06-01",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        model: "claude-3-opus-20240229",
        max_tokens: 1024,
        system: systemPrompt,
        messages: claudeMessages
      }),
    })

    const data = await response.json()
    
    if (data?.content && data.content.length > 0) {
      const assistantMessage = data.content[0]
      return NextResponse.json({
        message: assistantMessage.text,
        timestamp: new Date().toISOString(),
      })
    } else {
      console.error("Claude API response:", data)
      return NextResponse.json({ error: data?.error?.message || "Claude API error" }, { status: 500 })
    }
  } catch (error) {
    console.error("Chat API error:", error)
    return NextResponse.json({ error: "Failed to process chat request" }, { status: 500 })
  }
}
