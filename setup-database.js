const { neon } = require('@neondatabase/serverless');
require('dotenv').config({ path: '.env.local' });

async function setupDatabase() {
  try {
    console.log('🔧 Setting up database...');
    
    if (!process.env.DATABASE_URL) {
      console.error('❌ DATABASE_URL not found in environment variables');
      console.log('Please add your Neon database URL to .env.local file');
      return;
    }

    const sql = neon(process.env.DATABASE_URL);
    
    // Test connection
    console.log('🔌 Testing database connection...');
    const testResult = await sql`SELECT NOW() as current_time`;
    console.log('✅ Database connected:', testResult[0].current_time);

    // Read and execute the SQL script
    const fs = require('fs');
    const sqlScript = fs.readFileSync('./scripts/create-contact-submissions.sql', 'utf8');
    
    console.log('📝 Creating contact_submissions table...');
    await sql.unsafe(sqlScript);
    
    console.log('✅ Database setup completed successfully!');
    console.log('📊 Table "contact_submissions" created with test data');
    
  } catch (error) {
    console.error('❌ Database setup failed:', error.message);
    console.log('\nTroubleshooting tips:');
    console.log('1. Make sure DATABASE_URL is set in .env.local');
    console.log('2. Verify your Neon database is accessible');
    console.log('3. Check that the database URL format is correct');
  }
}

setupDatabase(); 