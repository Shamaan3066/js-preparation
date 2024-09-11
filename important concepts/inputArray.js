// This 'prompt' keyword works in browser for 'node' use 'readline'
// For node run command "node inputArray.js" in terminal.

/* 
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter numbers separated by commas: ', (input) => {
    const array = input.split(',').map(Number);
    console.log(array);
    rl.close();
});
*/


const input = prompt('Enter numbers separated by commas:'); // 1, 2, 3, 4
const array = input.split(',').map(Number); // Converts the string to an array of numbers
console.log(array); // [1, 2, 3, 4]