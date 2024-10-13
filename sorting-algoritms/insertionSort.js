// Insertion Sort
// Compaison-based sorting algorithm.

function insertionSort(arr) {
  let n = arr.length; // Get the length of array

  for (let i = 1; i < n; i++) {
    // Start from the second element,
    // since we assume that the first element is already sorted.
    // Pick the element to be inserted in the sorted part
    let key = arr[i];
    // Start comparing with the element before the current element
    let j = i - 1;

    // Move elements of arr[0...i-1] that are greater than the key to one position
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j]; // Shift the larger element one position to the right
      j--;
    }
    // Insert the key into its correct position
    arr[j + 1] = key;
  }
  return arr;
}

console.log(insertionSort([64, 25, 12, 22, 11]));
// [11, 12, 22, 25, 64];
