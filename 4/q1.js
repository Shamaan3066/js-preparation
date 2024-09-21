// Remove Duplicates from an Array

function removeDuplicates(arr) {
  return [...new Set(arr)];
  // The 'Set' object only allows unique values.
}

console.log(removeDuplicates([1, 3, 2, 1, 34, 2, 1, 3, 4, 5, 4]));
