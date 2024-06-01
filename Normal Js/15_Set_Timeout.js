
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


// js "Synchronous" Programming Language

// "Synchronous" Programming Means the "Single Threaded"
// Until one task not completed will not move to the next One.

// ---------------------------------------------------------------------------------------------

        // ############ NOTE ############

// "SetInterval" mainly used for repeatative work
// =-------------------------------------------------------------=
// "SetTimeout" mainly used to done the task in "Specific" Period Of time.


console.log('Execute me 1st');

function hello(){
    console.log('Inside Hello🤡 funct'); 
}

// we can use "arrow funct also"
    
// setTimeout(hello,1000);     // anywhere we can declered it 1000 mili sec still it work same

setTimeout(hello,100);     // time doesn't mattere we can set "0" mili sec also.  still it work same

console.log('Execute me 2nd');


/* what happen here above consider "1) callstack" "2)webserver" "3)Event Loop" "4)Callback Queue"

here the "Execute me 1st" will go inside the "1) callstack" then "hello/arrow" funct will came it see "timming" and "setTimeout" is an funct of "brower" that's why it will goes in "brower" and remaing working code is execute i.e "Execute me 2nd".
"Once total working code printing has been done" it will print that "function value".
*/


// here this below "setTimeout" funct will return an "id" 

const justId = setTimeout(() => {
    console.log('Inside Arrow➡️ funct');
}, 1000);     // 600000 means 1min and 1000 min 1sec

// console.log(justId);

// to stop the timeout see below

// clearTimeout(justId);
console.log('Everything is end');










