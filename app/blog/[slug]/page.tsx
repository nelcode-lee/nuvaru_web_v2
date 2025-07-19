"use client"

import { useEffect, useState } from "react"
import { notFound } from "next/navigation"
import { ShareArticle } from "@/components/share-article"
import { ExternalLink, Clock, User, Calendar } from "lucide-react"
import Link from "next/link"
import type { BlogPost } from "@/lib/database"

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const [post, setPost] = useState<BlogPost | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const resolvedParams = await params
        const response = await fetch(`/api/blog/${resolvedParams.slug}`)
        const data = await response.json()
        
        if (data.success) {
          setPost(data.post)
        } else {
          setError(data.error || 'Blog post not found')
        }
      } catch (err) {
        setError('Failed to fetch blog post')
      } finally {
        setLoading(false)
      }
    }

    fetchPost()
  }, [params])

  if (loading) {
    return (
      <main className="min-h-screen">
        <section className="relative bg-gradient-brand py-20 md:py-24">
          <div className="absolute inset-0 z-0 opacity-15">
            <img
              src="/network-pattern.webp"
              alt="Network pattern background"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Loading...
              </h1>
            </div>
          </div>
        </section>
      </main>
    )
  }

  if (error || !post) {
    notFound()
  }

  const publishedDate = new Date(post.published_at).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric"
  })

  return (
    <main className="min-h-screen">
      <section className="relative bg-gradient-brand py-20 md:py-24">
        <div className="absolute inset-0 z-0 opacity-15">
          <img
            src="/network-pattern.webp"
            alt="Network pattern background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <Link 
                href="/blog" 
                className="inline-flex items-center text-white/80 hover:text-white transition-colors mb-4"
              >
                ← Back to Blog
              </Link>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {post.title}
            </h1>
            <div className="flex items-center justify-center space-x-6 text-white/80 mb-8">
              <div className="flex items-center space-x-2">
                <User className="w-5 h-5" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>{publishedDate}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5" />
                <span>{post.read_time} min read</span>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-white/20 text-white text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg max-w-none">
              <div className="mb-8 flex items-center justify-between">
                <ShareArticle 
                  title={post.title} 
                  url={`${typeof window !== 'undefined' ? window.location.origin : ''}/blog/${post.slug}`} 
                />
              </div>
              
              <div 
                className="blog-content"
                dangerouslySetInnerHTML={{ 
                  __html: post.content.replace(/\n/g, '<br>').replace(/#{1,6}\s+(.+)/g, '<h2>$1</h2>').replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>').replace(/\*(.+?)\*/g, '<em>$1</em>')
                }} 
              />
              
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600">
                      Written by <span className="font-semibold">{post.author}</span>
                    </p>
                    <p className="text-sm text-gray-500">
                      Published on {publishedDate}
                    </p>
                  </div>
                  <Link 
                    href="/blog" 
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    ← Back to Blog
                    <ExternalLink className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  )
} 