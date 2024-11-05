
const express = require("express")
var bodyParser = require('body-parser')  // Learn about it in 👉👉 "NOTES.txt"
const app = express();
const port = 3000

app.use(bodyParser.json())      // "bodyParser" is middleware here // Why us it learn about it in 👉👉 "NOTES.txt"

function TotalSum(value){
    var ans = 0;
    for(var i=1; i<=value; i++){
        ans+=i;
    }
    return ans;
}

// ####### POST 👈👈👈👈👈
function handlePostRequest(req, res){
    
    var val = req.body.value;       //  👈👈👈👈👈👈👈👈👈👈 "body" becz we mention value in Postman for post req. 👉 Learn about it in "NOTES.txt"
  
    var Calculation = TotalSum(val);
    var ans = "Total Sum "+Calculation;
    res.send(ans);                      //  👈👈 we can use "one of them". Means 👉👉 res.send() we also define in "middleware" 👉👉 res.send("Error") . If we wann use 👉👉 "res.send()" in "middleware" we r not able to use it in "handlePostRequest" vise-verse
}

/*👉*/ app.post("/Addvalue", handlePostRequest);


function started(){
    console.log(`listing on port ${port}`);
}

app.listen(port, started);








