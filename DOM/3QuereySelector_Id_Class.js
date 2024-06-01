
// to see the windows object in javascript use "dir"
console.dir(document);


//  query selector      need to use the "." and "#" appropriate according the "class" and "Id"
// hence Query selector Prefered Most for selection via "class" & "ID"

const heading = document.querySelector("#main-heading");
console.log(heading);

const headline1 = document.querySelector(".headline");
console.log(headline1);

const headline2 = document.getElementsByClassName("headline");
console.log(headline2);

const headline3 = document.getElementsByClassName(".headline");
console.log(headline3);

console.log(document.getElementById("main-heading"));