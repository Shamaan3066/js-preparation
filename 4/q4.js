// Convert a String to Title Case

function toTitleCase(str) {
  return str
    .toLowerCase() // Step 1: Convert the entire string to lowercase
    .split(" ") // Step 2: Split the string into an array of words
    .map(
      (
        word // Step 3: Map over each word in the array
      ) =>
        word.charAt(0).toUpperCase() + // Step 4: Capitalize the first character of the word
        word.slice(1)
    ) // Step 5: Append the rest of the word starting from the 2nd character
    .join(" "); // Step 6: Join the array back into a string with spaces
}

console.log(toTitleCase("the quick brown fox"));
// The Quick Brown Fox
