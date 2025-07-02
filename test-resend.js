const { Resend } = require('resend');
require('dotenv').config({ path: '.env.local' });

async function testResend() {
  try {
    console.log('🔧 Testing Resend API key...');
    console.log('API Key exists:', !!process.env.RESEND_API_KEY);
    console.log('API Key starts with re_:', process.env.RESEND_API_KEY?.startsWith('re_'));
    console.log('API Key length:', process.env.RESEND_API_KEY?.length);
    
    if (!process.env.RESEND_API_KEY) {
      console.error('❌ RESEND_API_KEY not found');
      return;
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    
    console.log('📧 Attempting to send test email...');
    
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["info@nuvaru.co.uk"],
      subject: "Test Email",
      html: "<p>This is a test email</p>",
    });

    if (error) {
      console.error('❌ Resend error:', error);
      console.log('\nTroubleshooting tips:');
      console.log('1. Check if your API key starts with "re_"');
      console.log('2. Verify the key in your Resend dashboard');
      console.log('3. Make sure your account is verified');
      console.log('4. Try creating a new API key');
    } else {
      console.log('✅ Email sent successfully!');
      console.log('Email ID:', data?.id);
    }

  } catch (error) {
    console.error('❌ Test error:', error.message);
  }
}

testResend(); 