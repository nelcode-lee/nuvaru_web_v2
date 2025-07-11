"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Download, Mail } from "lucide-react"
import Link from "next/link"
import jsPDF from "jspdf"
import html2canvas from "html2canvas"

interface FormData {
  // Step 1: Contact Details
  name: string
  email: string
  company: string
  
  // Step 2: Industry & Size
  industry: string
  otherIndustry: string
  companySize: string
  
  // Step 3: Current Technologies
  technologies: string[]
  
  // Step 4: Time Estimation
  timeSpent: {
    dataEntry: string
    reporting: string
    customerService: string
    scheduling: string
    compliance: string
  }
  
  // Step 5: Pain Points
  painPoints: string[]
  
  // Step 6: Revenue Metrics (Optional)
  annualRevenue: string
  growthRate: string
  
  // Step 7: Results
  reportGenerated: boolean
  
  // Step 8: Industry Comparisons
  industryBenchmarks: {
    automationAdoption: number
    timeSavingsPotential: number
    avgROI: number
    commonTechnologies: string[]
    topPainPoints: string[]
  } | null
}

const industries = [
  "Logistics",
  "Construction", 
  "Professional Services",
  "Retail & Leisure",
  "Manufacturing",
  "Other"
]

const companySizes = [
  "1-10 employees",
  "11-50 employees", 
  "51-200 employees",
  "201-1000 employees",
  "1000+ employees"
]

const commonTechnologies = [
  "CRM (Salesforce, HubSpot, etc.)",
  "ERP System",
  "Accounting Software",
  "Email Marketing Tools",
  "Project Management Tools",
  "Spreadsheets (Excel/Google Sheets)",
  "Custom Software",
  "Cloud Storage",
  "Communication Tools",
  "Analytics Tools"
]

const painPoints = [
  "Manual data entry takes too much time",
  "Repetitive tasks are error-prone",
  "Limited scalability with current processes",
  "Poor customer response times",
  "Difficulty tracking performance metrics",
  "Compliance reporting is complex",
  "Team collaboration is inefficient",
  "Data silos across departments"
]

// Industry benchmarking data
const industryBenchmarks = {
  "Logistics": {
    automationAdoption: 68,
    timeSavingsPotential: 32,
    avgROI: 310,
    commonTechnologies: ["ERP System", "Project Management Tools", "Analytics Tools", "Custom Software"],
    topPainPoints: ["Manual data entry takes too much time", "Limited scalability with current processes", "Difficulty tracking performance metrics"]
  },
  "Construction": {
    automationAdoption: 45,
    timeSavingsPotential: 28,
    avgROI: 260,
    commonTechnologies: ["Project Management Tools", "Accounting Software", "Communication Tools", "Analytics Tools"],
    topPainPoints: ["Manual data entry takes too much time", "Team collaboration is inefficient", "Repetitive tasks are error-prone"]
  },
  "Professional Services": {
    automationAdoption: 72,
    timeSavingsPotential: 33,
    avgROI: 310,
    commonTechnologies: ["CRM", "Accounting Software", "Project Management Tools", "Analytics Tools"],
    topPainPoints: ["Manual data entry takes too much time", "Repetitive tasks are error-prone", "Difficulty tracking performance metrics"]
  },
  "Retail & Leisure": {
    automationAdoption: 58,
    timeSavingsPotential: 26,
    avgROI: 240,
    commonTechnologies: ["CRM", "Accounting Software", "Email Marketing Tools", "Analytics Tools"],
    topPainPoints: ["Poor customer response times", "Manual data entry takes too much time", "Difficulty tracking performance metrics"]
  },
  "Manufacturing": {
    automationAdoption: 65,
    timeSavingsPotential: 31,
    avgROI: 290,
    commonTechnologies: ["ERP System", "Project Management Tools", "Analytics Tools", "Custom Software"],
    topPainPoints: ["Limited scalability with current processes", "Manual data entry takes too much time", "Team collaboration is inefficient"]
  },
  "Other": {
    automationAdoption: 55,
    timeSavingsPotential: 25,
    avgROI: 250,
    commonTechnologies: ["CRM", "Accounting Software", "Project Management Tools", "Communication Tools"],
    topPainPoints: ["Manual data entry takes too much time", "Repetitive tasks are error-prone", "Limited scalability with current processes"]
  }
}

