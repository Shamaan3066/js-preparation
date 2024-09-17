// A 'for' loop is a control flow statement used to repeatedlsy
// execute a block of code a certain number of times.
// The loop typically runs as long as a specified condition
// evaluates to 'true'.

// Syntax:
/*
for (initialization; condition; increment) {
    Code to be executed
}
*/

// Initialization:
// This is where you define and initialize your loop variable.
// It runs only once at the start of the loop.

// Condition:
// This is the condition that is evaluated before each iteration.
// If the conditions evaluates to 'true', the loop runs.
// If it evalutes to 'false', the loop stops.

// Increment/Update:
// This is executed after each iteration of the loop.
// It typically increments or decrements the loop variable,
// controlling how many times the loop runs.

// Example:
for (let i = 0; i < 5; i++) {
  // After 'i' becomes 5, the condition 'i<5' becomes false, so the loop stops.
  console.log(i);
}

// Output:
// 1
// 2
// 3
// 4

// Variations of the 'for' loop:

// 1. Loop through arrays:
const numbers = [10, 20, 30, 40, 50];
// This loop iterates over the elements of the 'numbers' array, printing each element.
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// Output:
// 10
// 20
// 30
// 40
// 50

// 2. 'for...of' loop:
// This loop is used to iterate over the values of iterable objects,
// like arrays or strings.
const arr = [1, 2, 3];
for (let num of arr) {
  console.log(num);
}

// Output:
// 1
// 2
// 3

// 3. 'for...in' loop:
// This loop is used to iterate over the keys (or property names) of an object.
const person = { name: "John", age: 30 };
for (let key in person) {
  console.log(key + ":" + person[key]);
}

// Output:
// name:John
// age:30
