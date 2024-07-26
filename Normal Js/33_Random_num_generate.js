
"use strict"

// If we want to generate Random number use follow
let max1=100;
let min1=1;

let ran = Math.floor(Math.random()* max1) + min1;        // now it geneate  random num with in range 100
console.log('Random without range ',ran);

// ----------------------------------------------------------

// If we want to generate Random number within Specific "Range"

// suppsoe 100 to 1000
let min = 100;
let max= 1000;

let ran2 = Math.floor(Math.random() * (max-min)) + min;        // now it geneate  random num with in range 100
console.log('Random without range ',ran2);

// ------------------------------------------

console.log('Recursive Function to print 1-100');
// let i=1;
// function myfun(i){
//     if(i!==101){
//         console.log('ans ',i);
//         myfun(i+1);
//     }
// }
// myfun(1);

// ------------------------------------------------------

console.log('Fibonacci Series');

// function fibFun(i){
//     if(i===0 || i===1){
//         return i;
//     }
//     return fibFun(i-1)+fibFun(i-2);
// }
// for(let p=0; p<=10; p++){
//     console.log(fibFun(p));
// }
            
// ------------------------------------------------------





