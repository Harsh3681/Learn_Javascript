
"use strict"



// Just try to fig it out.

//  ######### 1st with "Function" #########

console.log(hi1);               // it print "undefine"
var hi1 = function(){                   // var
    console.log('I am with var');
}
console.log(hi1);

console.log(hi2);              // it shows "Uncaught Error"
let hi2 = function(){                  // let
    console.log('I am functu');
}
console.log(hi2);

console.log(hi3);              // it shows "Uncaught Error"
const hi3 = function(){               // const
    console.log('I am functu');
}
console.log(hi3);


//  ######### 2nd with "Variable" #########

console.log(ele1);
var ele1 = "Harshit";        // var
console.log(ele1);

console.log(ele2);           // it shows "Uncaught Error"
let ele2 = "Harshit";        // let
console.log(ele2);

console.log(ele3);          // it shows "Uncaught Error"
const ele3 = "Harshit";     // const
console.log(ele3);









