// Replace underscores with space and capitaalize words
// Input:
// javascript_practice_question
// learn_with_me
// Output:
// Javascript Practice Question
// Learn With Me

function replaceAndCaptilize(str) {
  return str
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

console.log(replaceAndCaptilize("javascript_practice_question"));
console.log(replaceAndCaptilize("learn_with_me"));
// Output:
// Javascript Practice Question
// Learn With Me
