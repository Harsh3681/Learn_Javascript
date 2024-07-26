
"use strict"


var arr = [
    {
        item : "ladoo",
        category:"food",
        price : 5,
        time:"12/3/2002"
    },
    {
        item : "Chikki",
        category:"food",
        price : 15,
        time:"10/9/2012"
    },
    {
        item : "Soda",
        category:"drink",
        price : 95,
        time:"19/1/2018"
    },
    {
        item : "Water",
        category:"drink",
        price : 35,
        time:"2/12/2017"
    }
]

// Here we need to calculate price As per "category" get "Match"
// And show outPut as follow. 👇

// [
//     {
//         category:"drink",
//         TotalSpend : 130        //<------is total cost after calculation
//     },
//     {
//         category:"food",
//         TotalSpend : 20   
//     }
// ]

var myobj= {}
arr.map((i)=>{
    myobj[i.category];
    if(myobj[i.category]){
        myobj[i.category] = myobj[i.category] + i.price;
    }else{
        myobj[i.category] = i.price;
    }
})
const ans = []
var getAllKeys = Object.keys(myobj);
for(var i=0; i<getAllKeys.length; i++){
    const justObj = {
        category : getAllKeys[i],
        TotalSpend : myobj[getAllKeys[i]]
    };
    ans.push(justObj);
}
console.log(ans);









