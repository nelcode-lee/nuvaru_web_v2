"use client"

import type React from "react"

import { useState } from "react"
import { Bot, Send, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export function HeroChatInterface() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hi there! I'm Nuvaru's AI assistant. How can I help you today?",
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSend = () => {
    if (!input.trim()) return

    // Add user message
    const userMessage = { role: "user", content: input }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    // Simulate AI response after a short delay
    setTimeout(() => {
      let response
      if (input.toLowerCase().includes("service")) {
        response = {
          role: "assistant",
          content:
            "We offer a range of AI services including AI Readiness Assessment, Custom AI Solutions, Process Automation, Data Analysis, and more. Would you like to know more about any specific service?",
        }
      } else if (input.toLowerCase().includes("cost") || input.toLowerCase().includes("price")) {
        response = {
          role: "assistant",
          content:
            "Our pricing is customised based on your specific business needs and project scope. I'd be happy to arrange a consultation to discuss your requirements and provide a tailored quote.",
        }
      } else {
        response = {
          role: "assistant",
          content:
            "Thanks for your message! For a more detailed conversation about how we can help your business, please click the 'Chat with AI' button below.",
        }
      }
      setMessages((prev) => [...prev, response])
      setIsLoading(false)
    }, 1500)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div className="flex flex-col h-[450px]">
      <div className="bg-gradient-brand p-3 text-white font-medium flex items-center gap-2">
        <Bot className="h-5 w-5" />
        <span>Nuvaru AI Assistant</span>
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex items-start gap-3 p-3 rounded-lg ${
              message.role === "user" ? "bg-blue-50" : "bg-violet-50"
            }`}
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                message.role === "user" ? "bg-blue-600" : "bg-gradient-brand"
              }`}
            >
              {message.role === "user" ? (
                <User className="h-5 w-5 text-white" />
              ) : (
                <Bot className="h-5 w-5 text-white" />
              )}
            </div>
            <div className="flex-1">
              <div className="text-gray-700">{message.content}</div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex items-start gap-3 p-3 rounded-lg bg-violet-50">
            <div className="w-8 h-8 rounded-full bg-gradient-brand flex items-center justify-center flex-shrink-0">
              <Bot className="h-5 w-5 text-white" />
            </div>
            <div className="flex-1">
              <div className="text-gray-500">Typing...</div>
            </div>
          </div>
        )}
      </div>
      <div className="border-t border-gray-200 p-3 bg-white">
        <div className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a message..."
            className="flex-1"
          />
          <Button
            onClick={handleSend}
            className="bg-gradient-brand hover:bg-brand-purple-dark h-10 w-10 p-0"
            disabled={isLoading || !input.trim()}
          >
            <Send className="h-5 w-5" />
            <span className="sr-only">Send message</span>
          </Button>
        </div>
        <div className="mt-3 text-center">
          <Link href="/chat">
            <Button variant="outline" className="text-brand-purple border-brand-purple hover:bg-violet-50 text-sm">
              Continue conversation in full chat
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
