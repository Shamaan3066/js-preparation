// The .replace() method in JavaScript is used to search for a pattern in a string and
// replace it with a speified replacement.
// It returns a new string with the replacements made, 
// without modifying the original string.

// Syntax:
// string.replace(searchString, replacerString)
// string.replace(searchString, replacerFunction)
// string.replace(regexp, replacerString)
// string.replace(regexp, replacerFunction)

let text = 'Mr Blue has a blue house and a blue car';

let result1 = text.replace('blue', 'red');
console.log(result1); // Mr Blue has a red house and a blue car

let result2 = text.replace('blue', (match) => {
    return match.toUpperCase();
});
console.log(result2); // Mr Blue has a BLUE house and a blue car

let result3 = text.replace(/blue/g, 'red');
// The g flag in the regular expression enables global matching, 
// meaning all occurrences are replaced.
console.log(result3); // Mr Blue has a red house and a red car

let result4 = text.replace(/blue/gi, 'red');
// 'i' flag: case-insensitive
console.log(result4); // Mr red has a red house and a red car

let result5 = text.replace(/blue/gi, (match) => {
    return match.toUpperCase();
});
console.log(result5); // Mr BLUE has a BLUE house and a BLUE car

// replaceAll:
// Syntax: 
// string.replaceAll(searchString, replacerString)
// string.replaceAll(searchString, replacerFunction)
// string.replaceAll(regexp, replacerString)
// string.replaceAll(regexp, replacerFunction)

let result6 = text.replaceAll('blue', 'red');
console.log(result6); // Mr Blue has a red house and a red car

let result7 = text.replaceAll('blue', (match) => {
    return match.toUpperCase();
});
console.log(result7); // Mr Blue has a BLUE house and a BLUE car

let result8 = text.replaceAll(/blue/g, 'red');
console.log(result8); // Mr Blue has a red house and a red car

let result9 = text.replaceAll(/blue/gi, 'red');
console.log(result9); // Mr red has a red house and a red car

let result10 = text.replaceAll(/blue/gi, (match) => {
    return match.toUpperCase();
});
console.log(result10); // Mr BLUE has a BLUE house and a BLUE car

let result11 = text.replaceAll(/blue/, 'red');
console.log(result11); // TypeError: String.prototype.replaceAll called with a non-global RegExp argument
