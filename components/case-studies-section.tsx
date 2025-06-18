import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export function CaseStudiesSection() {
  const caseStudies = [
    {
      title: "Driving Efficiency in UK Flatbed Transport",
      industry: "Logistics",
      challenge:
        "Rising fuel costs, traffic congestion, inefficient resource allocation, and complex compliance requirements in flatbed transport operations",
      solution:
        "UK Transport Manager AI system with real-time traffic analysis, dynamic fuel optimisation, intelligent vehicle selection, and automated compliance management",
      results:
        "17% average cost reduction, 14% revenue increase through optimised backhaul utilization, 98% compliance incident reduction, and 23% improvement in customer satisfaction",
      image: "/highway-monitoring-system.png",
      link: "https://virtual-transport-manager.vercel.app/",
      extended: true,
    },
    {
      title: "Customer Service Agent for SMEs",
      industry: "Customer Support",
      challenge:
        "Small businesses struggling with customer service demands, long response times, and inability to provide 24/7 support",
      solution:
        "AI-powered customer service agent that handles inquiries, resolves common issues, and escalates complex problems",
      results: "65% reduction in response time, 40% cost savings compared to traditional staffing, 24/7 availability",
      image: "/ai-customer-service.png",
      link: "https://customer-service-agent.vercel.app/",
      extended: false,
    },
    {
      title: "Sustainability Compliance Assistant",
      industry: "Environmental Compliance",
      challenge:
        "UK haulage operations struggling with complex environmental regulations, carbon footprint tracking, ULEZ compliance, and sustainability reporting requirements",
      solution:
        "Comprehensive AI-powered dashboard monitoring environmental impact, real-time compliance tracking for ULEZ/CAZ/Euro 6 standards, carbon footprint analysis, and automated sustainability reporting",
      results:
        "100% regulatory compliance achievement, 35% carbon footprint reduction, £50,000 annual cost savings through optimized environmental performance",
      image: "/sustainability-compliance-dashboard.jpg",
      link: "https://v0-sustainability-compliance-assis.vercel.app/",
      extended: true,
    },
  ]

  return (
    <section id="case-studies" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Transformation in Action</h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-500">
            See how our AI solutions have delivered measurable results for businesses like yours
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study, index) => (
            <Card key={index} className="overflow-hidden border-0 shadow-lg">
              <div className="relative h-48 w-full">
                <Image src={study.image || "/placeholder.svg"} alt={study.title} fill className="object-cover" />
                {index === 0 && (
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-2">
                    <p className="text-white text-xs">AI-powered traffic monitoring system for route optimisation</p>
                  </div>
                )}
                {index === 2 && (
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-2">
                    <p className="text-white text-xs">
                      Eco-friendly transport operations with environmental compliance monitoring
                    </p>
                  </div>
                )}
              </div>
              <CardHeader className="pb-2">
                <div className="mb-2">
                  <Badge variant="outline" className="bg-violet-50 text-brand-purple hover:bg-violet-100">
                    {study.industry}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold">{study.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div>
                  <h4 className="font-semibold text-gray-900">Challenge:</h4>
                  <p className="text-gray-500">{study.challenge}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Solution:</h4>
                  <p className="text-gray-500">{study.solution}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Results:</h4>
                  <p className="text-gray-500">{study.results}</p>
                </div>
                {study.extended && index === 0 && (
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="text-gray-500 text-sm space-y-1">
                      <li>• Real-time traffic analysis with advanced APIs</li>
                      <li>• Dynamic fuel price integration saving £0.05-0.08 per liter</li>
                      <li>• Optimal vehicle selection based on cargo specifications</li>
                      <li>• Driver hours optimisation with regulatory compliance</li>
                      <li>• Approved routes database for heavy/oversized loads</li>
                      <li>• Environmental zone management for city restrictions</li>
                    </ul>
                  </div>
                )}
                {study.extended && index === 2 && (
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="text-gray-500 text-sm space-y-1">
                      <li>• Real-time ULEZ, CAZ, and Euro 6 compliance monitoring</li>
                      <li>• Carbon footprint tracking with trend analysis</li>
                      <li>• Automated SECR and OCRS reporting</li>
                      <li>• AI-powered sustainability recommendations</li>
                      <li>• Fleet emissions optimisation and maintenance scheduling</li>
                      <li>• Regulatory deadline notifications and compliance calendar</li>
                    </ul>
                  </div>
                )}
              </CardContent>
              <CardFooter className="flex flex-col items-start gap-3">
                {study.link && (
                  <Link
                    href={study.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:bg-brand-blue/90 px-4 py-2 rounded-md text-sm font-medium transition-colors bg-brand-gold"
                  >
                    {index === 0
                      ? "Experience the Transport Manager AI"
                      : index === 1
                        ? "Try the Customer Service Agent"
                        : "Experience EcoHaulage Dashboard"}
                  </Link>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
