"use strict"



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























