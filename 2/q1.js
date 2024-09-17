// Check if a String is a Palindrome, 
// which means the string reads the same forward and backward

function isPalindrome(str) {
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    // This part removes all non-alphanumeric characters (such as spaces, punctuation, etc.)
    // from the string using a regular expression.
    // [^a-zA-Z0-9]: Matches any character that is not a letter (a-zA-Z) or a digit (0-9).
    // the caret ^ is a negation operator.
    const reversedStr = cleanedStr.split('').reverse().join('');
    // split(): Splits the cleaned string into an array of characters.
    // reverse(): Reverses the array.
    // join(): Joins the array back into a string.
    return cleanedStr === reversedStr;
}

console.log(isPalindrome('cat')); // false
console.log(isPalindrome('mom!')); // true