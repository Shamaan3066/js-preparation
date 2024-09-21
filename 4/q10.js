// Count the Occurrences of Each Character in a String

function countOccurrences(str) {
  const charCount = {}; // Create an empty object to store character counts
  for (let char of str) {
    // Iterate through each character in the string
    charCount[char] = (charCount[char] || 0) + 1; // Increment the count for each character
    // For each character char, the expression charCount[char] checks if the
    // character already exists as a key in the charCount object.
    // If the character exists: The current value is retrieved, and 1 is added to it.
    // If the character doesn't exist:
    // The charCount[char] will be undefined,
    // so(charCount[char] || 0) will evaluate to 0,
    // and 1 is added to it, creating a new key - value pair for that character.
    // This way, each character's count is incremented each time it appears.
  }
  return charCount; // Return the object with character counts
}

console.log(countOccurrences("hello"));
// { h: 1, e: 1, l: 2, o: 1 }
