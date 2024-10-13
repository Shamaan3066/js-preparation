// Count count occurences of number in given array
// Input: [5, 5, 5, 2, 2, 2, 2, 2, 9, 4]
// Output:
// {
//     "2": 5,
//     "4": 1,
//     "5": 3,
//     "9": 1
// }

function countOccurences(arr) {
  let countMap = {};

  // Iterate through the array
  arr.forEach((num) => {
    // If number is already in the map, increment its count
    if (countMap[num]) {
      countMap[num]++;
    } else {
      // If it's not in the map, set its count to 1
      countMap[num] = 1;
    }
  });
  return countMap;
}
console.log(countOccurences([5, 5, 5, 2, 2, 2, 2, 2, 9, 4])); // { '2': 5, '4': 1, '5': 3, '9': 1 }
