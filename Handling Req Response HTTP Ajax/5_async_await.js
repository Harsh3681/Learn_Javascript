
console.log("🍑🍌");

// async and await is the new way to handle promises.
// async and await is the syntactical sugar over promises.
// async and await work as follows:
// async function myfunction(){
//     await mypromise;
// }
// myfunction();
// async function always return a promise.
// await keyword always wait for the promise to resolve.
// await keyword only work inside the async function.

// Above is sample funct
// -------------------------------------------------------------

const URL = "https://jsonplaceholder.typicode.com/posts";

// const myPost = async() =>{    // this is the way to write async funct ----> arrow funct

async function myPost(){        // if be comment it work same as above ----> simple funct
    const myresponse = await fetch(URL);
    if(!myresponse.ok){
        throw new Error("Something went wrong");
    }
    const data = await myresponse.json();
    // console.log(data);               // becz here funct also return the data 
    return data;        // and here the if we return data "it will return "Promises" " then we need to call "then" to get the data
}

myPost().then((data)=>{     // this is that to get data
    console.log(data);
}).catch((error)=>{
    console.log(error);
})



