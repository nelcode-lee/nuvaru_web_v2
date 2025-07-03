"use client"

import { useState, useEffect, useRef } from "react"
import { Bot, BarChart3, TrendingUp, AlertCircle, CheckCircle2, Factory, Settings, Zap, Gauge } from "lucide-react"

export function AIResponsesShowcase() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [typing, setTyping] = useState(true)
  const [typedContent, setTypedContent] = useState("")
  const [showFinalMessage, setShowFinalMessage] = useState(false)
  const [showManufacturingChat, setShowManufacturingChat] = useState(false)
  const [manufacturingActiveIndex, setManufacturingActiveIndex] = useState(0)
  const [manufacturingTyping, setManufacturingTyping] = useState(true)
  const [manufacturingTypedContent, setManufacturingTypedContent] = useState("")
  const [showManufacturingFinal, setShowManufacturingFinal] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const responses = [
    {
      type: "insight",
      icon: <BarChart3 className="h-5 w-5 text-blue-500" />,
      content: "Our AI agents, custom software and automations don't replace teams, they enhance them.",
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
        "I've analysed your data handling processes and identified 3 areas that need adjustment to ensure full GDPR compliance before your upcoming audit.",
      highlight: "GDPR compliance gaps",
    },
  ]

  const manufacturingResponses = [
    {
      type: "efficiency",
      icon: <Factory className="h-5 w-5 text-blue-500" />,
      content:
        "I've analysed your production line data and identified bottlenecks that are reducing throughput by 17%. Optimising these areas could increase output by 22%.",
      highlight: "22% potential increase",
    },
    {
      type: "maintenance",
      icon: <Settings className="h-5 w-5 text-amber-500" />,
      content:
        "Your equipment maintenance logs show patterns indicating potential failure of Unit B-7 within 2 weeks. Preventative maintenance now could save 36 hours of downtime.",
      highlight: "36 hours saved",
    },
    {
      type: "energy",
      icon: <Zap className="h-5 w-5 text-green-500" />,
      content:
        "Energy consumption analysis shows peak usage patterns that could be optimised. Implementing smart controls could reduce energy costs by 28% annually.",
      highlight: "28% energy savings",
    },
    {
      type: "quality",
      icon: <Gauge className="h-5 w-5 text-violet-500" />,
      content:
        "Quality control data indicates a 0.8% defect rate increase in the last month. I've identified the likely cause in the calibration of sensor array C.",
      highlight: "Root cause identified",
    },
  ]

  // First animation sequence
  useEffect(() => {
    if (activeIndex >= responses.length) {
      setShowFinalMessage(true)
      // After showing the final message, prepare to transition to manufacturing chat
      const timeout = setTimeout(() => {
        setShowManufacturingChat(true)
      }, 4000)
      return () => clearTimeout(timeout)
    }

    if (typing && activeIndex < responses.length) {
      const currentResponse = responses[activeIndex]
      if (typedContent.length < currentResponse.content.length) {
        const timeout = setTimeout(() => {
          setTypedContent(currentResponse.content.substring(0, typedContent.length + 1))
        }, 30)
        return () => clearTimeout(timeout)
      } else {
        setTyping(false)
        const timeout = setTimeout(() => {
          setActiveIndex(activeIndex + 1)
          setTypedContent("")
          setTyping(true)
        }, 2000)
        return () => clearTimeout(timeout)
      }
    }
  }, [activeIndex, typing, typedContent, responses])

  // Manufacturing chat animation sequence
  useEffect(() => {
    if (!showManufacturingChat) return

    if (manufacturingActiveIndex >= manufacturingResponses.length) {
      setShowManufacturingFinal(true)
      return
    }

    if (manufacturingTyping && manufacturingActiveIndex < manufacturingResponses.length) {
      const currentResponse = manufacturingResponses[manufacturingActiveIndex]
      if (manufacturingTypedContent.length < currentResponse.content.length) {
        const timeout = setTimeout(() => {
          setManufacturingTypedContent(currentResponse.content.substring(0, manufacturingTypedContent.length + 1))
        }, 30)
        return () => clearTimeout(timeout)
      } else {
        setManufacturingTyping(false)
        const timeout = setTimeout(() => {
          setManufacturingActiveIndex(manufacturingActiveIndex + 1)
          setManufacturingTypedContent("")
          setManufacturingTyping(true)
        }, 2000)
        return () => clearTimeout(timeout)
      }
    }
  }, [
    showManufacturingChat,
    manufacturingActiveIndex,
    manufacturingTyping,
    manufacturingTypedContent,
    manufacturingResponses,
  ])

  // Scroll effect for manufacturing chat
  useEffect(() => {
    if (showManufacturingChat && containerRef.current) {
      const scrollInterval = setInterval(() => {
        if (containerRef.current) {
          containerRef.current.scrollTop += 1 // Slow scroll upward
        }
      }, 50)

      return () => clearInterval(scrollInterval)
    }
  }, [showManufacturingChat])

  // Reset animation when component unmounts and remounts
  useEffect(() => {
    return () => {
      setActiveIndex(0)
      setTyping(true)
      setTypedContent("")
      setShowFinalMessage(false)
      setShowManufacturingChat(false)
      setManufacturingActiveIndex(0)
      setManufacturingTyping(true)
      setManufacturingTypedContent("")
      setShowManufacturingFinal(false)
    }
  }, [])

  // Restart the animation cycle
  useEffect(() => {
    const restartCycle = () => {
      if (showManufacturingFinal) {
        setTimeout(() => {
          setShowManufacturingChat(false)
          setShowManufacturingFinal(false)
          setManufacturingActiveIndex(0)
          setManufacturingTyping(true)
          setManufacturingTypedContent("")
          setActiveIndex(0)
          setTyping(true)
          setTypedContent("")
          setShowFinalMessage(false)
        }, 5000)
      }
    }

    restartCycle()
  }, [showManufacturingFinal])

  return (
    <div className="bg-white rounded-lg shadow-2xl overflow-hidden border border-gray-100 relative">
      <div className="bg-gradient-brand p-4 text-white font-medium flex items-center gap-2">
        <Bot className="h-5 w-5" />
        <span>Nuvaru AI Agent</span>
      </div>

      <div ref={containerRef} className="p-6 space-y-4 max-h-[450px] overflow-y-auto bg-gray-50 relative">
        {/* First animation sequence */}
        <div
          className={`transition-all duration-1000 ${
            showManufacturingChat ? "opacity-0 absolute top-0 left-0 right-0" : "opacity-100"
          }`}
        >
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
                  I can help you identify more opportunities like these in your business. Would you like me to analyse
                  your specific data and processes?
                </p>
                <div className="mt-3 flex gap-2 animate-fade-in" style={{ animationDelay: "1s" }}>
                  <button className="px-3 py-1.5 bg-gradient-brand text-white text-sm rounded-md hover:opacity-90 transition-opacity">
                    Request Analysis
                  </button>
                  <button className="px-3 py-1.5 border border-gray-300 text-gray-700 text-sm rounded-md hover:bg-gray-50 transition-colors">
                    See AI Analysis Features
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Manufacturing chat animation */}
        {showManufacturingChat && (
          <div className="animate-slide-up-slow">
            <div className="mb-4 p-3 bg-gradient-to-r from-blue-600 to-violet-600 text-white rounded-lg text-center">
              <h3 className="font-medium">Manufacturing Industry AI Insights</h3>
            </div>

            {manufacturingResponses.map((response, index) => (
              <div
                key={`manufacturing-${index}`}
                className={`flex gap-3 p-4 rounded-lg bg-white border-l-4 ${
                  response.type === "efficiency"
                    ? "border-blue-500"
                    : response.type === "maintenance"
                      ? "border-amber-500"
                      : response.type === "energy"
                        ? "border-green-500"
                        : "border-violet-500"
                } shadow-sm transition-all duration-500 mb-4 ${
                  index < manufacturingActiveIndex
                    ? "opacity-100 translate-y-0"
                    : index === manufacturingActiveIndex
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4 absolute -left-full"
                }`}
              >
                <div className="flex-shrink-0 mt-1">
                  <div className={`${index === manufacturingActiveIndex ? "animate-bounce-subtle" : ""}`}>
                    {response.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-gray-700">
                    {index < manufacturingActiveIndex
                      ? response.content
                      : index === manufacturingActiveIndex
                        ? manufacturingTypedContent
                        : ""}
                    {index === manufacturingActiveIndex && manufacturingTyping && (
                      <span className="inline-block w-1 h-4 bg-brand-purple ml-0.5 animate-pulse"></span>
                    )}
                  </p>
                  {(index < manufacturingActiveIndex ||
                    (index === manufacturingActiveIndex && !manufacturingTyping)) && (
                    <div
                      className={`mt-2 text-sm font-medium inline-block px-2 py-1 rounded-full ${
                        response.type === "efficiency"
                          ? "bg-blue-50 text-blue-700"
                          : response.type === "maintenance"
                            ? "bg-amber-50 text-amber-700"
                            : response.type === "energy"
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

            {showManufacturingFinal && (
              <div className="flex gap-3 p-4 rounded-lg bg-gradient-to-r from-blue-50 to-violet-50 border border-blue-100 animate-slide-up">
                <div className="flex-shrink-0 mt-1">
                  <Bot className="h-5 w-5 text-brand-purple animate-pulse" />
                </div>
                <div className="flex-1">
                  <p className="text-gray-700">
                    Our AI solutions can transform your manufacturing operations with real-time insights and predictive
                    maintenance. Ready to see how?
                  </p>
                  <div className="mt-3 flex gap-2 animate-fade-in" style={{ animationDelay: "1s" }}>
                    <button className="px-3 py-1.5 bg-gradient-brand text-white text-sm rounded-md hover:opacity-90 transition-opacity">
                      Book Manufacturing Demo
                    </button>
                    <button className="px-3 py-1.5 border border-gray-300 text-gray-700 text-sm rounded-md hover:bg-gray-50 transition-colors">
                      View Case Studies
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
