
// "use strict"

// In JavaScript, you can use the this keyword in the global and function contexts. Moreover, the behavior of the 
//  "this" keyword changes between "strict" and "non-strict" modes.
// ------------

/* 
1)  "this" keyword represents the current instance of the class 
 and it is only relevant within the class.

2) the "this" references the object
Means "this" references the object that is currently calling the function.


*/

// this with arraow fuction

let getThis = () => this;
console.log(getThis() === window); // true


// --------------------------------------------------

let counter = {
    count: 0,
    next: function () {
      return ++this.count;      // ++ working
    //   return this.count++;      // Not working ++
    },
};

console.log('Yes ',counter.next());

// --------------------------------------------------

// "Global context"
// In the global context, the "this" references the "global object",

// i.e "window object" on the "web browser" or 
// "global object" on "Node.js".

console.log(this === window); // true

this.color= 'Red';
console.log(window.color); // 'Red'

// --------------------------------------------------

function show() {
    "use strict"; // if comment it o/t "False"
    console.log(this === undefined); // true

    function display() {
        console.log(this === undefined); // true
    }
    display();
}

show();


