"use client"

import { useState } from "react"
import { ServiceRecommenderModal } from "./service-recommender-modal"

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