// Difference between 'let', 'var', 'const'
// var - declares a variable globally or locally to entire function regardless of block scope.
// var - variables declared with 'var' are hoisted and can be re-declared and updated.

// Condition in if(true):
// The condition 'true' is a boolean literal that always evaluates to true.
// Therefore the code inside the 'if' block always executes.

var x = 10;
if(true) {
    var x = 20;
    console.log(x); // 20
}
console.log(x); // 20

let y = 10;
if(true) {
    let y = 20;
    console.log(y); // 20
}
console.log(y); // 10

const z = 10;
z = 20; // Error: Assignment to a constant variable