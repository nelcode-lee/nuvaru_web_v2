"use client"

import { useState, useEffect } from "react"
import { Bot, BarChart3, TrendingUp, AlertCircle, CheckCircle2 } from "lucide-react"

export function AIResponsesShowcase() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [typing, setTyping] = useState(true)
  const [typedContent, setTypedContent] = useState("")
  const [showFinalMessage, setShowFinalMessage] = useState(false)

  const responses = [
    {
      type: "insight",
      icon: <BarChart3 className="h-5 w-5 text-blue-500" />,
      content:
        "Our AI agents fine-tune the parameters and constraints that apply to your business to get the most out of AI.",
      highlight: "40% Average operational cost reduction",
    },
    {
      type: "alert",
      icon: <AlertCircle className="h-5 w-5 text-amber-500" />,
      content:
        "I've detected an anomaly in your recruitment process. Candidates are dropping off at the second interview stage at a rate 40% higher than industry average.",
      highlight: "40% higher drop-off",
    },
    {
      type: "recommendation",
      icon: <TrendingUp className="h-5 w-5 text-green-500" />,
      content:
        "Your financial data indicates an opportunity to automate 85% of your monthly reporting process, saving approximately 42 hours of staff time.",
      highlight: "85% automation potential",
    },
    {
      type: "compliance",
      icon: <CheckCircle2 className="h-5 w-5 text-violet-500" />,
      content:
        "I've analyzed your data handling processes and identified 3 areas that need adjustment to ensure full GDPR compliance before your upcoming audit.",
      highlight: "GDPR compliance gaps",
    },
  ]

  // Typing effect
  useEffect(() => {
    if (activeIndex >= responses.length) {
      setShowFinalMessage(true)
      return
    }

    if (typing && activeIndex < responses.length) {
      const currentResponse = responses[activeIndex]
      if (typedContent.length < currentResponse.content.length) {
        const timeout = setTimeout(() => {
          setTypedContent(currentResponse.content.substring(0, typedContent.length + 1))
        }, 30) // Adjust typing speed here
        return () => clearTimeout(timeout)
      } else {
        setTyping(false)
        const timeout = setTimeout(() => {
          setActiveIndex(activeIndex + 1)
          setTypedContent("")
          setTyping(true)
        }, 2000) // Wait before showing next message
        return () => clearTimeout(timeout)
      }
    }
  }, [activeIndex, typing, typedContent, responses])

  // Reset animation when component unmounts and remounts
  useEffect(() => {
    return () => {
      setActiveIndex(0)
      setTyping(true)
      setTypedContent("")
      setShowFinalMessage(false)
    }
  }, [])

  return (
    <div className="bg-white rounded-lg shadow-2xl overflow-hidden border border-gray-100">
      <div className="bg-gradient-brand p-4 text-white font-medium flex items-center gap-2">
        <Bot className="h-5 w-5" />
        <span>Nuvaru AI Agent</span>
      </div>

      <div className="p-6 space-y-4 max-h-[450px] overflow-y-auto bg-gray-50">
        {responses.map((response, index) => (
          <div
            key={index}
            className={`flex gap-3 p-4 rounded-lg bg-white border-l-4 ${
              response.type === "insight"
                ? "border-blue-500"
                : response.type === "alert"
                  ? "border-amber-500"
                  : response.type === "recommendation"
                    ? "border-green-500"
                    : "border-violet-500"
            } shadow-sm transition-all duration-500 ${
              index < activeIndex
                ? "opacity-100 translate-y-0"
                : index === activeIndex
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4 absolute -left-full"
            }`}
          >
            <div className="flex-shrink-0 mt-1">
              <div className={`${index === activeIndex ? "animate-bounce-subtle" : ""}`}>{response.icon}</div>
            </div>
            <div className="flex-1">
              <p className="text-gray-700">
                {index < activeIndex ? response.content : index === activeIndex ? typedContent : ""}
                {index === activeIndex && typing && (
                  <span className="inline-block w-1 h-4 bg-brand-purple ml-0.5 animate-pulse"></span>
                )}
              </p>
              {(index < activeIndex || (index === activeIndex && !typing)) && (
                <div
                  className={`mt-2 text-sm font-medium inline-block px-2 py-1 rounded-full ${
                    response.type === "insight"
                      ? "bg-blue-50 text-blue-700"
                      : response.type === "alert"
                        ? "bg-amber-50 text-amber-700"
                        : response.type === "recommendation"
                          ? "bg-green-50 text-green-700"
                          : "bg-violet-50 text-violet-700"
                  } animate-fade-in`}
                >
                  {response.highlight}
                </div>
              )}
            </div>
          </div>
        ))}

        {showFinalMessage && (
          <div className="flex gap-3 p-4 rounded-lg bg-gradient-to-r from-blue-50 to-violet-50 border border-blue-100 animate-slide-up">
            <div className="flex-shrink-0 mt-1">
              <Bot className="h-5 w-5 text-brand-purple animate-pulse" />
            </div>
            <div className="flex-1">
              <p className="text-gray-700">
                I can help you identify more opportunities like these in your business. Would you like me to analyze
                your specific data and processes?
              </p>
              <div className="mt-3 flex gap-2 animate-fade-in" style={{ animationDelay: "1s" }}>
                <button className="px-3 py-1.5 bg-gradient-brand text-white text-sm rounded-md hover:opacity-90 transition-opacity">
                  Request Analysis
                </button>
                <button className="px-3 py-1.5 border border-gray-300 text-gray-700 text-sm rounded-md hover:bg-gray-50 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
