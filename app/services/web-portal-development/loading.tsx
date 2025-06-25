import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function Loading() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section Skeleton */}
      <section className="relative bg-gradient-brand py-20 md:py-24">
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="max-w-4xl">
            <div className="h-16 bg-white/20 rounded-lg mb-6 animate-pulse"></div>
            <div className="h-6 bg-white/20 rounded mb-4 animate-pulse"></div>
            <div className="h-6 bg-white/20 rounded mb-8 w-3/4 animate-pulse"></div>
            <div className="flex gap-4">
              <div className="h-12 w-48 bg-white/20 rounded animate-pulse"></div>
              <div className="h-12 w-32 bg-white/20 rounded animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Skeleton */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <div className="h-8 bg-gray-200 rounded mb-4 w-1/2 mx-auto animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto animate-pulse"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2].map((i) => (
              <div key={i} className="bg-white p-6 rounded-lg">
                <div className="h-6 bg-gray-200 rounded mb-4 animate-pulse"></div>
                <div className="space-y-3">
                  {[1, 2, 3, 4].map((j) => (
                    <div key={j} className="h-4 bg-gray-200 rounded animate-pulse"></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
