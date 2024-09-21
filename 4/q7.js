// Sum of All Elements in an Array

function SumOfElements(arr) {
  return arr.reduce((total, num) => total + num, 0);
}

console.log(SumOfElements([1, 3, 54, 12]));
