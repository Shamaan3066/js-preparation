// Merge Two Sorted Arrays
// Write a function that tales two sorted arrays and merges them into
// one sorted array.

function mergeArrays(arr1, arr2) {
  let mergedArray = [];
  let i = 0,
    j = 0;

  // Loop until one o fthe arrays is exhausted
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }

  // Add the remaining elements from arr1, if any
  while (i < arr1.length) {
    mergedArray.push(arr1[i]);
    i++;
  }

  // Add the remaining elements from arr2, if any
  while (j < arr2.length) {
    mergedArray.push(arr2[j]);
    j++;
  }

  // return mergedArray;  // Allows duplicate elements
  return [...new Set(mergedArray)];
}

const arr1 = [1, 3, 4, 5, 7];
const arr2 = [2, 4, 5, 6, 8];

console.log(mergeArrays(arr1, arr2));
// [
//   1, 2, 3, 4,
//   5, 6, 7, 8
// ]
