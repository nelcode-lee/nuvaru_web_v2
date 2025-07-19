"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { 
  Share2, 
  Twitter, 
  Facebook, 
  Linkedin, 
  Mail, 
  Copy, 
  CheckCircle 
} from "lucide-react"

interface ShareArticleProps {
  title: string
  url: string
  description?: string
}

export function ShareArticle({ title, url, description }: ShareArticleProps) {
  const [copied, setCopied] = useState(false)
  const [showShareMenu, setShowShareMenu] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const shareUrl = typeof window !== 'undefined' ? `${window.location.origin}${url}` : url
  const shareText = `${title}${description ? ` - ${description}` : ''}`

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
    email: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`${shareText}\n\n${shareUrl}`)}`
  }

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy link:', err)
    }
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowShareMenu(false)
      }
    }

    if (showShareMenu) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [showShareMenu])

  const handleShare = (platform: string) => {
    const link = shareLinks[platform as keyof typeof shareLinks]
    if (link) {
      window.open(link, '_blank', 'width=600,height=400')
    }
    setShowShareMenu(false)
  }

  const ShareButton = ({ platform, icon: Icon, label }: { platform: string, icon: any, label: string }) => (
    <Button
      variant="outline"
      size="sm"
      onClick={() => handleShare(platform)}
      className="flex items-center gap-2 hover:bg-gray-50"
    >
      <Icon className="h-4 w-4" />
      {label}
    </Button>
  )

  return (
    <div className="relative">
      <Button
        variant="outline"
        size="sm"
        onClick={() => setShowShareMenu(!showShareMenu)}
        className="flex items-center gap-2"
      >
        <Share2 className="h-4 w-4" />
        Share
      </Button>

      {showShareMenu && (
        <div ref={menuRef} className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg p-3 z-10 min-w-[200px]">
          <div className="space-y-2">
            <ShareButton platform="twitter" icon={Twitter} label="Twitter" />
            <ShareButton platform="facebook" icon={Facebook} label="Facebook" />
            <ShareButton platform="linkedin" icon={Linkedin} label="LinkedIn" />
            <ShareButton platform="email" icon={Mail} label="Email" />
            
            <div className="border-t pt-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleCopyLink}
                className="w-full flex items-center gap-2 hover:bg-gray-50"
              >
                {copied ? (
                  <>
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" />
                    Copy Link
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 