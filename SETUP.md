# Nuvaru Website Backend Setup Guide

## 🚀 Quick Setup Steps

### 1. Environment Variables Setup

The `.env.local` file has been created. You need to update it with your actual credentials:

```bash
# Database Configuration
DATABASE_URL="your_neon_database_url_here"

# Email Service (Resend)
RESEND_API_KEY="your_resend_api_key_here"

# Admin Authentication
ADMIN_USERNAME="admin"
ADMIN_PASSWORD="nuvaru2024!"

# Application Configuration
NODE_ENV="development"
NEXT_PUBLIC_BASE_URL="http://localhost:3000"
```

### 2. Set Up Neon Database

1. **Create Neon Account**: Go to [neon.tech](https://neon.tech) and sign up
2. **Create New Project**: 
   - Click "Create New Project"
   - Choose a name (e.g., "nuvaru-website")
   - Select a region close to you
3. **Get Connection String**:
   - Go to your project dashboard
   - Click "Connection Details"
   - Copy the connection string
   - Replace `your_neon_database_url_here` in `.env.local`

### 3. Set Up Resend Email Service

1. **Create Resend Account**: Go to [resend.com](https://resend.com) and sign up
2. **Get API Key**:
   - Go to API Keys section
   - Create a new API key
   - Copy the key
   - Replace `your_resend_api_key_here` in `.env.local`

### 4. Create Database Table

Once you have your Neon database URL set up, run:

```bash
node setup-database.js
```

This will:
- Test the database connection
- Create the `contact_submissions` table
- Add sample data for testing

### 5. Test the Setup

1. **Restart the development server**:
   ```bash
   pnpm run dev
   ```

2. **Test the debug endpoint**:
   ```bash
   curl http://localhost:3000/api/debug
   ```

3. **Test the contact form**:
   - Go to http://localhost:3000
   - Fill out the contact form
   - Check if data is saved to the database

4. **Test admin panel**:
   - Go to http://localhost:3000/admin/login
   - Login with: admin / nuvaru2024!
   - View contact submissions

## 🔧 Troubleshooting

### Database Connection Issues
- Verify your Neon database URL is correct
- Check if your Neon database is active (free tier may sleep)
- Ensure your IP is allowed (if using IP restrictions)

### Email Issues
- Verify your Resend API key is correct
- Check if your domain is verified in Resend
- Test with a verified sender email

### Environment Variables Not Loading
- Make sure `.env.local` is in the project root
- Restart the development server after changes
- Check for typos in variable names

## 📊 Database Schema

The `contact_submissions` table includes:
- `id`: Primary key
- `name`: Contact name
- `email`: Contact email
- `company`: Company name
- `phone`: Phone number (optional)
- `service_type`: Type of service requested
- `message`: Contact message
- `status`: Submission status (default: 'new')
- `created_at`: Timestamp
- `updated_at`: Last update timestamp

## 🔐 Security Notes

- Change default admin credentials in production
- Use strong passwords
- Consider IP restrictions for admin access
- Regularly update dependencies
- Use HTTPS in production

## 🚀 Deployment

For production deployment:
1. Set up environment variables in your hosting platform
2. Use a production database
3. Configure proper domain and SSL
4. Set up monitoring and logging 