// Senod Largest Number in an Array

// 1st way : Not preferable
function secondLargestinArr(arr) {
  let largest = arr[0];
  let secondLargest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < largest) {
      newArr.push(arr[i]);
    }
  }
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] > secondLargest) {
      secondLargest = newArr[i];
    }
  }
  return secondLargest;
}

console.log(secondLargestinArr([14, 79, 54, 12, 85, 75, 49, 97]));

// 2nd way
function secondLargestInArr(arr) {
  let first = -Infinity;
  let second = -Infinity;
  for (let num of arr) {
    if (num > first) {
      second = first; // Update second largest before changing first
      first = num; // Update first largest to the current number
    } else if (num > second && num !== first) {
      second = num; // Update second largest if num is smallerr than first but larger than current second.
    }
  }
  return second;
}

console.log(secondLargestInArr([64, 32, 72, 18, 12, 59, 71]));
