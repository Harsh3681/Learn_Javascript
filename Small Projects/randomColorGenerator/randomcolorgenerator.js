
const body = document.body;

const btn = document.querySelector("button")
console.log(btn);

const clrText = document.querySelector('.current-color')

function randomColor(){
    console.log('ran ',(Math.random()));
    
    let red = Math.floor(Math.random()*256);
    let green = Math.floor(Math.random()*256);
    let blue = Math.floor(Math.random()*256);
    const val = `rgb(${red},${green},${blue})`
    return val
}

btn.addEventListener("click",()=>{      // here by click on button we can change the background clr
    const clr = clrText.textContent = randomColor();
    body.style.backgroundColor= clr;
})

//  We Can change the color Automatic followings are the ways to do it

// -----------------------------------------------------
//  1st way to do it

const justId = setInterval(() => {
    const clr = clrText.textContent = randomColor();
    body.style.backgroundColor= clr;
}, 1000);

// -----------------------------------------------------
//  2nd way to do it

// function changeBodyClr(){       // this funct we pass to "setInterval" which will do change the body clr "automatic" within 1sec
//     const clr = clrText.textContent = randomColor();
//     body.style.backgroundColor= clr;
// }

// setInterval(changeBodyClr,1000);        // here we just set the interval to change the background color

// -----------------------------------------------------

//          to stop the automatic change color 

clearInterval(justId);      // uncomment it to start automatic

//  In above code we can the body color automatic as well by "button"
