"use client"

import type React from "react"

import { useRef, useState } from "react"
import { useChat } from "ai/react"
import { Bot, Send, User, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

export function ChatInterface() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: "/api/chat",
  })
  const formRef = useRef<HTMLFormElement>(null)
  const [rows, setRows] = useState(2)

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    handleInputChange(e)
    // Adjust textarea height based on content
    const lineCount = e.target.value.split("\n").length
    setRows(Math.min(Math.max(2, lineCount), 5))
  }

  return (
    <div className="flex flex-col h-[600px] bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-center p-8">
            <div className="w-16 h-16 bg-gradient-brand rounded-full flex items-center justify-center mb-4">
              <Bot className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Welcome to Nuvaru AI Assistant</h3>
            <p className="text-gray-500 max-w-md">
              Ask me anything about AI transformation, our services, or how we can help your business grow with
              intelligent solutions.
            </p>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              <button
                onClick={() => {
                  if (formRef.current) {
                    const textarea = formRef.current.querySelector("textarea")
                    if (textarea) {
                      textarea.value = "What AI services do you offer?"
                      handleInputChange({ target: { value: "What AI services do you offer?" } } as any)
                    }
                  }
                }}
                className="p-2 border border-gray-200 rounded-md hover:bg-gray-50 text-left"
              >
                What AI services do you offer?
              </button>
              <button
                onClick={() => {
                  if (formRef.current) {
                    const textarea = formRef.current.querySelector("textarea")
                    if (textarea) {
                      textarea.value = "How can AI help my logistics business?"
                      handleInputChange({ target: { value: "How can AI help my logistics business?" } } as any)
                    }
                  }
                }}
                className="p-2 border border-gray-200 rounded-md hover:bg-gray-50 text-left"
              >
                How can AI help my logistics business?
              </button>
              <button
                onClick={() => {
                  if (formRef.current) {
                    const textarea = formRef.current.querySelector("textarea")
                    if (textarea) {
                      textarea.value = "What is the process of working with Nuvaru?"
                      handleInputChange({ target: { value: "What is the process of working with Nuvaru?" } } as any)
                    }
                  }
                }}
                className="p-2 border border-gray-200 rounded-md hover:bg-gray-50 text-left"
              >
                What is the process of working with Nuvaru?
              </button>
              <button
                onClick={() => {
                  if (formRef.current) {
                    const textarea = formRef.current.querySelector("textarea")
                    if (textarea) {
                      textarea.value = "Can you explain GDPR compliance solutions?"
                      handleInputChange({ target: { value: "Can you explain GDPR compliance solutions?" } } as any)
                    }
                  }
                }}
                className="p-2 border border-gray-200 rounded-md hover:bg-gray-50 text-left"
              >
                Can you explain GDPR compliance solutions?
              </button>
            </div>
          </div>
        ) : (
          messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                "flex items-start gap-3 p-4 rounded-lg",
                message.role === "user" ? "bg-blue-50" : "bg-violet-50",
              )}
            >
              <div
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0",
                  message.role === "user" ? "bg-blue-600" : "bg-gradient-brand",
                )}
              >
                {message.role === "user" ? (
                  <User className="h-5 w-5 text-white" />
                ) : (
                  <Bot className="h-5 w-5 text-white" />
                )}
              </div>
              <div className="flex-1">
                <div className="font-medium mb-1">{message.role === "user" ? "You" : "Nuvaru AI Assistant"}</div>
                <div className="text-gray-700 whitespace-pre-wrap">{message.content}</div>
              </div>
            </div>
          ))
        )}
        {isLoading && (
          <div className="flex items-start gap-3 p-4 rounded-lg bg-violet-50">
            <div className="w-8 h-8 rounded-full bg-gradient-brand flex items-center justify-center flex-shrink-0">
              <Bot className="h-5 w-5 text-white" />
            </div>
            <div className="flex-1">
              <div className="font-medium mb-1">Nuvaru AI Assistant</div>
              <div className="flex items-center gap-2">
                <Loader2 className="h-4 w-4 animate-spin text-brand-purple" />
                <span className="text-gray-500">Thinking...</span>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="border-t border-gray-200 p-4 bg-white">
        <form ref={formRef} onSubmit={handleSubmit} className="flex gap-2">
          <Textarea
            value={input}
            onChange={handleTextareaChange}
            placeholder="Type your message..."
            className="flex-1 resize-none"
            rows={rows}
          />
          <Button
            type="submit"
            className="bg-gradient-brand hover:bg-brand-purple-dark self-end h-10 w-10 p-0"
            disabled={isLoading || !input.trim()}
          >
            <Send className="h-5 w-5" />
            <span className="sr-only">Send message</span>
          </Button>
        </form>
      </div>
    </div>
  )
}
