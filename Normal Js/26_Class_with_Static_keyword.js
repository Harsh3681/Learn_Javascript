

"use strict"

class Item1 {
    static count = 0;
}

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

console.log(Item.getCount()); // 2
// ----------------------------------------------










