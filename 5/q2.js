// Check if a String is a Palindrome

function isPalindrome(str) {
  const reversedStr = str.split("").reverse().join("");

  if (str === reversedStr) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false
