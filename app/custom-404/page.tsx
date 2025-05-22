// This is a completely static page with no client components
export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <h1 className="text-6xl font-bold text-purple-900 mb-4">404</h1>
      <h2 className="text-3xl font-semibold mb-6">Page Not Found</h2>
      <p className="text-lg text-gray-600 max-w-md mb-8">
        We couldn't find the page you're looking for. The page might have been moved, deleted, or never existed.
      </p>
      <a href="/" className="px-6 py-3 bg-purple-900 text-white rounded-md hover:bg-purple-800 transition-colors">
        Return to Homepage
      </a>
    </div>
  )
}

export const metadata = {
  title: "Page Not Found | Nuvaru",
  description: "The page you are looking for could not be found.",
}
