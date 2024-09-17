// Factorial of the number

function factNum(number) {
  // Base Case: The function checks if number is equal to 1.
  // If it is, the function returns 1,
  // which is the base case for the factorial calculation.
  // This stops the recursion.
  if (number === 1) {
    return 1;
  }
  // Recursive Case: If number is greater than 1,
  // the function calls itself with number - 1 and multiplies the result by number.
  // This continues until number reaches 1.
  return number * factNum(number - 1);
}

console.log(factNum(5)); // 120
