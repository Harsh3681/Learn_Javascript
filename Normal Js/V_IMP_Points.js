

document.write("It Help to Write  directly on the web page")




// primitive datatype below

//      "busnn bs"

// b -  Boolean
// u - undefined
// s - String
// n - Number
// n - null

// 2 new datatype

// b - BigInt
// s - Symbol

// -----------------------------------------------------------------------


// lets convert the number to big have 2 method

var num = 5677777;
console.log(typeof num);
console.log(typeof BigInt(num));

var num = 5677777n;             // still it is "BigInt" becz of "n"
console.log(typeof (num));

// -----------------------------------------------------------------------




// ----------------------------------------------------------------------

//          ##########  Hoisting  ############

// means calling the fnction before complet it's decleration

hello();

function hello(){
    console.log("hey");
}


// -----------------------------------------------------------------------


        // ############### Callback Function ###############


 // meaning of => operator is "return"  so we can write it like this also 


 function urfunc(name){

    console.log("hey i am urfunc");
    console.log("ur name is "+ name);

}

function mefunc(Callback){      // instead of "Callback" we can menstion any name

    console.log("hey i am myfunc");
    Callback("jayu");
}

mefunc(urfunc);


// ----------------------------------------------------------


        // ############### Laxical Scope  ###############

// var <----- can used "inside as well as outside also" also in "function"

// "let" , "const"  can used only inside the function block


var hey = "hiii";

let mee = "men";

const ghen = () =>{
    {var hey = "bye";}         // without comment it , it will print an "bye"   with comment it , it will print an "hii"

    {let mee = "female";}       // here we are not able to access an "mee" becz it is an "let" variable same for "const also"

    // but  "var" "bye" we can easily aceess
    console.log(hey);
    console.log(mee);
}

ghen();

// ----------------------------------------------------------

    // ############### Closure Scope  ###############

// closures are nothing but functions inside a function here we can 
// "access the #### parent function #### ---> variables" and 
// "parameters in <--- #### child function ####" but we are not able to access 
// #### child function #### ---> "variables" and "parameters" in <--- #### parent function #### 
// Ex. 

function ArthiOper(a){
    function OperType(b){
        return a**b;
    }
    return OperType;
}

// ----------------------------------------------------------











