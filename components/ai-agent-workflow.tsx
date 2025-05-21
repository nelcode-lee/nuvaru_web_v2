"use client"

import { useEffect, useState } from "react"
import { BarChart3, CheckSquare, Settings, Lightbulb } from "lucide-react"

export function AIAgentWorkflow() {
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    // Start animation after component mounts
    setAnimate(true)

    // Optional: create animation loop
    const interval = setInterval(() => {
      setAnimate(false)
      setTimeout(() => setAnimate(true), 100)
    }, 10000) // Restart animation every 10 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full max-w-[900px] h-[220px] relative flex flex-col items-center justify-center">
      <h3 className="text-2xl font-bold text-brand-blue mb-8">How Do AI Agents Work?</h3>

      <div className="relative w-full flex items-center justify-center">
        <div className="flex items-center justify-between w-full px-4">
          {/* Data Processing */}
          <div className="flex flex-col items-center">
            <div className={`transition-all duration-1000 ${animate ? "opacity-100" : "opacity-0"}`}>
              <div className="relative">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-sm">
                    <BarChart3 className="h-7 w-7 text-brand-blue" />
                  </div>
                </div>
                <div className="absolute -right-1 -top-1 w-5 h-5 rounded-full bg-brand-blue animate-pulse"></div>
              </div>
            </div>
            <div className="text-brand-blue font-semibold mt-3 text-center">Data Processing</div>
          </div>

          {/* Arrow 1 */}
          <div className="w-[80px] mx-2 flex-shrink-0">
            <svg className="w-full" height="20" viewBox="0 0 80 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M5 10 L65 10"
                stroke="#2563eb"
                strokeWidth="3"
                strokeLinecap="round"
                className={`transition-all duration-1000 ${animate ? "opacity-100" : "opacity-0"}`}
                style={{ strokeDasharray: 60, strokeDashoffset: animate ? 0 : 60 }}
              />
              <path
                d="M65 10 L55 5 M65 10 L55 15"
                stroke="#2563eb"
                strokeWidth="3"
                strokeLinecap="round"
                className={`transition-all duration-1000 delay-200 ${animate ? "opacity-100" : "opacity-0"}`}
              />
            </svg>
          </div>

          {/* Decision Making and Planning */}
          <div className="flex flex-col items-center">
            <div className={`transition-all duration-1000 delay-300 ${animate ? "opacity-100" : "opacity-0"}`}>
              <div className="relative">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-sm">
                    <CheckSquare className="h-7 w-7 text-brand-blue" />
                  </div>
                </div>
                <div className="absolute -right-1 -top-1 w-5 h-5 rounded-full bg-brand-blue animate-pulse"></div>
              </div>
            </div>
            <div className="text-brand-blue font-semibold mt-3 text-center">
              Decision-Making
              <br />
              and Planning
            </div>
          </div>

          {/* Arrow 2 */}
          <div className="w-[80px] mx-2 flex-shrink-0">
            <svg className="w-full" height="20" viewBox="0 0 80 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M5 10 L65 10"
                stroke="#2563eb"
                strokeWidth="3"
                strokeLinecap="round"
                className={`transition-all duration-1000 delay-600 ${animate ? "opacity-100" : "opacity-0"}`}
                style={{ strokeDasharray: 60, strokeDashoffset: animate ? 0 : 60 }}
              />
              <path
                d="M65 10 L55 5 M65 10 L55 15"
                stroke="#2563eb"
                strokeWidth="3"
                strokeLinecap="round"
                className={`transition-all duration-1000 delay-800 ${animate ? "opacity-100" : "opacity-0"}`}
              />
            </svg>
          </div>

          {/* Action */}
          <div className="flex flex-col items-center">
            <div className={`transition-all duration-1000 delay-900 ${animate ? "opacity-100" : "opacity-0"}`}>
              <div className="relative">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-sm">
                    <Settings className="h-7 w-7 text-brand-blue" />
                  </div>
                </div>
                <div className="absolute -right-1 -top-1 w-5 h-5 rounded-full bg-brand-blue animate-pulse"></div>
              </div>
            </div>
            <div className="text-brand-blue font-semibold mt-3 text-center">Action</div>
          </div>

          {/* Arrow 3 */}
          <div className="w-[80px] mx-2 flex-shrink-0">
            <svg className="w-full" height="20" viewBox="0 0 80 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M5 10 L65 10"
                stroke="#2563eb"
                strokeWidth="3"
                strokeLinecap="round"
                className={`transition-all duration-1000 delay-1200 ${animate ? "opacity-100" : "opacity-0"}`}
                style={{ strokeDasharray: 60, strokeDashoffset: animate ? 0 : 60 }}
              />
              <path
                d="M65 10 L55 5 M65 10 L55 15"
                stroke="#2563eb"
                strokeWidth="3"
                strokeLinecap="round"
                className={`transition-all duration-1000 delay-1400 ${animate ? "opacity-100" : "opacity-0"}`}
              />
            </svg>
          </div>

          {/* Learning and Adaptation */}
          <div className="flex flex-col items-center">
            <div className={`transition-all duration-1000 delay-1500 ${animate ? "opacity-100" : "opacity-0"}`}>
              <div className="relative">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-sm">
                    <Lightbulb className="h-7 w-7 text-brand-blue" />
                  </div>
                </div>
                <div className="absolute -right-1 -top-1 w-5 h-5 rounded-full bg-brand-blue animate-pulse"></div>
              </div>
            </div>
            <div className="text-brand-blue font-semibold mt-3 text-center">
              Learning and
              <br />
              Adaptation
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
