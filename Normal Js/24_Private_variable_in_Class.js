
"use strict"

/* Mainly when u have been decleared the class and inside it there is some 
    fields are "static", "public", and some we want to kept as "Private"
    so
    using "#" <--- symbol we decleared variable as "Private"

    while we extends the parent class at that time it useful a lot.

*/

class Circle {
    #radius       // private variable 
    constructor(value) {
      this.#radius = value;     // assigned value
    }
    get area() {
      return Math.PI * Math.pow(this.#radius, 2);   // do operation
    }
}

let circle = new Circle(10);
console.log(circle.area); 

// Private fields are "only accessible inside" the class where they’re defined. 
// they’re "not" accessible from the "subclasses".

class Cylinder extends Circle {
    #height;
    constructor(radius, height) {
      super(radius);
      this.#height = height;
    //   this.#radius = radius;   // cannot access the #radius of the Circle class here
      
    }
}

const area = new Cylinder(3,2);
console.log('value ',area.radius);
console.log('value ',area.height);

// ----------------------------------------------------
// Solution use getter and setter


class myCircle{
    #radius=0;
    constructor(radius){
        this.#radius = radius;      // here we calling setter
    }

    get radius(){
        return this.#radius;
    }

    set radius(value){          // setter
        if (typeof value === 'number' && value > 0) {
            this.#radius = value;
        } else {
            throw 'The radius must be a positive number';
        }
    }

    get area() {
        return Math.PI * Math.pow(this.#radius, 2);
    }
}

const findA = new myCircle(88);
console.log('radius ',findA.area);      // this way we call getter X () not funct
console.log('Area ',findA.radius);

// ------------------------------------------------------------------------------

// ########### "Static" with Private variable ###########

class myCircle2 {
    #radius = 0;            // private
    static #count = 0;      // static 

    constructor(radius) {
      this.radius = radius; // calling setter

      myCircle2.#count++;       // call with Class name

    //   this.#count++;      // for static this. not working

    }
    set radius(value) {
        if (typeof value === 'number' && value > 0) {
            this.#radius = value;
        } else {
            throw 'The radius must be a positive number';
        }
    }
    
    get radius() {
        return this.#radius;    // this. becz only private
    }
    
    get area() {
      return Math.PI * Math.pow(this.radius, 2);
    }

    static hasRadius(circle) {
      return #radius in circle;
    }

    static getCount() {
      return myCircle2.#count;
    }
}
  
let circles = [new myCircle2(10), new myCircle2(20), new myCircle2(30)]; // assigned radius 3 time

let val = new myCircle2(56); // hence "hasRadius" is true
console.log("myCircle2 Contain radius or not ",myCircle2.hasRadius(val));

console.log('myCircle2 Area ',val.area);
console.log("myCircle2 radius ",val.radius);
console.log("myCircle2 Count ",myCircle2.getCount()); // hence o/t 4 becz here we create obj of "myCircle2" class 4 time 1st with "val" & remaining in Array []
  















