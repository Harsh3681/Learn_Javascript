
//          ##### NOTE #####

//  Before doing this assignment Start "internet" connection



//  HTTP Methods are below 
// GET - to get data from server
// POST - to send data to server
// PATCH - to update Small thing on server
// PUT - to update something on server
// DELETE - to delete something on server

// ------------------------------------------------

// Below is "xhr Ready state"

// 0	UNSENT	    Client has been created. open() not called yet.
// 1	OPENED	    open() has been called.
// 2	HEADERS_RECEIVED	send() has been called, and headers and status are available.
// 3	LOADING	    Downloading; responseText holds partial data.
// 4	DONE	    The operation is complete

// ------------------------------------------------


const URL = "https://jsonplaceholder.typicode.com/posts";

const xhr = new XMLHttpRequest();
// console.log(xhr);



// console.log(xhr.readyState);        // jsut to see where is state now

xhr.open("GET", URL);   // 1st step

// console.log(xhr.readyState);        // jsut to see where is state now

// xhr.onreadystatechange = function () {
//     // console.log(xhr.readyState);         //  jsut to see where is state now
//     if (xhr.readyState === 4) {             // why 4 becz 4 is "Success"
//         console.log(xhr.responseText);
//         const jsonData = JSON.parse(xhr.responseText);
//         console.log(jsonData);
//     }
// }

// Above funct work when "readyState" change
// This funct is work only when readyState is 4 (Success)
// But we can use "onload" instead of "onreadystatechange"

xhr.onload = function() {              // onload is same as onreadystatechange
    // console.log(xhr.readyState);         //  jsut to see where is state now

    const response = xhr.response;
    const data = JSON.parse(response);      // herec we convert "response" data to "js obj"
    console.log(data);
}

xhr.send();   // 2nd step

