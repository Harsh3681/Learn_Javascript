
/*  closures are nothing but functions inside a function here we can 😍"Access" the #### 👉 parent function 👈 #### 🛗 "variables" and "parameters" 🛗 
    in <--- ####👉 child function 👈####" 
    but we are not able to access 
    #### 👉 child function #### ---> 🛗"variables" and "parameters"🛗 in <--- #### parent function #### 
*/ 

// "parent" che child gheu shakto ✔️ but "child" che parent nhi ❌

// Ex. 

function ArthiOper(a){
    function OperType(b){
        return a**b;
    }
    return OperType;
}

const Arthi = ArthiOper(5);         // here we try to do cube of "5" by "3"
const ans = Arthi(3);  

// Another way to calling such funct 👇👇👇👇👇

let pp = ArthiOper(2)(6); // 👈 ()() try to do cube <------
console.log('pp ',pp);

console.log('Answer '+ ans);
console.log('Arthi ' , Arthi);        //  ,     👈
console.log('Arthi ' + Arthi);       //  +      👈

 
// function myfunc(name, age){

//     function ufunct(){
//         console.log(age, name);
//     }
//     return ufunct;
// }

// const ha = myfunc("jay",12);
// ha();

// --------------------------------------------------------------------------------

function myfunc1(){
    function ufunct1(name, age){
        console.log(name, age);
        
    }
    return ufunct1;
}

const ha1 = myfunc1();
ha1("Namo",12);

// ----------------------------------------------------------------

//      Another Ex.

    function MagicFunct(){
        let count = 0;
        return function(){      // funct inside funct
            if(count<1){
                console.log('I am Magic funct ');
            }else{
                console.log('You have Already seen Magic ');
            }
            count++;
        }
    }

const letSeeMagic = MagicFunct();
letSeeMagic();      // 1st time
letSeeMagic();      // 2nd time
letSeeMagic();      // 3rd time


// ----------------------------------------------------------------

//      Here below "Funct Return Funct"

function justFunct(x){
    const a = "Hey";
    const b = "Bye";

    return function(){
        console.log(a, b, x); 
    }
}

const happy = justFunct("HaHaHa !!!")
happy();

// ----------------------------------------------------------------

function greeting() {
    let message = 'Hi';

    function sayHi() {
        console.log(message);
    }

    // sayHi();     // 1st way

    return sayHi;   // 2nd way
}

// greeting();      //  1st way

let hi = greeting();    // 2nd way
hi(); // still can access the message variable







