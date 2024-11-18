"use strick"


// A higher order function is a function that takes one or more 👉👉 "functions as arguments," or returns a function as its result.

// Simple

function callbackFunction(){
    console.log('I am  a callback function');
}

// higher order function
function higherOrderFunction(func){
    console.log('I am higher order function')
    func()
}

higherOrderFunction(callbackFunction); // here funct take funct as arguments

// -------------------------------------------------------------------------

// write a function that calculates the area and diameter of a circle.

// logic to calculate area
const area = function(radius){    //    👈👈👈👈 Calculate "Area"
    return Math.PI * radius * radius;
}
// logic to calculate diameter
const diameter = function(radius){      //    👈👈👈👈 Calculate "diameter"
    return 2 * radius;
}

// ------------------------------------------------------
// a reusable function to calculate area, diameter, etc
//  here "calculate" funct will take funct as argument
// The code that we have written using HOFs is 👉"concise and modular". Each function is doing its own job and we are not repeating anything here.
// Suppose in the future if we want to write a program to calculate the circumference of the circle. We can simply write the logic to calculate the circumference and pass it to the calculate() function.

const calculate = function(radius, logic){ 
    const output = [];
    for(let i = 0; i < radius.length; i++){
        output.push(logic(radius[i]))
    }
    return output;
}

const radius = [1, 2, 3];
console.log(calculate(radius, area));
console.log(calculate(radius, diameter));















