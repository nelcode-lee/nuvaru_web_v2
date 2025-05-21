import { Truck, Users, Calculator, Building2 } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function IndustryExpertiseSection() {
  const industries = [
    {
      title: "Logistics & Supply Chain",
      icon: <Truck className="h-12 w-12 text-brand-blue" />,
      description: "Optimise routes, predict maintenance needs, and automate inventory management",
    },
    {
      title: "Recruitment & Talent Acquisition",
      icon: <Users className="h-12 w-12 text-brand-purple" />,
      description: "Streamline candidate screening, match skills to roles, and predict hiring success",
    },
    {
      title: "Payroll & Finance",
      icon: <Calculator className="h-12 w-12 text-brand-blue" />,
      description: "Automate financial processes, detect anomalies, and forecast cash flow",
    },
    {
      title: "Small-to-Medium Enterprises",
      icon: <Building2 className="h-12 w-12 text-brand-purple" />,
      description: "Affordable AI solutions scaled to fit growing businesses",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Industry Expertise</h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-500">
            We specialise in bringing AI solutions to these key industries
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry, index) => (
            <Card key={index} className="text-center border-0 shadow-lg">
              <CardHeader className="pb-2">
                <div className="mx-auto mb-4">{industry.icon}</div>
                <CardTitle className="text-xl font-bold">{industry.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">{industry.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
