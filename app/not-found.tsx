"use client"

import { Suspense } from "react"
import Link from "next/link"

// This component will use useSearchParams safely inside a Suspense boundary
function NotFoundContent() {
  // If you need to use useSearchParams, do it here
  // const searchParams = useSearchParams();

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <h1 className="text-6xl font-bold text-purple-900 mb-4">404</h1>
      <h2 className="text-3xl font-semibold mb-6">Page Not Found</h2>
      <p className="text-lg text-gray-600 max-w-md mb-8">
        We couldn't find the page you're looking for. The page might have been moved, deleted, or never existed.
      </p>
      <Link href="/" className="px-6 py-3 bg-purple-900 text-white rounded-md hover:bg-purple-800 transition-colors">
        Return to Homepage
      </Link>
    </div>
  )
}

export default function NotFound() {
  return (
    <Suspense fallback={<div className="min-h-[70vh] flex items-center justify-center">Loading...</div>}>
      <NotFoundContent />
    </Suspense>
  )
}

// Add metadata for the 404 page
export const metadata = {
  title: "Page Not Found | Nuvaru",
  description: "The page you are looking for could not be found.",
}
