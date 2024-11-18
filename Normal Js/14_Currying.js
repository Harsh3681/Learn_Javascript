
"use strict"

//  to learn currying we need background knowledge of "bind()" and "closures"

/*  1) bind() <-------- bind is funct which call with another funct taking the argument and return the "funct" which we can use later... or same time.

    2) Closures <-------- is nothing but the "child funct" can access "parent" funct variable/argument/parameter but vice-verse not allow ( parent can't access child "variable/argument/parameter" ).
*/ 

console.log('Currying Using blind');

let multiply = function (x,y){
    console.log(x*y);
}

//  simple test case 1)

let multiplyByTwo = multiply.bind(this, 2); // here we use this as an object means , this is nothing but the argument we pass to the "multiplyByTwo" here, i.e "5"
multiplyByTwo(5);

// -----------------------------------------------------------

//  2nd test case 2) --> what if we pass 2 parameter

let multiplyNew = multiply.bind(this, 2, 66);  // now it will eliminate "this" 
multiplyNew(10);

// -----------------------------------------------------------

//  3rd test case 3) --> what if we pass 2 parameter

let multiplyNewOne = multiply.bind(this);  // now it will consider "this" for all 2 arguments
multiplyNewOne(10,10);

console.log('');
// --------------------------------------------------------------

// Now function currying using "Closures"

function ArthiOper(a){
    function OperType(b){
        return a**b;
    }
    return OperType;
}

const Arthi = ArthiOper(5);         // here we try to do cube of "5" by "3"
const ans = Arthi(3);

// ------------------------------

let pp = ArthiOper(2)(6); // try to do cube
console.log('pp ',pp);


console.log('Currying Using Closures', ans);

