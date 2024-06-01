

//  video no 2 of harshit javascript time 4:52 to 5:16

// 1) 1st getting "Root" Node
const amRoot = document.getRootNode();
console.log("Root ",amRoot)

// ----------------------------------------------------

// const htmlElementNode = amRoot.childNodes; // show us childs of root node and becz it give us array we will access the 1st position child from it.
const htmlElementNode = amRoot.childNodes[1]; 
// console.log('Root Childs ',rootChildNode);  // at 1st position we will get child of "html"

console.log('Root Childs ',htmlElementNode.childNodes); // here we get 3 childs of "html" tag  i.e Root Childs---> [head, text, body] [0th, 1st, 2nd positions]

// ----------------------------------------------------

const headElementNode = htmlElementNode.childNodes[0]; // i.e "head"
const textElementNode = htmlElementNode.childNodes[1]; // i.e "text"
const bodyElementNode = htmlElementNode.childNodes[2]; // i.e "body"

console.log(headElementNode);
console.log(textElementNode);
console.log(bodyElementNode);

// ----------------------------------------------------

// Parent Node

console.log('Parent of head ', headElementNode.parentNode);  // html is parent of all 3
console.log('Parent of text', textElementNode.parentNode);
console.log('Parent of body', bodyElementNode.parentNode);

// ----------------------------------------------------

// NextSibling and PreviousSibling  ----> [head, text, body] 

console.log('Head nextSibling', headElementNode.nextSibling);   // next is "text"
console.log('Head previousSibling', headElementNode.previousSibling); // null becz nothing present before it
// ----------
console.log('Head nextSibling', headElementNode.nextSibling.nextSibling);   // also possible 
// ----------

console.log('text nextSibling', textElementNode.nextSibling);   // next is "body"
console.log('text previousSibling', textElementNode.previousSibling); // prev head
// ----------
console.log('text previous "head" previous "null" ', textElementNode.previousSibling.previousSibling); // also possible
// ----------

console.log('body nextSibling', bodyElementNode.nextSibling);   // null
console.log('body previousSibling', bodyElementNode.previousSibling); // prev "text"

// ----------------------------------------------------------------------------

// Wee can also directly select Elements
console.log("Am body ",document.body);
console.log("Am head ",document.head);

// ----------------------------------------------------------------------------

const headuu = document.querySelector("head");
const title = headuu.querySelector("title");

console.log("Am headu child ", title);
console.log("Am headu child ", headuu.querySelector("script"));
console.log("Am headu child ", title.childNodes);  // childNodes is title text itself

// ----------------------------------------------------------------------------

//  To get directly the "Element" wali sibling without text/space wali sibling then use

console.log('Head nextElementSibling', headElementNode.nextElementSibling); // it skip the "text" sibling becz it was not "Element"

// ----------------------------------------------------------------------------

 
// ############# IMP #############          "children"
// to get actual "tags" and all we use below.

const container = document.querySelector(".container");

console.log('We all children of container ',container.childNodes);

// ###### children ######
console.log('We just "Particular" children of container ',container.children); // here we get without "text" ele

// And becz it return the "Array" we can access the ele by "Indexing"
const iam1stPositionChildOfContainder = container.children[1];
iam1stPositionChildOfContainder.style.color = "green"
iam1stPositionChildOfContainder.style.fontWeight= "800"
iam1stPositionChildOfContainder.style.fontSize= "3.1rem"











// ----------------------------------------------------------------------------

// Task of changing background and text color of "h1"

const parentOfh1 = document.querySelector("h1").parentNode.style.backgroundColor="pink";
document.querySelector("h1").style.color = "blue";
console.log('par ',parentOfh1);

// ----------------------------------------------------------------------------















