// Async/await provides a cleaner and more readable way to work with Promises.
// It allows you to write asynchronous code as if it were synchronous, 
// making it easier to follow the flow of the code.

async function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data fetched');
        }, 2000);
    });
}

async function getData() {
    try {
        const response = await fetchData();
        console.log(response); // Data fetched
    } catch(error) {
        console.error(error);
    }
}

getData();

// Output:
// Data fetched