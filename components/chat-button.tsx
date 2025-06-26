"use client"

import { useState, useEffect } from "react"
import { MessageCircle, X } from "lucide-react"
import { ChatAgent } from "./chat-agent"

export function ChatButton() {
  const [isOpen, setIsOpen] = useState(false)

  // Listen for hash changes to open chat from links
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#chat") {
        setIsOpen(true)
        // Remove the hash from URL without triggering navigation
        window.history.replaceState(null, "", window.location.pathname)
      }
    }

    // Check on mount
    handleHashChange()

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange)

    return () => {
      window.removeEventListener("hashchange", handleHashChange)
    }
  }, [])

  // Global function to open chat (can be called from anywhere)
  useEffect(() => {
    ;(window as any).openNuvaruChat = () => setIsOpen(true)
    return () => {
      delete (window as any).openNuvaruChat
    }
  }, [])

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-40 bg-brand-gold hover:bg-brand-gold-dark text-white rounded-full p-4 shadow-lg transition-all duration-300 ${
          isOpen ? "scale-0" : "scale-100"
        }`}
        aria-label="Open chat"
      >
        <MessageCircle className="w-6 h-6" />
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
      </button>

      {/* Chat Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-end p-4 md:p-6">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setIsOpen(false)} />

          {/* Chat Container */}
          <div className="relative bg-white rounded-lg shadow-2xl w-full max-w-md h-[600px] max-h-[80vh] flex flex-col animate-in slide-in-from-bottom-4 duration-300">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b bg-brand-gold text-white rounded-t-lg">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-brand-gold" />
                </div>
                <div>
                  <h3 className="font-semibold">Nuvaru AI Assistant</h3>
                  <p className="text-sm text-amber-100">How can I help you today?</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-amber-200 transition-colors"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Content */}
            <div className="flex-1 overflow-hidden">
              <ChatAgent onClose={() => setIsOpen(false)} />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
