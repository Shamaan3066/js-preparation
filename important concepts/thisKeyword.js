// The value of 'this' is determined bby how a function is called:
// In the global context (outside of any function), 'this' refers to the object(e.g., 'window' in browsers).
// In a function, 'this' refers to the object that invoked the function.
// In an arrow function, 'this' retains the value from the enclosing lexical context.
// In an event handler, 'this' refers to the element that received the event.

console.log(this); // In a browser, this will log the 'window' object

// Inside a function
function show() {
    console.log(this);
}

show(); // Logs the global object (window in browsers)

const obj1 = {
    name: 'John',
    show: show
};

obj1.show(); // Logs 'obj' because 'obj' is the object that invoked the function


// Arrow functions
// Arrow functions do not have their own 'this'. Instead, they inherit 'this'
// from the enclosing lexical context (the surrounding code where the arraow function is defined)
const obj2 = {
    name: 'John',
    show: function() {
        const arrow = () => {
            console.log(this.name); // 'this' is inherited from 'show''s lexical context
        };
        arrow();
    }
};
obj2.show(); // Logs 'John'