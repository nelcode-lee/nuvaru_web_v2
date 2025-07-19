const { neon } = require('@neondatabase/serverless');
require('dotenv').config({ path: '.env.local' });

async function setupBlogDatabase() {
  try {
    console.log('🔧 Setting up blog database...');
    
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
    const sqlScript = fs.readFileSync('./scripts/create-blog-posts.sql', 'utf8');
    
    console.log('📝 Creating blog_posts table...');
    await sql.unsafe(sqlScript);
    
    console.log('✅ Blog database setup completed successfully!');
    console.log('📊 Table "blog_posts" created with sample data');
    
  } catch (error) {
    console.error('❌ Blog database setup failed:', error.message);
    console.log('\nTroubleshooting tips:');
    console.log('1. Make sure DATABASE_URL is set in .env.local');
    console.log('2. Verify your Neon database is accessible');
    console.log('3. Check that the database URL format is correct');
  }
}

setupBlogDatabase(); 