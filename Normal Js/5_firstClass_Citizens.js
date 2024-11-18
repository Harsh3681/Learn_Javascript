

"use strict"

// "First-Class Citizens" nothing but
// Storing functions in "variables"
// Functions are first-class citizens in JavaScript.
// In other words, you can treat functions like values of other types.


function add(a, b) {
    return a + b;
}

let sum = add;

// By doing this, we can have 2 ways to execute the same function. For example,

let result1 = add(10, 20);

// Alternatively, we can all the add() function via the sum variable like this:

let result2 = sum(10,50);

console.log('result1 ', result1);
console.log('result2 ', result2);




