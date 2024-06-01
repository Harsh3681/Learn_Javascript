
"use strict"

// function fn(param1=default1, param2=default2,..) { }


function say1(message='Hi') {        // here we pass default value as "Hi"
    console.log(message);
}

say1(); // 'Hi'
say1('Hello') // 'Hello'

//  OR

console.log("");
function say2(message='Hi') {
    console.log(message);
}

say2(); // 'Hi'
say2(undefined); // 'Hi'
say2('Hello'); // 'Hello'

// ---------------------------------------------------------

// Arguments vs. Parameters

// "Arguments" are what you "pass into" the function.
// "Parameters" are what you "specify" in the function declaration

function add(x, y) {
    return x + y;
}
 
add(100,200);

//  In this example, the x and y are the parameters of the add() function,
// and the values passed to the add() function 100 and 200 are the arguments.

// ------------------------------------------------------------
// tricks

function createDiv(height = '100px', width = '100px', border = 'solid 1px red') {
    let div = document.createElement('div');
    div.style.height = height;
    div.style.width = width;
    div.style.border = border;
    document.body.appendChild(div);
    return div;
}
createDiv();

createDiv(undefined,undefined,'solid 5px blue');

// ------------------------------------------------------------

function put(toy, toyBox = []) {
    toyBox.push(toy);
    return toyBox;
}

console.log(put('Toy Car'));
// -> ['Toy Car']
console.log(put('Teddy Bear',[])); // <-------- same
console.log(put('Teddy Bear',[2,1])); // <-------- same

// ------------------------------------------------------------
// Date()

function date(d = today()) {
    console.log(d);
}

function today() {
    return (new Date()).toLocaleDateString("en-US");
}
today();
date();

// ------------------------------------------------------------

// The arguments object     "arguments.length"

function add(x, y = 1, z = 2) {
    console.log( arguments.length );
    return x + y + z;
}

add(10); // 1
add(10, 20); // 2
add(10, 20, 30); // 3










