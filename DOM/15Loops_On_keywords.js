// to see the windows object in javascript use "dir"
console.dir(document, );


//      ** NOTE **      for event listing" like click and other all we must have to use "querySelector"

//        " Loops on keywords "

//          getting the text writeen on button
const btn = document.querySelector(".btn")          // single section and operation

const Allbtn = document.querySelectorAll(".btn")    // "All" just for the "loops"

btn.addEventListener("click",function(){
    console.log(btn.textContent);
})



//         "for" loop

// for(let i=0; i<Allbtn.length;i++){
//     Allbtn[i].addEventListener("click",function(){
//         console.log(Allbtn[i].textContent);
//     });
// }

//         "for of" loop

// for(let btn of Allbtn){
//     btn.addEventListener("click",function(){
//         console.log(btn.textContent);
//     });
// }


//          "for Each" loop

// Allbtn.forEach(function(btn){
//     btn.addEventListener("click",(e)=>{
//         console.log(btn.textContent);
//         e.preventDefault();         // only because of prevent default we can see all button click "it will stop the page from reloading"
//     });
// })
