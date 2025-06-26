"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Mail, Phone, Building, Calendar, User, LogOut } from "lucide-react"

interface Contact {
  id: number
  name: string
  email: string
  company: string
  phone: string
  service_type: string
  message: string
  created_at: string
  status: string
  notes: string
}

export default function AdminContacts() {
  const [contacts, setContacts] = useState<Contact[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [authenticated, setAuthenticated] = useState(false)
  const router = useRouter()

  useEffect(() => {
    checkAuth()
  }, [])

  const checkAuth = async () => {
    try {
      const response = await fetch("/api/auth/check")
      const data = await response.json()

      if (data.authenticated) {
        setAuthenticated(true)
        fetchContacts()
      } else {
        router.push("/admin/login")
      }
    } catch (error) {
      router.push("/admin/login")
    }
  }

  const fetchContacts = async () => {
    try {
      const response = await fetch("/api/admin/contacts")
      const data = await response.json()

      if (response.ok) {
        setContacts(data.contacts)
      } else {
        setError(data.error || "Failed to fetch contacts")
      }
    } catch (error) {
      setError("Network error. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const updateContact = async (id: number, status: string, notes: string) => {
    try {
      const response = await fetch("/api/admin/contacts", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, status, notes }),
      })

      if (response.ok) {
        setContacts(contacts.map((contact) => (contact.id === id ? { ...contact, status, notes } : contact)))
      } else {
        setError("Failed to update contact")
      }
    } catch (error) {
      setError("Network error. Please try again.")
    }
  }

  const logout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" })
      router.push("/admin/login")
    } catch (error) {
      router.push("/admin/login")
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "new":
        return "bg-blue-100 text-blue-800"
      case "contacted":
        return "bg-yellow-100 text-yellow-800"
      case "completed":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  if (!authenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Checking authentication...</h1>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 md:px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Admin Panel</h1>
              <p className="text-gray-600">Contact Submissions</p>
            </div>
            <Button onClick={logout} variant="outline" className="flex items-center gap-2">
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 md:px-6 py-8">
        {error && (
          <Alert variant="destructive" className="mb-6">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {loading ? (
          <div className="text-center py-8">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-brand-gold"></div>
            <p className="mt-2 text-gray-600">Loading contacts...</p>
          </div>
        ) : (
          <div className="space-y-6">
            {contacts.length === 0 ? (
              <Card>
                <CardContent className="text-center py-12">
                  <p className="text-gray-500 text-lg">No contact submissions yet.</p>
                  <p className="text-gray-400 text-sm mt-2">
                    Contact submissions will appear here once the form is used.
                  </p>
                </CardContent>
              </Card>
            ) : (
              contacts.map((contact) => (
                <Card key={contact.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardHeader className="bg-white border-b">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="flex items-center gap-2">
                          <User className="h-5 w-5 text-brand-gold" />
                          {contact.name}
                        </CardTitle>
                        <CardDescription className="flex flex-wrap items-center gap-4 mt-2">
                          <a
                            href={`mailto:${contact.email}`}
                            className="flex items-center gap-1 text-blue-600 hover:underline"
                          >
                            <Mail className="h-4 w-4" />
                            {contact.email}
                          </a>
                          {contact.phone && (
                            <a
                              href={`tel:${contact.phone}`}
                              className="flex items-center gap-1 text-blue-600 hover:underline"
                            >
                              <Phone className="h-4 w-4" />
                              {contact.phone}
                            </a>
                          )}
                          {contact.company && (
                            <span className="flex items-center gap-1">
                              <Building className="h-4 w-4" />
                              {contact.company}
                            </span>
                          )}
                        </CardDescription>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className={getStatusColor(contact.status)}>{contact.status}</Badge>
                        <span className="flex items-center gap-1 text-sm text-gray-500">
                          <Calendar className="h-4 w-4" />
                          {new Date(contact.created_at).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {contact.service_type && (
                        <div>
                          <h4 className="font-medium text-gray-900 mb-1">Service Interest</h4>
                          <Badge variant="secondary">{contact.service_type}</Badge>
                        </div>
                      )}
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Message</h4>
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <p className="text-gray-700 whitespace-pre-wrap">{contact.message}</p>
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4 pt-4 border-t">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                          <Select
                            value={contact.status}
                            onValueChange={(value) => updateContact(contact.id, value, contact.notes)}
                          >
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="new">New</SelectItem>
                              <SelectItem value="contacted">Contacted</SelectItem>
                              <SelectItem value="completed">Completed</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Notes</label>
                          <Textarea
                            value={contact.notes || ""}
                            onChange={(e) => {
                              const updatedContacts = contacts.map((c) =>
                                c.id === contact.id ? { ...c, notes: e.target.value } : c,
                              )
                              setContacts(updatedContacts)
                            }}
                            onBlur={(e) => updateContact(contact.id, contact.status, e.target.value)}
                            placeholder="Add notes about this contact..."
                            className="min-h-[80px]"
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        )}
      </main>
    </div>
  )
}
