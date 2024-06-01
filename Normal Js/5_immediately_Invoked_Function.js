"use strict";

// Immediately invoked function execution

(function() {
    console.log('IIFE');
})();

// OR ##############

let person = {
    firstName: 'John',
    lastName: 'Doe'
};

(function () {
    console.log(person.firstName + ' ' + person.lastName);
})(person);

// ------------------------------------------------------

(function(a,b){
    console.log('Ans ',(a+b));
})(10, 20);

// OR

let sum = (function(a,b){
    return a + b;
})(10, 5);
console.log(sum);

// -------------------------------------------------------
// "Arrow Funct" also support

((p,q)=>{
    console.log('Multiply ',p*q);
})(5,5);
















