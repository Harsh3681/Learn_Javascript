
//  👉👉👉👉👉👉 Here is different ways to write out "callback funct"

const express = require("express");
var bodyParser = require('body-parser');

var port = 5000;

const app = express();
app.use(bodyParser.json()) 

function TotalSum(n){
    var ans = 0;
    for(var i=1; i<=n; i++){
        ans+=i;
    }
    return ans;
}

//  1st way -------------------------------------

// function callbackHandling(req, res){
//     var Myvalue = req.body.value;
//     const Calculation = TotalSum(Myvalue);
//     var ans = "Total Sum "+Calculation;
//     res.send(ans);
// }
// app.post("/Addvalue", callbackHandling);


//  2nd way -------------------------------------

// app.post("/Addvalue", function callbackHandling(req, res){
//     var Myvalue = req.body.value;
//     const Calculation = TotalSum(Myvalue);
//     var ans = "Total Sum "+Calculation;
//     res.send(ans);
// })


//  3rd way -------------------------------------

app.post("/Addvalue", (req, res)=>{
    var Myvalue = req.body.value;
    const Calculation = TotalSum(Myvalue);
    var ans = "Total Sum "+Calculation;
    res.send(ans);
})

// -------------------------------------------------
function started(){
    console.log(`listing on port ${port}`);
}

app.listen(port, started);