// Check if a number is Prime

function isPrime(n) {
    if(n <= 1) return false; // Prime numbers are greater than 1
    if(n <= 3) return true; // 2 and 3 are prime numbers
    if(n % 2 === 0 || n % 3 === 0) return false; // Eliminate numbers divisible by 2 or 3
    for(let i = 5; i * i <=n; i += 6) {
        // Starting from 5, the loop checks divisibility of 'n' with 'i' and 'i + 2'.
        // This is because prime numbers larger than 3 follows the pattern of 6k(+ or -)1 (where k is an integer).
        // The loop checks divisibility by 'i' and 'i + 2' in every iteration.
        if(n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true; // If no divisor found, n is prime
}

console.log(isPrime(127)); // true

// isPrime(127)
// Step 1: n = 127. The function first checks if n is less than or equal to 1, 
// which it is not, so it moves to the next step.

// Step 2: The function checks if n is less than or equal to 3. 
// Since 127 is greater than 3, this step is skipped.

// Step 3: The function checks if 127 % 2 === 0 or 127 % 3 === 0.

// Since 127 % 2 !== 0 and 127 % 3 !== 0, the function proceeds to the next step.
// Step 4: Now the loop starts, checking divisors starting from i = 5 and increments 
// i by 6 in each iteration. The loop condition is i * i <= 127, 
// which means the loop will run as long as i * i is less than or equal to 127.

// First iteration (i = 5):
// Check if 127 % 5 === 0 or 127 % 7 === 0. Neither condition is true, 
// so the loop continues.
// Second iteration (i = 11):
// Check if 127 % 11 === 0 or 127 % 13 === 0. 
// Neither condition is true, so the loop continues.
// Next possible i = 17:
// 17 * 17 = 289 is greater than 127, so the loop terminates.
// Step 5: Since no divisors were found up to the square root of 127, 
// the function returns true, indicating that 127 is a prime number.

// Result: The function returns true because 127 is a prime number.