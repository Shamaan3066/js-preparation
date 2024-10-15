// Quick Sort
// Quick Sort selects a pivot element and partitions the array into elements less than the pivot
// and elements greater than the pivot.
// It then sorts the partitions recursively.

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr; // Base case: return the array if it's empty or has one element
  }
  let pivot = arr[arr.length - 1]; // Choose the pivot
  let left = []; // Sub-array to hold elements less than the pivot
  let right = []; // Sub-array to hold elements greater than the pivot
  // Loop through the array, excluding the pivot element
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]); // Place smaller elements in the left sub-array
    } else {
      right.push(arr[i]); // Place greater elements in the right sub-array
    }
  }
  // Recursively sort left and right sub-arrays and combine with pivot
  return [...quickSort(left), pivot, ...quickSort(right)];
}

const arr = [-2, 9, 20, -5, 3];
console.log(quickSort(arr));
// [-5, -2, 3, 9, 20]
