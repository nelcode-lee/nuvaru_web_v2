"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Database, Cog, LineChart, BarChart3, Shield, Users } from "lucide-react"
import { useState } from "react"
import { AIReadinessAssessmentModal } from "./ai-readiness-assessment-modal"

export function WhatWeDoHowWeHelpSection() {
  const services = [
    {
      title: "AI Readiness Assessment",
      description: "Identify your AI opportunities and data strengths.",
      icon: <Database className="h-8 w-8 text-brand-purple" />,
      link: "/services/ai-readiness-assessment",
    },
    {
      title: "Custom AI Solutions",
      description: "Tailored AI tools for your business challenges.",
      icon: <Cog className="h-8 w-8 text-brand-blue" />,
      link: "/services/custom-ai-solutions",
    },
    {
      title: "Process Automation",
      description: "Automate workflows and save time.",
      icon: <LineChart className="h-8 w-8 text-brand-purple" />,
      link: "/services/process-automation",
    },
    {
      title: "Data Analysis & Optimisation",
      description: "Unlock insights and drive decisions.",
      icon: <BarChart3 className="h-8 w-8 text-brand-blue" />,
      link: "/services/data-analysis-optimization",
    },
    {
      title: "GDPR Compliance Solutions",
      description: "Stay compliant with AI-powered tools.",
      icon: <Shield className="h-8 w-8 text-brand-purple" />,
      link: "/services/gdpr-compliance-solutions",
    },
    {
      title: "AI Implementation & Training",
      description: "Integrate AI and upskill your team.",
      icon: <Users className="h-8 w-8 text-brand-blue" />,
      link: "/services/ai-implementation-training",
    },
  ]

  const [showAssessment, setShowAssessment] = useState(false)

  return (
    <section className="py-16 md:py-24 bg-white border-b">
      <div className="container mx-auto px-4 md:px-6">
        {/* What We Do */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What We Do</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We help UK businesses grow with practical, agentic AI and automation. Explore our core services:
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
          {services.map((service, i) => (
            <Link
              key={i}
              href={service.link}
              className="group block bg-gray-50 rounded-xl p-6 shadow hover:shadow-md transition border border-gray-100 hover:border-brand-purple"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="font-semibold text-lg text-gray-900 mb-1 group-hover:text-brand-purple transition-colors">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </Link>
          ))}
        </div>
        {/* How We Help */}
        <div className="mb-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">How We Help</h3>
          <div className="flex flex-col md:flex-row justify-center gap-8 mb-6">
            <div>
              <div className="text-3xl font-bold text-brand-purple mb-1">40%</div>
              <div className="text-gray-700">Average cost reduction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-blue mb-1">32%</div>
              <div className="text-gray-700">Increase in conversion rates</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-1">100%</div>
              <div className="text-gray-700">Compliance rate for clients</div>
            </div>
          </div>
          <p className="text-gray-600 max-w-xl mx-auto">
            Our solutions deliver measurable business impact—whether you want to cut costs, grow revenue, or stay compliant.
          </p>
        </div>
        {/* Free Website Audit CTA */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Get a Free Website Audit</h3>
          <p className="text-gray-700 mb-6 max-w-xl mx-auto">
            Discover how your website can perform better. Get a free, AI-powered audit with actionable recommendations for performance, SEO, and conversions.
          </p>
          <Button
            className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white text-lg py-4 px-8"
            asChild
          >
            <Link href="#" onClick={e => {
              e.preventDefault()
              setShowAssessment(true)
            }}>
              Start Free Website Audit
            </Link>
          </Button>
        </div>

        {/* Business Capability Audit CTA */}
        <div className="text-center mt-8 pt-8 border-t border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Business Capability Audit</h3>
          <p className="text-gray-700 mb-6 max-w-xl mx-auto">
            Understand your current capabilities and discover how AI & automation can transform your business operations, time optimization, and revenue generation.
          </p>
          <Button
            variant="outline"
            className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 text-lg py-4 px-8"
            asChild
          >
            <Link href="/business-audit">Start Business Audit</Link>
          </Button>
        </div>
        {/* Placeholder for future video embed */}
        <div className="text-center mt-8" />
      </div>
    </section>
  )
} 