import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">About Nuvaru</h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-500">
            Bridging technical expertise with practical business experience
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div className="relative h-[300px] md:h-[400px] w-full rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/placeholder.svg"
              alt="The Deep - Hull's iconic aquarium and marine research center on the waterfront"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="text-white text-sm font-medium">The Deep - Hull's iconic landmark</p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Expertise That Delivers Results</h3>
            <p className="text-lg text-gray-600">
              Nuvaru was founded on the principle that effective AI implementation requires both technical knowledge and
              practical business experience. Our team brings a unique dual expertise in entrepreneurship and data
              science.
            </p>
            <p className="text-lg text-gray-600">
              With extensive background in logistics, recruitment, and payroll industries, we understand the real-world
              challenges businesses face and how AI can address them effectively.
            </p>
            <p className="text-lg text-gray-600">
              Based in Hull, UK, we're committed to helping local and national businesses harness the power of AI to
              optimise operations, drive efficiency, and scale effectively.
            </p>

            <Card className="bg-violet-50 border-0">
              <CardContent className="pt-6">
                <p className="italic text-gray-700">
                  "Our mission is to demystify AI and make it accessible and practical for businesses of all sizes. We
                  translate complex technology into tangible business benefits."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
