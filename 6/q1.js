// Find the missing numbers from given array Input
// let arr = [1, 2, 3, 5],
// Count: 10
// Output: [4, 6, 7, 8, 9, 10]

let arr = [1, 2, 3, 5];
let count = 10;

function findMissingNumbers(arr, count) {
  let missingNumbers = [];
  let arrSet = new Set(arr);

  for (let i = 1; i <= count; i++) {
    if (!arrSet.has(i)) {
      missingNumbers.push(i);
    }
  }
  return missingNumbers;
}

console.log(findMissingNumbers(arr, count));
// Output: [4, 6, 7, 8, 9, 10]
