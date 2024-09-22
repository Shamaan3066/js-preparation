// Find the Missing Element in a Range

function findMissingElement(arr) {
  const n = arr.length + 1;
  const totalSum = (n * (n + 1)) / 2;
  const arrSum = arr.reduce((sum, num) => sum + num, 0);
  return totalSum - arrSum;
}

console.log(findMissingElement([1, 2, 4, 5, 6])); // 3
