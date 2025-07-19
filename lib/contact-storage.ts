import { writeFileSync, appendFileSync, existsSync, mkdirSync } from 'fs'
import { join } from 'path'

interface ContactSubmission {
  id: string
  timestamp: string
  name: string
  email: string
  phone?: string
  company: string
  service_type?: string
  message: string
  source?: string
  ip?: string
  userAgent?: string
}

export class ContactStorage {
  private static readonly STORAGE_DIR = join(process.cwd(), 'data', 'contacts')
  private static readonly SUBMISSIONS_FILE = join(this.STORAGE_DIR, 'submissions.json')

  static ensureStorageDir() {
    if (!existsSync(this.STORAGE_DIR)) {
      mkdirSync(this.STORAGE_DIR, { recursive: true })
    }
  }

  static generateId(): string {
    return `contact_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
  }

  static saveSubmission(submission: Omit<ContactSubmission, 'id' | 'timestamp'>): ContactSubmission {
    this.ensureStorageDir()

    const fullSubmission: ContactSubmission = {
      ...submission,
      id: this.generateId(),
      timestamp: new Date().toISOString(),
    }

    // Append to JSON file
    const jsonLine = JSON.stringify(fullSubmission) + '\n'
    appendFileSync(this.SUBMISSIONS_FILE, jsonLine)

    // Also create a backup log file
    const logEntry = `[${fullSubmission.timestamp}] ${fullSubmission.name} (${fullSubmission.email}) from ${fullSubmission.company} - ${fullSubmission.service_type || 'No service specified'}\n`
    appendFileSync(join(this.STORAGE_DIR, 'contacts.log'), logEntry)

    console.log(`📝 Contact submission saved: ${fullSubmission.id}`)
    return fullSubmission
  }

  static getAllSubmissions(): ContactSubmission[] {
    this.ensureStorageDir()
    
    if (!existsSync(this.SUBMISSIONS_FILE)) {
      return []
    }

    try {
      const content = require('fs').readFileSync(this.SUBMISSIONS_FILE, 'utf8')
      const lines = content.trim().split('\n').filter((line: string) => line.length > 0)
      return lines.map((line: string) => JSON.parse(line)).reverse() // Most recent first
    } catch (error) {
      console.error('Error reading contact submissions:', error)
      return []
    }
  }

  static getSubmissionCount(): number {
    this.ensureStorageDir()
    
    if (!existsSync(this.SUBMISSIONS_FILE)) {
      return 0
    }

    try {
      const content = require('fs').readFileSync(this.SUBMISSIONS_FILE, 'utf8')
      const lines = content.trim().split('\n').filter((line: string) => line.length > 0)
      return lines.length
    } catch (error) {
      console.error('Error counting contact submissions:', error)
      return 0
    }
  }

  static getRecentSubmissions(limit: number = 10): ContactSubmission[] {
    return this.getAllSubmissions().slice(0, limit)
  }
} 