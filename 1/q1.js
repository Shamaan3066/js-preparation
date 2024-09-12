// Get Numbers that are multiples of 5 and Divisible by 2

function evenfiveMultiples(numArr) {
    return numArr.filter(num => num % 2 === 0 && num % 5 === 0);
}

console.log(evenfiveMultiples([1, 2, 3, 4, 5, 8, 7, 10, 15, 20, 25, 30]));
// [10, 20, 30]