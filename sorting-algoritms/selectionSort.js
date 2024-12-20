// Selection Sort
// Selection Sort finds the minimum element from the unsorted part of the array and
// swaps it with the first unsorted element.

function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    // Swap the found minimum element with the first element
    [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
  }
  return arr;
}

console.log(selectionSort([64, 25, 12, 22, 11]));
// [11, 12, 22, 25, 64]
