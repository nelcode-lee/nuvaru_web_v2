import { NextRequest, NextResponse } from "next/server"

const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY

export async function POST(request: NextRequest) {
  try {
    const { url } = await request.json()
    if (!url || typeof url !== "string" || !/^https?:\/\//.test(url)) {
      return NextResponse.json({ error: "Invalid URL" }, { status: 400 })
    }

    // Fetch the website HTML (basic, no headless browser)
    let html = ""
    try {
      const res = await fetch(url, { method: "GET" })
      html = await res.text()
    } catch (err) {
      return NextResponse.json({ error: "Failed to fetch website. Please check the URL." }, { status: 400 })
    }

    // AI prompt
    const prompt = `You are a website audit expert. Given the following website HTML, provide a rating from 1-10 and list 4 specific improvements for performance, conversions, or SEO. Be concise and actionable.\n\nWebsite HTML:\n${html.substring(0, 8000)}\n\nRespond in JSON with keys: rating (number), improvements (array of 4 strings).`

    if (!ANTHROPIC_API_KEY) {
      return NextResponse.json({ error: "Anthropic API key not set." }, { status: 500 })
    }

    // Call Anthropic Claude
    const anthropicRes = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': ANTHROPIC_API_KEY,
        'content-type': 'application/json',
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-3-haiku-20240307',
        max_tokens: 512,
        messages: [{ role: 'user', content: prompt }]
      })
    })

    if (!anthropicRes.ok) {
      const errText = await anthropicRes.text()
      return NextResponse.json({ error: `Anthropic API error: ${errText}` }, { status: 500 })
    }

    const data = await anthropicRes.json()
    // Claude's response is in data.content[0].text
    let aiText = data?.content?.[0]?.text || ""

    // Try to parse JSON from the AI's response
    let rating = null
    let improvements = []
    try {
      // Find the first JSON object in the response
      const match = aiText.match(/\{[\s\S]*\}/)
      if (match) {
        const parsed = JSON.parse(match[0])
        rating = parsed.rating
        improvements = parsed.improvements
      } else {
        throw new Error("No JSON found in AI response.")
      }
    } catch (err) {
      return NextResponse.json({ error: "Failed to parse AI response.\n" + aiText }, { status: 500 })
    }

    return NextResponse.json({
      url,
      rating,
      improvements
    })
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Server error" }, { status: 500 })
  }
} 