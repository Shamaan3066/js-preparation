// Find the GCD(Greatest Common Divisor) of Two Numbers

function gcd(a, b) {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
}

console.log(gcd(12, 15)); // 3
