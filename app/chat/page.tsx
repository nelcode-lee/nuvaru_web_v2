import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import dynamic from "next/dynamic"

const ChatInterface = dynamic(() => import("@/components/chat-interface").then(mod => ({ default: mod.ChatInterface })), {
  ssr: false,
  loading: () => <div className="bg-white rounded-lg shadow-lg p-6 h-96 animate-pulse" />
})

export const metadata: Metadata = {
  title: "AI Assistant | Nuvaru - AI Transformation Consultancy",
  description: "Chat with our AI assistant to learn more about how AI can transform your business operations.",
}

export default function ChatPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex flex-col">
        <section className="relative bg-gradient-brand py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Chat with Our AI Assistant
              </h1>
              <p className="text-lg text-blue-100">
                Ask questions about AI transformation, our services, or how we can help your business
              </p>
            </div>
          </div>
        </section>

        <section className="flex-1 py-8 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <ChatInterface />
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
