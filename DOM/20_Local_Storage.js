
// localStorage.clear()
// ------------------------------
localStorage.setItem("one",1)
localStorage.setItem("two",2)
localStorage.setItem("three",3)
localStorage.setItem("three",33)    // we can override the value

// ------------------------------

localStorage.four = 4;
localStorage.five = 5;

// ------------------------------

console.log(localStorage.removeItem("two"));

// ------------------------------

delete localStorage.four

// ------------------------------

console.log(localStorage.getItem("one"));
console.log(localStorage.getItem("five"));

// ------------------------------

console.log('Get Key At Index', localStorage.key(1));

// ------------------------------

console.log('length Of total Storage ',localStorage.length);

// ------------------------------

// localStorage.clear() // it clear the total storage













