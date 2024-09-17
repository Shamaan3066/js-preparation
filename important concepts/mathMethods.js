// 'Math' object contains a variety of methods for performing mathematical tasks,
// such as rounding numbers, generating random numbers, and working with trigonometric,
// logarithmic, and exponential functions.
// These methods are static, meaning they are called directly using
// Math.method() without creating an instance of Math.

// Examples:

// Math.floor()
// Rounds a number down to the nearest integer, regardless of the decimal value.
console.log(Math.floor(4.9)); // 4
console.log(Math.floor(-4.9)); // -5

// Math.ceil()
// Rounds a number up to the nearest integer
console.log(Math.ceil(4.1)); // 5
console.log(Math.ceil(-4.1)); // -4

// Math.round()
// Rounds a number to the nearest integer. It rounds up if the deccimal is 0.5 or higher,
// and doen otherwise.
console.log(Math.round(4.5)); // 5
console.log(Math.round(4.4)); // 4

// Math.max()
// Returns the largest number from a list of numbers.
console.log(Math.max(1, 5, 20, 10)); // 20

// Math.min()
// Returns the smallest number from a list of numbers.
console.log(Math.min(1, 5, 20, 10)); // 1

// Math.random()
// Returns a pseudo-random floating-point number between 0 (includes) and 1 (exclusive).
console.log(Math.random()); // 0.025166387190564743 (random)

// Math.pow()
// Returns the result of raising a base number to an exponent.
// Syntax: Math.pow(base, exponent)
console.log(Math.pow(2, 3)); // 8

// Math.sqrt()
// Returns the sqaure root of a number
console.log(Math.sqrt(9)); // 3

// Math.abs()
// Returns the absolute value of a number (removes the negative sign if present).
console.log(Math.abs(-10)); // 10
console.log(Math.abs(5)); // 5

// Math.trunc()
// Removes the fractional part of a number, returning only the integer part.
console.log(Math.trunc(4.9)); // 4
console.log(Math.trunc(-4.9)); // -4

// Math.sign()
// Returns the sign of a number: '1' if the number is positive,
// '-1' if it's negative, and '0' if the number is zero.
console.log(Math.sign(5)); // 1
console.log(Math.sign(-5)); // -1
