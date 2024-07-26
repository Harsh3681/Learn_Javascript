ument.getElementById("start").onclick = function(e)  {
//     e.preventDefault;
//     if(!isRunning){
//         startTime = Date.now()-elapiedTime;
//         timmer = setInterval(update,10);
//         isRunning=true;
//     }
// }

// document.getElementById("stop").onclick = function(e){
//     e.preventDefault();
//     if(isRunning){
//         clearInterval(timmer);
//         elapiedTime= Date.now() - startTime;
//         isRunning = false;
//     }
// }

// document.getElementById("reset").onclick = function(e){
//     e.preventDefault();
//     clearInterval(timmer);
//      startTime=0;
//      elapiedTime=0;
//      isRunning =false;
//      clock[0].textContent = "00:00:00:00"
// }