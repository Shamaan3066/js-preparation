// Find the largest in the Array

function largestNumInArr(arr) {
    let largest = arr[0];
    for(i = 1; i < arr.length; i++) {
        if(arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}

console.log(largestNumInArr([21, 54, 12, 654, 124])); // 654

// Anothe way to do:

function findLargest(arr) {
    return Math.max(...arr);
}

console.log(findLargest([12, 64, 21, 62, 46])); // 64