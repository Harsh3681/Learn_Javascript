
"use strict"

let product = {
    name : "Tshirt",
    price : 500,
    rating : {
        stars : 4,
        review : 8765,
    }
};

console.log('Type Check ',typeof product);
console.log('Product ', product);

//  Convert "Object" to "String"

let str = JSON.stringify(product);  //  "JSON.stringify()"
console.log('Ans ', str);
console.log('type ',typeof str);

//  Convert "String" to "Object"

let newObj = JSON.parse(str);   //     "JSON.parse()"
newObjconsole.log('type ',typeof newObj);













