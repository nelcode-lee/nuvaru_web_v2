import { BusinessAuditForm } from "@/components/business-audit-form"

export default function BusinessAuditPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Business Capability Audit
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover how AI and automation can transform your business. 
            Get a personalized report with actionable recommendations.
          </p>
        </div>
        
        <BusinessAuditForm />
      </div>
    </div>
  )
} 