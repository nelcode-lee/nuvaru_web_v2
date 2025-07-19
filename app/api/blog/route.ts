import { NextRequest, NextResponse } from 'next/server'
import { 
  getBlogPosts as getDBBlogPosts, 
  createBlogPost, 
  updateBlogPost, 
  deleteBlogPost,
  getAllBlogPosts as getAllDBBlogPosts,
  type CreateBlogPostData,
  type UpdateBlogPostData
} from '@/lib/database'
import { 
  getBlogPosts as getFallbackBlogPosts, 
  getAllBlogPosts as getAllFallbackBlogPosts,
  type BlogPost as FallbackBlogPost
} from '@/lib/blog-posts-fallback'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const includeDrafts = searchParams.get('includeDrafts') === 'true'
    
    // Try to get posts from database first
    try {
      const posts = includeDrafts ? await getAllDBBlogPosts() : await getDBBlogPosts()
      
      // If database is empty, use fallback data
      if (posts.length === 0) {
        console.log('Database is empty, using fallback data')
        const fallbackPosts = includeDrafts ? getAllFallbackBlogPosts() : getFallbackBlogPosts()
        return NextResponse.json({
          success: true,
          posts: fallbackPosts,
          source: 'fallback'
        })
      }
      
      return NextResponse.json({
        success: true,
        posts,
        source: 'database'
      })
    } catch (dbError) {
      console.log('Database not available, using fallback data:', dbError)
      
      // Fallback to static data
      const posts = includeDrafts ? getAllFallbackBlogPosts() : getFallbackBlogPosts()
      return NextResponse.json({
        success: true,
        posts,
        source: 'fallback'
      })
    }
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

    const postData: CreateBlogPostData = {
      slug: body.slug,
      title: body.title,
      excerpt: body.excerpt,
      content: body.content,
      author: body.author,
      published_at: body.published_at,
      tags: body.tags || [],
      image_url: body.image_url,
      read_time: body.read_time,
      meta_title: body.meta_title,
      meta_description: body.meta_description
    }

    try {
      const newPost = await createBlogPost(postData)
      
      if (!newPost) {
        return NextResponse.json(
          { success: false, error: 'Failed to create blog post' },
          { status: 500 }
        )
      }

      return NextResponse.json({
        success: true,
        post: newPost,
        source: 'database'
      })
    } catch (dbError) {
      console.log('Database not available for POST:', dbError)
      return NextResponse.json(
        { success: false, error: 'Database not available. Please set up your database first.' },
        { status: 503 }
      )
    }
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

    const updateData: UpdateBlogPostData = {
      id: body.id,
      slug: body.slug,
      title: body.title,
      excerpt: body.excerpt,
      content: body.content,
      author: body.author,
      published_at: body.published_at,
      tags: body.tags,
      image_url: body.image_url,
      read_time: body.read_time,
      meta_title: body.meta_title,
      meta_description: body.meta_description
    }

    try {
      const updatedPost = await updateBlogPost(updateData)
      
      if (!updatedPost) {
        return NextResponse.json(
          { success: false, error: 'Failed to update blog post' },
          { status: 500 }
        )
      }

      return NextResponse.json({
        success: true,
        post: updatedPost,
        source: 'database'
      })
    } catch (dbError) {
      console.log('Database not available for PUT:', dbError)
      return NextResponse.json(
        { success: false, error: 'Database not available. Please set up your database first.' },
        { status: 503 }
      )
    }
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

    try {
      const success = await deleteBlogPost(parseInt(id))
      
      if (!success) {
        return NextResponse.json(
          { success: false, error: 'Failed to delete blog post' },
          { status: 500 }
        )
      }

      return NextResponse.json({
        success: true,
        message: 'Blog post deleted successfully',
        source: 'database'
      })
    } catch (dbError) {
      console.log('Database not available for DELETE:', dbError)
      return NextResponse.json(
        { success: false, error: 'Database not available. Please set up your database first.' },
        { status: 503 }
      )
    }
  } catch (error) {
    console.error('Error deleting blog post:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to delete blog post' },
      { status: 500 }
    )
  }
} 