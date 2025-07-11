"use client"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import React from "react"

export function AIReadinessAssessmentModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full p-8 relative">
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          onClick={onClose}
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </button>
        <h2 className="text-2xl font-bold mb-4 text-brand-purple text-center">AI Readiness Assessment</h2>
        <p className="text-gray-700 text-center mb-6">
          The interactive AI Readiness Assessment will guide you through 5 quick steps to benchmark your business and predict AI impact.
        </p>
        <div className="flex justify-center">
          <Button onClick={onClose} className="mt-2">Close</Button>
        </div>
      </div>
    </div>
  )
} 