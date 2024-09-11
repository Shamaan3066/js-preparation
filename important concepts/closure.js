// A closure is a function that retains access to its lexical scope,
// even when the function is executed outside that scope.
// Closures allow us to create functions with private variables.

function makeCounter() {
    let count = 0; // 'count' is in the lexical scope of 'makeCounter'
    return function increment() {
        count++; // 'increment' has access to 'count' through closure
        return count;
    }
}

const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3