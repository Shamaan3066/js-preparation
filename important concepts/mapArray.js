// map: Creates a new array by applying a function to each element of an existing array.

const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6]
const squared = numbers.map(num => num * num);
console.log(squared); // [1, 4, 9]