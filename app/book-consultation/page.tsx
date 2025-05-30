import type { Metadata } from "next"
import { ConsultationBookingForm } from "@/components/consultation-booking-form"

export const metadata: Metadata = {
  title: "Book a Consultation | Nuvaru",
  description:
    "Schedule a free 30-minute consultation with our AI experts to discuss your business needs and challenges.",
}

export default function BookConsultationPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Book Your Free Consultation</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Schedule a 30-minute consultation with our AI experts to discuss your business needs and how we can help you
            implement AI solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">What to Expect</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="bg-brand-purple text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">
                    1
                  </span>
                  <span>
                    <strong className="block text-gray-800">Discovery</strong>
                    <span className="text-sm text-gray-600">We'll discuss your business and current challenges</span>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="bg-brand-purple text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">
                    2
                  </span>
                  <span>
                    <strong className="block text-gray-800">Exploration</strong>
                    <span className="text-sm text-gray-600">We'll explore potential AI solutions for your needs</span>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="bg-brand-purple text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">
                    3
                  </span>
                  <span>
                    <strong className="block text-gray-800">Recommendations</strong>
                    <span className="text-sm text-gray-600">We'll provide initial recommendations and next steps</span>
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Why Book a Consultation?</h2>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="bg-green-100 p-1 rounded-full mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-green-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-sm">Expert advice tailored to your business</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-green-100 p-1 rounded-full mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-green-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-sm">Identify quick wins and long-term strategies</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-green-100 p-1 rounded-full mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-green-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-sm">No obligation or pressure to purchase</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-green-100 p-1 rounded-full mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-green-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-sm">Clear understanding of potential ROI</span>
                </li>
              </ul>
            </div>

            <div className="bg-brand-purple/10 p-6 rounded-lg border border-brand-purple/20">
              <div className="flex items-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-brand-purple mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                <h3 className="font-semibold text-brand-purple">Not ready to book yet?</h3>
              </div>
              <p className="text-sm text-gray-600">
                Feel free to{" "}
                <a href="mailto:lee@nuvaru.co.uk" className="text-brand-purple font-medium hover:underline">
                  email us
                </a>{" "}
                with any questions, or check out our{" "}
                <a href="/case-studies" className="text-brand-purple font-medium hover:underline">
                  case studies
                </a>{" "}
                to see how we've helped other businesses.
              </p>
            </div>
          </div>

          <div className="lg:col-span-3">
            <ConsultationBookingForm />
          </div>
        </div>
      </div>
    </main>
  )
}
