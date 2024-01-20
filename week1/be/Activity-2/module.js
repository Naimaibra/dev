
const filePath = 'sample.txt';
const sampleText = 'This is some sample text.';

try {
  fs.writeFileSync(filePath, sampleText);
  console.log(`Successfully created ${filePath} and added text to it.`);
} catch (error) {
  console.error(`Error creating or writing to ${filePath}: ${error.message}`);
}

try {
    const content = fs.readFileSync(filePath, 'utf-8');
    console.log(`Content of ${filePath}:\n${content}`);
  } catch (error) {
    console.error(`Error reading from ${filePath}: ${error.message}`);
  }
  
