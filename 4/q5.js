// Find the Missing Number in an Array
// Write a function that takes an array of consecutive integers with one
// missing and find the missing number.

function findMissingNumber(arr) {
  const n = arr.length + 1;
  const sum = (n * (n + 1)) / 2;
  const arrSum = arr.reduce((total, num) => total + num, 0);
  return sum - arrSum;
}

console.log(findMissingNumber([1, 2, 3, 4, 6]));
