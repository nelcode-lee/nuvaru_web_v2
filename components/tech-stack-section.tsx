import Image from "next/image"

export function TechStackSection() {
  const technologies = [
    {
      name: "Vercel",
      logo: "/vercel-logo.png",
    },
    {
      name: "Cursor",
      logo: "/placeholder.svg?key=r8ard",
    },
    {
      name: "V0.dev",
      logo: "/placeholder.svg?key=w8k99",
    },
    {
      name: "OpenAI",
      logo: "/abstract-geometric-logo.png",
    },
    {
      name: "Claude",
      logo: "/anthropic-claude-logo.png",
    },
    {
      name: "Manus",
      logo: "/abstract-tech-logo.png",
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-violet-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Our Technology Stack</h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-500">
            We leverage cutting-edge AI technologies to deliver powerful solutions
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {technologies.map((tech, index) => (
            <div key={index} className="text-center">
              <div className="relative h-16 w-16 md:h-20 md:w-20 mx-auto mb-2">
                <Image
                  src={tech.logo || "/placeholder.svg"}
                  alt={`${tech.name} logo`}
                  fill
                  className="object-contain"
                />
              </div>
              <p className="font-medium text-gray-700">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
