
//  For this file we need to first start "server" 1_get_post_req_res.js means we need to start by --> npm run 1get_post_req_res 👈👈
// and then run this file ---> node 5_fetch_req.js  👈👈


var sendObj = {
    method : "GET"
};

fetch('http://localhost:4000/getsum?value=10',sendObj)  // this code means by "fetch" we get data by "GET" method
.then(function (response) {     // then here in "response" this data get "Store"
    return response.json();     // and return in "json" form
})
.then(function (jsonBody) {     // and that "json" output take a input by this funct and console.log(jsonBody); ... 👉👉 hence we see out
    console.log(jsonBody);
});





