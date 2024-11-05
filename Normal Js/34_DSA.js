
"use strict"
/*
var n = 5;
for(let p=0; p<=n; p++){
    var s = " ",r="*";
    console.log((r.repeat(n-p))+s.repeat(p));
}

console.log('');
var n = 5;
for(let p=0; p<=n; p++){
    var s = " ",r="*";
    console.log(s.repeat(p)+(r.repeat(n-p)));
}

console.log('');
var n =5;
for(let p=1; p<=n; p++){
    var s = " ",r="*";
    console.log(r.repeat(p)+(s.repeat(n-p)));
}

console.log('');
var n =5;
for(let p=1; p<=n; p++){
    var s = " ",r="*";
    console.log((s.repeat(n-p))+r.repeat(p));
}

// square * star pattern

var n =5;
for(let p=0; p<n; p++){
    var r="";
    for(let q=0; q<n; q++){
        r+="* ";
    }
    console.log(r);
}
console.log('');

// Normal Pyramid * Star Pattern

var n =5;
for(let p=1; p<=n; p++){
    var r = "*", s=" ";
    console.log(s.repeat(n-p)+r.repeat(p*2-1));
}
console.log('');

// DownSide Pyramid * Star Pattern

var n =5;
for(let p=5; p>=1; p--){
    var r = "*", s=" ";
    console.log(s.repeat(n-p)+r.repeat(p*2-1));
}
console.log('');

// 2 Pyramid same time * Star Pattern

var n =5;
for(let p=5; p>=1; p--){
    var r = "*", s=" ";
    console.log(r.repeat(p*2-1)+s.repeat(n-p));
}
for(let p=1; p<=n; p++){
    var r = "*", s=" ";
    console.log(r.repeat(p*2-1)+s.repeat(n-p));
}
console.log('');


// Arrow Pyramid toward right 👉 * Star Pattern

var n =5;
for(let p=1; p<n; p++){
    var r = "*", s=" ";
    console.log(r.repeat(p*2-1)+s.repeat(n-p));
}
for(let p=5; p>=1; p--){
    var r = "*", s=" ";
    console.log(r.repeat(p*2-1)+s.repeat(n-p));
}

console.log('');

// 😁 Diamond

var n =5;
for(let p=1; p<n; p++){
    var r = "*", s=" ";
    console.log(s.repeat(n-p)+r.repeat(p*2-1));
}
for(let p=5; p>=1; p--){
    var r = "*", s=" ";
    console.log(s.repeat(n-p)+r.repeat(p*2-1));
}
console.log('');

// 😁 Wakdi patodi

var n =5;
for(let p=1; p<n; p++){
    var r = "*", s=" ";
    console.log(s.repeat(n-p)+r.repeat(p));
}
for(let p=n-1; p>=1; p--){
    var r = "*", s=" ";
    console.log(r.repeat(p)+s.repeat(n-p));
}
console.log('');

// Arrow Pyramid toward left 👈 * Star Pattern
var n =5;
for(let p=1; p<=n; p++){
    var r = "*", s=" ";
    console.log(s.repeat(n-p)+r.repeat(p));
}
for(let p=n-1; p>=1; p--){
    var r = "*", s=" ";
    console.log(s.repeat(n-p)+r.repeat(p));
}

console.log('');

// -------------------------------------------------------

// Hollow Square

function RowWithSpace(n){
    var str = "";
    str+="*";  //1st time star
    for(var i=0;i<n-2; i++){
        str+=" ";       // and remaining "n-2" times "Space"--> " "
    }
    str+="*";   //2nd time star
    console.log(str);
}
function FullRow(n){
    var str = "";
    for(var i=0;i<n; i++){
        str+="*";
    }
    console.log(str);
}

function MyFinalOutPut(n){
    FullRow(n);
    for(var i=0; i<n-2;i++){
        RowWithSpace(n)
    }
    FullRow(n);
}

MyFinalOutPut(7);
*/

// ---------------------------------------------------------------------------

// Find Calculate Time req to calculate sum from 1 to n

var n = 1000000000; // hundred coror
const startTime = new Date().getTime();     // Date().getTime() <----- it return time in milisec
var sum=0;
for(var i=1; i<=n; i++){
    sum+=i;
}
console.log('Sum ',sum);
const endTime = new Date().getTime();
console.log('Time ',(endTime-startTime)/1000,"sec");

// ---------------------------------------------------------------------------

var st = "harshal        sonawane. Where    Are               u";
// o/t ===> harshal sonawane. Where Are u

const sp = st.split(" ");
var arr = new Array();
for(var i=0; i<sp.length; i++){
    if(sp[i].length==0){
        // do nothing
    }else{
        arr.push(sp[i]);
    }
}
arr = arr.join(" ");
console.log('ans ',arr);

// ---------------------------------------------------------------------------
// to start counter from 0

// var stt = 0;
// const tm = new Date().getTime();
// function myTime(){
//     stt+=1;
//     console.log(stt);   
//     setTimeout(myTime,1000)
// }
// setTimeout(myTime,1000)


// ---------------------------------------------------------------------------
// to start counter from 0
// both above and below work same ☝️👇


// var start = 0;
// const justTime = new Date().getTime();
// function myTime(){
//     start+=1;
//     console.log(start);   
// }
// setInterval(myTime,1000)

// ---------------------------------------------------------------------------

console.log("Time ", new Date().getTime());






