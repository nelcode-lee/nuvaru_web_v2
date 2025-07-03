const { neon } = require("@neondatabase/serverless")

// This script will test the database connection using the DATABASE_URL from environment
async function testProductionDatabase() {
  try {
    console.log('🧪 Testing production database connection...')
    console.log('DATABASE_URL exists:', !!process.env.DATABASE_URL)
    
    if (!process.env.DATABASE_URL) {
      console.error('❌ DATABASE_URL not found in environment')
      console.log('Please set DATABASE_URL environment variable')
      return
    }

    const sql = neon(process.env.DATABASE_URL)
    
    // Test basic connection
    console.log('🔌 Testing database connection...')
    const testResult = await sql`SELECT NOW() as current_time`
    console.log('✅ Database connected:', testResult[0].current_time)

    // Check table structure
    console.log('📋 Checking table structure...')
    const tableInfo = await sql`
      SELECT column_name, data_type 
      FROM information_schema.columns 
      WHERE table_name = 'contact_submissions' 
      ORDER BY ordinal_position
    `
    
    console.log('📊 Table columns:')
    tableInfo.forEach(col => {
      console.log(`  - ${col.column_name}: ${col.data_type}`)
    })

    // Count total submissions
    const countResult = await sql`SELECT COUNT(*) as total FROM contact_submissions`
    console.log('📊 Total submissions in database:', countResult[0].total)

    // Show recent submissions (last 10)
    console.log('📋 Recent submissions:')
    const recentSubmissions = await sql`
      SELECT id, name, email, company, service_type, created_at 
      FROM contact_submissions 
      ORDER BY created_at DESC 
      LIMIT 10
    `
    
    if (recentSubmissions.length === 0) {
      console.log('  No submissions found')
    } else {
      recentSubmissions.forEach(sub => {
        console.log(`  - ${sub.id}: ${sub.name} (${sub.email}) - ${sub.service_type} - ${sub.created_at}`)
      })
    }

    // Test inserting a sample submission
    console.log('📝 Testing form submission insert...')
    const testSubmission = {
      name: 'Production Test User',
      email: 'production-test@example.com',
      phone: '+44 123 456 7890',
      company: 'Production Test Company',
      serviceType: 'AI Readiness Assessment',
      challenge: 'This is a test submission from production environment.',
      source: 'test'
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

    console.log('\n🎉 Production database test completed successfully!')
    console.log('✅ Database is working correctly')
    console.log('📧 Form submissions should be saved to this database')

  } catch (error) {
    console.error('❌ Production database test failed:', error.message)
    console.error('Full error:', error)
    
    if (error.message.includes('authentication failed')) {
      console.log('\n💡 Possible solutions:')
      console.log('1. Check if DATABASE_URL is correct')
      console.log('2. Verify Neon database credentials')
      console.log('3. Ensure database is not paused (free tier)')
    }
  }
}

testProductionDatabase() 