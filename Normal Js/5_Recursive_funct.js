
"use strict"

// function countDown(fromNumber) {
//     console.log(fromNumber);
//     countDown(fromNumber-1);
// }
// countDown(3);    // it will never stop

// ##### Solution #####

function countDown1(fromNumber) {
    console.log(fromNumber);

    let nextNumber = fromNumber - 1;

    if (nextNumber > 0) {
        countDown1(nextNumber);
    }
}
console.log('countDown1');
countDown1(3);
console.log('');
// ---------------------------------------------------------------

// or
console.log('countDown2');
let countDown2 = function f(fromNumber) {
    console.log(fromNumber);
    
    let nextNumber = fromNumber - 1;
    
    if (nextNumber > 0) {
        f(nextNumber);
    }
}
countDown2(5);

// ---------------------------------------------------------------

console.log('countDown3');
console.log('');
let newYearCountDown = countDown2;
countDown2 = null;
newYearCountDown(10);

// ---------------------------------------------------------------

let sum = function(a){
    return function(b){
        if(b){
            return sum(a+b);
        }
        return a;
    }
}

console.log('final Ans ', sum(1)(2)(5)(10)(100)());

// https://www.meity.gov.in/writereaddata/files/Application_Development_Re-Engineering_Guidelines_0.pdf






