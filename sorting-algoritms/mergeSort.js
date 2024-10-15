// Merge Sort - Divide and Conquer
// Merge Sort divides the array into two halves,
// sorts them recursively,
// and merges them back together in sorted order.

function mergeSort(arr) {
  if (arr.length <= 1) {
    // Base case: If the array has 1 or 0 elements, it's already sorted
    return arr;
  }
  const mid = Math.floor(arr.length / 2); // Find the middle of the array
  const leftArr = arr.slice(0, mid); // Split the array into left half
  const rightArr = arr.slice(mid); // Split the array into right half
  return merge(mergeSort(leftArr), mergeSort(rightArr)); // Recursively sort both halves and merge them
}

function merge(leftArr, rightArr) {
  const sortedArr = []; // Temporary array to store the merged and sorted elements
  // While both leftArr and rightArr have elements to compare
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      // Compare the first element of both arrays
      sortedArr.push(leftArr.shift()); // Push the smaller element to the sortedArr
    } else {
      sortedArr.push(rightArr.shift()); // Push the smaller element to the sortedArr
    }
  }
  // If one of the arrays is exhausted, add the remaining elements of the array
  return [...sortedArr, ...leftArr, ...rightArr];
}

const arr = [8, 20, -2, 3, -5];
console.log(mergeSort(arr));
// [-5, -2, 3, 8, 20];
