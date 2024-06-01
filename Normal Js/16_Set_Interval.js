
//  diffence between setInterval And setTimeout as below
// SetTimeout() Method
// The setTimeout Javascript method is used to call a function 
// after a certain period of time. The time after which the function
//  will be called is given by the user in milliseconds.

// setInterval() Method
// The setInterval Javascript method is used to call a function repeatedly 
// at a specified interval of time. This time interval at which 
// the function will be called is provided by the user in milliseconds.
 

// setTimeout() and setInterval() methods in Javascript allow us to run our code asynchronously
// (Program doesn't need to wait for a task to complete before moving on to the next task).

// ---------------------------------------------------------------------------------------------------

// setTimeout()
// Eg - If we allow 10ms interval in our setInterval() method, and the function
// takes 12 ms to execute, then the ####"subsequent call"#### will happen without any pause.
// Using setTimeout() Recursively 

// setTimeout()
// Whereas if we use recursive setTimeout() method, the 10 ms delay is guaranteed 
// irrespective of whether the function takes more or less time to execute. 
// The new call will ###### always be scheduled after the end of the previous call #####
// Using setTimeout() Recursively

// ---------------------------------------------------------------------------------------------------

        // ############ NOTE ############

// "SetInterval" mainly used for repeatative work
// =-------------------------------------------------------------=
// "SetTimeout" mainly used to done the task in "Specific" Period Of time.


console.log('Set Interval Start');

const justIntervakId = setInterval(()=>{
    console.log('Just');
    // here we try to print the "random" num 
    console.log((Math.random()));
},1000) // print random num within each 1sec

clearInterval(justIntervakId);  // <--- just comment it
console.log('Set Interval End');



// "SetInterval" mainly used for repeatative work
// =-------------------------------------------------------------=
// "SetTimeout" mainly used to done the task in "Specific" Period Of time.

console.log('Set TimeOut Start');

const justId = setTimeout(()=>{
    console.log('Just');
    // here we try to print the "random" num 
    console.log((Math.random()));
},1000) // print random num within each 1sec

console.log('Set TimeOut End');
// clearTimeout(justId);            //<-- if we uncomment it setTimeout() not works becz it will clear it before start.

// ### NOTE ###
//  "setTimeout()" function is the "asynchronous" function and it is the "non-blocking" code. 
//   That's why here in above code "Set TimeOut Start" and "Set TimeOut End" was excute 1st then the "Just" and "Math.random()" fuct execute.










