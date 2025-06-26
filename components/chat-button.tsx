"use client"

import { useState, useEffect } from "react"
import { MessageCircle, X, Minimize2, Maximize2 } from "lucide-react"
import { ChatAgent } from "./chat-agent"

export function ChatButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)

  // Check for hash on mount to auto-open chat
  useEffect(() => {
    if (window.location.hash === "#chat") {
      setIsOpen(true)
    }
    // Global function to open chat
    ;(window as any).openNuvaruChat = () => {
      setIsOpen(true)
      setIsMinimized(false)
    }

    return () => {
      delete (window as any).openNuvaruChat
    }
  }, [])

  const toggleChat = () => {
    if (isOpen && !isMinimized) {
      setIsOpen(false)
    } else {
      setIsOpen(true)
      setIsMinimized(false)
    }
  }

  const minimizeChat = () => {
    setIsMinimized(true)
  }

  const maximizeChat = () => {
    setIsMinimized(false)
  }

  return (
    <>
      {/* Chat Button */}
      {(!isOpen || isMinimized) && (
        <button
          onClick={toggleChat}
          className="fixed bottom-6 right-6 z-50 bg-brand-gold hover:bg-brand-gold-dark text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Open chat"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}

      {/* Chat Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-end p-4 md:p-6">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black bg-opacity-25 backdrop-blur-sm" onClick={() => setIsOpen(false)} />

          {/* Chat Container */}
          <div
            className={`relative bg-white rounded-lg shadow-2xl transition-all duration-300 ${
              isMinimized ? "w-80 h-16" : "w-full max-w-md h-[600px] md:h-[700px]"
            }`}
          >
            {/* Chat Header */}
            <div className="flex items-center justify-between p-4 border-b bg-brand-gold text-white rounded-t-lg">
              <div className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                <h3 className="font-semibold">Chat with Nuvaru AI</h3>
              </div>
              <div className="flex items-center gap-2">
                {!isMinimized && (
                  <button
                    onClick={minimizeChat}
                    className="p-1 hover:bg-brand-gold-dark rounded transition-colors"
                    aria-label="Minimize chat"
                  >
                    <Minimize2 className="w-4 h-4" />
                  </button>
                )}
                {isMinimized && (
                  <button
                    onClick={maximizeChat}
                    className="p-1 hover:bg-brand-gold-dark rounded transition-colors"
                    aria-label="Maximize chat"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                )}
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-brand-gold-dark rounded transition-colors"
                  aria-label="Close chat"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Chat Content */}
            {!isMinimized && (
              <div className="h-full pb-16">
                <ChatAgent />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
