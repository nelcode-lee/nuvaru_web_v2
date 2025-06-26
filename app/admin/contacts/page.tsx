"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Trash2, Mail, Phone, Building, Calendar, User, MessageSquare, LogOut, RefreshCw } from "lucide-react"

interface ContactSubmission {
  id: number
  name: string
  email: string
  phone?: string
  company?: string
  service: string
  message: string
  created_at: string
  status: "new" | "read" | "responded"
}

export default function AdminContacts() {
  const [contacts, setContacts] = useState<ContactSubmission[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [authenticated, setAuthenticated] = useState(false)
  const router = useRouter()

  // Check authentication
  useEffect(() => {
    checkAuth()
  }, [])

  // Load contacts
  useEffect(() => {
    if (authenticated) {
      loadContacts()
    }
  }, [authenticated])

  const checkAuth = async () => {
    try {
      const response = await fetch("/api/auth/check")
      if (response.ok) {
        setAuthenticated(true)
      } else {
        router.push("/admin/login")
      }
    } catch (error) {
      router.push("/admin/login")
    }
  }

  const loadContacts = async () => {
    try {
      setLoading(true)
      const response = await fetch("/api/admin/contacts")

      if (response.ok) {
        const data = await response.json()
        setContacts(data.contacts || [])
      } else {
        setError("Failed to load contacts")
      }
    } catch (error) {
      setError("Error loading contacts")
    } finally {
      setLoading(false)
    }
  }

  const updateContactStatus = async (id: number, status: "new" | "read" | "responded") => {
    try {
      const response = await fetch(`/api/admin/contacts/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
      })

      if (response.ok) {
        setContacts(contacts.map((contact) => (contact.id === id ? { ...contact, status } : contact)))
      }
    } catch (error) {
      console.error("Error updating contact status:", error)
    }
  }

  const deleteContact = async (id: number) => {
    if (!confirm("Are you sure you want to delete this contact?")) return

    try {
      const response = await fetch(`/api/admin/contacts/${id}`, {
        method: "DELETE",
      })

      if (response.ok) {
        setContacts(contacts.filter((contact) => contact.id !== id))
      }
    } catch (error) {
      console.error("Error deleting contact:", error)
    }
  }

  const handleLogout = async () => {
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
        return "bg-red-100 text-red-800"
      case "read":
        return "bg-yellow-100 text-yellow-800"
      case "responded":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  if (!authenticated) {
    return <div>Checking authentication...</div>
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Contact Submissions</h1>
            <p className="text-gray-600 mt-2">Manage and respond to customer inquiries</p>
          </div>
          <div className="flex gap-4">
            <Button onClick={loadContacts} variant="outline" size="sm">
              <RefreshCw className="w-4 h-4 mr-2" />
              Refresh
            </Button>
            <Button onClick={handleLogout} variant="outline" size="sm">
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-blue-600">{contacts.length}</div>
              <div className="text-sm text-gray-600">Total Contacts</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-red-600">{contacts.filter((c) => c.status === "new").length}</div>
              <div className="text-sm text-gray-600">New</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-yellow-600">
                {contacts.filter((c) => c.status === "read").length}
              </div>
              <div className="text-sm text-gray-600">Read</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-green-600">
                {contacts.filter((c) => c.status === "responded").length}
              </div>
              <div className="text-sm text-gray-600">Responded</div>
            </CardContent>
          </Card>
        </div>

        {error && (
          <Alert className="mb-6" variant="destructive">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {loading ? (
          <div className="text-center py-8">Loading contacts...</div>
        ) : contacts.length === 0 ? (
          <Card>
            <CardContent className="p-8 text-center">
              <MessageSquare className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No contacts yet</h3>
              <p className="text-gray-600">Contact submissions will appear here when customers fill out the form.</p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {contacts.map((contact) => (
              <Card key={contact.id} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-3">
                      <User className="w-5 h-5 text-gray-400" />
                      <div>
                        <CardTitle className="text-lg">{contact.name}</CardTitle>
                        <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                          <div className="flex items-center gap-1">
                            <Mail className="w-4 h-4" />
                            {contact.email}
                          </div>
                          {contact.phone && (
                            <div className="flex items-center gap-1">
                              <Phone className="w-4 h-4" />
                              {contact.phone}
                            </div>
                          )}
                          {contact.company && (
                            <div className="flex items-center gap-1">
                              <Building className="w-4 h-4" />
                              {contact.company}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className={getStatusColor(contact.status)}>{contact.status}</Badge>
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <Calendar className="w-3 h-3" />
                        {new Date(contact.created_at).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="mb-4">
                    <div className="text-sm font-medium text-gray-700 mb-1">Service Interest:</div>
                    <Badge variant="outline">{contact.service}</Badge>
                  </div>

                  <div className="mb-4">
                    <div className="text-sm font-medium text-gray-700 mb-2">Message:</div>
                    <div className="bg-gray-50 p-3 rounded-lg text-sm">{contact.message}</div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant={contact.status === "new" ? "default" : "outline"}
                        onClick={() => updateContactStatus(contact.id, "read")}
                      >
                        Mark as Read
                      </Button>
                      <Button
                        size="sm"
                        variant={contact.status === "responded" ? "default" : "outline"}
                        onClick={() => updateContactStatus(contact.id, "responded")}
                      >
                        Mark as Responded
                      </Button>
                    </div>

                    <Button size="sm" variant="destructive" onClick={() => deleteContact(contact.id)}>
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
