


// console.log("Hello World")

// ########## optional chaining ##########

    
//  optional chaining is used to check if the property is present or not in the object . using operator (?.)
//  if the 👉 property is present then it will return the value of that property else 👉 it will return "undefined"

const hey = {
    name: "harsh",
    // add : { "newStreet" : "272" }
}

console.log(hey ?.name);  // it will return the value of name property
console.log(hey ?.add ?.newStreet);  // it will return the value of newStreet property

// because we have been comment there for "add" key they above line not showing an "Error" instead of that it show "undefined"


// console.log(hey.add.newStreet);  // it generate an error because add property is not present in hey object to overcome this we use optional chaining like above "?" symbol like above

alert("sop");
let hiu = prompt("enter")
console.log(hiu)








