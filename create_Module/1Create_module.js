

var obj = require("./2my_module")        // <---- we import the module here , here we used "require" in state of import and create object "obj"


// above we importing our created module

function add(a,b){
    
    return a+b
}

//  above we just creating an function


result1 = obj.add(2,4)
result2 = obj.sub(9,6)

obj.greet()
console.log("Output - " + result1)
console.log("Output - " + result2)
console.log(obj.name)
 
// console.log(obj.Clg);
// console.log(obj.name);
// console.log(obj.contact);


