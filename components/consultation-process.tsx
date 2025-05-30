import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Clock, Users, FileText, Lightbulb } from "lucide-react"

export function ConsultationProcess() {
  const steps = [
    {
      icon: <Users className="w-6 h-6 text-brand-purple" />,
      title: "Initial Discussion",
      description: "We'll discuss your business challenges, goals, and current processes.",
      duration: "10 minutes",
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-brand-purple" />,
      title: "Opportunity Assessment",
      description: "We'll identify specific AI opportunities that align with your objectives.",
      duration: "15 minutes",
    },
    {
      icon: <FileText className="w-6 h-6 text-brand-purple" />,
      title: "Recommendations",
      description: "You'll receive actionable recommendations and next steps.",
      duration: "5 minutes",
    },
  ]

  return (
    <Card className="border-0 shadow-lg">
      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-6">
          <Clock className="w-5 h-5 text-brand-purple" />
          <h2 className="text-xl font-bold text-gray-900">What to Expect</h2>
        </div>

        <div className="space-y-6">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-violet-100 rounded-full flex items-center justify-center">{step.icon}</div>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-semibold text-gray-900">{step.title}</h3>
                  <span className="text-sm text-gray-500">{step.duration}</span>
                </div>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <span className="font-medium text-green-800">What You'll Get</span>
          </div>
          <ul className="text-sm text-green-700 space-y-1">
            <li>• Personalized AI strategy recommendations</li>
            <li>• Clear understanding of implementation costs</li>
            <li>• Timeline for potential AI projects</li>
            <li>• Follow-up resources and documentation</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
