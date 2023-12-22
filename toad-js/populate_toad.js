const fs = require('fs');
const path = require('path');

// Read the contents of 'combinedData.txt'
const combinedDataPath = path.join(__dirname, 'combinedData.txt');
const combinedData = fs.readFileSync(combinedDataPath, 'utf8');

// Load the JavaScript file content
const jsFilePath = path.join(__dirname, 'toad_aes_json.js');
let jsFileContent = fs.readFileSync(jsFilePath, 'utf8');

// Find and update the TempFS value in the JavaScript file
const updatedJsContent = jsFileContent.replace(/("TempFS": \[)[^\]]*(\])/,
    `$1"${combinedData}"$2`);

// Write the updated content back to the JavaScript file
fs.writeFileSync(jsFilePath, updatedJsContent);

console.log('Updated TempFS in toad_aes_json.js successfully.');
