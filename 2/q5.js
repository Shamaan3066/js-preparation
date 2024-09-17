// Find the GCD of two numbers

function gcDivisor(num1, num2) {
  if (!num2) {
    // If num2 is 0, return num1 as the GCD
    return num1;
  }
  return gcDivisor(num2, num1 % num2); // Recursively call gcd with num2 and the remainder of a divided by num2.
}

console.log(gcDivisor(8, 12)); // 4
