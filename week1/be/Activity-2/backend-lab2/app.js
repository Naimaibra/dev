
const os = require('./sys-calls');

// a. Print the hostname using os.hostname()
console.log('Hostname:', os.hostname());

// b. Display the OS platform with os.platform()
console.log('OS Platform:', os.platform());

// c. Determine the available CPU cores with os.cpus()
console.log('CPU Cores:', os.cpus().length);

// d. Additional information (for illustration purposes)
console.log('OS Type:', os.type());
console.log('Free Memory:', os.freemem());
console.log('Total Memory:', os.totalmem());

