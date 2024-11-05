

"use strict"

class Item1 {
    static count = 0;

    // create getter for accessing "static" variable "count" 👈
    get myCountAccess(){
        return Item1.count;
    }
}
// and after by creating an "Obj" we try to call to the "static" variable "count" then we get "undefine" ❌ see below 👇
// In such case we need to use "getter" and "setter"

const myItem = new Item1();
console.log('New Error ', myItem.count);  // "undefine" ❌ 

console.log('My Count by getter() ',myItem.myCountAccess);  // here is getter "myCountAccess" 

console.log('Static count ',Item1.count);
// ----------------------------------------------

class Item2 {
    static count = 1;
    static getCount() {
        return Item2.count;
    }
}

console.log('Static count ',Item2.getCount()); // 0
// or
console.log('Static count ',Item2.count); // 0
// ----------------------------------------------

// example increases the "count" "static" property in the class "constructor":

class Item {

    constructor(name, quantity) {
        this.name = name;
        this.quantity = quantity;
        this.constructor.count++;     // here we increse count before declered it.
    }
    static count = 0;
    static getCount() {
        return Item.count;
    }
}
  
let pen = new Item("Pen", 5);
let notebook = new Item("notebook", 10);

console.log("Return Ans Counter -> ", Item.getCount()); // 2
// ----------------------------------------------










