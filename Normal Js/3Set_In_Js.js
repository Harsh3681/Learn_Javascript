
"use strict"

console.log("Name");

// create an set function
//  properties of set as like as array but it is not array
//  it is not allow duplicate value
//  it is not allow index
//  it is not allow key value pair
//  it is not allow any type of value

// we cant used length with set

var mySet = new Set([2,3,5,6]);  // we can pass "number Array" in set Set
console.log('Myset ',mySet);

// var st = new Set(2,56,2,5,2,22);     // we can't do this becz it is not iterable as "for loop" that's why we pass "Array" as above.
// becz "Array" and "String" is iterable.

var str = new Set("Iterable String");
console.log('Me iterable String --> ',str);

const CharSet = new Set(['a','d','f']);  // we can pass "Char" in set Set
console.log('Me CharSet --> ',CharSet);


const mySimpleSet = new Set();  // we can create an empty set ################### also ############

// add value in set
mySet.add(5);
mySet.add(54);
mySet.add(25);

// mySet.add([1,2,3,4]);  // we can add array in set
// mySet.add([1,2,31,41]);  // we can add array in set

console.log(mySet);

// mySet.length;  // we cant used length with set

// but we want to find the lenghth of set then we can do like this

console.log(mySet.size);        // with build in function "size"

let len = 0;
for(let i of mySet){
    console.log('i ',i);
}
console.log(len);               // with for loop