import { useState } from "react"

interface ServiceRecommenderModalProps {
  open: boolean
  onClose: () => void
}

const steps = [
  {
    label: "What industry are you in?",
    options: ["Logistics", "Finance", "Retail", "Healthcare", "Other"],
  },
  {
    label: "How many employees does your business have?",
    options: ["1-10", "11-50", "51-200", "201+"],
  },
  {
    label: "What is your main business challenge?",
    options: [
      "Process automation",
      "Data analysis",
      "GDPR & compliance",
      "Customer engagement",
      "AI readiness",
      "Custom AI development",
      "Web/app development",
      "Staff training",
      "Cost reduction",
      "Other"
    ],
  },
  {
    label: "What is your typical monthly budget for new solutions?",
    options: ["< £500", "£500-£2,000", "£2,000-£10,000", "> £10,000"],
  },
]

export function ServiceRecommenderModal({ open, onClose }: ServiceRecommenderModalProps) {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  const [loading, setLoading] = useState(false)
  const [report, setReport] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [animating, setAnimating] = useState(false)

  if (!open) return null

  const current = steps[step]
  const progress = ((step) / steps.length) * 100

  async function handleSelect(option: string) {
    setAnimating(true)
    setTimeout(async () => {
      setAnimating(false)
      const newAnswers = [...answers, option]
      setAnswers(newAnswers)
      if (step < steps.length - 1) {
        setStep(step + 1)
      } else {
        setLoading(true)
        setReport(null)
        setError(null)
        try {
          const userPrompt = `A potential client answered the following questions for a personalised AI service recommendation.\n\nIndustry: ${newAnswers[0]}\nBusiness size: ${newAnswers[1]}\nMain challenge: ${newAnswers[2]}\nBudget: ${newAnswers[3]}\n\nPlease provide a short, tailored report (in UK English) recommending the most relevant Nuvaru services and case studies, and explain why they are a good fit. Be concise, friendly, and professional.`
          const response = await fetch("/api/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              messages: [
                { role: "user", content: userPrompt }
              ]
            })
          })
          if (!response.ok) throw new Error("Failed to get recommendation")
          const data = await response.json()
          setReport(data?.completion || data?.message || "Sorry, no recommendation available.")
        } catch (err: any) {
          setError("Sorry, there was a problem generating your report. Please try again later.")
        } finally {
          setLoading(false)
        }
      }
    }, 250)
  }

  function handleBack() {
    setAnimating(true)
    setTimeout(() => {
      setAnimating(false)
      if (step > 0) {
        setStep(step - 1)
        setAnswers(answers.slice(0, -1))
      }
    }, 250)
  }

  function handleRestart() {
    setStep(0)
    setAnswers([])
    setReport(null)
    setError(null)
    setLoading(false)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-8 relative">
        <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-600" onClick={onClose}>&times;</button>
        <h2 className="text-2xl font-bold mb-6 text-brand-purple">Personalised Service Recommender</h2>
        {/* Progress Bar */}
        {!report && !loading && (
          <div className="mb-6">
            <div className="flex justify-between mb-1 text-xs text-gray-500">
              <span>Step {step + 1} of {steps.length}</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-brand-purple h-2 rounded-full transition-all duration-300"
                style={{ width: `${((step) / steps.length) * 100}%` }}
              ></div>
            </div>
          </div>
        )}
        {loading ? (
          <div className="py-12 text-center text-brand-purple font-medium">Generating your tailored report...</div>
        ) : report ? (
          <div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-brand-purple mb-4">Your Personalised AI Service Report</h3>
              <div className="rounded-lg border border-brand-purple bg-gray-50 p-6 max-h-72 overflow-y-auto shadow-inner">
                <pre className="whitespace-pre-wrap text-lg leading-relaxed text-gray-900 font-serif">{report}</pre>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 justify-between items-center mt-4">
              <button className="text-sm text-brand-purple hover:underline" onClick={handleRestart}>Start Again</button>
              <button className="text-sm text-gray-500 hover:underline" onClick={() => window.print()}>Print</button>
              <button className="text-sm text-gray-500 hover:underline" onClick={() => {
                const newWin = window.open('', '_blank', 'width=600,height=800')
                newWin?.document.write(`<html><head><title>Nuvaru Service Report</title><style>body{font-family:serif;padding:2rem;}h1{color:#6c2eb7;}pre{white-space:pre-wrap;font-size:1.1rem;}</style></head><body><h1>Your Personalised AI Service Report</h1><pre>${report.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</pre></body></html>`)
                newWin?.document.close()
              }}>Open in New Window</button>
              <button className="text-sm text-gray-500 hover:underline" onClick={onClose}>Close</button>
            </div>
          </div>
        ) : error ? (
          <div>
            <div className="mb-6 text-red-600">{error}</div>
            <div className="flex justify-end">
              <button className="text-sm text-gray-500 hover:underline" onClick={onClose}>Close</button>
            </div>
          </div>
        ) : (
          <div className={`transition-all duration-300 ${animating ? 'opacity-0 translate-x-8 pointer-events-none' : 'opacity-100 translate-x-0'}`}>
            <div className="mb-6">
              <div className="text-lg font-medium mb-4">{current.label}</div>
              <div className="flex flex-col gap-3">
                {current.options.map((option) => (
                  <button
                    key={option}
                    className="w-full py-3 px-4 rounded border border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white transition-colors"
                    onClick={() => handleSelect(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex justify-between">
              <button
                className="text-sm text-gray-500 hover:underline"
                onClick={handleBack}
                disabled={step === 0}
              >
                Back
              </button>
              <button
                className="text-sm text-gray-500 hover:underline"
                onClick={onClose}
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
} 