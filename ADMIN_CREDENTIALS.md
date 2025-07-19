# 🔐 Admin Credentials

## Current Credentials

**Username:** `nuvaru_admin`  
**Password:** `Nuvaru2024!Secure#Admin`

## Access Points

- **Admin Login:** `http://localhost:3000/admin/login`
- **Admin Dashboard:** `http://localhost:3000/admin`
- **Contact Submissions:** `http://localhost:3000/admin/contacts/submissions`

## Security Features

✅ **Rate Limiting:** 5 attempts, 15-minute lockout  
✅ **Secure Cookies:** HttpOnly, Secure, SameSite  
✅ **Session Expiration:** 24 hours  
✅ **Strong Password:** Meets security requirements  

## Managing Credentials

### Option 1: Use the Management Script
```bash
node scripts/manage-credentials.js
```

### Option 2: Manual Update
Edit `.env.local`:
```bash
ADMIN_USERNAME="your_username"
ADMIN_PASSWORD="your_secure_password"
```

### Option 3: Generate New Credentials
```bash
# Generate secure password
openssl rand -base64 24

# Update .env.local with new credentials
```

## Production Security Checklist

- [ ] Change default credentials
- [ ] Use strong, unique password
- [ ] Enable HTTPS in production
- [ ] Set secure environment variables
- [ ] Regular password rotation
- [ ] Monitor login attempts

## Password Requirements

- Minimum 12 characters
- Mix of uppercase, lowercase, numbers, symbols
- Avoid common words or patterns
- Unique to this application

## Emergency Access

If you lose access to admin credentials:

1. Stop the application
2. Edit `.env.local` with new credentials
3. Restart the application
4. Test login with new credentials

## Security Notes

- Credentials are stored in `.env.local` (not committed to git)
- Session cookies are HttpOnly and secure
- Rate limiting prevents brute force attacks
- All admin routes are protected by middleware 