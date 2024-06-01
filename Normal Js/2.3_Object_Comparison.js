
// Before Object the variables are store value in different memory position each time.
//  And not refer to single object 

let a = 4;
let b = a;
console.log(`a = ${a} && b = ${b}`);
a = 7; // make change in a
console.log(`a = ${a} && b = ${b}`);  // here "a" refer to "7" now and "b" still refer to "4"
// this happen only becz of variable store value in diff memory location.

// --------------------------------------------

// But  with "Object" the variables pointing to same memory location
// as a "refernce" value.
// here "x" and "y" refer to the same memory location i.e {num : 5}
// when we try to make change in value of "x.num = 89"
//  change will reflect in both variable "x" and "y"

let x = {num : 5};
let y = x;
console.log(`x = ${x.num} && y = ${y.num}`);
x.num = 89; // make change 
console.log(`x = ${x.num} && y = ${y.num}`);

// ---------------------------------------------------------------
// Compared 2 Obj

let p = {pinto : "hsu"}
let q = {pinto : "hsu"}
console.log('Ans ', p==q);      // becz both time obj is compare theorally not depply 
console.log('Ans ', p===q);




