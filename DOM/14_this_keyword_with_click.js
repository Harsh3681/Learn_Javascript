
"use strict"


// In JavaScript, you can use the this keyword in the global and function contexts. Moreover, the behavior of the 
//  "this" keyword changes between "strict" and "non-strict" modes.

// ----------------------------------------------------------------

//      ** NOTE **      for event listing" like click and other all we must have to use "querySelector"

//               "this" keyword here 

// this keyword return the value

//  if it's ##### "arrow function" ######## then it will return "window" obj

//  and if it's an ##### "Normal function" ##### then it will return value as "actual button ele" see below


const signup = document.querySelector(".btn-headline")
let i=0

//      =>

signup.addEventListener("click",() => {     // here is => "arrow" funct now return "window" object
    i++;
    console.log('You click me',i);
    console.log(this);
    
});

//      simple funct

signup.addEventListener("click",function() {     // here is => "arrow" funct now return "window" object
    i++;
    console.log('You click me',i);
    console.log(this);
    
});