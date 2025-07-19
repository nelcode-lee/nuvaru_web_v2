"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { 
  Linkedin, 
  Key, 
  User, 
  CheckCircle, 
  AlertCircle,
  ExternalLink,
  RefreshCw
} from "lucide-react"

interface LinkedInProfile {
  id: string
  firstName: {
    localized: {
      en_US: string
    }
  }
  lastName: {
    localized: {
      en_US: string
    }
  }
  profilePicture?: {
    displayImage: string
  }
}

export default function LinkedInAdminPage() {
  const [isConnected, setIsConnected] = useState(false)
  const [profile, setProfile] = useState<LinkedInProfile | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)

  useEffect(() => {
    // Check URL parameters for OAuth callback results
    const urlParams = new URLSearchParams(window.location.search)
    const errorParam = urlParams.get('error')
    const successParam = urlParams.get('success')
    const profileParam = urlParams.get('profile')

    if (errorParam) {
      setError(`LinkedIn authentication failed: ${errorParam}`)
    }

    if (successParam && profileParam) {
      try {
        const profileData = JSON.parse(decodeURIComponent(profileParam))
        setProfile(profileData)
        setIsConnected(true)
        setSuccess('LinkedIn connected successfully!')
      } catch (e) {
        setError('Failed to parse profile data')
      }
    }

    // Clear URL parameters
    if (errorParam || successParam) {
      window.history.replaceState({}, document.title, window.location.pathname)
    }
  }, [])

  const handleConnectLinkedIn = async () => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/linkedin/auth')
      const data = await response.json()

      if (response.ok && data.authUrl) {
        window.location.href = data.authUrl
      } else {
        setError('Failed to generate LinkedIn auth URL')
      }
    } catch (error) {
      setError('Failed to connect to LinkedIn')
    } finally {
      setIsLoading(false)
    }
  }

  const handleDisconnectLinkedIn = () => {
    setIsConnected(false)
    setProfile(null)
    setSuccess('LinkedIn disconnected successfully')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            LinkedIn Integration
          </h1>
          <p className="text-gray-600">
            Connect your LinkedIn account to share articles and manage your content.
          </p>
        </div>

        {/* Status Card */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Linkedin className="mr-2 h-6 w-6 text-blue-600" />
              Connection Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                {isConnected ? (
                  <>
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-green-600 font-medium">Connected</span>
                    <Badge variant="secondary">Active</Badge>
                  </>
                ) : (
                  <>
                    <AlertCircle className="h-5 w-5 text-red-500" />
                    <span className="text-red-600 font-medium">Not Connected</span>
                    <Badge variant="outline">Inactive</Badge>
                  </>
                )}
              </div>
              {isConnected ? (
                <Button
                  variant="outline"
                  onClick={handleDisconnectLinkedIn}
                  className="text-red-600 hover:text-red-700"
                >
                  Disconnect
                </Button>
              ) : (
                <Button
                  onClick={handleConnectLinkedIn}
                  disabled={isLoading}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  {isLoading ? (
                    <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <Linkedin className="mr-2 h-4 w-4" />
                  )}
                  Connect LinkedIn
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Profile Information */}
        {profile && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <User className="mr-2 h-6 w-6" />
                Profile Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4">
                {profile.profilePicture && (
                  <img
                    src={profile.profilePicture.displayImage}
                    alt="Profile"
                    className="w-16 h-16 rounded-full"
                  />
                )}
                <div>
                  <h3 className="text-lg font-semibold">
                    {profile.firstName.localized.en_US} {profile.lastName.localized.en_US}
                  </h3>
                  <p className="text-gray-600">LinkedIn ID: {profile.id}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Environment Variables Setup */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Key className="mr-2 h-6 w-6" />
              Environment Variables
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm text-gray-600 mb-4">
                Add these environment variables to your <code className="bg-gray-100 px-2 py-1 rounded">.env.local</code> file:
              </p>
              
              <div className="space-y-3">
                <div>
                  <Label htmlFor="client-id">LinkedIn Client ID</Label>
                  <Input
                    id="client-id"
                    placeholder="Your LinkedIn App Client ID"
                    className="font-mono text-sm"
                    readOnly
                  />
                </div>
                
                <div>
                  <Label htmlFor="client-secret">LinkedIn Client Secret</Label>
                  <Input
                    id="client-secret"
                    type="password"
                    placeholder="Your LinkedIn App Client Secret"
                    className="font-mono text-sm"
                    readOnly
                  />
                </div>
                
                <div>
                  <Label htmlFor="redirect-uri">Redirect URI</Label>
                  <Input
                    id="redirect-uri"
                    value="http://localhost:3002/api/linkedin/callback"
                    className="font-mono text-sm"
                    readOnly
                  />
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Setup Instructions:</h4>
                <ol className="text-sm text-blue-800 space-y-1">
                  <li>1. Go to <a href="https://www.linkedin.com/developers/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">LinkedIn Developers</a></li>
                  <li>2. Create a new app or use an existing one</li>
                  <li>3. Add the redirect URI: <code className="bg-blue-100 px-1 rounded">http://localhost:3002/api/linkedin/callback</code></li>
                  <li>4. Copy your Client ID and Client Secret</li>
                  <li>5. Add them to your <code className="bg-blue-100 px-1 rounded">.env.local</code> file</li>
                </ol>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Error/Success Messages */}
        {error && (
          <Card className="mb-8 border-red-200 bg-red-50">
            <CardContent className="pt-6">
              <div className="flex items-center space-x-2 text-red-600">
                <AlertCircle className="h-5 w-5" />
                <span>{error}</span>
              </div>
            </CardContent>
          </Card>
        )}

        {success && (
          <Card className="mb-8 border-green-200 bg-green-50">
            <CardContent className="pt-6">
              <div className="flex items-center space-x-2 text-green-600">
                <CheckCircle className="h-5 w-5" />
                <span>{success}</span>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
} 