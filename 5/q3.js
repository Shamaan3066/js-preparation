// Sum of Digits in a Number

function sumOfDigits(number) {
  return number
    .toString()
    .split("")
    .reduce((sum, digit) => sum + parseInt(digit), 0);
}

console.log(sumOfDigits(4652)); // 17
