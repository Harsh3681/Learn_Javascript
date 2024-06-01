

// we use ".json()" use to convert the "response" into "json" format.

//we use ".stringify" to convert the "object" into "string" format.



//  "fetch" work similar as "XMLHttpRequest" but it is more powerful and flexible than "XMLHttpRequest".
//  "fetch" is a "promise" based API.
// and it is also "resolve" and "reject" based API.

// ----------------------------------------------------------------------

// This above is for "GET" request.

const URL = "https://jsonplaceholder.typicode.com/posts";

// fetch(URL).then((myrespose)=>{      // what happens here the fetch API return a "promise" and that "promise" has "response"

//     return myrespose.json();        // here "json()" use to convert the "response" into "json" format.
// }).then((mydata)=>{
//     console.log(mydata);            // and here we return the "data" which we get from "response" and that "data" is in "json" format.
// }).catch((error)=>{ 
//     console.log(error);
// })


// ----------------------------------------------------------------------

// This below is for "POST" request. means create data on server.

fetch(URL, {
    method: 'POST',
    body: JSON.stringify({      // here we use "stringify" to convert the "object" into "string" format.
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },

}).then((myrespose)=>{      // what happens here the fetch API return a "promise" and that "promise" has "response"
    if(myrespose.ok){       // when "myrespose" return "prototype" in consol they return "ok" property which is "true" if the "status" is between "200" and "299" otherwise "false".
        return myrespose.json()  // becz of it we can see the o/t on consol
    }else{
        throw new Error("Something went wrong");
    }

}).then((mydata)=>{
    console.log(mydata);            // and here we return the "data" which we get from "response" and that "data" is in "json" format.
}).catch((error)=>{ 
    console.log(error);
})

//  meaning of "'Content-type': 'application/json; charset=UTF-8'," this line and why this line use see below
// "Content-type" means what type of "content" we are sending to the server.
// "application/json" means we are sending "json" data to the server.
// "charset=UTF-8" means we are sending "UTF-8" format data to the server.
// "UTF-8" is a "character encoding" format.
// "UTF-8" is a "Unicode Transformation Format" and "8" means "8-bit" Unicode Transformation Format.




