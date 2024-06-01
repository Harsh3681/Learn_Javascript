

// learn actual promise live example on this site

// https://www.javascripttutorial.net/es6/javascript-promises/



// promises do there work "asynchronously" and how
//  we will see in below code
// "asynchronously" means "non-blocking" code like "setTimeout()" function
//  "setTimeout()" function is the "asynchronous" function and it is the "non-blocking" code

//"synchronously" means "blocking" code like "for loop" and "while loop"

// ---------------------------------------------------------------
    // ############ NOTE ############

    //  Two things Are IMP in Promises.
    //  1st create ----> 😉 new Promise() <-- pass 2 fuct/ele "resolve && reject"
    //  2nd consumed Promise ----> 🥰   .then() <-- funct

// Promises are the nothing but the "future values"
//  The Value of elem we will get in future is the promises

const bucket = ["milk", "sugar", "bartan","chaipatti", "gas"]
const maketeaWalaPromise = new Promise((myResolve, myReject)=>{
    if(bucket.includes("milk") && bucket.includes("sugar") && bucket.includes("chaipatti") && bucket.includes("bartan") && bucket.includes("gas")){
        myResolve("Chai Tayaaaar !!!!")
    }else{
        myReject(new Error("Not Able to do it"))
    }
})

// Once we create "Promise" we also need to "consume" it
// so how to consumed it see below code

//  to "then()" we can passed the 2 "callback funct" see below

maketeaWalaPromise.then((mycallback) =>{        // 1st callback is here
    console.log("me",mycallback);
    
    },(error)=>{
        console.log(error);  // 2md callback is here
    }
)

// "mycallback" is nothing but the -->  "myResolve("Chai Tayaaaar !!!!")" o/t

// and "(error)" is nothing but the -->  "myReject(new Error("Not Able to do it"))"




// --------------------------------------------------------------=

// Another  Way to do the "Promises" Along with "setTimeout()"


function myPromise(){
    return new Promise((justResolve, justReject) =>{
        const value = false;    // make it "true" if false viseverse
        setTimeout(()=>{        // here we use it
            if(value){
                justResolve();
            }else{
                justReject();
            }
        },2000);
    })
}

// Now time to "Consumed" this promises
// --------
//  1st way to consumed above Promise 

myPromise().then(()=>{
    console.log('Got Consumed... ');
    
},()=>{
    console.log(new Error("New Error!!!!!!!"));
})

// ----------
//  2nd way to consumed above Promise 

myPromise().then(()=>{
    console.log("Resolvedddd!!!!!");
}).catch(()=>{
    console.log('Rejected!!!!!!!');
})


// --------------------------------------------------------------=
//      In single Line "Promise" Create an "Consumed"

// "then()" method always return "Promise" i.e see below "85" i.e "value"
Promise.resolve(85).then(value =>{
    console.log('Ans --> ',value);
})




    





