
console.log("🍑🍌");

// -------------------------------------------------------------

// async and await is the new way to handle promises.
// async and await is the syntectical sugar over promises.
// async and await work as follows:
// async function myfunction(){
//     await mypromise;
// }
// myfunction();

// Above is sample funct
// -------------------------------------------------------------

// ########## async function always return a promise. ##########
// ####### await keyword always wait for the promise to resolve. #######
// ####### await keyword only work with the async function. #######
// -------------------------------------------------------------

// 👇👇👇👇👇👇👇

// const myPost = async() =>{    // this is the way to write async funct ----> arrow funct

// -------------------------------------------------------------


let url = new window.URL("https://jsonplaceholder.typicode.com/posts");


async function myPost(){        // if we comment it work same as above ----> simple funct
    const myresponse = await fetch(url);
    if(!myresponse.ok){
        throw new Error("Something went wrong");
    }
    const data = await myresponse.json();

    // console.log(data);               // becz here funct also return the data 
    return data;        // and here the if we return data "it will return "Promises" " then we need to call "then" to get the data
}

myPost().then((data)=>{     // this is for to get data
    console.log(data);
}).catch((error)=>{
    console.log(error);
})



// =-------------------------------------------------------------------=

/* ➡️➡️➡️ "async await" mainly used with function to "Stop" the function for
    while until the "current" function execution has been done.
    
    "await" <----- keyword stop the function from begin execute 
    "parallaly" at same time each funtion. 

    let's see in code below ⬅️⬅️⬅️
*/


async function DailyWheather(){

    let PuneWeather = new Promise((resolve, reject)=>{
        setTimeout(() =>{       // setTimeout is "Asynch function"
            resolve("Temperature 22 C")
        }, 2000);
        
    })
    
    let JalgaonWeather = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Temperature 35 C")
        },4000)
    })

    // below we consumed above promise with "await"

    //  ####### With "await" #######

    let day1 = await PuneWeather;
    console.log('PuneWeather ', day1);
    
    let day2 = await JalgaonWeather;
    console.log('JalgaonWeather ', day2);


     //  ####### ⚔️ ✖️Without "await" #######

    //  let day3 = PuneWeather;
    // console.log('PuneWeather ', day3);
    
    // let day4 = JalgaonWeather;
    // console.log('JalgaonWeather ', day4);

    // becz of "aysnc await the "promise" was wait for current execution till it's complition.
    // but without "await" it "consumed" "Parallely"

    return [day1, day2];
    // return [day3, day4];

}

// DailyWheather(); // <--- this also can call it.

function justFunct(){
    console.log('I am not async await funct i.e "I am execute 1st"');
}

console.log('Welcome to DailyWheather');        // <--- sysnchronous statement don't wait for execution.

let a = DailyWheather(); //<-- DailyWheather() return promise we store it in "getValue" and "Consumed" it using "then()"
let b = justFunct();

a.then((x)=>{
    console.log("Values --> ",x);
})

// --------------------------------------------
// if we run our below code allow remaining "Asynch" funct will wait until this below synch fun will not execute becz it's value is to large.

// var p = 1;
// for( var i=1; i<10000000000; i++){
//     p+=i;
// }
// console.log('p ',p);



