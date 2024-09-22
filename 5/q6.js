// Check if a String Contains Only Unique Characters

function hasUniqueChars(str) {
  // Create a set from the string characters
  const uniqueChars = new Set(str);

  // If the length of the set is equal to the length of the string,
  // all characters in the string are unique
  return uniqueChars.size === str.length;
}

console.log(hasUniqueChars("hello")); // false
console.log(hasUniqueChars("asdfg")); // true
