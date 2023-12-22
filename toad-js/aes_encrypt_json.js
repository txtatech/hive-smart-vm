const crypto = require('crypto');
const fs = require('fs');

// Generate a secret key of 32 bytes for AES-256
const secretKey = crypto.randomBytes(32);

// Generate an IV (Initialization Vector) of 16 bytes for AES-256-CBC
const iv = crypto.randomBytes(16);

// Data that you want to encrypt
// Assuming live_dna_data.json is in the same directory and TempFS contains the data
const liveDnaData = require('./outputs/live_dna_data.json'); // Load the JSON file
const dataToEncrypt = liveDnaData.dna_structure.Genomes.FileSystem.TempFS.join('');

// Create a cipher using AES-256-CBC algorithm with the secret key and IV
const cipher = crypto.createCipheriv('aes-256-cbc', secretKey, iv);

// Encrypt the data
let encryptedData = cipher.update(dataToEncrypt, 'utf-8', 'base64');
encryptedData += cipher.final('base64');

// Prepend the IV to the encrypted data for later use
const combinedData = iv.toString('base64') + ':' + encryptedData;

// Write the combined data to a file
fs.writeFileSync('combinedData.txt', combinedData);

// Save the secret key in hex format to a file
fs.writeFileSync('secretKey.txt', secretKey.toString('hex'));
