
// to see the windows object in javascript use "dir"
console.dir(document);

//  Query Selector and Query SelectorAll

const navItemSingle = document.querySelector(".nav-class")
console.log(navItemSingle);       // it will return only first ele that it will get not all which has same class

const navItemAll = document.querySelectorAll(".nav-class")
console.log(navItemAll);       // it will return only first ele that it will get not all which has same class
