# LinkedIn API Setup Guide

## Current Issues
Based on the logs, we're experiencing several LinkedIn API authentication problems:

1. **403 ACCESS_DENIED**: The access token doesn't have required permissions
2. **400 ILLEGAL_ARGUMENT**: API query parameters are incorrect
3. **Invalid PERSON_ID**: The ID format was incorrect

## Solution Steps

### 1. Fix LinkedIn App Permissions (CRITICAL)

The main issue is **403 ACCESS_DENIED** - your access token doesn't have the required scopes.

#### Step 1: Update LinkedIn App Settings
1. Go to [LinkedIn Developers](https://www.linkedin.com/developers/)
2. Select your app
3. Go to "Auth" tab
4. **Add these OAuth 2.0 scopes**:
   - `r_liteprofile` - Read basic profile
   - `r_emailaddress` - Read email address  
   - `w_member_social` - Write posts
   - `r_organization_social` - Read organization posts (if posting as company)

#### Step 2: Generate New Access Token
1. In your LinkedIn app's "Auth" tab
2. Click "Generate Access Token"
3. **Select ALL required scopes**:
   - ✅ `r_liteprofile`
   - ✅ `r_emailaddress`
   - ✅ `w_member_social`
   - ✅ `r_organization_social` (if needed)
4. Copy the new access token

#### Step 3: Update Environment Variables
Replace your current `.env.local` LinkedIn variables:

```env
# LinkedIn API Configuration
LINKEDIN_CLIENT_ID=78225z5y6jvlj6
LINKEDIN_CLIENT_SECRET=your_client_secret_here
LINKEDIN_ACCESS_TOKEN=your_new_access_token_here
LINKEDIN_REDIRECT_URI=http://localhost:3000/api/linkedin/callback

# Remove this - we don't need it anymore
# LINKEDIN_PERSON_ID=65413533
```

### 2. Test the Configuration

After updating the access token:

1. Restart your development server
2. Test the configuration:
   ```bash
   curl http://localhost:3000/api/linkedin/test
   ```
3. You should see successful responses (200 status codes)

### 3. API Endpoints Fixed

The updated code now uses these correct endpoints:

- **Profile**: `https://api.linkedin.com/v2/me?projection=(id,firstName,lastName)`
- **Posts**: `https://api.linkedin.com/v2/ugcPosts?authors=List(urn:li:person:me)&count=10&start=0`
- **Share**: `https://api.linkedin.com/v2/ugcPosts` (POST)

### 4. Common Issues & Solutions

#### Issue: "Not enough permissions to access: me.GET.NO_VERSION"
**Solution**: Your access token is missing the `r_liteprofile` scope. Generate a new token with this scope.

#### Issue: "Invalid query parameters passed to request"
**Solution**: The API format has been fixed. The updated code uses the correct query parameters.

#### Issue: "ACCESS_DENIED"
**Solution**: This means your app doesn't have the required permissions. Follow Step 1 above to add the correct scopes.

### 5. Verification Steps

After setup, verify these endpoints work:

1. **Test Configuration**: `GET /api/linkedin/test`
   - Should return 200 status for profile and posts tests
   
2. **Get Posts**: `GET /api/linkedin/share`
   - Should return real LinkedIn posts or sample posts
   
3. **Share Post**: `POST /api/linkedin/share`
   - Should successfully post to LinkedIn

### 6. Production Deployment

For production:

1. Update redirect URIs in LinkedIn app settings
2. Use environment-specific access tokens
3. Implement token refresh logic
4. Add proper error handling for expired tokens

## Troubleshooting

If you're still having issues:

1. **Check Token Scopes**: Ensure your access token has ALL required scopes
2. **Verify App Status**: Make sure your LinkedIn app is approved and active
3. **Check App Permissions**: Ensure your app has the required product permissions
4. **Generate Fresh Token**: Access tokens can expire - generate a new one if needed

## Next Steps

1. ✅ Update your LinkedIn app with the required scopes
2. ✅ Generate a new access token with all required permissions
3. ✅ Update your `.env.local` with the new token
4. ✅ Restart the development server
5. ✅ Test the `/api/linkedin/test` endpoint
6. ✅ Verify the `/api/linkedin/share` endpoint works
7. ✅ Test the share functionality in your application

## Expected Results

After following these steps, you should see:

- **200 status codes** for profile and posts API calls
- **Real LinkedIn posts** instead of sample posts
- **Successful sharing** functionality
- **No more 403 or 400 errors** 