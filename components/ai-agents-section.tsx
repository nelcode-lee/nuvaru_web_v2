import Image from "next/image"
import { Bot, TruckIcon, Route, Warehouse, LineChart } from "lucide-react"
import Link from "next/link"

export function AIAgentsSection() {
  const agentCards = [
    {
      title: "Route Optimisation Agent",
      icon: <Route className="h-8 w-8 text-white" />,
      description:
        "Goal-based AI that analyses real-time traffic, weather, and delivery constraints to determine optimal routes, reducing fuel costs by 15% and transit times by 22%.",
      color: "from-brand-gold to-amber-500",
    },
    {
      title: "Fleet Management Agent",
      icon: <TruckIcon className="h-8 w-8 text-white" />,
      description:
        "Utility-based AI that maximises vehicle allocation, load capacities, and minimises empty runs, improving fleet utilisation by 42% while monitoring driver safety patterns.",
      color: "from-blue-600 to-blue-400",
    },
    {
      title: "Warehouse Automation Agent",
      icon: <Warehouse className="h-8 w-8 text-white" />,
      description:
        "Learning agent that coordinates AMRs, optimises picking routes, and manages inventory placement, reducing warehouse operating costs by 31% and improving accuracy to 99.8%.",
      color: "from-violet-600 to-violet-400",
    },
    {
      title: "Supply Chain Visibility Agent",
      icon: <LineChart className="h-8 w-8 text-white" />,
      description:
        "Predictive analytics agent providing end-to-end visibility, real-time tracking, and proactive alerts for potential disruptions across your entire logistics network.",
      color: "from-green-600 to-green-400",
    },
  ]

  const businessOutcomes = [
    {
      stat: "27%",
      label: "Reduction in Transportation Costs",
      description:
        "AI-powered route optimisation and load planning significantly reduce fuel consumption and delivery expenses",
    },
    {
      stat: "35%",
      label: "Improvement in On-Time Deliveries",
      description:
        "Predictive analytics and real-time traffic monitoring ensure reliable delivery schedules and customer satisfaction",
    },
    {
      stat: "42%",
      label: "Increase in Fleet Utilisation",
      description: "Intelligent scheduling and backhaul optimisation maximise vehicle capacity and reduce empty miles",
    },
    {
      stat: "24/7",
      label: "Supply Chain Visibility",
      description:
        "Real-time tracking and automated alerts provide complete transparency across the entire logistics network",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-24">
          <div className="inline-flex items-center justify-center p-2 bg-blue-100 rounded-full mb-4">
            <Bot className="h-6 w-6 text-brand-blue mr-2" />
            <span className="text-brand-blue font-medium">Logistics AI Agents</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Specialised AI Agents for Supply Chain Excellence</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our purpose-built AI agents optimise every aspect of your logistics operations, from route planning and
            fleet management to warehouse automation and supply chain visibility.
          </p>
        </div>

        {/* Agent Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-28">
          {agentCards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 flex flex-col"
            >
              <div className={`bg-gradient-to-r ${card.color} p-6`}>
                <div className="bg-white/20 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{card.title}</h3>
              </div>
              <div className="p-6 flex-grow">
                <p className="text-gray-600">{card.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Business Outcomes */}
        <div className="mb-28">
          <h3 className="text-2xl font-bold text-center mb-16">Measurable Business Outcomes</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessOutcomes.map((outcome, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center">
                <div className="text-4xl font-bold bg-gradient-brand bg-clip-text text-transparent mb-2">
                  {outcome.stat}
                </div>
                <h4 className="text-lg font-semibold mb-3">{outcome.label}</h4>
                <p className="text-gray-600 text-sm">{outcome.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Case Study Preview */}
        <div className="bg-gradient-to-r from-blue-600 to-violet-600 rounded-xl overflow-hidden shadow-xl">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-8 md:p-12 text-white">
              <h3 className="text-2xl font-bold mb-2">See AI Agents in Action</h3>
              <h3 className="text-xl font-semibold mb-4">Virtual Transport Manager</h3>
              <p className="mb-6">
                Explore our cutting-edge virtual-transport-manager-app, where logistics meets intelligent automation.
                Our Virtual Transport Manager tool helps you plan smarter and deliver more efficiently.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://virtual-transport-manager.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-white bg-green-600 hover:bg-green-700 transition-colors"
                >
                  Explore our VT Tool
                </a>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-white bg-gray-500 hover:bg-gray-600 transition-colors"
                >
                  View Our Services
                </Link>
              </div>
            </div>
            <div className="relative min-h-[300px] md:min-h-0">
              <Image
                src="/uk-freight-analytics.png"
                alt="UK road freight with AI analytics overlay showing route optimisation and efficiency metrics"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
