import { NextRequest, NextResponse } from 'next/server'
import { 
  getBlogPosts as getFallbackBlogPosts, 
  getAllBlogPosts as getAllFallbackBlogPosts,
  type BlogPost as FallbackBlogPost
} from '@/lib/blog-posts-fallback'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const includeDrafts = searchParams.get('includeDrafts') === 'true'
    
    // Use fallback data since database is removed
    const posts = includeDrafts ? getAllFallbackBlogPosts() : getFallbackBlogPosts()
    
    return NextResponse.json({
      success: true,
      posts,
      source: 'fallback'
    })
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch blog posts' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate required fields
    const requiredFields = ['slug', 'title', 'excerpt', 'content', 'author', 'published_at']
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { success: false, error: `Missing required field: ${field}` },
          { status: 400 }
        )
      }
    }

    // Database removed - return success without creating
    console.log('Blog post creation request received (database removed):', body.title)

    return NextResponse.json({
      success: true,
      post: {
        id: Date.now(),
        slug: body.slug,
        title: body.title,
        excerpt: body.excerpt,
        content: body.content,
        author: body.author,
        published_at: body.published_at,
        tags: body.tags || [],
        image_url: body.image_url,
        read_time: body.read_time || 5,
        meta_title: body.meta_title,
        meta_description: body.meta_description,
        status: 'draft',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      },
      source: 'fallback'
    })
  } catch (error) {
    console.error('Error creating blog post:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to create blog post' },
      { status: 500 }
    )
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json()
    
    if (!body.id) {
      return NextResponse.json(
        { success: false, error: 'Missing post ID' },
        { status: 400 }
      )
    }

    // Database removed - return success without updating
    console.log('Blog post update request received (database removed):', body.title)

    return NextResponse.json({
      success: true,
      post: {
        id: body.id,
        slug: body.slug,
        title: body.title,
        excerpt: body.excerpt,
        content: body.content,
        author: body.author,
        published_at: body.published_at,
        tags: body.tags || [],
        image_url: body.image_url,
        read_time: body.read_time || 5,
        meta_title: body.meta_title,
        meta_description: body.meta_description,
        status: 'published',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      },
      source: 'fallback'
    })
  } catch (error) {
    console.error('Error updating blog post:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to update blog post' },
      { status: 500 }
    )
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    
    if (!id) {
      return NextResponse.json(
        { success: false, error: 'Missing post ID' },
        { status: 400 }
      )
    }

    // Database removed - return success without deleting
    console.log('Blog post delete request received (database removed):', id)

    return NextResponse.json({
      success: true,
      message: 'Blog post deleted successfully',
      source: 'fallback'
    })
  } catch (error) {
    console.error('Error deleting blog post:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to delete blog post' },
      { status: 500 }
    )
  }
} 