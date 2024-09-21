// Check if a Number is a Perfect Square

function checkPerfectSquare(number) {
  return Number.isInteger(Math.sqrt(number));
}

console.log(checkPerfectSquare(16)); // true
console.log(checkPerfectSquare(20)); // false
