// Flatten a Nested Array
// Write a function that takes a nested array (array of arrays) and
// flattens it into a single array.

// way 1 to do:
function flattenArray1(arr) {
  return arr.flat(2);
}

console.log(flattenArray1([1, [2, [3, 4], 5], 6])); // [ 1, 2, 3, 4, 5, 6 ]

// another way:
function flattenArray2(arr) {
  return arr.reduce(
    (flat, next) =>
      flat.concat(Array.isArray(next) ? flattenArray2(next) : next),
    []
  );
}

console.log(flattenArray2([1, [2, [3, 4], 5], 6])); // [ 1, 2, 3, 4, 5, 6 ]
