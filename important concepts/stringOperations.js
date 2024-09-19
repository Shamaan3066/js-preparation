// String Concatenation
// You can join two or more strings together using either the '+' operator or
// the concat() method.

// Using '+':
let str1 = "Hello";
let str2 = "World";
let result1 = str1 + " " + str2;
console.log(result1); // Hello World

// Using concat():
let result2 = str1.concat(" ", str2);
console.log(result2); // Hello World

// String Length:
// The 'length' property returns the number of characters in a string.
console.log(str1.length); // 5

// Accessing Characters:
// You can access characters in a string using bracket notation or the charAt() method.

// Using bracket notation:
console.log(str1[0]); // H

// Using charAt():
console.log(str1.charAt(1)); // e

// Changing Case:
// To Uppercase:
console.log(str1.toUpperCase()); // HELLO

// To Lowercase:
console.log(str1.toLowerCase()); // hello

// Finding a Substring:
// indexOf(): Returns the position of the first occurrence of a substring.
let str3 = "Hello World";
console.log(str3.indexOf("World")); // 6

// lastIndexOf(): Returns the position of the last occurrence of a substring.
console.log(str3.lastIndexOf("l")); // 9

// includes(): Returns 'true' if the string contains the substring, otherwise 'false'.
console.log(str3.includes("Hello")); // true

// startsWith() and endsWith(): Check if the string starts or ends with a particular substring.
console.log(str3.startsWith("Hello")); // true
console.log(str3.endsWith("World")); // true

// Extracting Substrings
// slice(): Extracts a part of a string and returns it as a new string.
// It takes two parameters: the start and end indexes.
let str4 = "JavaScript";
console.log(str4.slice(0, 4)); // Java
console.log(str4.slice(4)); // Script

// substring(): Similar to slice(), but it doesn't support negative indexes.
console.log(str4.substring(0, 4)); // Java

// substr(): Extracts a part of a string, starting from a postion and for a given length.
console.log(str4.substr(4, 6)); // Script

// Replacing Substrings:
// replace(): Replaces a substring with another string.
// By default, only the first occurrence is replaced unless you use a regular expression
// with the 'g' (global) flag.
console.log(str3.replace("World", "JavaScript")); // Hello JavaScript

// With global replacement:
let text1 = "apple banana apple";
console.log(text1.replace(/apple/g, "orange")); // orange banana orange

// Splitting Strings
// split(): Splits a string into an array of substrings based on a delimiter.
let str5 = "apple,banana,orange";
let fruits1 = str5.split(",");
console.log(fruits1); // [ 'apple', 'banana', 'orange' ]

// Trimming Whitespace
// trim(): Removes whitespace from both ends of a string.
let str6 = "    Hello World   ";
console.log(str6.trim()); // Hello World
console.log(str6.trimStart()); // "Hello World   "
console.log(str6.trimEnd()); // "    Hello World"

// Repeating Strings
// repeat(): Repeats a string a specified number of times.
let str7 = "Hello";
console.log(str7.repeat(3)); // HelloHelloHello

// Template Literals
// You can create multi-line strings and embed expressions using 'template literals' (backticks `).
let name = "John";
let greeting = `Hello, ${name}! Welcome to JavaScript.`;
console.log(greeting); // Hello, John! Welcome to JavaScript.

// String to Number Conversion
// parseInt(): Converts a string to an integer.
let str8 = "123";
console.log(parseInt(str8)); // 123

let str9 = "123.45";
console.log(parseFloat(str9)); // 1234.45

// Number(): Converts a string to a number (integer or floating-point).
console.log(Number("123")); // 123
console.log(Number("123.45")); // 123.45

// Escaping Characters
// If you want to include special characters like quotes in a string,
// you can use escape characters "\". Example: "It\'s"
let str10 = "It's a beautiful day!";
console.log(str10);
