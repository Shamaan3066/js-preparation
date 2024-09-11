// filter: Creates a new array with elements that pass a specified test.

const numbers = [1, 2, 3, 4, 5, 6 ,7, 8, 9, 10, 15, 20, 25, 30];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4, 6, 8, 10, 20, 30]

const fiveMultiples = numbers.filter(num => num % 5 === 0);
console.log(fiveMultiples); // [5, 10, 15, 20, 25, 30]

// Q1) Print all the even numbers that are multiple of 5
const evenFiveMultiples = numbers.filter(num => num % 2 == 0 && num % 5 === 0);
console.log(evenFiveMultiples); // [10, 20, 30]