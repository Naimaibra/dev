
const fs = require('fs');

// Create a sample.txt file and add some text to it
const filePath = 'sample.txt';
const sampleText = 'This is some sample text.';

// Synchronously write to the file
try {
  fs.writeFileSync(filePath, sampleText);
  console.log(`Successfully created ${filePath} and added text to it.`);
} catch (error) {
  console.error(`Error creating or writing to ${filePath}: ${error.message}`);
}

// Synchronously read from the file
try {
  const content = fs.readFileSync(filePath, 'utf-8');
  console.log(`Content of ${filePath}:\n${content}`);
} catch (error) {
  console.error(`Error reading from ${filePath}: ${error.message}`);
}
