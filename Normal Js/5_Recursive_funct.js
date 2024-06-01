
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
countDown1(3);

// or
console.log('countDown2');
let countDown2 = function f(fromNumber) {
    console.log(fromNumber);

    let nextNumber = fromNumber - 1;

    if (nextNumber > 0) {
        f(nextNumber);
    }
}

let newYearCountDown = countDown2;
countDown2 = null;
newYearCountDown(10);








