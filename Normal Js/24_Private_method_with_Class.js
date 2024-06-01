
"use strict"

// decleared with "#"
// Private mthods also same as the private "variable" can call with ".this"
//  Also "Static" "Private" method are can call via "ClassName."

// syntax of the private getters/setters:
class MyClass {
    #field;
    get #myField() {
        return this.#field;
    }
    set #myField(value){
        this.#field = value;
    }
}

// -------------------------------------------------------------------

// Private instance method example

class Person1 {
    #firstName;
    #lastName;

    constructor(firstName, lastName) {
      this.#firstName = firstName;
      this.#lastName = lastName;
    }

    getFullName(format = true) {
      return format ? this.#firstLast() : this.#lastFirst();
    }
  
    #firstLast() {
      return `${this.#firstName} ${this.#lastName}`;
    }
    #lastFirst() {
      return `${this.#lastName}, ${this.#firstName}`;
    }
}
  
let person = new Person1('John', 'Doe');
console.log(person.getFullName());

// ----------------------------------------------------------------------

// ########### Private "static" method example ###########


class Person {
    #firstName;
    #lastName;

    constructor(firstName, lastName) {
      this.#firstName = Person.#validate(firstName);
      this.#lastName = Person.#validate(lastName);
    }

    getFullName(format = true) {        // it check data given as per constructor or not
      return format ? this.#firstLast() : this.#lastFirst();
    }

    static #validate(name) {            // static method
      if (typeof name === 'string') {
        let str = name.trim();
        if (str.length >= 3) {
          return str;
        }
      }
      throw 'The name must be a string with at least 3 characters';
    }
  
    #firstLast() {
      return `${this.#firstName} ${this.#lastName}`;
    }
    #lastFirst() {
      return `${this.#lastName}, ${this.#firstName}`;
    }
  }
  
let per = new Person('John', 'Doe');
console.log(per.getFullName());




