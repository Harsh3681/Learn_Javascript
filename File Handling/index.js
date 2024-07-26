
const fs = require('fs');

// ########### TO Run this code. go to "File Handling" folder path in terminal 👇
// E:\8 Learning JavaSript\Normal Js\File Handling> 

// node index.js    <---------- to run 

// in dummy.js paste below line👇
// Hello       there , where              are    u         ?
// then run this code and again go to same file. 

const ans = fs.readFileSync("./dummy.txt", 'utf-8');

function clean(data){
    const output = data.split(" ");
    var arr = new Array();
    for(var i=0; i<output.length; i++){
        if(output[i].length==0){
            // do nothing
        }else{
            arr.push(output[i]);
        }
    }
    arr = arr.join(" ");
    return arr;
}
fs.writeFileSync('./dummy.txt', clean(ans));
// console.log(clean(ans));








