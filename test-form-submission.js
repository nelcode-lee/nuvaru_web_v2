const { neon } = require("@neondatabase/serverless")
require('dotenv').config({ path: '.env.local' })

async function testFormSubmission() {
  try {
    console.log('🧪 Testing form submission to database...')
    console.log('DATABASE_URL exists:', !!process.env.DATABASE_URL)
    
    if (!process.env.DATABASE_URL) {
      console.error('❌ DATABASE_URL not found in .env.local')
      console.log('Please add your Neon database URL to .env.local file')
      return
    }

    const sql = neon(process.env.DATABASE_URL)
    
    // Test basic connection
    console.log('🔌 Testing database connection...')
    const testResult = await sql`SELECT NOW() as current_time`
    console.log('✅ Database connected:', testResult[0].current_time)

    // Check if table exists and has the right structure
    console.log('📋 Checking table structure...')
    const tableInfo = await sql`
      SELECT column_name, data_type, is_nullable 
      FROM information_schema.columns 
      WHERE table_name = 'contact_submissions' 
      ORDER BY ordinal_position
    `
    
    console.log('📊 Table columns:')
    tableInfo.forEach(col => {
      console.log(`  - ${col.column_name}: ${col.data_type} (${col.is_nullable === 'YES' ? 'nullable' : 'required'})`)
    })

    // Test inserting a sample form submission
    console.log('📝 Testing form submission insert...')
    const testSubmission = {
      name: 'Test User',
      email: 'test@example.com',
      phone: '+44 123 456 7890',
      company: 'Test Company Ltd',
      serviceType: 'AI Readiness Assessment',
      challenge: 'This is a test message to verify the form submission is working correctly.',
      source: 'search'
    }

    const insertResult = await sql`
      INSERT INTO contact_submissions (
        name, email, phone, company, service_type, message, source, status, created_at
      ) VALUES (
        ${testSubmission.name}, 
        ${testSubmission.email}, 
        ${testSubmission.phone}, 
        ${testSubmission.company}, 
        ${testSubmission.serviceType}, 
        ${testSubmission.challenge}, 
        ${testSubmission.source}, 
        'new', 
        NOW()
      ) RETURNING id, name, email, created_at
    `

    console.log('✅ Test submission inserted successfully:')
    console.log('  - ID:', insertResult[0].id)
    console.log('  - Name:', insertResult[0].name)
    console.log('  - Email:', insertResult[0].email)
    console.log('  - Created:', insertResult[0].created_at)

    // Count total submissions
    const countResult = await sql`SELECT COUNT(*) as total FROM contact_submissions`
    console.log('📊 Total submissions in database:', countResult[0].total)

    // Show recent submissions
    console.log('📋 Recent submissions:')
    const recentSubmissions = await sql`
      SELECT id, name, email, company, service_type, created_at 
      FROM contact_submissions 
      ORDER BY created_at DESC 
      LIMIT 5
    `
    
    recentSubmissions.forEach(sub => {
      console.log(`  - ${sub.id}: ${sub.name} (${sub.email}) - ${sub.service_type} - ${sub.created_at}`)
    })

    console.log('\n🎉 Form submission test completed successfully!')
    console.log('✅ Your database is properly configured for form submissions')
    console.log('📧 Form submissions will be saved to the database even if email fails')
    console.log('👨‍💼 You can view submissions at: http://localhost:3000/admin/contacts')

  } catch (error) {
    console.error('❌ Test failed:', error.message)
    console.error('Full error:', error)
    
    if (error.message.includes('relation "contact_submissions" does not exist')) {
      console.log('\n💡 Solution: Run the database setup script:')
      console.log('   node setup-database.js')
    }
  }
}

testFormSubmission() 