"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import type { BlogPost } from "@/lib/database"
import { Trash2, Edit, Plus, Mail, FileText, Upload, X, Image as ImageIcon, Bold, Italic, Type, AlignLeft, AlignCenter, AlignRight } from "lucide-react"
import Link from "next/link"

export default function AdminBlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null)
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string>("")
  const [uploading, setUploading] = useState(false)
  const [formData, setFormData] = useState({
    slug: "",
    title: "",
    excerpt: "",
    content: "",
    author: "",
    published_at: new Date().toISOString().split('T')[0],
    tags: "",
    image_url: "",
    read_time: 5,
    meta_title: "",
    meta_description: ""
  })

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    try {
      const response = await fetch('/api/blog?includeDrafts=true')
      const data = await response.json()
      
      if (data.success) {
        setPosts(data.posts)
      }
    } catch (error) {
      console.error('Error fetching posts:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleImageUpload = async (file: File) => {
    if (!file) return

    // Validate file type
    if (!file.type.startsWith('image/')) {
      alert('Please select an image file')
      return
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert('Image file size must be less than 5MB')
      return
    }

    setImageFile(file)
    
    // Create preview
    const reader = new FileReader()
    reader.onload = (e) => {
      setImagePreview(e.target?.result as string)
    }
    reader.readAsDataURL(file)
  }

  const handleImageDrop = (e: React.DragEvent) => {
    e.preventDefault()
    const file = e.dataTransfer.files[0]
    if (file) {
      handleImageUpload(file)
    }
  }

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      handleImageUpload(file)
    }
  }

  const removeImage = () => {
    setImageFile(null)
    setImagePreview("")
    setFormData({...formData, image_url: ""})
  }

  const uploadImageToServer = async (): Promise<string> => {
    if (!imageFile) return formData.image_url

    setUploading(true)
    try {
      const formData = new FormData()
      formData.append('image', imageFile)
      
      const response = await fetch('/api/upload-image', {
        method: 'POST',
        body: formData
      })
      
      const data = await response.json()
      
      if (data.success) {
        return data.imageUrl
      } else {
        throw new Error(data.error || 'Upload failed')
      }
    } catch (error) {
      console.error('Error uploading image:', error)
      alert('Failed to upload image. Please try again.')
      throw error
    } finally {
      setUploading(false)
    }
  }

  // Rich text editor functions
  const formatText = (command: string, value?: string) => {
    const textarea = document.getElementById('content') as HTMLTextAreaElement
    if (!textarea) return

    const start = textarea.selectionStart
    const end = textarea.selectionEnd
    const selectedText = textarea.value.substring(start, end)
    const beforeText = textarea.value.substring(0, start)
    const afterText = textarea.value.substring(end)

    let newText = ""
    let newCursorPos = start

    switch (command) {
      case 'bold':
        newText = beforeText + `**${selectedText}**` + afterText
        newCursorPos = start + selectedText.length + 4
        break
      case 'italic':
        newText = beforeText + `*${selectedText}*` + afterText
        newCursorPos = start + selectedText.length + 2
        break
      case 'title':
        newText = beforeText + `# ${selectedText}` + afterText
        newCursorPos = start + selectedText.length + 2
        break
      case 'subtitle':
        newText = beforeText + `## ${selectedText}` + afterText
        newCursorPos = start + selectedText.length + 3
        break
      case 'heading3':
        newText = beforeText + `### ${selectedText}` + afterText
        newCursorPos = start + selectedText.length + 4
        break
      case 'normal':
        // Remove markdown formatting
        const cleanText = selectedText.replace(/^[#*]+ /g, '').replace(/\*\*(.*?)\*\*/g, '$1').replace(/\*(.*?)\*/g, '$1')
        newText = beforeText + cleanText + afterText
        newCursorPos = start + cleanText.length
        break
      case 'list':
        newText = beforeText + `- ${selectedText}` + afterText
        newCursorPos = start + selectedText.length + 2
        break
      case 'quote':
        newText = beforeText + `> ${selectedText}` + afterText
        newCursorPos = start + selectedText.length + 2
        break
    }

    setFormData({...formData, content: newText})
    
    // Set cursor position after state update
    setTimeout(() => {
      textarea.focus()
      textarea.setSelectionRange(newCursorPos, newCursorPos)
    }, 0)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      // Upload image first if there's a new image
      let finalImageUrl = formData.image_url
      if (imageFile) {
        finalImageUrl = await uploadImageToServer()
      }
    
      const postData = {
        ...formData,
        image_url: finalImageUrl,
        tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag)
      }

      const url = editingPost ? '/api/blog' : '/api/blog'
      const method = editingPost ? 'PUT' : 'POST'
      const body = editingPost ? { ...postData, id: editingPost.id } : postData

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
      })

      const data = await response.json()
      
      if (data.success) {
        setShowForm(false)
        setEditingPost(null)
        resetForm()
        fetchPosts()
      } else {
        alert('Error: ' + data.error)
      }
    } catch (error) {
      console.error('Error saving post:', error)
      alert('Error saving post')
    }
  }

  const handleEdit = (post: BlogPost) => {
    setEditingPost(post)
    setFormData({
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt,
      content: post.content,
      author: post.author,
      published_at: post.published_at,
      tags: post.tags.join(', '),
      image_url: post.image_url || "",
      read_time: post.read_time,
      meta_title: post.meta_title || "",
      meta_description: post.meta_description || ""
    })
    setImagePreview(post.image_url || "")
    setImageFile(null)
    setShowForm(true)
  }

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this post?')) return
    
    try {
      const response = await fetch(`/api/blog?id=${id}`, {
        method: 'DELETE'
      })
      
      const data = await response.json()
      
      if (data.success) {
        fetchPosts()
      } else {
        alert('Error: ' + data.error)
      }
    } catch (error) {
      console.error('Error deleting post:', error)
      alert('Error deleting post')
    }
  }

  const resetForm = () => {
    setFormData({
      slug: "",
      title: "",
      excerpt: "",
      content: "",
      author: "",
      published_at: new Date().toISOString().split('T')[0],
      tags: "",
      image_url: "",
      read_time: 5,
      meta_title: "",
      meta_description: ""
    })
    setImageFile(null)
    setImagePreview("")
  }

  if (loading) {
    return (
      <div className="text-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p>Loading blog posts...</p>
      </div>
    )
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Blog Management</h1>
          <p className="text-gray-600">Create and manage blog posts</p>
        </div>
        <div className="flex items-center gap-4">
          {/* Navigation Menu */}
          <nav className="flex items-center gap-2">
            <Link href="/admin/contacts">
              <Button variant="outline" className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Contacts
              </Button>
            </Link>
            <Link href="/admin/blog">
              <Button variant="default" className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                Blog
              </Button>
            </Link>
          </nav>
          <Button onClick={() => setShowForm(true)}>
            <Plus className="w-4 h-4 mr-2" />
            Add Post
          </Button>
        </div>
      </div>

      {showForm && (
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>{editingPost ? 'Edit Post' : 'Add New Post'}</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="slug">Slug</Label>
                  <Input
                    id="slug"
                    value={formData.slug}
                    onChange={(e) => setFormData({...formData, slug: e.target.value})}
                    placeholder="post-slug"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    placeholder="Post Title"
                    required
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="excerpt">Excerpt</Label>
                <Textarea
                  id="excerpt"
                  value={formData.excerpt}
                  onChange={(e) => setFormData({...formData, excerpt: e.target.value})}
                  placeholder="Brief description of the post"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="content">Content</Label>
                
                {/* Rich Text Toolbar */}
                <div className="border border-gray-300 rounded-t-lg bg-gray-50 p-2 flex flex-wrap gap-1">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => formatText('title')}
                    title="Heading 1"
                    className="h-8 px-2"
                  >
                    <Type className="w-3 h-3 mr-1" />
                    H1
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => formatText('subtitle')}
                    title="Heading 2"
                    className="h-8 px-2"
                  >
                    <Type className="w-3 h-3 mr-1" />
                    H2
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => formatText('heading3')}
                    title="Heading 3"
                    className="h-8 px-2"
                  >
                    <Type className="w-3 h-3 mr-1" />
                    H3
                  </Button>
                  <div className="w-px h-6 bg-gray-300 mx-1"></div>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => formatText('normal')}
                    title="Normal Text"
                    className="h-8 px-2"
                  >
                    <AlignLeft className="w-3 h-3 mr-1" />
                    Normal
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => formatText('bold')}
                    title="Bold"
                    className="h-8 px-2"
                  >
                    <Bold className="w-3 h-3" />
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => formatText('italic')}
                    title="Italic"
                    className="h-8 px-2"
                  >
                    <Italic className="w-3 h-3" />
                  </Button>
                  <div className="w-px h-6 bg-gray-300 mx-1"></div>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => formatText('list')}
                    title="List Item"
                    className="h-8 px-2"
                  >
                    •
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => formatText('quote')}
                    title="Quote"
                    className="h-8 px-2"
                  >
                    "
                  </Button>
                </div>
                
                <Textarea
                  id="content"
                  value={formData.content}
                  onChange={(e) => setFormData({...formData, content: e.target.value})}
                  placeholder="Full post content (use toolbar above for formatting)"
                  rows={15}
                  required
                  className="rounded-t-none border-t-0"
                />
                
                <div className="text-xs text-gray-500 mt-1">
                  <strong>Formatting Guide:</strong> Select text and use the toolbar above, or type manually:
                  <br />
                  • <code># Heading 1</code> • <code>## Heading 2</code> • <code>### Heading 3</code> • <code>**Bold**</code> • <code>*Italic*</code> • <code>- List item</code> • <code>{'>'} Quote</code>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="author">Author</Label>
                  <Input
                    id="author"
                    value={formData.author}
                    onChange={(e) => setFormData({...formData, author: e.target.value})}
                    placeholder="Author Name"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="published_at">Published Date</Label>
                  <Input
                    id="published_at"
                    type="date"
                    value={formData.published_at}
                    onChange={(e) => setFormData({...formData, published_at: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="read_time">Read Time (minutes)</Label>
                  <Input
                    id="read_time"
                    type="number"
                    value={formData.read_time}
                    onChange={(e) => setFormData({...formData, read_time: parseInt(e.target.value)})}
                    min="1"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="tags">Tags (comma-separated)</Label>
                  <Input
                    id="tags"
                    value={formData.tags}
                    onChange={(e) => setFormData({...formData, tags: e.target.value})}
                    placeholder="AI, Digital Transformation, UK SMEs"
                  />
                </div>
                <div>
                  <Label htmlFor="image_url">Image URL (optional)</Label>
                  <Input
                    id="image_url"
                    value={formData.image_url}
                    onChange={(e) => setFormData({...formData, image_url: e.target.value})}
                    placeholder="/path/to/image.jpg"
                  />
                </div>
              </div>

              {/* Image Upload Section */}
              <div>
                <Label>Featured Image</Label>
                <div className="mt-2">
                  {imagePreview ? (
                    <div className="relative">
                      <img 
                        src={imagePreview} 
                        alt="Preview" 
                        className="w-full max-w-md h-48 object-cover rounded-lg border"
                      />
                      <Button
                        type="button"
                        variant="destructive"
                        size="sm"
                        className="absolute top-2 right-2"
                        onClick={removeImage}
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  ) : (
                    <div
                      className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors"
                      onDrop={handleImageDrop}
                      onDragOver={(e) => e.preventDefault()}
                    >
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageSelect}
                        className="hidden"
                        id="image-upload"
                      />
                      <label htmlFor="image-upload" className="cursor-pointer">
                        <ImageIcon className="mx-auto h-12 w-12 text-gray-400" />
                        <p className="mt-2 text-sm text-gray-600">
                          <span className="font-medium text-blue-600 hover:text-blue-500">
                            Click to upload
                          </span>{" "}
                          or drag and drop
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          PNG, JPG, GIF up to 5MB
                        </p>
                      </label>
                    </div>
                  )}
                </div>
              </div>
              
              <div>
                <Label htmlFor="meta_title">Meta Title</Label>
                <Input
                  id="meta_title"
                  value={formData.meta_title}
                  onChange={(e) => setFormData({...formData, meta_title: e.target.value})}
                  placeholder="SEO title for search engines"
                />
              </div>
              
              <div>
                <Label htmlFor="meta_description">Meta Description</Label>
                <Textarea
                  id="meta_description"
                  value={formData.meta_description}
                  onChange={(e) => setFormData({...formData, meta_description: e.target.value})}
                  placeholder="SEO description for search engines"
                  rows={3}
                />
              </div>
              
              <div className="flex space-x-4">
                <Button type="submit" disabled={uploading}>
                  {uploading ? 'Uploading...' : (editingPost ? 'Update Post' : 'Create Post')}
                </Button>
                <Button 
                  type="button" 
                  variant="outline"
                  onClick={() => {
                    setShowForm(false)
                    setEditingPost(null)
                    resetForm()
                  }}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      <div className="grid gap-4">
        {posts.map((post) => (
          <Card key={post.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl">{post.title}</CardTitle>
                  <p className="text-sm text-gray-600 mt-2">
                    {post.author} • {new Date(post.published_at).toLocaleDateString()} • {post.read_time} min read
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    Slug: {post.slug} • Status: {post.status}
                  </p>
                </div>
                <div className="flex space-x-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleEdit(post)}
                  >
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleDelete(post.id)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">{post.excerpt}</p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
} 