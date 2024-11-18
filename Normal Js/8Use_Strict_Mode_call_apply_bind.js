
// "use strict"

// if we not used "use strict" mode it will create an "window obj"

//  comment "use strict" once then run it and see 


function per(){
    console.log(this)
}

per()

// --------------------------------------------------

//  1)call 2)apply 3)bind

//  different between 1)call 2)apply 3)bind
/* 1) here 👉 "call" will call with funct, call takes an input arguments in form of simple way like "," and "," etc
/* 1) here 👉 "apply" will call with funct, "apply" same as the "call" just we to pass input element in form of "Array list"
/* 1) here 👉 "bind" will call with funct, "bind" mainly done all the operation on copy of obj/funct and it return an "funct" 👈 as output. which we can call anytime anywhere in file

➡️➡️➡️ Main diff is that, the "call" & "apply" funct will "invoke" "immediately" , where "blind" funct NOT 👈
*/
console.log('Call -------');
// call


function about(extrapara1, extrapara2){
    console.log(`my self ${this.name} and age ${this.age}`, extrapara1, extrapara2)
}

const use1 = {
    age:22,
    name : "jay",
    
    // about : function(){
    //     console.log(`my self ${this.name} and age ${this.age}`)
    // }        

    // we can declared function "outside the obj"
}

const use2 = {
    age:2,
    name : "Kiya"
}

// below when fun inside obj 

// use1.about.call(use2)       // here for "call()" method we must have to pass an "obj" 
// use1.about.call(use1)       // which contains parameter to call

// below when fun outside obj

about.call(use2) 
about.call(use1) 
about(use2);    // <--- here it was not working as file "5func" line no --> 276 at that case they pass "Obj" and there function would taken the {para1, para2} <-- parameter in curly braces means as an object but here in our case our function take parameter direct.


console.log('Apply -------');
//      apply()

// in this case we have to pass an extra parameter in form of "Array"
//  and create "Parameterized" "funct"

about.apply(use1, ["jalna", 121]) // <-- this way help us to print "extrapara1" & "extrapara2" same in below
about.apply(use2, ["Malna", 345]) 


console.log('Bind -------');
//      bind


//  it will return an "Funct" which we can used anywhere
const me = about.bind(use1, "bharat",7)
me()

// 9:6


