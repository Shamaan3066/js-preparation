// Reverse a String

function reverseString(str) {
  return str.split("").reverse().join("");
  // split(''): This method splits the string into an array of individual characters.
  // reverse(): This method reverses the order of the elements in an array.
  // join(''): This method joins the elements of the array back into string.
}

console.log(reverseString("hello")); // olleh
