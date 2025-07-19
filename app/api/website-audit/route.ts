import { NextRequest, NextResponse } from "next/server";

const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;

export async function POST(request: NextRequest) {
  try {
    console.log("[AUDIT] Start audit request");
    const { url } = await request.json();
    if (!url || typeof url !== "string" || !/^https?:\/\//.test(url)) {
      console.log("[AUDIT] Invalid URL");
      return NextResponse.json({ error: "Invalid URL" }, { status: 400 });
    }

    // Fetch the website HTML with timeout
    let html = "";
    try {
      console.log("[AUDIT] Fetching website HTML:", url);
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout
      const res = await fetch(url, { 
        method: "GET",
        signal: controller.signal,
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; WebsiteAudit/1.0)'
        }
      });
      clearTimeout(timeoutId);
      if (!res.ok) {
        console.log("[AUDIT] Failed to fetch website. Status:", res.status);
        return NextResponse.json({ error: "Failed to fetch website. Please check the URL." }, { status: 400 });
      }
      html = await res.text();
      console.log("[AUDIT] Website HTML fetched. Length:", html.length);
    } catch (err) {
      if ((err as any).name === 'AbortError') {
        console.log("[AUDIT] Website fetch timed out");
        return NextResponse.json({ error: "Website took too long to load. Please try again." }, { status: 408 });
      }
      console.log("[AUDIT] Error fetching website:", err);
      return NextResponse.json({ error: "Failed to fetch website. Please check the URL." }, { status: 400 });
    }

    // Clean and reduce HTML content for faster processing
    const cleanHtml = html
      .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '') // Remove scripts
      .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '') // Remove styles
      .replace(/<!--[\s\S]*?-->/g, '') // Remove comments
      .replace(/\s+/g, ' ') // Normalize whitespace
      .trim();
    console.log("[AUDIT] HTML cleaned. Length:", cleanHtml.length);

    // Extract key elements for faster analysis
    const titleMatch = cleanHtml.match(/<title[^>]*>([^<]*)<\/title>/i);
    const metaMatches = cleanHtml.match(/<meta[^>]*>/gi) || [];
    const headingMatches = cleanHtml.match(/<h[1-6][^>]*>([^<]*)<\/h[1-6]>/gi) || [];
    const linkMatches = cleanHtml.match(/<a[^>]*>([^<]*)<\/a>/gi) || [];
    const imgMatches = cleanHtml.match(/<img[^>]*>/gi) || [];

    // Create a summary for faster processing
    const htmlSummary = `\nTitle: ${titleMatch ? titleMatch[1] : 'Not found'}\nMeta tags: ${metaMatches.length}\nHeadings: ${headingMatches.length}\nLinks: ${linkMatches.length}\nImages: ${imgMatches.length}\nContent preview: ${cleanHtml.substring(0, 2000)}\n    `.trim();
    console.log("[AUDIT] HTML summary created. Length:", htmlSummary.length);

    // Optimized prompt for faster processing
    const systemPrompt = `You are a fast website auditor. Analyze the provided website summary and give:

1. A quality score (1-10) - most sites score 6-8, only poor sites below 5, reserve 9-10 for exceptional sites
2. 4 prioritized improvements with: issue, recommendation, impact

Focus on: performance, SEO, mobile-friendliness, accessibility, conversions.

Respond in JSON: {\"rating\": number, \"improvements\": [{\"issue\": \"...\", \"recommendation\": \"...\", \"impact\": \"...\"}]}`;

    const userPrompt = `Website Summary:\n${htmlSummary}\n\nProvide audit in JSON format.`;

    if (!ANTHROPIC_API_KEY) {
      console.log("[AUDIT] Anthropic API key not set");
      return NextResponse.json({ error: "Anthropic API key not set." }, { status: 500 });
    }

    console.log("[AUDIT] Anthropic API key exists:", !!ANTHROPIC_API_KEY);
    console.log("[AUDIT] API key starts with 'sk-ant-':", ANTHROPIC_API_KEY?.startsWith('sk-ant-'));
    console.log("[AUDIT] API key length:", ANTHROPIC_API_KEY?.length);

    // Use faster Claude model with timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000); // 15 second timeout

    try {
      console.log("[AUDIT] Sending request to Anthropic Claude");
    const anthropicRes = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': ANTHROPIC_API_KEY,
          'anthropic-version': '2023-06-01',
        'content-type': 'application/json',
      },
      body: JSON.stringify({
          model: 'claude-3-haiku-20240307', // Faster model
          max_tokens: 800, // Reduced tokens
          system: systemPrompt,
          messages: [{ role: 'user', content: userPrompt }]
        }),
        signal: controller.signal
      });

      clearTimeout(timeoutId);

    if (!anthropicRes.ok) {
        const errText = await anthropicRes.text();
        console.log("[AUDIT] Anthropic API error:", errText);
        return NextResponse.json({ error: `Anthropic API error: ${errText}` }, { status: 500 });
    }

      const data = await anthropicRes.json();
      let aiText = data?.content?.[0]?.text || "";
      console.log("[AUDIT] Received response from Anthropic. Length:", aiText.length);

    // Try to parse JSON from the AI's response
      let rating = null;
      let improvements = [];
    try {
        const match = aiText.match(/\{[\s\S]*\}/);
      if (match) {
          const parsed = JSON.parse(match[0]);
          rating = parsed.rating;
          improvements = parsed.improvements;
      } else {
          throw new Error("No JSON found in AI response.");
      }
    } catch (err) {
        console.log("[AUDIT] Failed to parse AI response:", aiText);
        return NextResponse.json({ error: "Failed to parse AI response.\n" + aiText }, { status: 500 });
    }

      console.log("[AUDIT] Audit complete. Returning response.");
    return NextResponse.json({
      url,
      rating,
      improvements
      });
    } catch (err) {
      clearTimeout(timeoutId);
      if ((err as any).name === 'AbortError') {
        console.log("[AUDIT] Anthropic API call timed out");
        return NextResponse.json({ error: "Audit took too long. Please try again." }, { status: 408 });
      }
      console.log("[AUDIT] Error during Anthropic API call:", err);
      throw err;
    }
  } catch (error: any) {
    console.log("[AUDIT] General error:", error);
    return NextResponse.json({ error: error.message || "Server error" }, { status: 500 });
  }
} 