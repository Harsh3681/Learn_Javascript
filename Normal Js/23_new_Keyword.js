
// new create first an 
    // 1) "Empty Obj" {} <<---
    // 2) "Return this Obj"

    //  We are not able to create ab "Obj" without "new" keyword.

function myFunct(Name, age){
    this.Name = Name;
    this.age = age;
}

const info = new myFunct("Harsh",24);
console.log('Info --> ',info);


