import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function Loading() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section Skeleton */}
      <section className="relative bg-gradient-brand py-20 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl animate-pulse">
            <div className="h-6 bg-white/20 rounded w-48 mb-4"></div>
            <div className="h-16 bg-white/20 rounded w-full mb-6"></div>
            <div className="h-6 bg-white/20 rounded w-3/4 mb-2"></div>
            <div className="h-6 bg-white/20 rounded w-2/3 mb-8"></div>
            <div className="flex gap-4">
              <div className="h-14 bg-white/20 rounded w-48"></div>
              <div className="h-14 bg-white/20 rounded w-40"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Skeleton */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto animate-pulse">
            <div className="text-center mb-12">
              <div className="h-10 bg-gray-200 rounded w-96 mx-auto mb-6"></div>
              <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-100 p-8 rounded-2xl">
                <div className="h-6 bg-gray-200 rounded w-32 mb-4"></div>
                <div className="space-y-3">
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                  <div className="h-4 bg-gray-200 rounded w-4/5"></div>
                </div>
              </div>
              <div className="bg-gray-100 p-8 rounded-2xl">
                <div className="h-6 bg-gray-200 rounded w-32 mb-4"></div>
                <div className="space-y-3">
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                  <div className="h-4 bg-gray-200 rounded w-4/5"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
