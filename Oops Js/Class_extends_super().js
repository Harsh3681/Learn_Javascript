


// Let's see 
//      "extends" keyword
//      "super()" function.



class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    // we can create "funct" in "class" directly see below.

    about(){
        return `Animal name ${this.name}and age ${this.age}`;
    }

    isAbove18(){
        return (this.age>=18);
    }

    singAsong(){
        return "Lalalalalal !!!";
    }
}

class dog extends Animal{
    constructor(name, age, speed){

        super(name, age);          // "super()" pass req value to Parent Class

        this.speed = speed;
    }
    dogSpeed(){
        return `our dog speed is ${this.speed}`;
    }

    singAsong(){
        return "Bhaoooo Bhaoooo !!!";
    }
}

const stu1 = new dog("Harshit",21,98);
console.log(stu1);
console.log(stu1.dogSpeed());
console.log(stu1.singAsong());

console.log(stu1.isAbove18());




