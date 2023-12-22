const crypto = require('crypto');
const fs = require('fs');
const readline = require('readline');

// Create interface for command line input/output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Read the combined IV and encrypted data
const combinedData = fs.readFileSync('combinedData.txt', 'utf-8');
const parts = combinedData.split(':');
const iv = Buffer.from(parts[0], 'base64');
const readEncryptedData = parts[1];

// Prompt the user to enter the secret key
rl.question('Please enter the secret key: ', (inputSecretKey) => {
  try {
    // Create a decipher using AES-256-CBC algorithm with the secret key and IV
    const decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(inputSecretKey, 'hex'), iv);

    // Decrypt the data
    let decryptedData = decipher.update(readEncryptedData, 'base64', 'utf-8');
    decryptedData += decipher.final('utf-8');

    // Output the decrypted data
    console.log('Decrypted data:', decryptedData);
  } catch (error) {
    console.error('Decryption failed:', error.message);
  }

  rl.close();
});
