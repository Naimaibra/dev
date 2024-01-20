//1. To test your module, you can create another JavaScript file (e.g., test.js) in the project directory
//2. test.js, import your custom module and use the exported functions:


const customFunctions = require('./custom-functions');

console.log(customFunctions.cube(3)); // Test the cube function
console.log(customFunctions.fullName('John', 'Doe')); // Test the fullName function
console.log(customFunctions.power(2, 3)); // Test the power function
console.log(customFunctions.sumCubes([1, 2, 3])); // Test the sumCubes function