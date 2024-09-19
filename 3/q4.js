// Find the Intersection of Two Arrays
// common elements

// way 1 do to:
function intersectionOfArray(arr1, arr2) {
  let elements = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      elements.push(arr1[i]);
    }
  }
  return elements;
}

console.log(intersectionOfArray([12, 1, 3, 32, 11, 6], [3, 33, 11, 21, 12]));

// another way: (recommended)
function intersection(arr1, arr2) {
  return arr1.filter((item) => arr2.includes(item));
}

console.log(intersection([1, 2, 3], [2, 4, 3])); // [ 2, 3 ]
