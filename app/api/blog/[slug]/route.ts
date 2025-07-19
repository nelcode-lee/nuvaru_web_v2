import { NextRequest, NextResponse } from 'next/server'
import { getBlogPost as getDBBlogPost } from '@/lib/database'
import { getBlogPost as getFallbackBlogPost } from '@/lib/blog-posts-fallback'

interface BlogPostRouteProps {
  params: {
    slug: string
  }
}

export async function GET(request: NextRequest, { params }: BlogPostRouteProps) {
  try {
    // Try to get post from database first
    try {
      const post = await getDBBlogPost(params.slug)
      
      if (post) {
        return NextResponse.json({
          success: true,
          post,
          source: 'database'
        })
      }
      
      // If not found in database, try fallback
      console.log('Post not found in database, trying fallback data')
      const fallbackPost = getFallbackBlogPost(params.slug)
      
      if (!fallbackPost) {
        return NextResponse.json(
          { success: false, error: 'Blog post not found' },
          { status: 404 }
        )
      }

      return NextResponse.json({
        success: true,
        post: fallbackPost,
        source: 'fallback'
      })
    } catch (dbError) {
      console.log('Database not available, using fallback data:', dbError)
      
      // Fallback to static data
      const post = getFallbackBlogPost(params.slug)
      
      if (!post) {
        return NextResponse.json(
          { success: false, error: 'Blog post not found' },
          { status: 404 }
        )
      }

      return NextResponse.json({
        success: true,
        post,
        source: 'fallback'
      })
    }
  } catch (error) {
    console.error('Error fetching blog post:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch blog post' },
      { status: 500 }
    )
  }
} 