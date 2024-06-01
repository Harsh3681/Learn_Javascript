
// https://developer.mozilla.org/en-US/docs/Web/Events
// https://www.w3schools.com/jsref/dom_obj_event.asp


//      ** NOTE **      for event listing" like click and other all we must have to use "querySelector"

//  click

const signup = document.querySelector(".btn-headline")
let i=0
// function clickme(){
//     i++;
//     console.log('You click me',i);
// }
signup.addEventListener("click",() => {
    i++;
    console.log('You click me',i);
});


// we can remove the event listner also

signup.removeEventListener("click",() => {
    i++;
    console.log('You click me',i);
});










