"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Mail, Phone, MapPin } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    challenge: "",
    source: "",
    serviceType: "ai-readiness", // Default value
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, source: value }))
  }

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, serviceType: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission - would connect to a server action in a real implementation
    console.log("Form submitted:", formData)
    alert("Thank you for your inquiry! We'll be in touch soon.")
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      challenge: "",
      source: "",
      serviceType: "ai-readiness",
    })
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Get in Touch</h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-500">
            Ready to explore how AI can transform your business? Contact us today.
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
                    <p className="text-gray-600">info@nuvaru.com</p>
                    <p className="text-gray-600">support@nuvaru.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-violet-100 p-3">
                    <Phone className="h-6 w-6 text-brand-purple" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Call Us</h3>
                    <p className="text-gray-600">+44 (0)1482 000000</p>
                    <p className="text-gray-600">Monday-Friday, 9am-5pm</p>
                  </div>
                </div>
              </div>

              <div className="flex-grow rounded-lg overflow-hidden h-[400px] md:h-[450px]">
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
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full"
                  placeholder="Your name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">Company *</Label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="w-full"
                  placeholder="Your company name"
                />
              </div>

              <div className="space-y-2 mt-6">
                <Label>What service are you most interested in?</Label>
                <RadioGroup
                  defaultValue="ai-readiness"
                  value={formData.serviceType}
                  onValueChange={handleRadioChange}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2"
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
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full"
                  placeholder="your.email@company.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone (optional)</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full"
                  placeholder="Your phone number"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="challenge">How can we help your business? *</Label>
                <Textarea
                  id="challenge"
                  name="challenge"
                  value={formData.challenge}
                  onChange={handleChange}
                  required
                  className="w-full min-h-[100px]"
                  placeholder="Tell us about your business challenges and what you're hoping to achieve"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="source">How did you hear about us?</Label>
                <Select onValueChange={handleSelectChange} value={formData.source}>
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

              <Button type="submit" className="w-full bg-gradient-brand hover:bg-brand-purple-dark">
                Submit Enquiry
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
