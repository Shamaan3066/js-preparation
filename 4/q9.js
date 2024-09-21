// Check if a String Contains Only Digits

function digitsString(str) {
  return /^\d+$/.test(str); // '\d' shorthand for [0-9].
  // '+' means one or more occurences.
  // '$' represents the end of the string.
  // The .test() method is used to test
  // if the regular expression matches the entire string.
}

console.log(digitsString("hello")); // false
console.log(digitsString("3234")); // true
