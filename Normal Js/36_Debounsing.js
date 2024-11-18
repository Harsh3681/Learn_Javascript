
"use strict"

let inputField = document.getElementById("myInput");
var co = 0;

const getData = (e) => {
    console.log("fetching data.. ", e.target.value + " "+ co);   
}

const debouncingFunct = (funct, delay) =>{
    return () =>{
        setTimeout(() => {
            funct();
            // co++;
        }, delay);
    }
}
debouncingFunct(getData, 5000);
inputField.addEventListener("input", getData);











