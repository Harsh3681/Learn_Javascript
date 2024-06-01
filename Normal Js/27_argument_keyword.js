
//    "arguments" is inbuild keyword in js
//  Here we try to demonstrate how ####### use strict ####### to  overcome below problem

function temp(num1, num2){

    "use strict"

    num1 = 45;      // <--  here this 2 variable are "Override"
    num2 = 2;       // <--  the user given Input.
// to "overcome" such issue we use "use strict" keyword
// now becaz of "use strict" they are not able to override user input.

    return arguments[0]+arguments[1];
}

console.log('Ans --> ',temp(5,2));












