// Find the Maximum and Minimum in an Array

function maxAndMin(arr) {
  let min = Infinity;
  let max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return [max, min];
}

console.log(maxAndMin([12, 32, 54, 17, 86, 3, 58, 97]));

// another way:
function findMaxMin(arr) {
  return {
    max: Math.max(...arr),
    min: Math.min(...arr),
  };
}

console.log(findMaxMin([12, 32, 54, 17, 86, 3, 58, 97]));
