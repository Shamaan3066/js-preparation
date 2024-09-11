// Arrow functions are a shorthand syntaxx for writing function expression
// in JavaScript. They do not have own 'this', 'arguments', 'super', or 
// 'new.target' bindings. They are best suited for non-method functions.

const add = (a, b) => a + b;
console.log(add(2, 3)); // 5

// Regular function
function sum(a, b) {
    return a + b;
}
console.log(sum(2, 3)); // 5