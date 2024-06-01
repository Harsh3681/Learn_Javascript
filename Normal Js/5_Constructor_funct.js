

"use strict"


// Normal Person1 Function.
function Person1(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}
// ---------------------------------------

// the "new" operator does the following:

// Create a new "empty object" and assign it to the "this" variable.
// Assign the arguments 'John' and 'Doe' to the firstName and lastName properties of the object.
// Return the "this value".

function Person2(firstName, lastName) {

    // this = {};   // here empty() this "obj" becz of "new" keyword
 
    // add properties to this
    this.firstName = firstName;
    this.lastName = lastName;

    // return this;
}

// ---------------------------------------

// To create a "new" instance of the Person, you use the new operator:

let per1 = new Person1('John','Doe');

// ---------------------------------------

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    this.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
}

let person = new Person("John", "Doe");
console.log(person.getFullName());







