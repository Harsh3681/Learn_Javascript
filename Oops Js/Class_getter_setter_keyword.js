

//  "get" and "set" are keywords in js

//   "get" <---- used to convert the any "Function" into "Property" of that "Class"






class Person{
    constructor(Fname, LName,age){
        this.Fname = Fname;
        this.LName = LName;
        this.age = age;
    }

    static justTryFunct(){          // "static" keyword.
        console.log('I am inside Person Class');
    }

    myFullName(){                       // without "get"
        return `${this.Fname} ${this.LName}`;
    }

    // getter
    get myName(){               // with "get"
        return `${this.Fname} ${this.LName}`;
    }

    // setter
    set myName(takeName){       // with "set"
        const [firstName, lastName] = takeName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }

}
Person.justTryFunct();
const stu1 =new Person("Rajesh","Patil",234);   // cerate "stu1" obj
// ----------------------------------------------------------------------------------
//  ####### get #######

console.log(stu1);
console.log(stu1.myFullName);
console.log("using get ",stu1.myName);    // now here "myName()" just act as "Property" evenif it is "funct ()" of a "Class Person. becz of "get"

//  And "myFullName()" is an "funct" it return String and we can store that string and can modified it easily,

var ans = stu1.myFullName();
ans+=" Happy dada!!!";
console.log('Actual Ands ---> ',ans); // like this

// ----------------------------------------------------------------------------------
//  ####### set #######
//  By using "set" we can set an entire Name by single line.

stu1.myFullName = "Rajaram Baba";
console.log(stu1);

// ----------------------------------------------------------------------------------
//  ####### static #######
//  created satic function we can call without creating "Object"
//  this static function is directly related with resp to "class"
//  we can call it along with class name.

Person.justTryFunct();  // <-- not showing "Error"
stu1.justTryFunct();  // ❌ <-- Error becz it is not normal funct & it is "static" funct becz it "tied" to the class itself i.e "Person", not to instances of the class



