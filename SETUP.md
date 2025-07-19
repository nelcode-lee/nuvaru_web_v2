# Nuvaru Website Setup Guide

## 🚀 Quick Setup Steps

### 1. Environment Variables Setup

The `.env.local` file has been created. You need to update it with your actual credentials:

```bash
# Email Service (Resend)
RESEND_API_KEY="your_resend_api_key_here"

# Admin Authentication
ADMIN_USERNAME="admin"
ADMIN_PASSWORD="nuvaru2024!"

# Application Configuration
NODE_ENV="development"
NEXT_PUBLIC_BASE_URL="http://localhost:3000"
```

### 2. Set Up Resend Email Service

1. **Create Resend Account**: Go to [resend.com](https://resend.com) and sign up
2. **Get API Key**:
   - Go to API Keys section
   - Create a new API key
   - Copy the key
   - Replace `your_resend_api_key_here` in `.env.local`

### 3. Test the Setup

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
   - Check if submission is logged

4. **Test admin panel**:
   - Go to http://localhost:3000/admin/login
   - Login with: admin / nuvaru2024!
   - View admin interface

## 🔧 Troubleshooting

### Email Issues
- Verify your Resend API key is correct
- Check if your domain is verified in Resend
- Test with a verified sender email

### Environment Variables Not Loading
- Make sure `.env.local` is in the project root
- Restart the development server after changes
- Check for typos in variable names

## 🔐 Security Notes

- Change default admin credentials in production
- Use strong passwords
- Consider IP restrictions for admin access
- Regularly update dependencies
- Use HTTPS in production

## 🚀 Deployment

For production deployment:
1. Set up environment variables in your hosting platform
2. Configure proper domain and SSL
3. Set up monitoring and logging

## 📝 Note

Database functionality has been removed from this application. Contact submissions are logged to the console only. 