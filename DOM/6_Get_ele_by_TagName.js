
// here we get "HTMLCollection" by "getElementsByTagName" it is not "Array"



// const myAllele = document.getElementsByTagName("nav-class") // not working becaz "nav-class" is not "Tag"
const myAllele = document.getElementsByTagName("a") //  working becaz "a" anchore "Tag"

console.log(myAllele);

console.log('Type-->',typeof myAllele , "&& IsArray-->",Array.isArray(myAllele));

//  here below we convert "myAllele" <-- "HTMLCollection" to "Array" using 
// Array method "Array.from()"

// for(let i of myAllele){
//    i.style.color = "red"
// }

// for(let ind=0; ind<myAllele.length; ind++){
//     console.log('Actual ',myAllele[ind]);
//     myAllele[ind].style.color = "green"
// }

// --------------------------------------------------

const ans = Array.from(myAllele);    
console.log('Type ', Array.isArray(ans));

//  "ForEach" works only after convert "myAllele" i.e "HTMLCollection" to "Array" using Array method "Array.from()"

ans.forEach(ele => {
    ele.style.color = "blue"
});












