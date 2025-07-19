"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ShareArticle } from "@/components/share-article"
import { ExternalLink, Clock, User } from "lucide-react"
import type { BlogPost } from "@/lib/database"

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPosts = async () => {
      console.log('Starting to fetch posts...')
      try {
        console.log('Making fetch request to /api/blog')
        const response = await fetch('/api/blog')
        console.log('Response status:', response.status)
        console.log('Response ok:', response.ok)
        
        const data = await response.json()
        console.log('Response data:', data)
        
        if (data.success) {
          console.log('Setting posts:', data.posts)
          setPosts(data.posts)
        } else {
          console.log('API returned error:', data.error)
          setError(data.error || 'Failed to fetch blog posts')
        }
      } catch (err) {
        console.error('Fetch error:', err)
        setError('Failed to fetch blog posts')
      } finally {
        console.log('Setting loading to false')
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

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
                Loading Blog...
              </h1>
            </div>
          </div>
        </section>
      </main>
    )
  }

  if (error) {
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
                Blog
              </h1>
              <p className="text-xl text-white/80 mb-8">
                Error: {error}
              </p>
            </div>
          </div>
        </section>
      </main>
    )
  }

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
              Latest Articles
            </h1>
            <a
              href="https://nuvaru.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mb-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition-colors duration-200"
            >
              Visit nuvaru.co.uk
            </a>
            <p className="text-xl text-white/80 mb-8">
              Insights, guides, and thought leadership on AI implementation, digital transformation, and business automation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {posts.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                No blog posts found
              </h2>
              <p className="text-gray-600">
                Check back soon for new articles and insights.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Card key={post.id} className="group hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Clock className="w-4 h-4" />
                        <span>{post.read_time} min read</span>
                      </div>
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                      <Link href={`/blog/${post.slug}`} className="block">
                        {post.title}
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                                             <ShareArticle
                         title={post.title}
                         url={`${typeof window !== 'undefined' ? window.location.origin : ''}/blog/${post.slug}`}
                       />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  )
} 