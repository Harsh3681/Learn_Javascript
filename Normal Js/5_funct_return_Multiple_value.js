
"use strict"

function getNames() {
    // get names from the database or API
    let firstName = 'John',
        lastName = 'Doe';

    // return as an array
    return [firstName, lastName];       // this way we can do it
}

let names = getNames();  // store it in variable
console.log('Ans ',typeof names);   // it return obj

console.log('fname ', names[0]);
console.log('Lname ', names[1]);

// OR
const [firstName, lastName] = getNames();   // store it in Array variable
console.log('fname ', firstName);
console.log('Lname ', lastName);


// OR ------------------------------------------------------------

console.log('');

// multiple values from an function using an "object"

function getNames2() {
    // get names from the database or API
    let firstName = 'John',
        lastName  = 'Doe';
  
    return { firstName, lastName };
}
  
let nam = getNames2();

let fNam = nam.firstName,
    LNam  = nam.lastName;

console.log('fname ', fNam);
console.log('Lname ', LNam);   

// OR
let { firstN, lastN } = getNames2();
console.log('fname ', firstN);
console.log('Lname ', lastN);   







