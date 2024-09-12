// Sum of squares of the number

function sumofSquares(number) {
    if(number === 1) {
        return 1;
    }
    return (number * number) + sumofSquares(number - 1);
}

console.log(sumofSquares(4)); // 30

// Another way to do:
function sumOfSquares(n) {
    let sum = 0; // Initialize sum to 0
    for(let i = 1; i<=n; i++) { // Loop from 1 to n
        sum += i * i; // Add the square of the current number (i^2) to sum
    }
    return sum; // Return the final sum after the loop
}

console.log(sumOfSquares(4)); // 30