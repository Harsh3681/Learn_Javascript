
const express = require("express")
const app = express();
const port = 5000

// ---------------------------------------------------------
/*  ######### Middleware 👈👈👈👈👈👈👈 is one who consume the "request" first before reach to the "get","psot","put", or "delete"
//  ####### Note ####### 👉👉👉 Middleware works only for 👉👉👉 "POST" req
//  Middleware mainly use for 👉👉👉 "Authentication" purpose.

//  👉👉👉 "Parameters" 👈👈👈  (req, res, next() )
//  req ---> can accept the data
//  res ---> can send data
//  next() ---> next() is funct which will permit the "get, post, put, delete" input "function"


// Ex.   ------------               ---------------
         | Browser  | =============>| Middleware  |
         ------------               ---------------
                                            |
                                            |
                                            ⬇   
                                            ⬇ 
                                            👇
                                     ---------------  
                                     | app.get or  |
                                     | app.post or | 
                                     | app.put or  | 
                                     | app.delete  | 
                                     ---------------  

*/           
// ---------------------------------------------------

function middleware(req, res, next){    // here we use this middleware for "Post" req
    console.log("Am inside middleware "+ req.headers.value);     // becz here we "req" our data i.e 👉 req.headers.value . ==> from "post requ"
    
    // res.send("Error from middleware.");      // we have 2 options we can send res.send() from 👉👉 "middleware" or from 👉👉 "handlePostRequest" funct both at same time not allow
    
    next();     // the post req first come here in middleware and pass becz of 👉👉 "next()" funct if we comment // 👉👉 "next()" fuct then the "handlePostRequest()" fuct got stuck there in {middleware} and 👆 above res. "Error" msg seen 
}
app.use(middleware);

// ---------------------------------------------------

function TotalSum(value){
    var ans = 0;
    for(var i=1; i<=value; i++){
        ans+=i;
    }
    return ans;
}



// ####### POST 👈👈👈👈👈👈👈
function handlePostRequest(req, res){
    var val = req.headers.value;       // 👉👉 "header" becz we mention value in Postman for post req
  
    var Calculation = TotalSum(val);
    var ans = "Total Sum "+Calculation;
    res.send(ans);                      //  👈👈 we can use "one of them". Means 👉👉 res.send() we also define in "middleware" 👉👉 res.send("Error") . If we wann use 👉👉 "res.send()" in "middleware" we r not able to use it in "handlePostRequest" vise-verse
}


/*👉*/  app.post("/Addvalue", handlePostRequest);


function started(){
    console.log(`listing on port ${port}`);
}

app.listen(port, started);








