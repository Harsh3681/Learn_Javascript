
        // ############### Callback Function in "Synchronous Programming" ###############


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

// ----------------------------------------------------

// Another Example

function getTwoNumAndAdd(number1, number2, succees, failure){ // here number1 and number2 are 2 input and  "succees" is an callback funct "###NOTE###" we can use any name here instead of "succees" "failure"

// ------------------------------------------
// below for 1st way

    console.log(number1,number2);
    succees(number1,number2);       // here 1st time "addi" funct was call 1st

// ------------------------------------------
// below for 2nd way

    if(typeof number1==="number" && typeof number2==="number"){
        console.log('Yes --> ');
        succees(number1,number2);   // here 2nd time "addi" funct was call 
    }else{
        failure();
    }

}

// ------------------------------------------
// one way to do it this by simple funct

function addi(num1,num2){
    console.log('Addition',num1+num2);
}

getTwoNumAndAdd(4,6,addi)


// ------------------------------------------
// 2nd way to do it this by callback funct

getTwoNumAndAdd(3,"9",(num1,num2)=>{
    console.log(num1+num2);
},()=>{     // here we create anoyther callback
    console.log('Wrong Data Type');
    console.log('Please enter number datatype');
    
})
