// Objects in Javascript are collectionsof key-value pairs, where keys are strings or symbols,
// and values can be any data type(including other objects or functions).

// Creating Objects
// a) Object Literal
const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};
console.log(person1.firstName); // John

// b) Using "new Object()"
const car1 = new Object();
car1.brand = "Toyota";
car1.model = "Corolla";
car1.year = 2020;
console.log(car1); // { brand: 'Toyota', model: 'Corolla', year: 2020 }

// c) Using a Constructor Function
function Person2(firstName, lastname, age) {
  this.firstName = firstName;
  this.lastname = lastname;
  this.age = age;
}
const person2 = new Person2("Alice", "Smith", 25);
console.log(person2.firstName); // Alice

// Accessing Object Properties
// a) Dot notation
console.log(person2.firstName); // Alice

// b) Bracket Notation
console.log(person2["lastname"]); // Smith

// Adding, Modifying, and Deleting Properties
// a) Adding/Modifying a Property
person1.job = "Developer"; // Adds a new property
person1.age = 31; // Modifies an existing property
console.log(person1); // { firstName: 'John', lastName: 'Doe', age: 31, job: 'Developer' }

// Deleting a Property
delete person1.age;
console.log(person1); // { firstName: 'John', lastName: 'Doe', job: 'Developer' }

// Iterating Over Objects
// a) "for...in" Loop
for (let key in person1) {
  console.log(key + ": " + person1[key]);
}
// Output:
// firstName: John;
// lastName: Doe;
// job: Developer;

// Using 'Object.keys()', 'Object.values()', and 'Object.entries()'
// Object.keys(): Returns an array of the object's keys.
// Object.values(): Returns an array of the object's values.
// Object.entries(): Returns an array of key-value pairs.
console.log(Object.keys(person1)); // [ 'firstName', 'lastName', 'job' ]
console.log(Object.values(person1)); // [ 'John', 'Doe', 'Developer' ]
console.log(Object.entries(person1));
// Output:
// [
//   ["firstName", "John"],
//   ["lastName", "Doe"],
//   ["job", "Developer"],
// ];

// Nested Objects
const student1 = {
  name: "Sarah",
  age: 21,
  address: {
    street: "123 Main St",
    city: "New York",
    country: "USA",
  },
};
console.log(student1.address.city); // New York

// Object Methods
const calculator1 = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
};
console.log(calculator1.add(5, 3)); // 8
console.log(calculator1.subtract(5, 3)); // 2

// 'this' keyword in Objects
const car2 = {
  brand: "Toyota",
  model: "Corolla",
  getDetails: function () {
    return `${this.brand} ${this.model}`;
  },
};
console.log(car2.getDetails()); // Toyota Corolla

// Prototype and Inheritance
// In JavaScript, objects can inherit properties and methods from other objects using prototypes.
// Every object in JavaScript has a prototype, which is another object that provides
// inherited properties and methods.
function Animal1(type) {
  this.type = type;
}
Animal1.prototype.speak = function () {
  console.log(`${this.type} make a sound.`);
};

const dog1 = new Animal1("Dog");
dog1.speak(); // Dog make a sound.

// Object Destructuring
const person3 = { firstName: "John", lastName: "Doe", age: 30 };
const { firstName, lastName } = person3;
console.log(firstName); // John
console.log(lastName); // Doe

// Cloning and Merging Objects
// You can clone objects and merge multiple objects into one using 'Object.assign()' or
// the spread operator (...)
// a) Cloning an Object
const person4 = { name: "Alice", age: 25 };
const clonedPerson1 = Object.assign({}, person4);
// Or
const clonedPerson2 = { ...person4 };
console.log(clonedPerson1); // { name: 'Alice', age: 25 }
console.log(clonedPerson2); // { name: 'Alice', age: 25 }

// b) Merging Objects
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

const merged1 = Object.assign({}, obj1, obj2);
// Or
const merged2 = { ...obj1, ...obj2 };
console.log(merged1); // { a: 1, b: 3, c: 4 }
console.log(merged2); // { a: 1, b: 3, c: 4 }
