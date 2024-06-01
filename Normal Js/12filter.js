




// ############### Filter Function(Method)  ###############

const ak = [1,2,3,4,5,6,7,8,9];

const iseven = function(a){         // not mendetory to pass same name of an array as an parameter to the function
    return a%2!==0;
    // return a%2===0;
}


const EvenOrNot = ak.filter(iseven);
console.log("EvenOrNot ",iseven);       //<-- it return whole funct
console.log("EvenOrNot ",EvenOrNot);

const fil = ak.filter(jj =>{
    return jj%3!=0;
})

console.log('filter',fil);



const userCard = [
    {prodId : 1, proName :"Shev", procost:9282},
    {prodId : 2, proName :"Chiwada", procost:7474},
    {prodId : 4, proName :"Ladu", procost:52562},
    {prodId : 9, proName :"Ladu", procost:54962},
    {prodId : 3, proName :"Ladu", procost:53462},
    {prodId : 41, proName :"sotu", procost:52342},
    {prodId : 83, proName :"Moti", procost:8484},
    {prodId : 3, proName :"boti", procost:8084}
]

const mefil = userCard.filter((yu) =>{
    if(yu.proName!='Ladu' ){
        console.log(yu.prodId +" & "+ yu.procost);
    } 
})

console.log(mefil);




// here filter function return the value of "iseven" function which is true or false how it work is like this if we pass "1" to the function "iseven" then it return "false" because "1%2" is not equal to "0" so it return "false" and filter function store that value in "EvenOrNot" array and if we pass "2" to the function "iseven" then it return "true" because "2%2" is equal to "0" so it return "true" and filter function store that value in "EvenOrNot" array