export function BusinessAuditForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    industry: "",
    otherIndustry: "",
    companySize: "",
    technologies: [],
    timeSpent: {
      dataEntry: "",
      reporting: "",
      customerService: "",
      scheduling: "",
      compliance: ""
    },
    painPoints: [],
    annualRevenue: "",
    growthRate: "",
    reportGenerated: false,
    industryBenchmarks: null
  })

  const totalSteps = 8

  const updateFormData = (field: keyof FormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const updateTimeSpent = (field: keyof FormData['timeSpent'], value: string) => {
    setFormData(prev => ({
      ...prev,
      timeSpent: { ...prev.timeSpent, [field]: value }
    }))
  }

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const generateReport = () => {
    // Calculate industry benchmarks
    const benchmark = industryBenchmarks[formData.industry as keyof typeof industryBenchmarks] || industryBenchmarks["Other"]
    
    // Calculate user's automation score
    const userAutomationScore = Math.min(100, (formData.technologies.length / 5) * 100)
    
    // Calculate time savings potential based on pain points
    const timeSavingsMultiplier = formData.painPoints.length > 3 ? 1.2 : 1.0
    const userTimeSavingsPotential = Math.round(benchmark.timeSavingsPotential * timeSavingsMultiplier)
    
    updateFormData('industryBenchmarks', {
      ...benchmark,
      automationAdoption: benchmark.automationAdoption,
      timeSavingsPotential: userTimeSavingsPotential,
      avgROI: benchmark.avgROI
    })
    
    // Simulate report generation
    updateFormData('reportGenerated', true)
    
    // Automatically advance to industry benchmarking step
    setCurrentStep(8)
  }

  const downloadPDF = async () => {
    try {
      // Create a temporary div to render the report content
      const reportContent = document.createElement('div')
      reportContent.style.padding = '40px'
      reportContent.style.fontFamily = 'Arial, sans-serif'
      reportContent.style.maxWidth = '800px'
      reportContent.style.margin = '0 auto'
      reportContent.style.backgroundColor = 'white'
      reportContent.style.color = 'black'
      
      // Generate the report HTML
      const reportHTML = generateReportHTML()
      reportContent.innerHTML = reportHTML
      
      // Add to document temporarily
      document.body.appendChild(reportContent)
      
      // Convert to canvas
      const canvas = await html2canvas(reportContent, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff'
      })
      
      // Remove from document
      document.body.removeChild(reportContent)
      
      // Create PDF
      const imgData = canvas.toDataURL('image/png')
      const pdf = new jsPDF('p', 'mm', 'a4')
      const imgWidth = 210
      const pageHeight = 295
      const imgHeight = (canvas.height * imgWidth) / canvas.width
      let heightLeft = imgHeight
      
      let position = 0
      
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight)
      heightLeft -= pageHeight
      
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight
        pdf.addPage()
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight)
        heightLeft -= pageHeight
      }
      
      // Download the PDF
      const fileName = `business-capability-audit-${formData.company.replace(/\s+/g, '-').toLowerCase()}-${new Date().toISOString().split('T')[0]}.pdf`
      pdf.save(fileName)
      
    } catch (error) {
      console.error('Error generating PDF:', error)
      alert('There was an error generating the PDF. Please try again.')
    }
  }

  const generateReportHTML = () => {
    const benchmark = formData.industryBenchmarks
    const automationScore = Math.round((formData.technologies.length / 5) * 100)
    const commonPainPoints = formData.painPoints.filter(p => benchmark?.topPainPoints.includes(p)).length
    
    return `
      <div style="font-family: Arial, sans-serif; color: #333;">
        <!-- Header -->
        <div style="text-align: center; margin-bottom: 40px; border-bottom: 3px solid #3b82f6; padding-bottom: 20px;">
          <h1 style="color: #1f2937; margin: 0; font-size: 28px;">Business Capability Audit Report</h1>
          <p style="color: #6b7280; margin: 10px 0 0 0; font-size: 16px;">Generated on ${new Date().toLocaleDateString()}</p>
        </div>

        <!-- Company Information -->
        <div style="margin-bottom: 30px;">
          <h2 style="color: #1f2937; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px; font-size: 20px;">Company Information</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 150px;">Company Name:</td>
              <td style="padding: 8px 0;">${formData.company}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Contact Name:</td>
              <td style="padding: 8px 0;">${formData.name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Email:</td>
              <td style="padding: 8px 0;">${formData.email}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Industry:</td>
              <td style="padding: 8px 0;">${formData.industry}${formData.industry === "Other" ? ` (${formData.otherIndustry})` : ''}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Company Size:</td>
              <td style="padding: 8px 0;">${formData.companySize}</td>
            </tr>
          </table>
        </div>

        <!-- Current Technologies -->
        <div style="margin-bottom: 30px;">
          <h2 style="color: #1f2937; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px; font-size: 20px;">Current Technologies</h2>
          <p style="margin-bottom: 15px;">Your business currently uses ${formData.technologies.length} technology solutions:</p>
          <ul style="margin: 0; padding-left: 20px;">
            ${formData.technologies.map(tech => `<li style="margin-bottom: 5px;">${tech}</li>`).join('')}
          </ul>
        </div>

        <!-- Time Analysis -->
        <div style="margin-bottom: 30px;">
          <h2 style="color: #1f2937; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px; font-size: 20px;">Time Analysis</h2>
          <table style="width: 100%; border-collapse: collapse; border: 1px solid #e5e7eb;">
            <thead>
              <tr style="background-color: #f9fafb;">
                <th style="padding: 12px; text-align: left; border: 1px solid #e5e7eb;">Activity</th>
                <th style="padding: 12px; text-align: left; border: 1px solid #e5e7eb;">Time Spent</th>
              </tr>
            </thead>
            <tbody>
              ${Object.entries({
                'Data Entry & Processing': formData.timeSpent.dataEntry,
                'Reporting & Analytics': formData.timeSpent.reporting,
                'Customer Service & Support': formData.timeSpent.customerService,
                'Scheduling & Coordination': formData.timeSpent.scheduling,
                'Compliance & Documentation': formData.timeSpent.compliance
              }).map(([activity, time]) => `
                <tr>
                  <td style="padding: 12px; border: 1px solid #e5e7eb;">${activity}</td>
                  <td style="padding: 12px; border: 1px solid #e5e7eb;">${time || 'Not specified'}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>

        <!-- Pain Points -->
        <div style="margin-bottom: 30px;">
          <h2 style="color: #1f2937; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px; font-size: 20px;">Identified Pain Points</h2>
          <ul style="margin: 0; padding-left: 20px;">
            ${formData.painPoints.map(point => `<li style="margin-bottom: 5px;">${point}</li>`).join('')}
          </ul>
        </div>

        <!-- Industry Benchmarking -->
        <div style="margin-bottom: 30px;">
          <h2 style="color: #1f2937; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px; font-size: 20px;">Industry Benchmarking Analysis</h2>
          
          <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px; margin-bottom: 20px;">
            <div style="background-color: #dbeafe; padding: 15px; border-radius: 8px; text-align: center;">
              <h3 style="margin: 0 0 10px 0; color: #1e40af; font-size: 16px;">Your Automation Score</h3>
              <div style="font-size: 24px; font-weight: bold; color: #1e40af;">${automationScore}%</div>
              <p style="margin: 5px 0 0 0; font-size: 12px; color: #1e40af;">vs ${benchmark?.automationAdoption}% industry average</p>
            </div>
            
            <div style="background-color: #dcfce7; padding: 15px; border-radius: 8px; text-align: center;">
              <h3 style="margin: 0 0 10px 0; color: #166534; font-size: 16px;">Time Savings Potential</h3>
              <div style="font-size: 24px; font-weight: bold; color: #166534;">${benchmark?.timeSavingsPotential}%</div>
              <p style="margin: 5px 0 0 0; font-size: 12px; color: #166534;">of manual tasks can be automated</p>
            </div>
            
            <div style="background-color: #f3e8ff; padding: 15px; border-radius: 8px; text-align: center;">
              <h3 style="margin: 0 0 10px 0; color: #7c3aed; font-size: 16px;">Expected ROI</h3>
              <div style="font-size: 24px; font-weight: bold; color: #7c3aed;">${benchmark?.avgROI}%</div>
              <p style="margin: 5px 0 0 0; font-size: 12px; color: #7c3aed;">average return on automation investment</p>
            </div>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
            <div>
              <h3 style="margin: 0 0 10px 0; color: #1f2937; font-size: 16px;">Industry Standard Technologies</h3>
              <ul style="margin: 0; padding-left: 20px;">
                ${benchmark?.commonTechnologies.map(tech => `
                  <li style="margin-bottom: 5px; ${formData.technologies.includes(tech) ? 'font-weight: bold; color: #059669;' : 'color: #6b7280;'}">
                    ${tech} ${formData.technologies.includes(tech) ? '✓' : ''}
                  </li>
                `).join('')}
              </ul>
            </div>
            
            <div>
              <h3 style="margin: 0 0 10px 0; color: #1f2937; font-size: 16px;">Top Industry Pain Points</h3>
              <ul style="margin: 0; padding-left: 20px;">
                ${benchmark?.topPainPoints.map(point => `
                  <li style="margin-bottom: 5px; ${formData.painPoints.includes(point) ? 'font-weight: bold; color: #dc2626;' : 'color: #6b7280;'}">
                    ${point} ${formData.painPoints.includes(point) ? '✓' : ''}
                  </li>
                `).join('')}
              </ul>
            </div>
          </div>
        </div>

        <!-- Key Insights -->
        <div style="margin-bottom: 30px;">
          <h2 style="color: #1f2937; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px; font-size: 20px;">Key Insights & Recommendations</h2>
          <div style="background-color: #fef3c7; border: 1px solid #f59e0b; border-radius: 8px; padding: 20px;">
            <ul style="margin: 0; padding-left: 20px;">
              <li style="margin-bottom: 8px;">Your automation adoption is ${automationScore > (benchmark?.automationAdoption || 0) ? 'above' : 'below'} industry average</li>
              <li style="margin-bottom: 8px;">You could save ${benchmark?.timeSavingsPotential}% of time on manual tasks through automation</li>
              <li style="margin-bottom: 8px;">Expected ROI of ${benchmark?.avgROI}% on automation investments</li>
              <li style="margin-bottom: 8px;">${commonPainPoints} of your pain points are common in your industry</li>
              <li style="margin-bottom: 8px;">Consider implementing missing industry-standard technologies</li>
              <li style="margin-bottom: 8px;">Focus on addressing shared industry challenges for competitive advantage</li>
            </ul>
          </div>
        </div>

        <!-- Next Steps -->
        <div style="margin-bottom: 30px;">
          <h2 style="color: #1f2937; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px; font-size: 20px;">Recommended Next Steps</h2>
          <ol style="margin: 0; padding-left: 20px;">
            <li style="margin-bottom: 8px;">Schedule a consultation with Nuvaru to discuss your specific automation opportunities</li>
            <li style="margin-bottom: 8px;">Prioritize implementation of missing industry-standard technologies</li>
            <li style="margin-bottom: 8px;">Develop a phased automation strategy based on your pain points</li>
            <li style="margin-bottom: 8px;">Consider AI-powered solutions for data entry and reporting tasks</li>
            <li style="margin-bottom: 8px;">Implement process automation for repetitive tasks</li>
            <li style="margin-bottom: 8px;">Track ROI and time savings after implementation</li>
          </ol>
        </div>

        <!-- Footer -->
        <div style="text-align: center; margin-top: 40px; padding-top: 20px; border-top: 2px solid #e5e7eb; color: #6b7280;">
          <p style="margin: 0;">Generated by Nuvaru - AI & Automation Solutions</p>
          <p style="margin: 5px 0 0 0;">Contact: info@nuvaru.co.uk | Phone: 07741 654145</p>
          <p style="margin: 5px 0 0 0;">Hull, East Yorkshire, United Kingdom</p>
        </div>
      </div>
    `
  }

  const renderStepIndicator = () => (
    <div className="mb-8">
      <div className="flex items-center justify-between">
        {Array.from({ length: totalSteps }, (_, i) => (
          <div key={i} className="flex items-center">
            <div className={`
              w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium
              ${i + 1 < currentStep ? 'bg-green-500 text-white' : 
                i + 1 === currentStep ? 'bg-blue-500 text-white' : 
                'bg-gray-200 text-gray-600'}
            `}>
              {i + 1 < currentStep ? '✓' : i + 1}
            </div>
            {i < totalSteps - 1 && (
              <div className={`w-16 h-1 mx-2 ${i + 1 < currentStep ? 'bg-green-500' : 'bg-gray-200'}`} />
            )}
          </div>
        ))}
      </div>
      <div className="text-center mt-2 text-sm text-gray-600">
        Step {currentStep} of {totalSteps}
      </div>
    </div>
  )

  const renderStep1 = () => (
    <Card>
      <CardHeader>
        <CardTitle>Contact Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label htmlFor="name">Full Name *</Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => updateFormData('name', e.target.value)}
            placeholder="Enter your full name"
            required
          />
        </div>
        <div>
          <Label htmlFor="email">Email Address *</Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => updateFormData('email', e.target.value)}
            placeholder="Enter your email address"
            required
          />
        </div>
        <div>
          <Label htmlFor="company">Company Name *</Label>
          <Input
            id="company"
            value={formData.company}
            onChange={(e) => updateFormData('company', e.target.value)}
            placeholder="Enter your company name"
            required
          />
        </div>
      </CardContent>
    </Card>
  )

  const renderStep2 = () => (
    <Card>
      <CardHeader>
        <CardTitle>Industry & Company Size</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <Label>Industry *</Label>
          <RadioGroup
            value={formData.industry}
            onValueChange={(value) => updateFormData('industry', value)}
            className="mt-2"
          >
            {industries.map((industry) => (
              <div key={industry} className="flex items-center space-x-2">
                <RadioGroupItem value={industry} id={industry} />
                <Label htmlFor={industry}>{industry}</Label>
              </div>
            ))}
          </RadioGroup>
          {formData.industry === "Other" && (
            <div className="mt-3">
              <Label htmlFor="otherIndustry">Please specify your industry *</Label>
              <Input
                id="otherIndustry"
                value={formData.otherIndustry}
                onChange={(e) => updateFormData('otherIndustry', e.target.value)}
                placeholder="Enter your industry"
                required
              />
            </div>
          )}
        </div>
        <div>
          <Label>Company Size *</Label>
          <RadioGroup
            value={formData.companySize}
            onValueChange={(value) => updateFormData('companySize', value)}
            className="mt-2"
          >
            {companySizes.map((size) => (
              <div key={size} className="flex items-center space-x-2">
                <RadioGroupItem value={size} id={size} />
                <Label htmlFor={size}>{size}</Label>
              </div>
            ))}
          </RadioGroup>
        </div>
      </CardContent>
    </Card>
  )

  const renderStep3 = () => (
    <Card>
      <CardHeader>
        <CardTitle>Current Technologies & Tools</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600 mb-4">
          Select all the technologies and tools your business currently uses:
        </p>
        <div className="space-y-3">
          {commonTechnologies.map((tech) => (
            <div key={tech} className="flex items-center space-x-2">
              <Checkbox
                id={tech}
                checked={formData.technologies.includes(tech)}
                onCheckedChange={(checked) => {
                  if (checked) {
                    updateFormData('technologies', [...formData.technologies, tech])
                  } else {
                    updateFormData('technologies', formData.technologies.filter(t => t !== tech))
                  }
                }}
              />
              <Label htmlFor={tech}>{tech}</Label>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )

  const renderStep4 = () => (
    <Card>
      <CardHeader>
        <CardTitle>Time Spent on Key Tasks</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600 mb-4">
          Estimate how much time your team spends on these activities weekly:
        </p>
        <div className="space-y-4">
          {Object.entries({
            dataEntry: "Data Entry & Processing",
            reporting: "Reporting & Analytics",
            customerService: "Customer Service & Support",
            scheduling: "Scheduling & Coordination",
            compliance: "Compliance & Documentation"
          }).map(([key, label]) => (
            <div key={key}>
              <Label htmlFor={key}>{label}</Label>
              <Input
                id={key}
                value={formData.timeSpent[key as keyof FormData['timeSpent']]}
                onChange={(e) => updateTimeSpent(key as keyof FormData['timeSpent'], e.target.value)}
                placeholder="e.g., 20 hours/week"
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )

  const renderStep5 = () => (
    <Card>
      <CardHeader>
        <CardTitle>Pain Points & Challenges</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600 mb-4">
          Select the main challenges your business faces:
        </p>
        <div className="space-y-3">
          {painPoints.map((point) => (
            <div key={point} className="flex items-center space-x-2">
              <Checkbox
                id={point}
                checked={formData.painPoints.includes(point)}
                onCheckedChange={(checked) => {
                  if (checked) {
                    updateFormData('painPoints', [...formData.painPoints, point])
                  } else {
                    updateFormData('painPoints', formData.painPoints.filter(p => p !== point))
                  }
                }}
              />
              <Label htmlFor={point}>{point}</Label>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )

  const renderStep6 = () => (
    <Card>
      <CardHeader>
        <CardTitle>Revenue & Growth (Optional)</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label htmlFor="annualRevenue">Annual Revenue Range</Label>
          <Input
            id="annualRevenue"
            value={formData.annualRevenue}
            onChange={(e) => updateFormData('annualRevenue', e.target.value)}
            placeholder="e.g., $1M - $5M"
          />
        </div>
        <div>
          <Label htmlFor="growthRate">Growth Rate</Label>
          <Input
            id="growthRate"
            value={formData.growthRate}
            onChange={(e) => updateFormData('growthRate', e.target.value)}
            placeholder="e.g., 15% annually"
          />
        </div>
        <p className="text-sm text-gray-500">
          This information helps us provide more targeted recommendations.
        </p>
      </CardContent>
    </Card>
  )

  const renderStep7 = () => (
    <Card>
      <CardHeader>
        <CardTitle>Generate Your Business Capability Report</CardTitle>
      </CardHeader>
      <CardContent className="text-center space-y-6">
        {!formData.reportGenerated ? (
          <>
            <p className="text-gray-600">
              Ready to analyze your business capabilities? Click the button below to generate your personalized report with industry benchmarking and actionable recommendations.
            </p>
            <Button onClick={generateReport} className="bg-gradient-to-r from-blue-600 to-violet-600">
              Generate Report & Industry Analysis
            </Button>
          </>
        ) : (
          <>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-800 mb-2">
                Report Generated Successfully!
              </h3>
              <p className="text-green-700 mb-4">
                Your personalized business capability report with industry benchmarking is ready. Download it to see how AI and automation can transform your business.
              </p>
              <div className="space-y-3">
                <Button onClick={downloadPDF} className="w-full bg-gradient-to-r from-blue-600 to-violet-600">
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF Report
                </Button>
                <Button variant="outline" className="w-full">
                  <Mail className="w-4 h-4 mr-2" />
                  Email Report to {formData.email}
                </Button>
              </div>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  )

  const renderStep8 = () => (
    <Card>
      <CardHeader>
        <CardTitle>Industry Benchmarking & Analysis</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {formData.industryBenchmarks && (
          <>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Your Automation Score</h4>
                <div className="text-3xl font-bold text-blue-600">
                  {Math.round((formData.technologies.length / 5) * 100)}%
                </div>
                <p className="text-sm text-blue-700 mt-1">
                  vs {formData.industryBenchmarks.automationAdoption}% industry average
                </p>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Time Savings Potential</h4>
                <div className="text-3xl font-bold text-green-600">
                  {formData.industryBenchmarks.timeSavingsPotential}%
                </div>
                <p className="text-sm text-green-700 mt-1">
                  of manual tasks can be automated
                </p>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-800 mb-2">Expected ROI</h4>
                <div className="text-3xl font-bold text-purple-600">
                  {formData.industryBenchmarks.avgROI}%
                </div>
                <p className="text-sm text-purple-700 mt-1">
                  average return on automation investment
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Industry Standard Technologies</h4>
                <div className="space-y-2">
                  {formData.industryBenchmarks.commonTechnologies.map((tech, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded-full ${formData.technologies.includes(tech) ? 'bg-green-500' : 'bg-gray-300'}`} />
                      <span className={`text-sm ${formData.technologies.includes(tech) ? 'text-green-700 font-medium' : 'text-gray-600'}`}>
                        {tech}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Top Industry Pain Points</h4>
                <div className="space-y-2">
                  {formData.industryBenchmarks.topPainPoints.map((point, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded-full ${formData.painPoints.includes(point) ? 'bg-red-500' : 'bg-gray-300'}`} />
                      <span className={`text-sm ${formData.painPoints.includes(point) ? 'text-red-700 font-medium' : 'text-gray-600'}`}>
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h4 className="font-semibold text-yellow-800 mb-2">Key Insights</h4>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>• Your automation adoption is {Math.round((formData.technologies.length / 5) * 100) > formData.industryBenchmarks.automationAdoption ? 'above' : 'below'} industry average</li>
                <li>• You could save {formData.industryBenchmarks.timeSavingsPotential}% of time on manual tasks</li>
                <li>• Expected ROI of {formData.industryBenchmarks.avgROI}% on automation investments</li>
                <li>• {formData.painPoints.filter(p => formData.industryBenchmarks!.topPainPoints.includes(p)).length} of your pain points are common in your industry</li>
              </ul>
            </div>

            <div className="text-center pt-6 border-t border-gray-200">
              <p className="text-gray-600 mb-4">
                Ready to explore how Nuvaru can help transform your business?
              </p>
              <Button
                className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white text-lg py-4 px-8"
                asChild
              >
                <Link href="/">Back to Homepage</Link>
              </Button>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  )

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1: return renderStep1()
      case 2: return renderStep2()
      case 3: return renderStep3()
      case 4: return renderStep4()
      case 5: return renderStep5()
      case 6: return renderStep6()
      case 7: return renderStep7()
      case 8: return renderStep8()
      default: return null
    }
  }

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.name && formData.email && formData.company
      case 2:
        return formData.industry && formData.companySize && (formData.industry !== "Other" || formData.otherIndustry.trim() !== "")
      case 3:
        return formData.technologies.length > 0
      case 4:
        return Object.values(formData.timeSpent).some(v => v.trim() !== '')
      case 5:
        return formData.painPoints.length > 0
      case 6:
        return true // Optional step
      case 7:
        return true
      case 8:
        return true
      default:
        return false
    }
  }

  return (
    <div className="space-y-6">
      {renderStepIndicator()}
      
      {renderCurrentStep()}
      
      <div className="flex justify-between pt-6">
        <Button
          variant="outline"
          onClick={prevStep}
          disabled={currentStep === 1}
          className="flex items-center"
        >
          <ChevronLeft className="w-4 h-4 mr-2" />
          Previous
        </Button>
        
        {currentStep < totalSteps && (
          <Button
            onClick={nextStep}
            disabled={!canProceed()}
            className="flex items-center bg-gradient-to-r from-blue-600 to-violet-600"
          >
            Next
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        )}
      </div>
    </div>
  )
} 