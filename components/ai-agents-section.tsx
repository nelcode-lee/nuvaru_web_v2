import Image from "next/image"
import { Bot, BarChart3, Clock, Brain, MessageSquare } from "lucide-react"
import Link from "next/link"

export function AIAgentsSection() {
  const agentCards = [
    {
      title: "Customer Support Agent",
      icon: <MessageSquare className="h-8 w-8 text-white" />,
      description:
        "Handles customer queries 24/7 with 92% resolution rate, reducing support costs by 60% while improving satisfaction scores.",
      color: "from-blue-600 to-blue-400",
    },
    {
      title: "Data Analysis Agent",
      icon: <BarChart3 className="h-8 w-8 text-white" />,
      description:
        "Continuously analyses business data to identify trends, anomalies, and opportunities that human analysts might miss.",
      color: "from-violet-600 to-violet-400",
    },
    {
      title: "Operations Assistant",
      icon: <Clock className="h-8 w-8 text-white" />,
      description:
        "Automates scheduling, resource allocation, and process monitoring, reducing operational overhead by 42%.",
      color: "from-green-600 to-green-400",
    },
    {
      title: "Knowledge Agent",
      icon: <Brain className="h-8 w-8 text-white" />,
      description:
        "Connects to your business documents and systems to provide instant, accurate information to employees and customers.",
      color: "from-amber-600 to-amber-400",
    },
  ]

  const businessOutcomes = [
    {
      stat: "73%",
      label: "Reduction in Response Time",
      description: "AI agents respond instantly to queries, eliminating wait times for customers and employees",
    },
    {
      stat: "47%",
      label: "Increase in Operational Efficiency",
      description: "Automated workflows and intelligent resource allocation optimize business processes",
    },
    {
      stat: "3.2x",
      label: "Return on Investment",
      description: "Businesses see significant ROI within the first year of implementing AI agents",
    },
    {
      stat: "24/7",
      label: "Continuous Operation",
      description: "AI agents work around the clock without breaks, ensuring constant business coverage",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-24">
          <div className="inline-flex items-center justify-center p-2 bg-blue-100 rounded-full mb-4">
            <Bot className="h-6 w-6 text-brand-blue mr-2" />
            <span className="text-brand-blue font-medium">AI Agents</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Intelligent AI Agents That Transform Business Performance
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI agents work tirelessly behind the scenes, automating tasks, providing insights, and delivering
            exceptional experiences for your customers and employees.
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
                Explore our cutting-edge virtual-transport-manager-app, where logistics meets intelligent
                automation. Our Virtual Transport Manager tool helps you plan smarter and deliver more efficiently.
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
                alt="UK road freight with AI analytics overlay showing route optimization and efficiency metrics"
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
