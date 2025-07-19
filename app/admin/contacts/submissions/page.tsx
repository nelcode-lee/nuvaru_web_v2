"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Mail, Phone, Building, Calendar, User, MessageSquare } from "lucide-react"

interface ContactSubmission {
  id: string
  timestamp: string
  name: string
  email: string
  phone?: string
  company: string
  service_type?: string
  message: string
  source?: string
  ip?: string
  userAgent?: string
}

interface PaginationInfo {
  total: number
  limit: number
  offset: number
  hasMore: boolean
}

export default function ContactSubmissionsPage() {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [pagination, setPagination] = useState<PaginationInfo | null>(null)
  const [currentPage, setCurrentPage] = useState(0)

  useEffect(() => {
    fetchSubmissions()
  }, [currentPage])

  const fetchSubmissions = async () => {
    try {
      setLoading(true)
      const response = await fetch(`/api/admin/contacts/submissions?limit=10&offset=${currentPage * 10}`)
      const data = await response.json()
      
      if (data.success) {
        setSubmissions(data.submissions)
        setPagination(data.pagination)
      } else {
        setError(data.error || 'Failed to fetch submissions')
      }
    } catch (error) {
      console.error('Error fetching submissions:', error)
      setError('Failed to fetch submissions')
    } finally {
      setLoading(false)
    }
  }

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleString('en-GB', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const getServiceColor = (serviceType?: string) => {
    if (!serviceType) return "bg-gray-100 text-gray-800"
    
    const colors: Record<string, string> = {
      'ai-readiness-assessment': 'bg-blue-100 text-blue-800',
      'custom-ai-solutions': 'bg-purple-100 text-purple-800',
      'process-automation': 'bg-green-100 text-green-800',
      'data-analysis-optimization': 'bg-orange-100 text-orange-800',
      'gdpr-compliance-solutions': 'bg-red-100 text-red-800',
      'web-app-development': 'bg-indigo-100 text-indigo-800',
      'web-portal-development': 'bg-pink-100 text-pink-800',
      'website-development': 'bg-teal-100 text-teal-800',
    }
    
    return colors[serviceType] || 'bg-gray-100 text-gray-800'
  }

  if (loading) {
    return (
      <div className="text-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p>Loading contact submissions...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-red-600 mb-4">{error}</p>
        <Button onClick={fetchSubmissions}>Try Again</Button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Contact Form Submissions</h1>
        <div className="flex items-center gap-2">
          <Badge variant="secondary">
            {pagination?.total || 0} total submissions
          </Badge>
        </div>
      </div>

      {submissions.length === 0 ? (
        <Card>
          <CardContent className="text-center py-8">
            <MessageSquare className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No submissions yet</h3>
            <p className="text-gray-600">Contact form submissions will appear here once people start using your contact form.</p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {submissions.map((submission) => (
            <Card key={submission.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <User className="h-5 w-5 text-gray-500" />
                    <div>
                      <h3 className="font-semibold text-lg">{submission.name}</h3>
                      <p className="text-sm text-gray-600">{submission.company}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">{formatDate(submission.timestamp)}</p>
                    {submission.service_type && (
                      <Badge className={`mt-1 ${getServiceColor(submission.service_type)}`}>
                        {submission.service_type.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                      </Badge>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-gray-500" />
                    <span className="text-sm">{submission.email}</span>
                  </div>
                  {submission.phone && (
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-gray-500" />
                      <span className="text-sm">{submission.phone}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <Building className="h-4 w-4 text-gray-500" />
                    <span className="text-sm">{submission.company}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-gray-500" />
                    <span className="text-sm">{formatDate(submission.timestamp)}</span>
                  </div>
                </div>

                {submission.message && (
                  <>
                    <Separator />
                    <div>
                      <h4 className="font-medium mb-2">Message:</h4>
                      <p className="text-sm text-gray-700 whitespace-pre-wrap">{submission.message}</p>
                    </div>
                  </>
                )}

                {submission.source && (
                  <div className="text-xs text-gray-500">
                    Source: {submission.source}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {pagination && pagination.total > 10 && (
        <div className="flex items-center justify-between">
          <Button
            variant="outline"
            disabled={currentPage === 0}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Previous
          </Button>
          <span className="text-sm text-gray-600">
            Page {currentPage + 1} of {Math.ceil(pagination.total / 10)}
          </span>
          <Button
            variant="outline"
            disabled={!pagination.hasMore}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next
          </Button>
        </div>
      )}
    </div>
  )
} 