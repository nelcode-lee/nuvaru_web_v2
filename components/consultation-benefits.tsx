import { Card, CardContent } from "@/components/ui/card"
import { Shield, Award, Clock, TrendingUp } from "lucide-react"

export function ConsultationBenefits() {
  const benefits = [
    {
      icon: <Shield className="w-6 h-6 text-blue-600" />,
      title: "Risk-Free Assessment",
      description: "No cost, no commitment. Just valuable insights for your business.",
    },
    {
      icon: <Award className="w-6 h-6 text-purple-600" />,
      title: "Expert Guidance",
      description: "Learn from AI specialists with proven track records across industries.",
    },
    {
      icon: <Clock className="w-6 h-6 text-green-600" />,
      title: "Quick Turnaround",
      description: "Get actionable recommendations within 30 minutes of conversation.",
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-orange-600" />,
      title: "Growth Opportunities",
      description: "Discover untapped potential for efficiency and revenue growth.",
    },
  ]

  return (
    <Card className="border-0 shadow-lg">
      <CardContent className="p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Why Book a Consultation?</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex gap-3 p-3 rounded-lg bg-gray-50">
              <div className="flex-shrink-0">{benefit.icon}</div>
              <div>
                <h3 className="font-medium text-gray-900 mb-1">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <h3 className="font-medium text-blue-900 mb-2">Perfect for businesses that:</h3>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• Want to explore AI but don't know where to start</li>
            <li>• Are struggling with manual, time-consuming processes</li>
            <li>• Need to improve efficiency and reduce costs</li>
            <li>• Want to stay competitive in their industry</li>
            <li>• Are considering digital transformation initiatives</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
