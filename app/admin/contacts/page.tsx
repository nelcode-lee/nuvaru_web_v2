"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { Mail, Phone, Building, Calendar, User, RefreshCw, Trash2, FileText } from "lucide-react"
import Link from "next/link"

interface Contact {
  id: number
  name: string
  email: string
  company?: string
  phone?: string
  service?: string
  message: string
  status: string
  created_at: string
}

export default function AdminContactsPage() {
  const [contacts, setContacts] = useState<Contact[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null)
  const [statusFilter, setStatusFilter] = useState("all")

  useEffect(() => {
    fetchContacts()
  }, [])

  const fetchContacts = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/admin/contacts')
      const data = await response.json()
      
      if (data.success) {
        setContacts(data.contacts)
      } else {
        setError(data.error || 'Failed to fetch contacts')
      }
    } catch (error) {
      console.error('Error fetching contacts:', error)
      setError('Failed to fetch contacts')
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (contactId: number) => {
    try {
      const response = await fetch(`/api/admin/contacts?id=${contactId}`, {
        method: 'DELETE'
      })
      
      const data = await response.json()
      
      if (data.success) {
        fetchContacts() // Refresh the list
      } else {
        setError(data.error || 'Failed to delete contact')
      }
    } catch (error) {
      console.error('Error deleting contact:', error)
      setError('Failed to delete contact')
    }
  }

  const filteredContacts = contacts.filter(contact => {
    if (statusFilter === "all") return true
    return contact.status === statusFilter
  })

  if (loading) {
    return (
      <div className="text-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p>Loading contacts...</p>
      </div>
    )
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Contact Submissions</h1>
          <p className="text-gray-600">Manage and respond to contact form submissions</p>
        </div>
        <div className="flex items-center gap-4">
          {/* Navigation Menu */}
          <nav className="flex items-center gap-2">
            <Link href="/admin/contacts">
              <Button variant="default" className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Contacts
              </Button>
            </Link>
            <Link href="/admin/contacts/submissions">
              <Button variant="outline" className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                Form Submissions
              </Button>
            </Link>
            <Link href="/admin/blog">
              <Button variant="outline" className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                Blog
              </Button>
            </Link>
          </nav>
          <Button onClick={fetchContacts} variant="outline" size="sm">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
        </div>
      </div>

      {error && (
        <Alert variant="destructive" className="mb-4">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <div className="mb-4">
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Submissions</SelectItem>
            <SelectItem value="new">New</SelectItem>
            <SelectItem value="contacted">Contacted</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-4">
        {filteredContacts.length === 0 ? (
          <Card>
            <CardContent className="text-center py-8">
              <p className="text-gray-500">No contact submissions found.</p>
            </CardContent>
          </Card>
        ) : (
          filteredContacts.map((contact) => (
            <Card key={contact.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      {contact.name}
                      <Badge variant={contact.status === 'new' ? 'default' : contact.status === 'contacted' ? 'secondary' : 'outline'}>
                        {contact.status}
                      </Badge>
                    </CardTitle>
                    <CardDescription className="flex items-center gap-4 mt-2">
                      <span className="flex items-center gap-1">
                        <Mail className="h-3 w-3" />
                        {contact.email}
                      </span>
                      {contact.phone && (
                        <span className="flex items-center gap-1">
                          <Phone className="h-3 w-3" />
                          {contact.phone}
                        </span>
                      )}
                      {contact.company && (
                        <span className="flex items-center gap-1">
                          <Building className="h-3 w-3" />
                          {contact.company}
                        </span>
                      )}
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(contact.created_at).toLocaleDateString()}
                      </span>
                    </CardDescription>
                  </div>
                  <div className="flex space-x-2">
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="outline" size="sm">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Delete Contact Submission</AlertDialogTitle>
                          <AlertDialogDescription>
                            Are you sure you want to delete this contact submission? This action cannot be undone.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction onClick={() => handleDelete(contact.id)}>
                            Delete
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Message:</h4>
                    <p className="text-gray-700 whitespace-pre-wrap">{contact.message}</p>
                  </div>
                  
                  {contact.service && (
                    <div>
                      <h4 className="font-medium mb-2">Service Interest:</h4>
                      <Badge variant="outline">{contact.service}</Badge>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  )
}
