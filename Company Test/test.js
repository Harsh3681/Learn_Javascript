




var sendObj = {
    method : "GET"
};

fetch('https://restcountries.com/v3.1/all',sendObj)  // this code means by "fetch" we get data by "GET" method
.then(function (response) {     // then here in "response" this data get "Store"
    return response.json();     // and return in "json" form
})
.then(function (jsonBody) {     // and that "json" output take a input by this funct and console.log(jsonBody); ... 👉👉 hence we see out
    console.log(jsonBody);
}); 









