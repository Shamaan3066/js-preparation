// Find the LCM(Least Common Multiple) of Two numbers

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

function gcd(a, b) {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
}

console.log(lcm(12, 15)); // 60
