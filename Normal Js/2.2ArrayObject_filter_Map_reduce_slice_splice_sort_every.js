
// "use strict"
//------------------------------------------------------------



//      #######  Object destruction  ########
// creating an array storing an multiple "obj"
//  i.e  #######  Array Object #######

// it is just "Obj"
const hs = {name:"bhabi",age:34};
console.log("Name "+hs.name+ " age "+hs.age);
console.log(`${hs.name} and ${hs.age}`);

// it is "Array Obj"
const me = [
    {name :"ajit", salary:278282, age:23},
    {name :"Abhinav", salary:747482, age:24},
    {name :"achal", salary:766477, age:25}
]

const me2=[] = me; // here me2 is one array we create
console.log('Hi');
console.log((me2));

console.log(me[0].name);
console.log(me[0].salary);
console.log(me[0].age);

console.log('Access data diagonally');  // 👇👇👇👇

const [{name},{salary} ,{age}] =me;

console.log(name);     // here we directly access an "first raw name"
console.log(salary);      // here we c accessing all the data 😀
console.log(age);      // and "last raw age"


// Also we can change there names
me[0].name = "DF";
console.log('New Name -> ',me[0].name);


//------------------------------------------------------------


// Another Ex with Obj      #### Below Array Object ####

const emp = [
    {name : "jayesh", age:22},
    {name : "Mahesh", age:24},
    {name : "Rakesh", age:26},
    {name : "Pretesh",age:28},
    {name : "Hitesh", age:20}
]

emp.forEach(function(emp){          // here create anonymous funct and pass an obj to it
    console.log(emp.name+" "+emp.age);
});
// or
// emp.forEach((emp)=>{
//     console.log(emp.name+" "+emp.age);
// })


//------------------------------------------------------------


// ############### Map Function(Method)  ###############


const Arr = [3,4,5,7,2];

const sqr = function(Arr){     // here we are storing directly the function inside variable "sqr"
    return(Arr*Arr);
}
console.log("Here is type of sqr ---> ",typeof sqr);        // generate an error

const a = Arr.map((sqr));       // here we are applying "map" function on array by applying the function "sqr"
console.log("Me sqr ans "+ a);
console.log("Type "+ typeof a);


//-------------------------------------------------

// if we want to return first name of employee from obj

const user = function(e){
    return e.name;
}
const agu = ((u)=>{
    return u.age;
});

const b = emp.map(user);         // here we used above declared "emp array"
console.log("First Name of our Emp ", (b));

const pi = emp.map(agu);         // here we used above declared "emp array"
console.log("Age of Emp by anonymous function", (pi));

//------------------------------------------------------------


// ############### Filter Function(Method)  ###############

const ak = [1,2,3,4,5,6,7,8,9];

const OnlyEven = function(a){         // not mandatory to pass same name of an array as an parameter to the function
    return a%2!==0;
    // return a%2===0;
}
const EvenOrNot = ak.filter(OnlyEven);
console.log("Filter ",(EvenOrNot));



const myans = ak.filter((ju)=>{         // single line answer as above
    return ju%2!==0;
})
console.log("Filtru ",(myans));


// here filter function return the value of "iseven" function which is true or false how it work is like this if we pass "1" to the function "iseven" then it return "false" because "1%2" is not equal to "0" so it return "false" and filter function store that value in "EvenOrNot" array and if we pass "2" to the function "iseven" then it return "true" because "2%2" is equal to "0" so it return "true" and filter function store that value in "EvenOrNot" array

//------------------------------------------------------------


// ############### Reduce Function(Method)  ###############

// Used above Array "ak"

//           %%%%%%%   """Here we Calculate Total Price Of Product"    %%%%%%%%


const userCard = [
    {prodId : 1, proName :"Shev", procost:9282},
    {prodId : 2, proName :"Chiwada", procost:7474},
    {prodId : 4, proName :"Ladu", procost:52562},
    {prodId : 883, proName :"Moti", procost:8484},
]

const totalCost = userCard.reduce((totalPrice, CurrentPrice) => {
        return totalPrice + CurrentPrice.procost;
}, 0)  // here we pass "zero(0)" for  "totalPrice"
console.log("Here is Total price Of all product ", totalCost);
 
//  reduce function take two parameter "totalPrice" and "CurrentPrce" // working of reduce function is like "for loop" here we are adding all the price of product then return the total price and store it in "totalCost" variable 0 is the initial value of "totalPrice" because we don't have any value in "totalPrice" variable at the starting of the program 


//------------------------------------------------------------


// ############### Sort Function(Method)  ###############

const arr = [22,345,7,2,65,8,1];

//  %%%%%%%%%% look at the below o/t %%%%%%%%%%%%%

//console.log(arr.sort());    // O/t  [1, 2, 22, 345, 65, 7, 8]   we don't want this kind of output 
// sort function do the sort by assuming this array as an "String" that why we get this o/t

// for correct O/t below
// here the sort function also able to take an "call back" function

const mysort = arr.sort((a,b) =>{
    return a-b;     // ascending sorting (-)sign 
    // return a+b;     // descending sorting (+)sign 
})

console.log("Me Sort() Fun")
console.log(mysort);

// now we take on e real life example 
// like we do sorting of product on flipkard and amazon see below

const productsArray = [
    {prodId : 1, proName :"Shev", procost:35},
    {prodId : 23, proName :"Chiwada", procost:48},
    {prodId : 4, proName :"Ladu", procost:477},
    {prodId : 883, proName :"Moti", procost:335},
    {prodId : 33, proName :"lapy", procost:744},
    {prodId : 63, proName :"shooe", procost:234},
    {prodId : 82, proName :"cap", procost:55},
]

