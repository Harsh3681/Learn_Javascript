//              %%%%%% Map Function %%%%%%%

//  NOTE  -  if we perform the operation on array using "map"
//          At that time the "Map" will return an "Array" 
//          that's why we need to store the "array" as an o/t

let meArray = [2,3,4,5,2]

const output = (i) =>{
    return i*i;
}

console.log('Here below map return array as output');

console.log('Without arraow funct');
const MapArrayOutput1 = meArray.map(output);
console.log(MapArrayOutput1); 


console.log('By arraow fun below');
const MapArrayOutput2= meArray.map((me)=>{return me*me});
console.log(MapArrayOutput2); 



// ---------------------------------------------


// ###############   Cloning   ################

// we can clone map by using "spread operator" and "Object.assign()" method  {...mp} or Object.assign({},mp)

const obj = {
    key1 : "value1",
    key2 : "value2"
}
let onk = Object.assign(obj); // it also another wayto clone

// way1
let obj2 = {...obj};  // it will create a new object and copy all the properties of obj to obj2

// way2
// const obj2 = obj;      // becz of "const" we are not able to change it's value if we change it to "var" then it's possible and totally copy is possible .

obj.key3 = "value3";    // here we add new key value pair in obj which will now "don't make any change in obj2"


console.log(obj)
console.log(obj2)
console.log('onk-> ',onk);















