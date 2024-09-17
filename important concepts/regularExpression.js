// A regular expression (often abbreviated as regex or regexp) is a powerful tool 
// for pattern matching and manipulating strings. 
// In JavaScript, regular expressions allow you to search, match, and manipulate text 
// based on defined patterns.

// Two ways to create a Regular Expression:
// 1. Using literal syntax:
// let regex = /pattern/flags;

// 2. Using the RegExp constructor:
// let regex = new RegExp('pattern', 'flags');

// Flags are optional modifiers that alter the behavior of the regular expression. 
// Common flags include:
// 'g' (global): Searches for all matches rather than stopping after the first match.
// 'i' (case-insensitive): Makes the pattern match both uppercase and lowercase letters.
// 'm' (multiline): Treats the string as multiple lines, affecting the behavior of ^ and $.
// 's' (dotAll): Allows the . to match newline characters.
// 'u' (unicode): Enables full Unicode matching.
// 'y' (sticky): Matches from the exact position in the target string.

// Metacharacters: Some characters have special meanings in regular expressions. 
// To match them literally, you need to escape them with a backslash (\):
// .: Matches any character except newline.
// ^: Matches the start of a string.
// $: Matches the end of a string.
// *: Matches 0 or more occurrences of the previous token.
// +: Matches 1 or more occurrences of the previous token.
// ?: Matches 0 or 1 occurrence of the previous token.
// \: Escapes a special character.

// Character Classes: Character classes allow you to define a set of characters to match:
// [abc]: Matches any one character from a, b, or c.
// [^abc]: Matches any character except a, b, or c.
// [a-z]: Matches any lowercase letter.
// \d: Matches any digit ([0-9]).
// \D: Matches any non-digit character.
// \w: Matches any word character (alphanumeric and underscore) ([a-zA-Z0-9_]).
// \W: Matches any non-word character.
// \s: Matches any whitespace character (spaces, tabs, newlines).
// \S: Matches any non-whitespace character.

// Quantifiers: Quantifiers specify how many instances of a character, 
// group, or character class must be present:
// *: 0 or more occurrences.
// +: 1 or more occurrences.
// ?: 0 or 1 occurrence.
// {n}: Exactly n occurrences.
// {n,}: At least n occurrences.
// {n,m}: Between n and m occurrences.

// Grouping and Capturing: Parentheses are used to group patterns together and 
// capture parts of the match for later use.
// (): Captures the matched substring.
// (?:): Non-capturing group (groups without capturing).

// Anchors
// ^: Anchors the regex to the start of a string.
// $: Anchors the regex to the end of a string.

// Special Characters
// .: Matches any single character except newline.
// \b: Matches a word boundary.
// \B: Matches a non-word boundary.

// Lookaheads and Lookbehinds (Assertions)
// Lookahead:
// (?=...): Positive lookahead, ensures that what follows matches the pattern.
// (?!...): Negative lookahead, ensures that what follows does not match the pattern.
// Lookbehind (Supported in some environments):
// (?<=...): Positive lookbehind, ensures that what precedes matches the pattern.
// (?<!...): Negative lookbehind, ensures that what precedes does not match the pattern.

// Common methods with Regular Expression:

// test(): Test whether a match exists in a string, returning 'true' or 'false'.
let regex1 = /dog/;
let text1 = 'I have a dog.';
console.log(regex1.test(text1)); // true

// match(): Retrieves the matches for a regular expression in a string.
let regex2 = /\d+/g;
let text2 = 'There are 123 apples and 354 oranges.';
let match1 = text2.match(regex2);
console.log(match1); // [ '123', '354' ]

// replace(): Replaces matches of a regular expression in a string with a replacement string.
let regex3 = /apple/g;
let text3 = 'I have an apple, you have an apple.';
let result1 = text3.replace(regex3, 'orange');
console.log(result1); // I have an orange, you have an orange.

// exec(): Executes a search for a match in a string and returns an array of results or 'null'.
let regex4 = /\d+/;
let text4 = 'There are 123 apples.';
let result2 = regex4.exec(text4);
console.log(result2); // [ '123', index: 10, input: 'There are 123 apples.', groups: undefined ]
console.log(result2[0]); // 123

// split(): Splits a string into an array using a regular expression as the delimiter.
let regex5 = /\s+/;
let text5 = 'Split this string into words';
let words = text5.split(regex5);
console.log(words); // [ 'Split', 'this', 'string', 'into', 'words' ]
console.log(words[0]); // Split