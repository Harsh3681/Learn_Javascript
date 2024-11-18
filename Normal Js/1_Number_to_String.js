

"use strict";

di = 5;   // <--- so here we need to mention the datatype for "di" 
          // <---  here "use strict" not allow it without data type.
console.log(di);
var di = 6;      // <--- in short "use strict" will do "restriction" to write the code properly by following some ethics
console.log(di);

var n = "Kali";
console.log("Name " + n);


// var hh = 9;      // allow
// var hh = 10;     // allow

// let k = 8;       // Not allow
// let k = 9;       // Not allow


// Number to String

var num =9;
// var h = String(num);
// or
var h = num + "";                //  adding " " 👈
console.log("h type "+typeof(h));

// String to number.

var hh = "9";
// var k = Number(hh);
// or
var k = +hh;                     //  power of  ➕     
console.log("k type "+ typeof(k));


// "Formatting The String"

var name = "Jaybhai";
var age = 92;
// console.log(age);

let About = `Ur name is ${name} age ${age}`
console.log(About);

// -----------------------------------------------------

const Chamtkar = (...arr) =>{  // 👈👈 convert Array into "string" directly
        return 2 + (arr);
        // return 2 + (Number)(arr);
}

console.log("See Chamatkar 👉 " + (Chamtkar(55)));
console.log("See Chamatkar 👉 " + typeof(Chamtkar(66)));

// -----------------------------------------------------

// Decleard "Bigint"

let kiya = 8n;
let kiya2 = BigInt(8);
console.log(kiya ,"kiya type "+typeof kiya);
console.log(kiya2 ,"kiya2 type "+typeof kiya2);

// ----------------------------------------------------------------

// "=="   &&    "==="  equalsto

let hp = 88;
var gp = "88";

console.log("this is", hp==gp);      // here the "==" just take care's of only "element" present in given variable
console.log("this is",hp===gp);     // Where the "===" also take care's of the "element" && "DataType" of element present in given variable


// Same         // "!="   &&    "!=="  Not equalsto   for above input 88 and "88"

console.log(hp!=gp);
console.log(hp!==gp);

// -------------------------------------++++++++---------------------------

// let aye = prompt("Enter");
// if(aye>18){
//     alert("yes");
// }
// else{
//     alert("no");
// }

// ----------------------------------------------------------------

//      Tarnary Operator

var al = 11;
let bi = al>8 ? "yes" : "No";
console.log(bi);

//  Find smallest no among 3 and larget also same just "<" to ">"

var a5=22; var b5=7; var c5=1;
let ans = (a5<b5 && a5<c5 ? a5 : (c5<b5 ? c5 :b5));
console.log(' Smaller Ans '+ ans);




// ----------------------------------------------------------------



// let a = 1;
// let to = 0;

// while(a<=10){
//     to = to + a;
//     a++;
// }
// console.log(to);

// ----------------------------------------------------------------

var aa = ["hu", 3, 4,9,8];
let [a, b, c, d,e,f] = aa;
console.log(typeof a);
console.log(a,b,c,d,e,f);

var jj = [1, 3, 4];
var ui = [];
let [p, q, ...ki] = aa;
console.log(p,q,ki);    // here ki initialized it's own array
console.log(typeof ki);
console.log(typeof aa);
console.log(typeof jj);


// ----------------------------------------------------------------

const hair_colour = "black";

const arr = {
        name: "audya",
        age: 34,
        Colour: "pink",
        "size of shirt": 22,
}
console.log(arr.Colour)
console.log(arr["size of shirt"])        // becz of this name is in form "with spaces" hence we have to write it in this bracket
console.log('Arra ', typeof arr );


//  if we want to create the given varible "value as an key" then used as follow.

// Ex

// we will make here "black" as an "key" for other value given "above hair_colour key"

// ans below

arr[hair_colour] = arr.Colour;
console.log("Me "+ arr[hair_colour]);


// const akki = {
//         a : 81,
//         b : 23,
// }
// console.log(akki.a);

// -----------------------------------------------------------

const aj = [..."smsi"];      // here "smsi" store as an char array
console.log(aj);

const ak = ["smsi",..."ooyo", ..."ooyo"];      // still here also it store as an array but the "string array"
console.log(ak);

const bk = ["smsi","ooyo"];      // still here also it store as an array but the "string array"
console.log(bk);




// ----------------------------------------------------------------



