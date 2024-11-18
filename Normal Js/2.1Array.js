
// Initiate size of the array

let myArray = Array(12); // "empty" array with size "12"
let youArray = [] // "empty" array 



//  ---------------------------------------------------------------

var arr = [1,2,4]     // we can used any thing here  -->   let, const , var         # Mostly "const" is prefered
console.log(arr);

arr[0] = 11;
console.log(arr);
const ki = [...arr];
let mixed = [1,2.5,"string",false, true,11n, ki, null, undefined]
console.log("Ki", ki); 
console.log("Ki",typeof ki); 

mixed.forEach(el => {               // here we try to check the datatype of each ele in array "mixed"
    console.log(typeof el);
});



        //    check the "given array" is really Array Or Not

console.log("is Array",Array.isArray(mixed))       // because several Arrays are also treat as an "object" also decleared in {}

//  ---------------------------------------------------------------

// Array realted method
//          pop()
//          push()

//                       " NOTE" ---> Always use "const" to declered the array
//                      why becz it is safe to work with we can't reasine the value to it by recreating an new array

let hs = new Array();           // way to decleard an array
const arr2 = ["sun","moon"]

// arr2 = "mars";              // this is not possible in case of "const" insteat of it if "let" or "var" is there on this place it will allow it "that's why we prefrered to use an "const"

arr2.push("gurdians") // push at back

console.log(arr2);
arr2.reverse()
console.log(arr2);

arr2.unshift("addtofirst")          // to "add" ele at "start"
console.log(arr2);

arr2.shift("deletetofirst")          // to "delete" ele at "start"
console.log(arr2);

arr2.push("kela")
console.log(arr2);

arr2.pop("kela")
console.log(arr2);

console.log("Sun Index ",arr2.indexOf("sun"));

console.log("IsArray ",Array.isArray(arr2));

//                  there are several method include see by press  arr2.

// ---------------------------------------------------------------------------------

//                  Assigning value from Array to variables


let ak = [11,2,4,67,8]
const ar = [] = ak;
console.log(ar);

let MeTu = new Array(); 
let [a,b,c, d] = ak
console.log(MeTu);
console.log(a);
console.log(b);
console.log('ar', ar);

// ---------------------------------------------------------------------------------



let person = {
    name: 'John',
    toString: function () {
      return '25';
    },
    valueOf: function () {
      return '30';
    },
};
console.log('I am person Obj');
console.log(typeof +person);


let result = 1 ?? console.log('Hi');
console.log('r',result);



