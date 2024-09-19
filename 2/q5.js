// Find the GCD of two numbers

function gcDivisor(num1, num2) {
  if (!num2) {
    // If num2 is 0, return num1 as the GCD
    return num1;
  }
  return gcDivisor(num2, num1 % num2); // Recursively call gcd with num2 and the remainder of a divided by num2.
}

console.log(gcDivisor(8, 12)); // 4

// First call: gcDivisor(8, 12)
// 'b' is 12, so it calls gcDivisor(8, 12 % 8) or gcDivisor(12, 8)
// Second call: gcDivisor(12, 8)
// 'b' is '8', so it calls gcDivisor(8, 12 % 8) or gcDivisor(8, 4)
// Third call: gcDivisor(8, 4)
// 'b' is '4', so it calls gcDivisor(4, 8 % 4) or gcDivisor(4, 0)
// Fourth call: gcDivisor(4, 0)
// 'b' is '0', so the function returns '4'
