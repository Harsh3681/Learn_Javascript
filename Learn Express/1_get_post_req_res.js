
const express = require("express")
const app = express();
const port = 1000

function TotalSum(value){
    var ans = 0;
    for(var i=1; i<=value; i++){
        ans+=i;
    }
    return ans;
}


// ####### Get
function handleGetRequest(req,res){     // 👈  GET
    
    // this below is 👉"query parameter"👈  👇 means we need to mention the url like --> 👉 http://localhost:4000/sum?value1=200&value2=300   👉 then we will get it in our below req parameter.
    
    var Myvalue =req.query.value
    console.log(req.query.value1);      // we pass value1 and value2 in postman hence write there.
    console.log(req.query.value2);
    var Calculation = TotalSum(Myvalue);
    
    // var Calculation = TotalSum(60);         // <--👈👈 Without query parameter
    
    // var ans = "Total Sum " + Calculation;   // <--👈👈 this is for "Postman" <-- this output shows in "Postman"

    var ans = {
        sum : Calculation,
    }
    
    res.send(ans);
}

// ####### POST
function handlePostRequest(req, res){       // 👈  POST
    var val = req.headers.value; 
 
    var Calculation = TotalSum(val);
    var ans = "Total Sum "+Calculation;
    res.send(ans);
}


/*👉*/ app.get("/getsum", handleGetRequest);
/*👉*/ app.get("/:getsum", handleGetRequest);    // it's an wild card means 👉 anyone put http://localhost:4000/asjdadshjkabb --> anything after 4000/ then it's re-directed to 👉 /:getsum and handle by 👉 handleFirstReq() function
/*👉*/ app.post("/Addvalue", handlePostRequest);

function started(){
    console.log(`listing on port ${port}`);
}

app.listen(port, started);








