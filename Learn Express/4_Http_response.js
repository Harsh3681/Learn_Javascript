
const express = require("express")
var bodyParser = require('body-parser')  // Learn about it in 👉👉 "NOTES.txt"
const app = express();
const port = 4000

app.use(bodyParser.json())      // Why us it learn about it in 👉👉 "NOTES.txt"

function TotalSum(value){
    var Totalsum = 0;
    for(var i=1; i<=value; i++){
        Totalsum+=i;
    }
    return Totalsum;
}

function TotalMul(value){
    var Totalmul = 1;
    for(var i=1; i<=value; i++){
        Totalmul*=i;
    }
    return Totalmul
}

// ####### POST 👈👈👈👈👈👈👈
function handlePostRequest(req, res){
    var val = req.body.value;       // 👉👉 "body" becz we mention value in Postman for post req. 👉 Learn about it in "NOTES.txt"
  
    var CalculationSum = TotalSum(val);
    var CalculationMul = TotalMul(val);

    var answerObject = {        // res object send to backend
        sum : CalculationSum,
        mul : CalculationMul
    }
    
    res.status(200).send(answerObject); //  👈👈 here we pass "status(200)" means success status code. and 👉👉 send "resp obj to backend"
    // status code in "NOTES"
}

function getWebPage(req, res){

/*👉*/ // res.send(`<head>
    //             <meta charset="UTF-8">
    //             <meta name="viewport" content="width=device-width, initial-scale=1.0">
    //             <title>Document</title>
    //         </head>
    //         <body>
    //             <h1>Hi Nice to meet u !!!!!</h1>
    //         </body>`
    //     )

    // ------------------ 👉👉Both above below same👈👈

  /*👉*/  res.sendFile(__dirname + "/index.html")  //👉👉 here "__dirname" is "current directory."

}

/*👉*/ app.post("/Addvalue", handlePostRequest);

/*👉*/ app.get("/", getWebPage);  // <------- http://localhost:4000/ <---- run on web page







function started(){
    console.log(`listing on port ${port}`);
}

app.listen(port, started);








