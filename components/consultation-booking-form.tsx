"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Target } from "lucide-react"
import { analytics } from "@/lib/analytics"

export function ConsultationBookingForm() {
  const [formData, setFormData] = useState({
    // Basic Information
    name: "",
    company: "",
    email: "",
    phone: "",
    jobTitle: "",

    // Service Interest & Challenges
    primaryService: "",
    currentChallenges: "",
    timeframe: "",

    // Consultation Preferences
    preferredTime: "",
    consultationType: "video",
  })

  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState<{
    success?: boolean
    message?: string
  }>({})
  const totalSteps = 2

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormStatus({})

    // Track the consultation booking
    analytics.consultationBooking(formData.primaryService)

    try {
      // Format the message for email
      const message = `
New Consultation Booking Request

CONTACT INFORMATION:
Name: ${formData.name}
Job Title: ${formData.jobTitle}
Company: ${formData.company}
Email: ${formData.email}
Phone: ${formData.phone || "Not provided"}

SERVICE DETAILS:
Primary Service: ${formData.primaryService}
Current Challenges: ${formData.currentChallenges}
Implementation Timeframe: ${formData.timeframe || "Not specified"}

CONSULTATION PREFERENCES:
Preferred Time: ${formData.preferredTime || "Not specified"}
Consultation Type: ${formData.consultationType}

Submitted at: ${new Date().toLocaleString("en-GB")}
      `.trim()

      // Send the email using our API route
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: `Consultation Request from ${formData.name} - ${formData.company}`,
          message: message,
        }),
      })

      const result = await response.json()

      if (result.success) {
        setFormStatus({
          success: true,
          message: "Thank you! We'll contact you within 24 hours to schedule your consultation.",
        })

        // Reset form
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          jobTitle: "",
          primaryService: "",
          currentChallenges: "",
          timeframe: "",
          preferredTime: "",
          consultationType: "video",
        })
        setCurrentStep(1)
      } else {
        setFormStatus({
          success: false,
          message: "There was an error submitting your request. Please try again or contact us directly.",
        })
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setFormStatus({
        success: false,
        message:
          "Sorry, there was an error submitting your booking. Please try again or email us directly at info@nuvaru.co.uk",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, totalSteps))
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1))

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.name && formData.company && formData.email && formData.jobTitle
      case 2:
        return formData.primaryService && formData.currentChallenges
      default:
        return false
    }
  }

  return (
    <Card className="shadow-xl border-0 bg-white/95 backdrop-blur">
      <CardHeader className="text-center pb-6">
        <CardTitle className="text-2xl font-bold text-gray-900">Schedule Your Consultation</CardTitle>
        <div className="flex justify-center mt-4">
          <div className="flex space-x-2">
            {[1, 2].map((step) => (
              <div
                key={step}
                className={`w-3 h-3 rounded-full ${step <= currentStep ? "bg-brand-purple" : "bg-gray-200"}`}
              />
            ))}
          </div>
        </div>
        <p className="text-sm text-gray-600 mt-2">
          Step {currentStep} of {totalSteps}
        </p>
      </CardHeader>

      <CardContent>
        {formStatus.message && (
          <div
            className={`mb-6 p-4 rounded-md ${
              formStatus.success ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"
            }`}
          >
            {formStatus.message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Step 1: Basic Information */}
          {currentStep === 1 && (
            <div className="space-y-4">
              <div className="text-center mb-6">
                <Users className="w-8 h-8 text-brand-purple mx-auto mb-2" />
                <h3 className="text-lg font-semibold">Tell us about yourself</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Smith"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="jobTitle">Job Title *</Label>
                  <Input
                    id="jobTitle"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleInputChange}
                    placeholder="CEO, CTO, Operations Manager"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">Company Name *</Label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Your Company Ltd"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@company.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+44 7XXX XXXXXX"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Service Interest & Scheduling */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <Target className="w-8 h-8 text-brand-purple mx-auto mb-2" />
                <h3 className="text-lg font-semibold">What can we help you with?</h3>
              </div>

              <div className="space-y-2">
                <Label>What's your main area of interest? *</Label>
                <RadioGroup
                  value={formData.primaryService}
                  onValueChange={(value) => handleSelectChange("primaryService", value)}
                  className="grid grid-cols-1 gap-3"
                >
                  <div className="flex items-center space-x-2 bg-gray-50 p-3 rounded-md">
                    <RadioGroupItem value="ai-readiness" id="ai-readiness-2" />
                    <Label htmlFor="ai-readiness-2" className="cursor-pointer flex-1">
                      <div className="font-medium">AI Readiness Assessment</div>
                      <div className="text-sm text-gray-600">Evaluate AI opportunities for your business</div>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 bg-gray-50 p-3 rounded-md">
                    <RadioGroupItem value="custom-ai" id="custom-ai-2" />
                    <Label htmlFor="custom-ai-2" className="cursor-pointer flex-1">
                      <div className="font-medium">Custom AI Solutions</div>
                      <div className="text-sm text-gray-600">Develop tailored AI applications</div>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 bg-gray-50 p-3 rounded-md">
                    <RadioGroupItem value="process-automation" id="process-automation-2" />
                    <Label htmlFor="process-automation-2" className="cursor-pointer flex-1">
                      <div className="font-medium">Process Automation</div>
                      <div className="text-sm text-gray-600">Automate repetitive tasks and workflows</div>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 bg-gray-50 p-3 rounded-md">
                    <RadioGroupItem value="data-analysis" id="data-analysis-2" />
                    <Label htmlFor="data-analysis-2" className="cursor-pointer flex-1">
                      <div className="font-medium">Data Analysis & Optimization</div>
                      <div className="text-sm text-gray-600">Extract insights from your data</div>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 bg-gray-50 p-3 rounded-md">
                    <RadioGroupItem value="general" id="general-2" />
                    <Label htmlFor="general-2" className="cursor-pointer flex-1">
                      <div className="font-medium">General AI Consultation</div>
                      <div className="text-sm text-gray-600">Explore how AI can benefit your business</div>
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="currentChallenges">What's your main business challenge? *</Label>
                <Textarea
                  id="currentChallenges"
                  name="currentChallenges"
                  value={formData.currentChallenges}
                  onChange={handleInputChange}
                  placeholder="Briefly describe the main challenge you'd like to discuss (e.g., manual processes taking too long, need better data insights, want to improve customer service...)"
                  className="min-h-[80px]"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="timeframe">When are you looking to implement?</Label>
                  <Select onValueChange={(value) => handleSelectChange("timeframe", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select timeframe" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="asap">As soon as possible</SelectItem>
                      <SelectItem value="1-3months">1-3 months</SelectItem>
                      <SelectItem value="3-6months">3-6 months</SelectItem>
                      <SelectItem value="exploring">Just exploring options</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="preferredTime">Preferred consultation time</Label>
                  <Select onValueChange={(value) => handleSelectChange("preferredTime", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select preferred time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="morning">Morning (9 AM - 12 PM)</SelectItem>
                      <SelectItem value="afternoon">Afternoon (12 PM - 5 PM)</SelectItem>
                      <SelectItem value="flexible">I'm flexible</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label>How would you like to meet?</Label>
                <RadioGroup
                  value={formData.consultationType}
                  onValueChange={(value) => handleSelectChange("consultationType", value)}
                  className="flex flex-wrap gap-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="video" id="video" />
                    <Label htmlFor="video" className="cursor-pointer">
                      Video Call
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="phone" id="phone" />
                    <Label htmlFor="phone" className="cursor-pointer">
                      Phone Call
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="in-person" id="in-person" />
                    <Label htmlFor="in-person" className="cursor-pointer">
                      In-Person
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between pt-6 border-t">
            {currentStep > 1 && (
              <Button type="button" variant="outline" onClick={prevStep} disabled={isSubmitting}>
                Previous
              </Button>
            )}

            {currentStep < totalSteps ? (
              <Button
                type="button"
                onClick={nextStep}
                disabled={!isStepValid() || isSubmitting}
                className="ml-auto bg-gradient-brand hover:bg-brand-purple-dark"
              >
                Next
              </Button>
            ) : (
              <Button
                type="submit"
                disabled={!isStepValid() || isSubmitting}
                className="ml-auto bg-gradient-brand hover:bg-brand-purple-dark"
              >
                {isSubmitting ? "Submitting..." : "Book Consultation"}
              </Button>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
