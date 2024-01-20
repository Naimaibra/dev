
const fs = require('fs');
const os = require('os');

// Information to be written to the file
const osInfo = `
Hostname: ${os.hostname()}
OS Platform: ${os.platform()}
CPU Cores: ${os.cpus().length}
`;

// khor file ku sabsan information to a file (e.g., os-info.txt)
fs.writeFile('os-info.txt', osInfo, (err) => {
    if (err) {
        console.error('Error writing to file:', err);
        return;
    }
    console.log('OS information has been written to os-info.txt');
});
