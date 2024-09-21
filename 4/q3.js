// Find the Longest Word in a String

function findLongestWord(str) {
  const words = str.split(" ");
  let longest = "";
  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// jumped
