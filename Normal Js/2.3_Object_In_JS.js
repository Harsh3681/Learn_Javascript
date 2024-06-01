
"use strict"
// ------------------------------------------------------------------
console.log('###### According me whatever we place inside "Curly" braces is and "Object" ######');

// 1st way to create an Object

let obj1 = new Object({          // by this we can create obj by "constructor object"
    kam: "nothing",
});
console.log("1st way to cerate obj ",obj1.kam);
console.log('obj1 is---> ',typeof obj1);
console.log('');

// ------------------------------------------------------------------
// 2nd way to create an Object
var decoration = {
    color: 'red'
};

var circle = Object.create(decoration); // using we can add
circle.radius = 10;
console.log('2nd way--> ',circle);


// ------------------------------------------------------------------
// 3rd way to create an Object

let obj2 = new Array({ kam: "nothing"});     // by this, we can create an "array" by "constructor object"
console.log("2nd way to cerate obj ",obj2);
console.log('obj2 is---> ',typeof obj2);
console.log('');

// ------------------------------------------------------------------

// 4th way to create an Object

let obj3 = {
    work:"nothing",
    name : "Pankaj"
}
delete obj3.work;   // we can delete object in this way

console.log("3rd way to cerate obj",obj3.name);
console.log('obj3 is---> ',typeof obj3);
console.log('');

// ------------------------------------------------------------------

// 5th way to create an Object

function fu(id,sal){        // here we create an "function"
    this.id=id;
    this.sal=sal;
}

let obj4 = new fu(12,2900000)       // here we call that "function" as a "constructor"
document.write(`your id = ${obj4.id}  and sal ${obj4.sal}`)

// ------------------------------------------------------------------------

const per = {
    name:"kamlesh",
    age: 21,
    work:["wk1","wk2"]
}

console.log('Hi '+per.name+' your age is '+per.age+' and your work is '+per.work[0]+' and '+per.work[1]+'');

console.log(per.work[0]);

per["gender"] = "male";

console.log(per.gender)

for(let i in per){
    console.log("Me Person ",[i]," ",i," " ,`${[i]}`,"",per[i],"", `${per[i]}`);            //   per[i]
}

console.log('');
for(let i in per){
    console.log(per["name"]);            //   per[i]
}
console.log('');


for(let i in per){
    // document.write(`${i} : ${per[i]}`);            //   per[i]
    console.log(`${i} : ${per[i]}`);  
}

//      "print an keys, values, entries"

console.log(Object.keys(per));      // for "per" object 
console.log(Object.values(per));
console.log(Object.entries(per));

// ------------------------------------------------------------------------

let VarObject = per;    // here we store the "per" obj in "VarObject" variable.

VarObject.age = 5;
console.log('Per age',per.age);     // both have same value becz In the memory, both variables reference the same "object",
console.log('VarObject age',VarObject.age); // both have same value


// -------------------------------------------------------

let name = 'machine name';
let machine1 = {
    [name]: 'server',
    'machine hours': 10000
};

console.log(machine1[name]); // server
console.log(machine1['machine hours']); // 10000

// -------------------------------------------------------

let prefix = 'machine';
let machine2 = {
    [prefix + ' name']: 'server',
    [prefix + ' hours']: 10000
};

console.log(machine2['machine name']); // server
console.log(machine2['machine hours']); // 10000

// -------------------------------------------------------

let server1 = {
    name: 'Server',
    restart() {     // also possible
        console.log("The" + this.name + " is restarting...");
    }
};
server1.restart();

// -------------------------------------------------------

let server2 = {
    name: 'Server',
    restart() {
        console.log("The " + this.name + " is restarting...");
    },
    'starting up'() {       // becz the funct name contain "Space"
        console.log("The " +  this.name + " is starting up!");
    }
};

server2['starting up']();      // hence we need to call it using "bracket"






