// "use strict"     // <--- only becz of "use strict"  we can't use "this" see at last of this file. by uncommenting it;

console.log('\n\n Types Of Functions Started......');

//  "Ways" to declared the function
//                          ways below

function f1(){              // 1 way
    console.log('me f1');
}
f1();

function f2(a,b){           // 2 way
    console.log(a*b);
}
f2(5,5);

const f3 = function(){      // 3 way
    console.log('f3');
}
f3()

const f4 = function(a,b){   // 4 way
    console.log(a+b);
}
f4(2,2)

const f6 = () =>{           // 5 way
    console.log('I am fun f6 without name and without variable ');
}
f6()


const f5 = (inpt) => {        // to unique
    console.log('i am the function "f5" who takes the single value as "inpt" '+inpt);
}
f5(10);

const f7= (a,b) =>{         // 6 way
    console.log('I am fun f7 without name and with variable\n addition - ',a+b );
}
f7(9,9)


// -------------------------------------------------------

console.log('\n\n HigherOrder Started......');

function higherOrder(fn) {      // <--- here "fn" act as an function.
    return fn();
}

//  ###### 1st way to pass to "higherOrder"
higherOrder( function() {
     console.log("Hello world1") 
});  // here also we create the function "without it's "name" --> function() it may show error but how it working here i don't know


//  ###### 2nd way to pass to "higherOrder"
higherOrder( function go() {
    console.log("Hello world2") 
});

//  ###### 3rd way to pass to "higherOrder"
higherOrder( ()=> {
    console.log("Hello world3") 
});


function janu(){                // Not possible "but" above it's work don't know how
   console.log('Error');
}
janu(); // <--- Janu call here
console.log('');

// ------------------------------------------------------------------------------
// Non parameterize function

console.log("Name");
function myFunc(){
    return "jay";
}

let my = myFunc();
console.log(my);         // remove comment and run

// ------------------------------------------------------------------------------

// parameterize function

// less then greater then

function myadd(x, y){
    return x=="hi" ?x : y;
}
const ans = myadd("Bye",-4);
console.log(ans);    // remove comment and run

// ------------------------------------------------------------------------------

// First Char

function firstChar(x){
    return x[0];
}


console.log("get 1st char ",firstChar("harsh"));     // remove comment and run

// ------------------------------------------------------------------------------

console.log('\n\n function Expression Started......');

// ##########  function Expression  ###########


const newFunct = function(){
    return "this is way of create an function Expression";
}

// console.log(newFunct());     // remove comment and run

// ------------------------------------------------------------------------------

const adding = function(a,b){
    
    console.log(a+b);
}

adding(10,1);

// ------------------------------------------------------------------------------

console.log('\n\n Arrow Operator Started......');


//  Arrow Operator

const subTract = (x,y) => {         // Instead of using name of function we will directly mentioned an parameter with an "Arrow operator" =>

    return x>y ? x-y : y-x;
}

console.log("SubTract "+subTract(9,2));         // remove comment and run


// ----------------------------------------------------------

const meU = () => {         // if we don't pass any argument still we have to mention an "()"  and  "=>"  operator.

    console.log("Me Aauuuu !!!!");
}

meU();


// ----------------------------------------------------------

// below expression means "function " name "checkUp" --- take only one parameter "num"  return it's (num%10==0) ans "true or Flase".

const checkUp = num => num%10==0;
console.log("Me checkUp ",checkUp(10));        // remove comment and run


// ----------------------------------------------------------

// "Parameterized unnamed function"

let s = (x,y) => 2*x+y;
console.log("Multiple ===0===___!___===0===")
console.log("Me s = ",s(2,1));         // remove comment and run


let chtf = (x,y) => {return x==y?true:false}
console.log("Check True or False = ",chtf(3,4))

// ----------------------------------------------------------

console.log('\n\n Hoisting Started......');

//          ##########  Hoisting  ############

// means calling the function before complete it's declaration

hello();

function hello(){
    console.log("I had been hoisted!!!!");
}


// ----------------------------------------------------------

console.log('\n\n function inside a function Started......');

// function inside a function

