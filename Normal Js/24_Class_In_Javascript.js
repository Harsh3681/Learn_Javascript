
//  Here we see combination of 
//  ####  Class  ####
//  ####  new keyword ####


class myClass{
    constructor(Fname, Lname, age){
        this.Fname = Fname;
        this.Lname = Lname;
        this.age = age;
    }
    // we can create "funct" in "class" directly see below.

    about(){
        return `Student name ${this.Fname} ${this.Lname} and age ${this.age}`;
    }

    isAbove18(){
        return (this.age>=18);
    }

    singAsong(){
        return "Lalalalalal !!!";
    }

}

// OR ------------------------------------------------------------------------

let myVariable = class myClass{     // we can also store class in "Variable"
    constructor(Fname, Lname, age){
        this.Fname = Fname;
        this.Lname = Lname;
        this.age = age;
    }
    // we can create "funct" in "class" directly see below.

    about(){
        return `Student name ${this.Fname} ${this.Lname} and age ${this.age}`;
    }

    isAbove18(){
        return (this.age>=18);
    }

    singAsong(){
        return "Lalalalalal !!!";
    }

}

// ------------------------------------------------------------------------


const stu1 = new myClass("Harshit","Khandelwal",22);
const stu2 = new myClass("jay","Bhay",23);
const stu3 = new myClass("Umang","Rajput",25);


console.log(stu1.about());
console.log(stu1.isAbove18());
console.log(stu1.singAsong());

console.log('');
const stu4 = new myVariable("Naresh","Khandelwal",22);
const stu5 = new myVariable("Abhay","Bhay",23);
const stu6 = new myVariable("Renu","Rajput",25);

console.log(stu4.about());
console.log(stu5.isAbove18());
console.log(stu6.singAsong());

// ---------------------------------------------------------------
// Check created "Obj" is "instance" of Class or Not

console.log("stu1 is instanceof myClass ",stu1 instanceof myClass);
console.log("stu1 is instanceof Object ",stu1 instanceof Object);















