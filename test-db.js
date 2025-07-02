const { neon } = require('@neondatabase/serverless');
require('dotenv').config({ path: '.env.local' });

async function testDatabase() {
  try {
    console.log('🔧 Testing database connection...');
    console.log('DATABASE_URL exists:', !!process.env.DATABASE_URL);
    
    if (!process.env.DATABASE_URL) {
      console.error('❌ DATABASE_URL not found');
      return;
    }

    const sql = neon(process.env.DATABASE_URL);
    
    // Test basic connection
    console.log('🔌 Testing basic connection...');
    const testResult = await sql`SELECT NOW() as current_time`;
    console.log('✅ Connection successful:', testResult[0].current_time);

    // Check if table exists
    console.log('📋 Checking if table exists...');
    const tableCheck = await sql`
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_schema = 'public' 
        AND table_name = 'contact_submissions'
      );
    `;
    console.log('Table exists:', tableCheck[0].exists);

    if (!tableCheck[0].exists) {
      console.log('📝 Creating table...');
      
      // Create table manually
      await sql`
        CREATE TABLE contact_submissions (
          id SERIAL PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          email VARCHAR(255) NOT NULL,
          company VARCHAR(255),
          phone VARCHAR(50),
          service_type VARCHAR(100),
          message TEXT NOT NULL,
          status VARCHAR(50) DEFAULT 'new',
          notes TEXT,
          ip_address INET,
          user_agent TEXT,
          created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
          updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        )
      `;
      
      console.log('✅ Table created successfully');
      
      // Insert test data
      await sql`
        INSERT INTO contact_submissions (name, email, company, phone, service_type, message, ip_address) 
        VALUES (
          'Test User', 
          'test@example.com', 
          'Test Company', 
          '+44 123 456 7890', 
          'AI Assessment', 
          'This is a test message.',
          '127.0.0.1'
        )
      `;
      
      console.log('✅ Test data inserted');
    }

    // Count records
    const countResult = await sql`SELECT COUNT(*) as count FROM contact_submissions`;
    console.log('📊 Total records:', countResult[0].count);

  } catch (error) {
    console.error('❌ Error:', error.message);
    console.error('Full error:', error);
  }
}

testDatabase(); 