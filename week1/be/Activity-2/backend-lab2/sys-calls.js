
const fs = require('fs');

fs.writeFileSync('sample.txt', 'Hello, this is some sample text!'); 

fs.readFile('sample.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('File content:', data);
});


const outputData = 'This is the data to be written to output.txt.';
fs.writeFile('output.txt', outputData, (err) => {
    if (err) {
        console.error('Error writing to file:', err);
        return;
    }
    console.log('Data has been written to output.txt');
});
