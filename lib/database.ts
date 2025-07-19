import { neon } from '@neondatabase/serverless'

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is not set')
}

const sql = neon(process.env.DATABASE_URL)

export interface BlogPost {
  id: number
  slug: string
  title: string
  excerpt: string
  content: string
  author: string
  published_at: string
  tags: string[]
  image_url?: string
  read_time: number
  status: string
  meta_title?: string
  meta_description?: string
  created_at: string
  updated_at: string
}

export interface CreateBlogPostData {
  slug: string
  title: string
  excerpt: string
  content: string
  author: string
  published_at: string
  tags: string[]
  image_url?: string
  read_time?: number
  meta_title?: string
  meta_description?: string
}

export interface UpdateBlogPostData extends Partial<CreateBlogPostData> {
  id: number
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const posts = await sql`
      SELECT * FROM blog_posts 
      WHERE status = 'published' 
      ORDER BY published_at DESC
    `
    return posts as BlogPost[]
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return []
  }
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const posts = await sql`
      SELECT * FROM blog_posts 
      WHERE slug = ${slug} AND status = 'published'
    `
    return (posts[0] as BlogPost) || null
  } catch (error) {
    console.error('Error fetching blog post:', error)
    return null
  }
}

export async function getBlogPostById(id: number): Promise<BlogPost | null> {
  try {
    const posts = await sql`
      SELECT * FROM blog_posts 
      WHERE id = ${id}
    `
    return (posts[0] as BlogPost) || null
  } catch (error) {
    console.error('Error fetching blog post by ID:', error)
    return null
  }
}

export async function createBlogPost(data: CreateBlogPostData): Promise<BlogPost | null> {
  try {
    const posts = await sql`
      INSERT INTO blog_posts (
        slug, title, excerpt, content, author, published_at, 
        tags, image_url, read_time, meta_title, meta_description
      ) VALUES (
        ${data.slug}, ${data.title}, ${data.excerpt}, ${data.content}, 
        ${data.author}, ${data.published_at}, ${data.tags}, 
        ${data.image_url || null}, ${data.read_time || 5}, 
        ${data.meta_title || null}, ${data.meta_description || null}
      ) RETURNING *
    `
    return (posts[0] as BlogPost) || null
  } catch (error) {
    console.error('Error creating blog post:', error)
    return null
  }
}

export async function updateBlogPost(data: UpdateBlogPostData): Promise<BlogPost | null> {
  try {
    const updateFields = []
    const values = []
    let paramIndex = 1

    if (data.slug !== undefined) {
      updateFields.push(`slug = $${paramIndex}`)
      values.push(data.slug)
      paramIndex++
    }
    if (data.title !== undefined) {
      updateFields.push(`title = $${paramIndex}`)
      values.push(data.title)
      paramIndex++
    }
    if (data.excerpt !== undefined) {
      updateFields.push(`excerpt = $${paramIndex}`)
      values.push(data.excerpt)
      paramIndex++
    }
    if (data.content !== undefined) {
      updateFields.push(`content = $${paramIndex}`)
      values.push(data.content)
      paramIndex++
    }
    if (data.author !== undefined) {
      updateFields.push(`author = $${paramIndex}`)
      values.push(data.author)
      paramIndex++
    }
    if (data.published_at !== undefined) {
      updateFields.push(`published_at = $${paramIndex}`)
      values.push(data.published_at)
      paramIndex++
    }
    if (data.tags !== undefined) {
      updateFields.push(`tags = $${paramIndex}`)
      values.push(data.tags)
      paramIndex++
    }
    if (data.image_url !== undefined) {
      updateFields.push(`image_url = $${paramIndex}`)
      values.push(data.image_url)
      paramIndex++
    }
    if (data.read_time !== undefined) {
      updateFields.push(`read_time = $${paramIndex}`)
      values.push(data.read_time)
      paramIndex++
    }
    if (data.meta_title !== undefined) {
      updateFields.push(`meta_title = $${paramIndex}`)
      values.push(data.meta_title)
      paramIndex++
    }
    if (data.meta_description !== undefined) {
      updateFields.push(`meta_description = $${paramIndex}`)
      values.push(data.meta_description)
      paramIndex++
    }

    updateFields.push(`updated_at = CURRENT_TIMESTAMP`)
    values.push(data.id)

    const query = `
      UPDATE blog_posts 
      SET ${updateFields.join(', ')} 
      WHERE id = $${paramIndex} 
      RETURNING *
    `

    const posts = await sql.unsafe(query, ...values)
    return (posts[0] as BlogPost) || null
  } catch (error) {
    console.error('Error updating blog post:', error)
    return null
  }
}

export async function deleteBlogPost(id: number): Promise<boolean> {
  try {
    await sql`DELETE FROM blog_posts WHERE id = ${id}`
    return true
  } catch (error) {
    console.error('Error deleting blog post:', error)
    return false
  }
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  try {
    const posts = await sql`
      SELECT * FROM blog_posts 
      ORDER BY published_at DESC
    `
    return posts as BlogPost[]
  } catch (error) {
    console.error('Error fetching all blog posts:', error)
    return []
  }
}

export async function getBlogPostsByTag(tag: string): Promise<BlogPost[]> {
  try {
    const posts = await sql`
      SELECT * FROM blog_posts 
      WHERE ${tag} = ANY(tags) AND status = 'published'
      ORDER BY published_at DESC
    `
    return posts as BlogPost[]
  } catch (error) {
    console.error('Error fetching blog posts by tag:', error)
    return []
  }
} 