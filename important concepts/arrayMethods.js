// Creating Arrays
// Array literal
let arr1 = [1, 2, 3];
// Using Array constructor
let arr2 = new Array(1, 2, 3);

// Accessing Elements:
console.log(arr1[0]); // 1

// Array Length:
console.log(arr1.length); // 3

// Adding / Removing Elements
// push(): Adds elements to the end of the array
arr1.push(4);
console.log(arr1); // [ 1, 2, 3, 4 ]

// pop(): Removes the lasst element of the array.
arr1.pop();
console.log(arr1); // [ 1, 2, 3 ]

// unshift(): Adds elements to the beginning of the array.
arr1.unshift(0);
console.log(arr1); // [ 0, 1, 2, 3 ]

// shift(): Removes the first element of the array.
arr1.shift();
console.log(arr1); // [ 1, 2, 3 ]

// Concatenating Arrays
// concat(): Combines two or more arrays into one.
let arr3 = [1, 2];
let arr4 = [3, 4];
let result1 = arr3.concat(arr4);
console.log(result1); // [ 1, 2, 3, 4 ]

// Slicing and Splicing
// slice(): Returns a new array with a subset of elements from the original array.
// It doesn't modify the original array.
let arr5 = [1, 2, 3, 4, 5];
let sliced1 = arr5.slice(1, 3);
console.log(sliced1); // [ 2, 3 ]

// splice(): Adds/removes elements from an array. It modifies the original array.
let arr6 = [1, 2, 3, 4, 5];
arr6.splice(2, 1, 6, 7); // Removes 1 element at index 2 and adds 6, 7
console.log(arr6); // [ 1, 2, 6, 7, 4, 5 ]

// Searching for Elements
// indexOf(): Returns the first index of a specified element, or '-1' if it's not found.
let arr7 = [1, 2, 3, 4, 5];
console.log(`Index of 3 in ${arr7} is ${arr7.indexOf(3)}`); // 2

// lastIndexOf(): Returns the last index of a specified element.
let arr8 = [1, 2, 3, 2, 5];
console.log(arr8.lastIndexOf(2)); // 3

// includes(): Returns 'true' if the array contains the specified element
console.log(arr8.includes(3)); // true

// Iterating Over Arrays
// forEach(): Executes a provided function once for each array element
let arr9 = [1, 2, 3];
arr9.forEach((num) => console.log(num));
// Output:
// 1
// 2
// 3

// Transforming Arrays:
// map(): Creates a new array by applying a function to each element of the original array.
let arr10 = [1, 2, 3];
let squares1 = arr10.map((num) => num * num);
console.log(squares1); // [ 1, 4, 9 ]

// filter(): Creates a new array with elements that pass a test defined in a function.
let arr11 = [1, 2, 3, 4, 5];
let evenNumbers1 = arr11.filter((num) => num % 2 === 0);
console.log(evenNumbers1); // [ 2, 4 ]

// reduce(): Reduces an array to a single value by applying a function to each element
// and accumulating the result.
let arr12 = [1, 2, 3, 4];
let sum1 = arr12.reduce((total, num) => total + num, 0);
console.log(`Sum of elemets in ${arr12} = ${sum1}`); // Sum of elemets in 1,2,3,4 = 10

// Sorting Arrays
// sort(): Sorts the elements of an array. By default, it sorts strings alphabetically,
// but you can provide a compare function to sort numbers or other custom logic.
let arr13 = [3, 1, 4, 2];
arr13.sort();
console.log(arr13); // [ 1, 2, 3, 4 ]

// Sort numbers in descending order.
arr13.sort((a, b) => b - a);
console.log(arr13); // [ 4, 3, 2, 1 ]

// reverse(): Reverses the order ofelements in an array.
let arr14 = [1, 2, 3];
arr14.reverse();
console.log(arr14);

// Joining Elements
// join(): Joins all array elements into a string, separated by a specified separator.
let arr15 = [1, 2, 3];
let joined1 = arr15.join("-");
console.log(joined1); // 1-2-3

// Flattening Arrays
// flat(): Flattens a nested array to a specified depth.
let arr16 = [1, [2, [3, 4]]];
let flatArray1 = arr16.flat(2);
console.log(flatArray1); // [ 1, 2, 3, 4 ]

// Filling Arrays
// fill(): Fills an array with a static value.
let arr17 = new Array(5).fill(0);
console.log(arr17); // [ 0, 0, 0, 0, 0 ]

// Array Checking
// Array.isArray(): Checks if a value is an array.
console.log(Array.isArray([1, 2, 3])); // true
console.log(Array.isArray("hello")); // false

// Copying Arrays
// slice(): Creates a shallow copy of an array.
let arr18 = [1, 2, 3];
let copy1 = arr18.slice();
console.log(copy1); // [ 1, 2, 3 ]

// spread operator (...) : Another way to copy an array
let copy2 = [...arr18];
console.log(copy2); // [ 1, 2, 3 ]
