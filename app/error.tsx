"use client"

import { useEffect } from "react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <h1 className="text-4xl font-bold text-purple-900 mb-4">Something went wrong</h1>
      <p className="text-lg text-gray-600 max-w-md mb-8">
        We apologize for the inconvenience. Please try again or contact support if the problem persists.
      </p>
      <button
        onClick={reset}
        className="px-6 py-3 bg-purple-900 text-white rounded-md hover:bg-purple-800 transition-colors"
      >
        Try again
      </button>
    </div>
  )
}
