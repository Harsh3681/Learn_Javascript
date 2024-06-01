
// to see the windows object in javascript use "dir"
console.dir(document);


//          ######## Change The Text On Web Page ########


let headingChange = document.getElementById("main-heading")

// View Text

console.log(headingChange.textContent);     //here we also get "Hidden" text
console.log(headingChange.innerText);     //here we get actual text on page

// Change Text

headingChange.textContent = "Change Text As DO-TO List"
console.log(headingChange.textContent); 

// View Style

console.log(headingChange.style); 

// Change Color

headingChange.style.color = "red";
headingChange.style.backgroundColor = "yellow";
headingChange.style.border = "5px solid green";
// headingChange.style.transform = "rotateY(60deg)";
// headingChange.style.transformStyle = "preserve-3d";













