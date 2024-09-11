// reduce: Executes a reducer function (that you provide) on each element of the array, 
// resulting in a single output value.

const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((total, num) => total + num, 0);
// Initial value = 0
// the 'reduce' method starts with total = 0
// First iteration: total = 0 + 1 --> total = 1
// Second iteration: total = 1 + 2 --> total = 3
// Third iteration: total = 3 + 3 --> total = 6
// Fourth iteration: total = 6 + 4 --> total = 10
console.log(sum); // 10