// '==': This is the loose equality operator. It compares two values for equality after
// converting both values to a common type (type coercion).

// '===': This is the strict equality operator. It compares two values for equality without
// converting their types. Both the value and the type must be the same for the expression 
// to return 'true'.

console.log(5 == '5'); // true (type coercion happens)
console.log(5 === '5'); // false (different types, no coercion)