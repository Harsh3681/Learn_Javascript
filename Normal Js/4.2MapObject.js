

// Its An "Map Object"

// here it store data in "order fashion"

// Store "key value pair"  (just like "Object") 
// duplicate "key" not allow

// diff bet "Map" and "Map Obj"

// "Here map have only" "String" or "symbol" as 👉 "key"

// we can use "array" "number" "string" as 👉 "Key" here in "MapObj"


// Map is a data structure that stores key-value pairs. It is similar to an object, but the main difference is that Map allows keys of any type.
//  map work as like as object but it is not object
//  map is not allow duplicate key

// we cant used length with map
// we cant used key with map
// we cant used value with map


// differnce between object and map is that 
// "we can use any type of value in map" but in "object we can use only "string" as a key"
// "we can use index in map" but in "object we can use only
// "we can use key value pair in map" but in "object we can use only value"


const myMap = new Map();  // we can create an empty map 

console.log(myMap);


// add value in map

// myMap.set("key","value");  <---- this way we can set "Key Value Pair"

myMap.set("name","Harsh","baba","bebo");    //<--- "baba","bebo" not possible it consider only 1st 2 ele i.e ---> "name","Harsh"
console.log('myMap ', myMap);

myMap.set("age",25);
myMap.set("name","Harsho");  // we can add duplicate key in map

myMap.set([1,2,3,4],[6,5,7,8]);  // we can add array in map

myMap.set({1: "one"}, "likethis")

console.log(myMap);  // printing map
console.log("\nType Of Map ->> ", typeof myMap);

// -----------------------------------------------------------------
// printing an element by for loop

console.log('');
console.log('Array of "key & Value"');

for(let i of myMap){  // here it will print an array of key and value
    console.log(i)
}
// -----------------------------------------------------------------

console.log('');
console.log('Array of "key"');
for(let [i] of myMap){  // print an array of "key" only
    console.log(i)
}
// -----------------------------------------------------------------

console.log('');
console.log('Array of "Value"');
for(let [_,j] of myMap){  //print an array "value" only
    console.log(j)
}
// -----------------------------------------------------------------

console.log('');
console.log('"destructuring"');

for(let [k,v] of myMap){        // here we use destructuring in map to print key and value in myMap
    console.log(k,v);
}
// -----------------------------------------------------------------

console.log('');
console.log("Print value by key " + myMap.get("age"));  // printing value by key


var per = {
    id :1,
    name: "harsh"
}

var mp = new Map(Object.entries(per));  // we can convert object to map by using Object.entries() method

mp.set(per,{gen:"Male", age:25})  /* here we add "value" to key here key is an "const per = {
    id :1,
    name: "harsh"
}" */

console.log('per Age below');

console.log(per.name);  // we can access value by using dot operator
console.log(mp.get(per));  // we can access value by using dot operator
console.log();
console.log('Me "mp"');
console.log(mp);