function myApp(){
    
    function add(x,y){      // this just a funct
        return x+y;
    }
    
    const Sub = (x,y) => (x-y);     // this just a funct, arrow funct
    
    const greed = () => console.log("Nice!!!!!"); // arrow funct
    
    console.log("how are u");
    console.log(Sub(6,4));
    console.log(add(6,4));
    greed();
}

myApp();

//  here we can call the function only from inside the function once we declared it inside function.
//  we can't call it from outside the block

// greed()      // generate Error

// ----------------------------------------------------------

console.log('\n\n Lexical Scope Started......');
        // ############### Lexical Scope  ###############

// var <----- can used "inside as well as outside also" also in "function"  # has    "function Scope"

// "let" , "const"  can used only inside the function block  # has  "Block Scope"


var hey = "hiii";

let mee = "men";

const tu = "girl";

const ghen = () =>{
// All redeclare variables must need to put inside { } <-- bracket compulsion

    {var hey = "bye";}        // without comment it , it will print an "bye"   with comment it , it will print an "hii"

    {let mee = "female";}     // here we are not able to access an "mee" becz it is an "let" variable same for "const also"

    // {mee = "female";}  // <-- But😅 this is possible if we remove "let"

    {const tu = "working"}

    // but  "var" "bye" we can easily access
    console.log(hey);

    console.log(mee);

    console.log(tu);
}

ghen();

// ----------------------------------------------------------

        // ###############  Parameter destructuring  ###############
console.log('\n\n Parameter destructuring Started......');

// destructuring From object

const obj = {
    name:"ragav",
    age: 23
}

function fanuu1(ob){       // This is one way to do it  
    console.log(ob.name);
    console.log(ob.age);
}

fanuu1(obj);

function fanuu2({name,age}){       // This is another way to do it
    console.log(name);
    console.log(age);
}

fanuu2(obj);    // <--- it also works becz we pass the actual "object {} <--" to fanuu2



// ----------------------------------------------------------

        // ############### Callback Function ###############

console.log('\n\n Callback Function Started......');

 // meaning of => operator is "return"  so we can write it like this also 


function urfunc(name){

    console.log("hey i am urfunc");
    console.log("ur name is "+ name);
}

function myfunc(urfunc){      // instead of "callback" we can mention any name

    console.log("hey i am myfunc");
    urfunc("jayu");
}

myfunc(urfunc);

// ----------------------------------------------------------

        // ############### Function Return Function  ###############
console.log('\n\n Function Return Function Started......');

function heyfunc(){
    function theyfunc(){
        console.log("Iam theyfunct");
        return "heyyyyyyy";
    }
    return theyfunc;
}


var ghey = heyfunc();
console.log('ghey ',ghey());

// console.log(heyfunc());
console.log('----');

var mereturn = heyfunc();
// console.log(mereturn);   // to print "heyyyyyy"  we can do like this also here function returning function
mereturn();                 // here we call that inside function


// ----------------------------------------------------------
console.log('\n\n Function with foreach loop Started......');

             // ############### Function with foreach loop  ###############


const arr = [8,3,2,4];

console.log("i Am simple funct ");

function multi(arr){
    for(let i=0; i<arr.length; i++){
        console.log("2 * "+arr[i] +" = "+arr[i]*2);
    }
}

multi(arr);

console.log("\nAm foreach 1");

// here "arr" is am array that we declared above
/*  it act same as the "Map" funct but it will "not able" to return the 
    "Array"  Map will return the "array" as o/t      */
    
arr.forEach(function(arr){                  // here we are create an anonymous funct which don't have any name
    console.log("2 * "+arr +" = "+arr*2);
})


console.log("\nAm foreach 2");

arr.forEach(kay => {            // here we are creating an arrow funct work same as that above 
// here "key" act as element holder can take any name instead "kay"
    console.log("2 * "+kay +" = "+kay*2);
});


// ----------------------------------------------------------


//  use the function with html file 

var f = () =>{
    alert('hi tiger!!!'); 
    document.write("Fuck offf!!!")
}
f();
// ----------------------------------------------------------

function doSomething() {
    console.log(this);
}

doSomething();

// ----------------------------------------------------------









