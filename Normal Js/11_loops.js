
const arr1 = ["sun","moon","mars", "earth"]
console.log(arr1);


   //          ######      "for "of" loop"     #####
//     "for "of"  return an "actual" values 

for( let plan of arr1){
    console.log(plan);
}


// ----------------------------------------------------------

console.log('\n');


    //          ######      "for "in" loop"     #####
    //       "for "in"  return an "actual" values of "Index"

for(let p in arr1){
    console.log(p);  
}


// ----------------------------------------------------------


 // ############### Function with foreach loop  ###############


 const arr = [8,3,2,4];

 console.log("\ni Am simple funct ");
 
 function multi(arr){
     for(let i=0; i<arr.length; i++){
         console.log("2 * "+arr[i] +" = "+arr[i]*2);
     }
 }
 
 multi(arr);
 
 console.log("\nAm foreach 1");
 
 // here "arr" is am array that we declered above
 
 arr.forEach(function(i){                  // here we are create an anonomus funct which don't have any name
     console.log("2 * "+i +" = "+i*2);
 })
 
 
 console.log("\nAm foreach 2");
 
 arr.forEach(kay => {            // here we are creating an arrow funct work same as that above 
 // here "key" act as element holder can take any name instead "kay"
     console.log("2 * "+kay +" = "+kay*2);
 });
 
console.log('\nMul');

 arr.forEach((num,ind) =>{      // whatever is at first place is actual "number" and 2nd place is "index."
    console.log(`${ind} is ${num}`);   
 })







