// A callback is a function passed as an argument to another function which is then invoked 
// inside the outer function to complete some kind of routine or action.

// setTimeout is a built-in function in Javascript that allows you to execute a function
// or a specified piece of code after a certain amount of time has passed.

function fetchData(callback) {
    setTimeout(() => {
        console.log('Data fetched');
        callback('Here is your data');
    }, 2000);
}

function handleData(data) {
    console.log(data);
}

fetchData(handleData);

// Output:
// Data fetched
// Here is your data