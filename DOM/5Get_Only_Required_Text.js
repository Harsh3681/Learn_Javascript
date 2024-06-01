
// to see the windows object in javascript use "dir"
console.dir(document);


//          ######## Inner Text to get only "required text" ########

// lets assume that "Hello" text in "main-heading" is "none" still i get overall string along with "Hello" which is not present there on page by using "textContent" see below
//  See Anss on the "Chrome" Consol

let headingWithHello = document.getElementById("main-heading")
console.log(headingWithHello.textContent);

let headingWithoutHello = document.getElementById("main-heading")
console.log(headingWithoutHello.innerText); // by using "innerText" we get only require text


const selinbetween = document.querySelector("div.headline h2");
//  take precausion while using the property of ele see below
console.log('Hay --> ',selinbetween);
