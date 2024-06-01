
//  here we are just create an "funct" and return new "promise" we creating previous 19 file code

function createMyPromises(){
    const bucket = ["milk", "sugar", "bartan","chaipatti", "gas"]
    return new Promise((myResolve, myReject)=>{     // here we just use "return" statement becz it is funct 
        if(bucket.includes("milk") && bucket.includes("sugar") && bucket.includes("chaipatti") && bucket.includes("bartan")&&bucket.includes("gas")){
            myResolve("Chai Tayaaaar !!!!")
        }else{
            myReject(new Error("Not Able to do it"))
        }
    })
}


createMyPromises().then((mycallback) =>{        // 1st callback is here     "for funct we just use here () <-- to the createMyPromises()" and use "catch" and put another callback() insid catch .
    console.log("Me" ,mycallback);
    
}).catch(
    (error)=>{console.log(error);}  // 2md callback is here
)