console.log('Slice Operation');
const kk = productsArray.slice(1); // Returns a copy of a section of an array. For both start and end, a 👉 "negative index" can be used -2 refers to the second to last element of the array.

console.log("me: ", kk)

const HighToLow = productsArray.sort((a,b) => {    
    return b.procost - a.procost;
})
console.log("Product Array procost is Sorted  ")
console.log(HighToLow);

// const LowToHigh = productsArray.sort((a,b) => {          // without slice(0) "not" work
const LowToHigh = productsArray.slice(0).sort((a,b) => {          // without slice(0) "not" work
    return a.prodId + b.prodId;     // by "prodId"  try
})
console.log("Product Array Sort ")
console.log(LowToHigh);

// here sort work on the basis of "procost" property of "productsArray" object 
//  here slice(0)  --> mean start from index 0 and upto length-1;
// slice(0) is used to copy the array "productsArray" and store it in "HighToLow" and "LowToHigh" array 
// if we not used slice(0) then it will sort the original array "productsArray" and we don't want that what happen if we sort the original array then it will sort the array and we can't use the original array again for sorting. 



//------------------------------------------------------------
// ############### Every Function(Method)  ###############

// here is function return "true" or "False"

// here we check that its element is satisfied the condition or not if it is satisfied then it will return the value of that element and store it in "aboveGivenPrice" array by 
// every() function 

// here we used productsArray array which is declared above

console.log("Me Every Fun")
const checkEveryElement = productsArray.every((a) => a.procost>100);
console.log(checkEveryElement);

//------------------------------------------------------------

// ############### Some Function(Method)  ###############

// here is function return "true" or "False"

console.log("Me Some Fun")
const forsome = productsArray.some((p) => p.procost>100);    // instead of "p" we can take anything
console.log(forsome);

// here some work as like "every" function but the difference is that "some" function return the value of element which is satisfy the condition and store it in "forsome" array and if no element satisfy the condition then it return "false" and store it in "forsome" array.

//------------------------------------------------------------

//  ############### perfect Number  or not  ###############

// write an code to check given number is 
perfectNumber = (num) => {
    let sum = 0;
    for(let i=1; i<num; i++){
        if(num%i===0){
            sum += i;
        }
    }
    if(sum===num){
        return true;
    }
    else{
        return false;
    }
}
console.log("Perfect or not "+perfectNumber(15));  // false
// console.log(perfectNumber(6));  // true

// perfect number is a number which is equal to the "sum of its positive divisors" , that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself) example 6 is a perfect number because 6=1+2+3 becuase 1,2,3 are the proper positive divisors of 6 and 1+2+3=6

//------------------------------------------------------------

//  ############### fill Function(Method)  ###############

// fill function is used to fill the array with the given value
const example = [1,2,3,4,5,6,7,8,9,10];
example.fill(0, 2, 5);  // here we fill the array with "0" value from index 2 to 5 ( 2 include 5 exclude here)
console.log("MeFill "+example);

//  here fill take argument as "value", "start index", "end index" // here we fill the array with "0" value from index 2 to 5


//------------------------------------------------------------

//  ############### Splice Function(Method)  ###############

const myArray = [1,2,3,4,5,6,7,8,9,10];
myArray.splice(2, 6, 0);  // here we delete the element start from index 2 upto index "6" element means "3,4,5,6,7,8" <--- 👈 and fill "0" at that place

console.log("new Array of Splice function is below");
console.log(myArray);

//  here splice take argument as "start index", "delete count", "add element" // here we delete the element from index 2 to 3 and add the element 0,0,0 from index 2 to 3

//  another example of splice function is below 
spliceExample = (arr, start, deleteCount, ...items) => {
    let newArr = [];
    for(let i=0; i<start; i++){
        newArr.push(arr[i]);
    }
    
    for(let i=0; i<items.length; i++){
        newArr.push(items[i]);
    }

    for(let i=start+deleteCount; i<arr.length; i++){
        newArr.push(arr[i]);
    }
    return newArr;
}

const arr2 = [1,2,3,4,5,6,7,8,9,10];
const newArr = spliceExample(arr2, 2, 3, 0, 0, 0);
console.log("new Array of Splice function is below");
console.log(newArr);

// here we delete the element from index 2 to 3 and add the element 0,0,0 from index 2 to 3 then return the new array and store it in "newArr" array and print it on the console by using "console.log(newArr)". 

//---------------------------------------------------------------------

//  ############### find Function(Method)  ###############

// Here we used it with productsArray and find out the Product which has id "4"

//  An d it will return an "Obj"

let findme = productsArray.find((pro) => pro.prodId==4 )
console.log("Get Requ Product details ",findme)


//------------------------------------------------------------

//  ############### Set Function(Method)  ###############

//  in set we can pass any "iterable" means "set" or "array" or "String" etc etc

    const ar = [3,4,12,2,2,4,6,67]
    const arrr = new Array(ar);
    const set = new Set(ar); 
    set.add(ar);
    console.log("After Converting Array to set ",set)
    console.log("See diff + and ",", "+set)
    console.log("Me Set ",arrr)
    console.log("Me Set "+arrr)

//------------------------------------------------------------


const ah = [2,42,67,4,22,78,8]
var t=4;
var element = 0;
let ans = (ar ,tar) =>{
    for (let index = 0; index < ar.length; index++) {
        if(ar[index]===tar){
            return index;
            
        }
    }
    return -1;
}
const ag = (ans(ah,t));
console.log(ag);





//------------------------------------------------------------
// 8:14

console.log(8n)