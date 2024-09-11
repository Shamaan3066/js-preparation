// Hoisting is a JavaScript behavior where variables and function ddeclarations are moved to the top
// of their containing scope during the compilation phase before the code is executed.

console.log(a); // undefined
var a = 5;
console.log(a); // 5

console.log(b); // ReferenceError
let b = 10;

console.log(c)// ReferenceError
let c = 15;