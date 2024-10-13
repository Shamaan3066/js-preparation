// Replace space with underscore
// Input:
// Javascript Practice Question
// Learn With Me
// Output:
// javascript_practice_question
// learn_with_me

function replaceSpace(str) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toLowerCase() + word.slice(1))
    .join("_");
}

console.log(replaceSpace("Javascript Practice Question"));
console.log(replaceSpace("Learn With Me"));
