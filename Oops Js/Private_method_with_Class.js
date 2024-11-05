
"use strict"

// decleared with "#" --> 👉 "order to declare a "private class" field, we need to use a #️⃣"#" prefix."
// Private mthods also same as the private "variable" can call with ".this"
//  Also "Static" "Private" method are can call via "ClassName."

// syntax of the private getters/setters:
console.log('Private Variable And getter setter');

class MyClass {

    #field;   // field 👉 "Private" variable
    
    Count = 0; // 👉 "Public" variable

    get #myField() {   // private method
        return this.#field;
    }
    set #myField(value){  // private method
        this.#field = value;
    }
}

// -------------------------------------------------------------------

// Private instance method example
console.log('Private Methods');

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
console.log('try');

console.log(person.getFullName(true));

// ----------------------------------------------------------------------

// ########### Private "static" method example ###########
console.log('Private static function ');

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
  
    #firstLast() {  // private funt
      return `${this.#firstName} ${this.#lastName}`;
    }
    #lastFirst() {  // private funt
      return `${this.#lastName}, ${this.#firstName}`;
    }
  }
  
let per = new Person('John', 'Doe');
console.log(per.getFullName());




