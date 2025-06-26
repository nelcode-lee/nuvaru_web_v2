import { type NextRequest, NextResponse } from "next/server"

// Simple response generator without external API calls
function generateAgentResponse(userMessage: string): string {
  const message = userMessage.toLowerCase()

  if (message.includes("hello") || message.includes("hi") || message.includes("hey")) {
    return "Hello! I'm Nuvaru's AI assistant. We're based in Hull, UK and help businesses transform with AI. How can I help you today?"
  }

  if (message.includes("service")) {
    return "We offer AI Readiness Assessment, Custom AI Solutions, Process Automation, Data Analysis, GDPR Compliance, and AI Training. Which service interests you most?"
  }

  if (message.includes("consultation") || message.includes("book")) {
    return "Great! We offer free 30-minute consultations. Visit /book-consultation to schedule yours. What specific AI challenges are you facing?"
  }

  return "I'm here to help with questions about Nuvaru's AI services. We're based in Hull, UK and specialize in AI transformation for businesses. What would you like to know?"
}

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json()

    const lastMessage = messages[messages.length - 1]
    const userMessage = lastMessage?.content || ""

    const responseText = generateAgentResponse(userMessage)

    return NextResponse.json({ message: responseText })
  } catch (error) {
    console.error("Chat API error:", error)
    return NextResponse.json(
      {
        error: "I'm having trouble responding right now. Please contact us directly at lee@nuvaru.co.uk",
      },
      { status: 500 },
    )
  }
}
