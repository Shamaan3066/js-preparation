// A Promise is an object that represents the eventual completion(or failure)
// of an asynchronous operation and its resulting value.
// A Promise is in one of these states:
// 1. Pending: Initial state, neither fulfilled nor rejected.
// 2. Fulfilled: The operation completed successfully.
// 3. Rejected: The operation failed.

function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Data fetched');
            resolve('Here is your data');
        }, 2000);
    });
}

fetchData()
    .then(data => {
        console.log(data);
        return fetchData();
    })
    // Can have many 'then' method
    .then(data => {
        console.log('This is from 2nd then method:', data);
    })
    .catch(error => {
        console.error('Error:', error);
    });

// Output:
// Data fetched
// Here is your data
// Data fetched
// This is from 2nd then method: Here is your data