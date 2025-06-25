import { Truck, HardHat, Warehouse, Cog } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function IndustryExpertiseSection() {
  const industries = [
    {
      title: "Road Transport & Haulage",
      icon: <Truck className="h-12 w-12 text-brand-gold" />,
      description:
        "Route optimisation, fleet management, predictive maintenance, and driver safety monitoring for maximum efficiency",
    },
    {
      title: "Warehousing & Storage",
      icon: <Warehouse className="h-12 w-12 text-brand-gold" />,
      description:
        "Automated storage systems, robotic picking, inventory optimisation, and warehouse management solutions",
    },
    {
      title: "Construction & Building",
      icon: <HardHat className="h-12 w-12 text-brand-gold" />,
      description:
        "Project management automation, resource allocation, safety monitoring, and progress tracking for construction projects",
    },
    {
      title: "Engineering & Design",
      icon: <Cog className="h-12 w-12 text-brand-gold" />,
      description:
        "CAD automation, design optimisation, project coordination, and technical documentation management for engineering projects",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Industry Expertise</h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-500">
            Specialised AI solutions tailored for every sector of the logistics and supply chain ecosystem
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
