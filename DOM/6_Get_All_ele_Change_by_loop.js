
// to see the windows object in javascript use "dir"
console.dir(document);


// get all the ele of same class and change the text of all ele

// below both are same

// const classEle = document.getElementsByClassName("nav-class");

const classEle = document.getElementsByTagName("a");
console.log(classEle);
// -------------------------------------------------------

// for and "for of" allow
// for(let navEle of classEle){
//     navEle.style.backgroundColor = "green";
//     navEle.style.color = "black";
// }
// -------------------------------------------------------

// "for each" not allow
// classEle.forEach(function(navEle){
//     navEle.style.backgroundColor = "yellow";
//     navEle.style.color = "black";
// });

// ---------------------------------------------------------------

//   by using 1)for, 2)foreach, 3)for of ---> all are allow for querySelectorAll, for in we can change the style of all ele of same class

//  in "querySelectorAll" foreach allow in "getElementsByClassName" not allows

const queryEle = document.querySelectorAll("a");
queryEle.forEach(function(navEle){
    navEle.style.backgroundColor = "yellow";
    navEle.style.color = "green";
});