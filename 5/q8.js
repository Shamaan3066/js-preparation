// Find the Second Largest Number in an Array

function secondLargest(arr) {
  const uniqueArr = [...new Set(arr)]; // Remove Duplicates
  uniqueArr.sort((a, b) => b - a); // Sort in Descending Order
  return uniqueArr[1];
}

console.log(secondLargest([21, 54, 12, 75, 15, 57, 18])); // 57
