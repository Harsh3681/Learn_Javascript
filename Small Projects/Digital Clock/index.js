
"use strict"


let timmer =null
let startTime=0;
let elapiedTime=0;
let isRunning =false;

const stop = document.getElementById("stop");
const clock = document.querySelector(".clock").getElementsByTagName("h1");
console.log('cl ',clock);

function start(){
    if(!isRunning){
        startTime = Date.now()-elapiedTime;
        timmer = setInterval(update,10);
        isRunning=true;
    }
}

function stop(){
    if(isRunning){
        clearInterval(timmer);
        elapiedTime= Date,now() - startTime;
        isRunning = false;
    }
}

function update(){
    const currTime = Date.now();  // return current time in milisec
    // const currTime =  new Date().getTime();  // Both above below same
    elapiedTime = currTime - startTime;

    let hr = Math.floor(elapiedTime/(1000*60*60));
    let min = Math.floor(elapiedTime/(1000*60)%60);
    let sec = Math.floor(elapiedTime/1000 % 60);
    let milisec = Math.floor(elapiedTime % 1000 / 10);

    hr = String(hr).padStart(2, "0");
    min = String(min).padStart(2, "0");
    sec = String(sec).padStart(2, "0");
    milisec = String(milisec).padStart(2, "0");
    
    clock[0].textContent = `${hr}:${min}:${sec}:${milisec}`;
    console.log(0,":",min,":",sec,":",milisec);
}

document.getElementById("start").onclick = function(e)  {
    e.preventDefault;
    if(!isRunning){
        startTime = Date.now()-elapiedTime;
        timmer = setInterval(update,10);
        isRunning=true;
    }
}

document.getElementById("stop").onclick = function(e){
    e.preventDefault();
    if(isRunning){
        clearInterval(timmer);
        elapiedTime= Date.now() - startTime;
        isRunning = false;
    }
}

document.getElementById("reset").onclick = function(e){
    e.preventDefault();
    clearInterval(timmer);
     startTime=0;
     elapiedTime=0;
     isRunning =false;
     clock[0].textContent = "00:00:00:00"
}












