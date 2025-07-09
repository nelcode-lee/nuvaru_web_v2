"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Mail, MapPin, MessageSquare } from "lucide-react"
import { submitContactForm } from "@/app/actions/contact"
import { useActionState } from "react"

export function ContactSection() {
  const [state, formAction, isPending] = useActionState(submitContactForm, null)

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Get in Touch</h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-500">
            Ready to explore how Web, AI and Automation can transform your business? Contact us today.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2 h-full">
          <div className="space-y-8">
            <div className="h-full flex flex-col">
              <div className="flex-grow space-y-8 mb-8">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-violet-100 p-3">
                    <MapPin className="h-6 w-6 text-brand-purple" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Our Location</h3>
                    <p className="text-gray-600">Hull, East Yorkshire, UK</p>
                    <p className="text-gray-600">Serving businesses across the UK</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-violet-100 p-3">
                    <Mail className="h-6 w-6 text-brand-purple" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Email Us</h3>
                    <p className="text-gray-600">info@nuvaru.co.uk</p>
                    <p className="text-gray-600">support@nuvaru.co.uk</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-green-100 p-3">
                    <MessageSquare className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">WhatsApp Us</h3>
                    <p className="text-gray-600">Quick responses during business hours</p>
                    <a
                      href="https://wa.me/447741654145?text=Hello%20Nuvaru,%20I'm%20interested%20in%20discussing%20how%20your%20AI%20solutions%20could%20help%20my%20business."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center mt-2 text-green-600 hover:text-green-700 font-medium"
                    >
                      Message on WhatsApp
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex-grow rounded-lg overflow-hidden h-[300px] md:h-[400px] lg:h-[450px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37385.66849250732!2d-0.3697365!3d53.7456709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4878bf4a1dbd7b93%3A0x4853184b9e920d98!2sHull!5e0!3m2!1sen!2suk!4v1651234567890!5m2!1sen!2suk"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Nuvaru location map"
                ></iframe>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-violet-50 to-blue-50 p-8 rounded-lg shadow-md">
            <h3 className="mb-6 text-2xl font-bold text-gray-900">Contact Form</h3>
            <form action={formAction} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name *</Label>
                <Input id="name" name="name" required className="w-full" placeholder="Your name" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">Company *</Label>
                <Input id="company" name="company" required className="w-full" placeholder="Your company name" />
              </div>

              <div className="space-y-2 mt-6">
                <Label>What service are you most interested in?</Label>
                <RadioGroup
                  defaultValue="ai-readiness"
                  className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2"
                  name="serviceType"
                >
                  <div className="flex items-center space-x-2 bg-white/60 p-3 rounded-md">
                    <RadioGroupItem value="ai-readiness" id="ai-readiness" />
                    <Label htmlFor="ai-readiness" className="cursor-pointer">
                      AI Readiness Assessment
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 bg-white/60 p-3 rounded-md">
                    <RadioGroupItem value="custom-ai" id="custom-ai" />
                    <Label htmlFor="custom-ai" className="cursor-pointer">
                      Custom AI Solutions
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 bg-white/60 p-3 rounded-md">
                    <RadioGroupItem value="process-automation" id="process-automation" />
                    <Label htmlFor="process-automation" className="cursor-pointer">
                      Process Automation
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 bg-white/60 p-3 rounded-md">
                    <RadioGroupItem value="data-analysis" id="data-analysis" />
                    <Label htmlFor="data-analysis" className="cursor-pointer">
                      Data Analysis & Optimization
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 bg-white/60 p-3 rounded-md">
                    <RadioGroupItem value="gdpr-compliance" id="gdpr-compliance" />
                    <Label htmlFor="gdpr-compliance" className="cursor-pointer">
                      GDPR Compliance Solutions
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 bg-white/60 p-3 rounded-md">
                    <RadioGroupItem value="ai-implementation" id="ai-implementation" />
                    <Label htmlFor="ai-implementation" className="cursor-pointer">
                      AI Implementation & Training
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 bg-white/60 p-3 rounded-md">
                    <RadioGroupItem value="website-development" id="website-development" />
                    <Label htmlFor="website-development" className="cursor-pointer">
                      Website Development
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 bg-white/60 p-3 rounded-md">
                    <RadioGroupItem value="web-app-development" id="web-app-development" />
                    <Label htmlFor="web-app-development" className="cursor-pointer">
                      Web App Development
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 bg-white/60 p-3 rounded-md">
                    <RadioGroupItem value="web-portal-development" id="web-portal-development" />
                    <Label htmlFor="web-portal-development" className="cursor-pointer">
                      Web Portal Development
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full"
                  placeholder="your.email@company.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone (optional)</Label>
                <Input id="phone" name="phone" type="tel" className="w-full" placeholder="Your phone number" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="challenge">How can we help your business? *</Label>
                <Textarea
                  id="challenge"
                  name="challenge"
                  required
                  className="w-full min-h-[100px]"
                  placeholder="Tell us about your business challenges and what you're hoping to achieve"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="source">How did you hear about us?</Label>
                <Select name="source">
                  <SelectTrigger id="source" className="w-full">
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="search">Search Engine</SelectItem>
                    <SelectItem value="social">Social Media</SelectItem>
                    <SelectItem value="referral">Referral</SelectItem>
                    <SelectItem value="event">Event</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button
                type="submit"
                disabled={isPending}
                className="w-full bg-gradient-brand hover:bg-brand-purple-dark text-lg py-4 font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                {isPending ? "Submitting..." : "Get Your Free Consultation →"}
              </Button>
            </form>
            {state && (
              <div className={`mt-4 text-center ${state.success ? "text-green-600" : "text-red-600"}`}>
                {state.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
