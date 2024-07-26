
"use strict"

// greeting to user

var userName = prompt("User Nice name !");
document.querySelector("#userName").textContent = `Hello ${userName}`;


var val = document.querySelector(".mytext");

var num = 0;
document.getElementById("increse").onclick = function(e){
    e.preventDefault;

    num+=1;
    val.textContent = num;
}
console.log('+ ',num);

document.getElementById("reset").onclick = function(e){
    e.preventDefault;
  
    val.textContent = 0;
}
console.log('null ',num);

document.getElementById("decrese").onclick = function(e){
   e.preventDefault;
    num-=1;
    val.textContent = num;
}
console.log('- ',num);


