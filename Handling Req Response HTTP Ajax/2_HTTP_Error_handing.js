

// const URL = "https://jsonplaceholder.typicode.com/posts";

// const xhr = new XMLHttpRequest;

// xhr.open("GET",URL);

// xhr.onload = ()=>{
//     const data = JSON.parse(xhr.response);
//     console.log(data);
// }

// xhr.send()


// ----------------------------------------------------------

//  That above are the ll basic step we need to follow before "maring" the req to Any "API"
// 1st store the URL
// 2nd create "xhr" const obj to store the new xhrhttp request

// 3rd  IMP    "open" the path "xhr"
// 4th  IMP     "xhr.onload" =  create "function" convert "api" data to "JSON" obj

// 5th  MOST IMP    "xhr.send()"

// ----------------------------------------------------------

//  HTTP response status code   

// "Informational" responses from  (100 to 199)

// "Successful"    responses from  (200 to 299)

// "Redirection"   messages  from  (300 to 399)

// "Client error"  responses from  (400 to 499)

// "Server error"  responses from  (500 to 599)

// ----------------------------------------------------------


const URL = "https://jsonplaceholder.typicode.com/posts";

const xhr = new XMLHttpRequest;

xhr.open("GET",URL);

xhr.onload = ()=>{
    if(xhr.status>=200 && xhr.status<300){
        const data = JSON.parse(xhr.response);
        
        const id = data[98].id;
        console.log(id);
        console.log(data);
    }else{
        console.log("Something WRONG happen here");     // it will be trigger when there is an mistake in "URL" and all such silly things
    }
}

// To Handle the "Internet related ERROR"
 
xhr.onerror = ()=>{
    console.log("Internet Chalu kara");
}

xhr.send();









