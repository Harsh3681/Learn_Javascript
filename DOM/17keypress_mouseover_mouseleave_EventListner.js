


// to see the windows object in javascript use "dir"
console.dir(document);


//      ** NOTE **      for event listing" like click and other all we must have to use "querySelector"


//  "keypress"  event      // it will help us to get the whatever key we pressed on "keybord"

//  "mouseover" event       // help to generate event when we "hover on" specific button where we applied that eventlister
//  "mouseleave" event      // help to generate event when we "hover outside" specific button where we applied that eventlister

// ---------------------------------------------------------

const body = document.body;

//      "keypress"

// body.addEventListener("keypress",(e)=>{
//     console.log((e.key));
    
// })


// ---------------------------------------------------------

const btn = document.querySelector(".btn-headline")

// mouseover

btn.addEventListener("mouseover",()=>{
    console.log("mouseover event has been occur here");
})

// mouseleave

btn.addEventListener("mouseleave",()=>{
    console.log("mouseleave event has been occur here");
})




