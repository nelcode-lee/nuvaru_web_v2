import { getSiteContent } from "@/lib/site-content"

// Simple AI response system without external API calls
function generateResponse(userMessage: string, siteContent: any): string {
  const message = userMessage.toLowerCase()

  // Service-related responses
  if (message.includes("service") || message.includes("what do you do")) {
    return `Nuvaru offers comprehensive AI transformation services including:

• **AI Readiness Assessment** - Evaluate your current systems and AI potential
• **Custom AI Solutions** - Bespoke AI implementations for your business
• **Process Automation** - Streamline operations and reduce manual work
• **Data Analysis & Optimization** - Transform data into actionable insights
• **GDPR Compliance Solutions** - Ensure data protection compliance
• **AI Implementation Training** - Get your team up to speed

We're based in Hull, UK and serve businesses nationwide. Would you like to book a free 30-minute consultation to discuss your specific needs?`
  }

  // Case study responses
  if (message.includes("case study") || message.includes("example") || message.includes("results")) {
    return `Here are some of our proven results:

🚛 **Transport Manager AI** (Logistics)
- 40% reduction in fuel costs
- 25% improvement in delivery times
- 60% reduction in manual planning time

🎧 **Customer Service Agent** (Support)
- 85% reduction in response time
- 70% of queries resolved automatically
- 95% customer satisfaction rate

🌱 **Sustainability Compliance Assistant** (Environmental)
- 35% reduction in carbon footprint
- 90% automation of compliance reporting

These are real results from UK businesses. Ready to see what AI can do for your organisation?`
  }

  // Pricing responses
  if (message.includes("price") || message.includes("cost") || message.includes("how much")) {
    return `Our pricing varies based on your specific requirements and project scope. We focus on delivering measurable ROI rather than one-size-fits-all pricing.

**What we offer:**
- FREE 30-minute consultation to understand your needs
- Custom quotes based on your requirements
- Flexible payment terms
- ROI-focused pricing with measurable outcomes

The best way to get accurate pricing is to book a free consultation where we can discuss your specific needs and provide a tailored quote. Would you like me to help you schedule that?`
  }

  // Location/contact responses
  if (message.includes("where") || message.includes("location") || message.includes("contact")) {
    return `**Nuvaru is based in Hull, UK** 🇬🇧

We serve businesses across the United Kingdom, from our base in Hull. While we're locally rooted, we work with clients nationwide.

**Get in touch:**
- 📧 Email: lee@nuvaru.co.uk
- 💬 Book a free consultation through our website
- 🌐 Based in Hull, serving the UK

We'd love to discuss how AI can transform your business. Ready to book that free 30-minute consultation?`
  }

  // Consultation booking
  if (message.includes("consultation") || message.includes("book") || message.includes("meeting")) {
    return `Excellent! I'd love to help you book a **free 30-minute consultation** with our AI experts.

**What you'll get:**
- Assessment of your current systems
- Discussion of AI opportunities for your business
- Custom recommendations
- No obligation - completely free

**Next steps:**
1. Visit our booking page: /book-consultation
2. Choose a time that works for you
3. We'll send you a calendar invite
4. Come prepared with questions about your business challenges

Our consultations are designed to give you real value, whether you work with us or not. Ready to get started?`
  }

  // Default response
  return `Hello! I'm Nuvaru's AI assistant. We're a UK-based AI transformation consultancy located in Hull, helping businesses leverage AI to drive efficiency and growth.

**I can help you with:**
- Information about our AI services
- Case studies and proven results
- Booking a free consultation
- Pricing and project discussions
- Technical questions about AI implementation

**Popular questions:**
- "What services do you offer?"
- "Can you show me some case studies?"
- "How much does AI implementation cost?"
- "How do I book a consultation?"

What would you like to know about AI transformation for your business?`
}

export async function POST(req: Request) {
  try {
    const { messages } = await req.json()

    // Get the last user message
    const lastMessage = messages[messages.length - 1]
    const userMessage = lastMessage?.content || ""

    // Get site content
    const siteContent = getSiteContent()

    // Generate response
    const responseText = generateResponse(userMessage, siteContent)

    // Return a simple text response
    return new Response(responseText, {
      headers: {
        "Content-Type": "text/plain",
      },
    })
  } catch (error) {
    console.error("Error in chat API:", error)
    return new Response(
      "I'm having trouble responding right now. Please contact us directly at lee@nuvaru.co.uk or try again in a moment.",
      {
        status: 500,
        headers: {
          "Content-Type": "text/plain",
        },
      },
    )
  }
}
