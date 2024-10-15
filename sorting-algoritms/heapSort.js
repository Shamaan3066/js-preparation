// Heap Sort
// Heap Sort first builds a max heap and then repeatedly extracts the
// maximum element, placing it at the end of the array.

// Building a max heap:
// Convert the array into a max heap,
// where the largest element is at the root of the heap (the first index of the array).

// Heap Extraction:
// Swap the root (largest element) with the last element of the array,
// reduce the sixe of the heap, and restore the heap property by
// "heapifying" the new root.

function heapify(arr, n, i) {
  let largest = i; // Initialize largest as root
  let left = 2 * i + 1; // Left child index
  let right = 2 * i + 2; // Right child index

  // If left child is larger than root
  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }

  // If right child is larger than the current largest
  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }

  // If largest is not the root, swap and heapify
  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]]; // Swap
    heapify(arr, n, largest); // Recursively heapify the affeccted subtree
  }
}

function heapSort(arr) {
  let n = arr.length;

  // Build a max heap (rearrange array)
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }

  // Extract elements one by one from the heap
  for (let i = n - 1; i >= 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]]; // Move current root to the end
    heapify(arr, i, 0); // Call max heapify on the reduced heap
  }
  return arr;
}

let arr = [25, 10, 43, 72, 16];
console.log(heapSort(arr));
// [10, 16, 25, 43, 72];
