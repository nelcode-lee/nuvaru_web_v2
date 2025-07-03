"use client"

import { useState } from "react"
import dynamic from "next/dynamic"

const ServiceRecommenderModal = dynamic(() => import("./service-recommender-modal").then(mod => ({ default: mod.ServiceRecommenderModal })), {
  ssr: false,
  loading: () => null
})

interface ServiceRecommenderButtonProps {
  className?: string
  children?: React.ReactNode
}

export function ServiceRecommenderButton({ className = "", children }: ServiceRecommenderButtonProps) {
  const [showRecommender, setShowRecommender] = useState(false)

  return (
    <>
      <button
        type="button"
        className={`bg-white/10 text-white hover:bg-white/20 text-lg py-6 px-8 border border-white/30 rounded-md font-medium transition-colors ${className}`}
        onClick={() => setShowRecommender(true)}
      >
        {children || "Personalised Service Recommender"}
      </button>
      <ServiceRecommenderModal 
        open={showRecommender} 
        onClose={() => setShowRecommender(false)} 
      />
    </>
  )
} 