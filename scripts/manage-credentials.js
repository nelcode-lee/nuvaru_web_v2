#!/usr/bin/env node

const fs = require('fs');
const crypto = require('crypto');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function generateSecurePassword(length = 16) {
  const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
  let password = '';
  for (let i = 0; i < length; i++) {
    password += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  return password;
}

function updateEnvFile(username, password) {
  const envPath = '.env.local';
  let envContent = '';
  
  if (fs.existsSync(envPath)) {
    envContent = fs.readFileSync(envPath, 'utf8');
  }
  
  // Update or add admin credentials
  const usernameRegex = /ADMIN_USERNAME="[^"]*"/;
  const passwordRegex = /ADMIN_PASSWORD="[^"]*"/;
  
  if (usernameRegex.test(envContent)) {
    envContent = envContent.replace(usernameRegex, `ADMIN_USERNAME="${username}"`);
  } else {
    envContent += `\nADMIN_USERNAME="${username}"`;
  }
  
  if (passwordRegex.test(envContent)) {
    envContent = envContent.replace(passwordRegex, `ADMIN_PASSWORD="${password}"`);
  } else {
    envContent += `\nADMIN_PASSWORD="${password}"`;
  }
  
  fs.writeFileSync(envPath, envContent);
  console.log('✅ Credentials updated in .env.local');
}

function showCurrentCredentials() {
  const envPath = '.env.local';
  if (!fs.existsSync(envPath)) {
    console.log('❌ No .env.local file found');
    return;
  }
  
  const envContent = fs.readFileSync(envPath, 'utf8');
  const usernameMatch = envContent.match(/ADMIN_USERNAME="([^"]*)"/);
  const passwordMatch = envContent.match(/ADMIN_PASSWORD="([^"]*)"/);
  
  console.log('\n🔐 Current Admin Credentials:');
  console.log('=============================');
  if (usernameMatch) {
    console.log(`Username: ${usernameMatch[1]}`);
  } else {
    console.log('Username: Not set');
  }
  
  if (passwordMatch) {
    console.log(`Password: ${passwordMatch[1]}`);
  } else {
    console.log('Password: Not set');
  }
  console.log('');
}

function main() {
  console.log('🔐 Nuvaru Admin Credential Manager');
  console.log('====================================\n');
  
  showCurrentCredentials();
  
  console.log('Options:');
  console.log('1. Generate new secure credentials');
  console.log('2. Set custom credentials');
  console.log('3. Show current credentials');
  console.log('4. Exit');
  
  rl.question('\nChoose an option (1-4): ', (answer) => {
    switch (answer.trim()) {
      case '1':
        const newUsername = `nuvaru_admin_${Date.now().toString(36)}`;
        const newPassword = generateSecurePassword(20);
        
        console.log('\n🔄 Generating new secure credentials...');
        console.log(`New Username: ${newUsername}`);
        console.log(`New Password: ${newPassword}`);
        
        updateEnvFile(newUsername, newPassword);
        console.log('\n✅ New credentials generated and saved!');
        console.log('⚠️  Make sure to save these credentials securely!');
        break;
        
      case '2':
        rl.question('Enter new username: ', (username) => {
          rl.question('Enter new password: ', (password) => {
            if (username.trim() && password.trim()) {
              updateEnvFile(username.trim(), password.trim());
              console.log('\n✅ Custom credentials saved!');
            } else {
              console.log('\n❌ Username and password cannot be empty');
            }
            rl.close();
          });
        });
        return;
        
      case '3':
        showCurrentCredentials();
        rl.close();
        return;
        
      case '4':
        console.log('\n👋 Goodbye!');
        rl.close();
        return;
        
      default:
        console.log('\n❌ Invalid option. Please choose 1-4.');
        rl.close();
        return;
    }
    
    rl.close();
  });
}

if (require.main === module) {
  main();
}

module.exports = { generateSecurePassword, updateEnvFile }; 