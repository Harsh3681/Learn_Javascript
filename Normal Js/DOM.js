
// DOM  = stands for Document Object Model

document.querySelector('h1').style.color = 'red'; // Selects the first h1 tag and changes the color to red // here we are using "querySelector" method to select the "h1" tag and then we are using "style" method to change the color of the "h1" tag which is present in the "html" file .

document.querySelector('h1').innerHTML = 'This is for my DOM (BOM)'; // Selects the first h1 tag and changes the innerHTML to the given text // here we are using "querySelector" method to select the "h1" tag and then we are using "innerHTML" method to change the text of the "h1" tag which is present in the "html" file .

var me = document.firstElementChild.lastElementChild.firstElementChild; // here we are using "document" method to select the "html" tag and then we are using "firstElementChild" method to select the "first" tag which is present in the "html" tag and then we are using "lastElementChild" method to select the "last" tag which is present in the "first" tag and then we are using "firstElementChild" method to select the "first" tag which is present in the "last" tag and then we are storing the "first" tag in the "me" variable.
// flow of the above code is as follow: // html -> first -> last -> first -> me .

me.innerHTML = "kay akay"; // change the text of the "me" variable which is present in the "html" file 

// ----------------------------------------------------------------------

document.querySelector('input').click(); // here we are using "querySelector" method to select the "input" tag and then we are using "click" method to click the "input" tag which is present in the "html" file .
// #############  try to run it on the chrome console

// ----------------------------------------------------------------------

var ii =document.getElementById("myid");
ii.innerHTML = "Happy Thought";

// #############  try to run it on the chrome console

// ----------------------------------------------------------------------

document.querySelector(); // querySelector() method is used to select the first element that matches the specified selector(s) in the document. // in brackets we have to pass the selector which we want to select. // ex : document.querySelector('h1') // here we are selecting the first "h1" tag which is present in the "html" file.

document.querySelectorAll(); // querySelectorAll() method is used to select all the elements that matches the specified selector(s) in the document. // in brackets we have to pass the selector which we want to select. // ex : document.querySelectorAll('h1') // here we are selecting all the "h1" tag which is present in the "html" file.




document.querySelector('h1').style.color = 'pink'; // Selects the first h1 tag and changes the color to red // here we are using "querySelector" method to select the "h1" tag and then we are using "style" method to change the color of the "h1" tag which is present in the "html" file .


document.querySelector("ul", "li").style.fontSize = "60px"; // here we are using "querySelector" method to select the "ul" tag and then we are using "style" method to change the font size of the "ul" tag which is present in the "html" file .

document.querySelector("button").style.backgroundColor = "yellow"; // here we are using "querySelector" method to select the "btn" class and then we are using "style" method to change the background color of the "btn" class which is present in the "html" file .


document.querySelector("input").attributes; // here we are using "querySelector" method to select the "id" and then we are using "attributes" method to select the attributes of the "id" which is present in the "html" file .

// console.log("d");

