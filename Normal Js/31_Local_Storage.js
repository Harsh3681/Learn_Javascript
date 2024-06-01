

// ------------------------------
localStorage.setItem("one",1)
localStorage.setItem("two",2)
localStorage.setItem("three",3)
localStorage.setItem("three",33)    // we can override the value

// ------------------------------

localStorage.four = 4;
localStorage.five = 5;

// ------------------------------
// remove key value pair
console.log(localStorage.removeItem("null"));

// ------------------------------

delete localStorage.four

// ------------------------------

console.log(localStorage.getItem("one"));
console.log(localStorage.getItem("five"));

// ------------------------------

console.log('Get Key At Index', localStorage.key(0));   // key at index 0th
console.log('Get Key At Index', localStorage.key(0));   // key at index 1st

// ------------------------------

console.log('length Of total Storage ',localStorage.length);

// ------------------------------

// localStorage.clear() // it clear the total storage

// ------------------------------
console.log('');
for(let i=0; i<localStorage.length; i++){
    console.log(`key ${localStorage.key(i)} & value ${localStorage.getItem(localStorage.key(i))}`);
}











