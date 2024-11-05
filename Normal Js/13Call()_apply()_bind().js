
// "use strict"

// difference between the apply() and call() is that 
// you need to -->"pass the arguments" to the apply() method as an--> "array-like object", 
// whereas you -->"pass the arguments" to the call() function--> "individually".

// -------------------------------

// difference between the bind() and call() methods.
// bind() method creates a new function that you can 👉"execute later" while call() method 👉"executes" the function "immediately".

// -------------------------------

// bind(), call(), and apply() methods are also known as "borrowing functions."



//   By using "Call()" function we can call any "function"

function myfun(hobby, clr){
    console.log('Call by Call() Function');
    console.log(  "your hobby ",hobby," and fav color ",clr );
    console.log(this.id, this.name,  "your hobby "+hobby+" and fav color "+ clr );
}

myfun.call(1,"blue","Pink")    // call myfun()

const user1 = {
    id :3,
    name:"Harsh",
    about : function(){ // use can give any name instead of "about"
        console.log(`person id ${this.id} name ${this.name}`)
    }
}

const user2 = {
    id :2,
    name:"Kiran da",
}

//      call()

console.log('Call() function');

// myfun.call(user2);
user1.about.call();         // not work becz the call() always need at least one parameter inside it.
console.log('');

user1.about.call(user2);    // it's work
console.log('');

user1.about.call(user1);    // it's work
console.log('');

myfun.call(user1,"cricket", "black");

// --------------------------------------------------------------------
// apply() can use with "array-like object" or an "array object".

//      apply()             it similar as "call()" instead of passing "parameter" as single single we pass it in "Array"

console.log('');
console.log('apply() function');

myfun.apply(user1,["cricket", "black"]);    // i.e only diff bewt call() && apply()



// Another Example ------------------------------------------ apply()
console.log('');
console.log('apply() another ex');

const person = {
    firstName: 'John',
    lastName: 'Doe'
}

console.log('New Obj ---> ',per1.name);


function greet(greeting, message) {
    return `${greeting} ${this.firstName}. ${message}`;
}
let result = greet.apply(person, ['Hello', 'How are you?']);
console.log(result);

// Another Example ------------------------------------------ apply()

console.log('');
console.log('apply() another ex show Array Like Object');

const computer = {
    name: 'MacBook',
    isOn: false,
    turnOn() {
        this.isOn = true;
        return `The ${this.name} is On`;
    },
    turnOff() {
        this.isOn = false;
        return `The ${this.name} is Off`;
    }
};

const server = {                // here server is array like obj
    name: 'Dell PowerEdge T30',
    isOn: false
};

let ans = computer.turnOn.apply(server);  // same "turnOff"  // apply()
console.log(ans);

// 3) Using the apply() append an array to another ------------------

let arr = [1, 2, 3];
let numbers = [4, 5, 6];

arr.push.apply(arr, numbers); // here "push" is "Array" method naa
console.log(arr); 


// --------------------------------------------------------------------

//      bind()              it will similar as above "just return an "function" as output"

console.log('');
console.log('bind() function');

const justfunc = myfun.bind(user1,"cricket", "black") 
justfunc()

// Another Example ------------------------------------------ bind()

console.log('');
console.log('bind() another ex');

let runner = {
    name : "Runner",
    run : function(speed){
        console.log(this.name + ' runs at ' + speed + " hr");
    }
}

let flyer = {
    name : "Flyer",
    fly : function(speed){
        console.log(this.name + ' fly at ' + speed + " hr");
    }
}

const ans2 = runner.run.bind(flyer,56);
const ans3 = flyer.fly.bind(flyer,50);
ans2();
ans3();


var j = "j";
console.log('');








