const { neon } = require("@neondatabase/serverless")
require('dotenv').config({ path: '.env.local' })

async function addSourceColumn() {
  try {
    console.log('🔧 Adding source column to contact_submissions table...')
    
    if (!process.env.DATABASE_URL) {
      console.error('❌ DATABASE_URL not found')
      return
    }

    const sql = neon(process.env.DATABASE_URL)
    
    // Test connection
    console.log('🔌 Testing database connection...')
    const testResult = await sql`SELECT NOW() as current_time`
    console.log('✅ Database connected:', testResult[0].current_time)

    // Check if source column exists
    console.log('📋 Checking if source column exists...')
    const columnCheck = await sql`
      SELECT column_name 
      FROM information_schema.columns 
      WHERE table_name = 'contact_submissions' 
      AND column_name = 'source'
    `
    
    if (columnCheck.length > 0) {
      console.log('✅ Source column already exists')
    } else {
      console.log('📝 Adding source column...')
      await sql`ALTER TABLE contact_submissions ADD COLUMN source VARCHAR(100)`
      console.log('✅ Source column added successfully')
    }

    // Show final table structure
    console.log('📊 Final table structure:')
    const tableInfo = await sql`
      SELECT column_name, data_type, is_nullable 
      FROM information_schema.columns 
      WHERE table_name = 'contact_submissions' 
      ORDER BY ordinal_position
    `
    
    tableInfo.forEach(col => {
      console.log(`  - ${col.column_name}: ${col.data_type} (${col.is_nullable === 'YES' ? 'nullable' : 'required'})`)
    })

    console.log('🎉 Database structure updated successfully!')

  } catch (error) {
    console.error('❌ Error:', error.message)
  }
}

addSourceColumn() 