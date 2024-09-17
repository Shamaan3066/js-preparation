// Find the Sum of Digits of a Number

function SumofDigits(n) {
  let sum = 0;
  while (n > 0) {
    sum += n % 10; // 2 // 2 + 3 // 5 + 5
    n = Math.floor(n / 10); // floor(53.2) = 53 // floor(5.3) = 5 // floor(0.2) = 0
  }
  return sum;
}

console.log(SumofDigits(532));
