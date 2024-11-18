"use strict";

// Immediately Invoked Function Execution (IIFE)

(function myfunct() {
    console.log('Named funct');
})();

// OR ##############

(function() {
    console.log('IIFE unNamed Funct');
})();

// OR ##############

(()=>{
    console.log("anonymous function");
})();

// OR ##############

((name)=>{
    console.log(`your name ${name}`);
})("Jayesh");

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
















