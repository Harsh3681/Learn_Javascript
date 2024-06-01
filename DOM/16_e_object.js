


// to see the windows object in javascript use "dir"
console.dir(document);


//      ** NOTE **      for event listing" like click and other all we must have to use "querySelector"

//        " Loops on keywords "

//          getting the text writeen on button

const Allbtn = document.querySelectorAll(".btn")    // "All" just for the "loops"

//         "for of" loop 

for(let btn of Allbtn){ 
    btn.addEventListener("click",(e)=>{     // here instead of "e" we cab write anything form "a" to "z"
        console.log(e.currentTarget);       // "currentTarget" same as that "this"  keyword
    });
}


for(let btn of Allbtn){ 
    btn.addEventListener("click",(e)=>{     // here instead of "e" we cab write anything form "a" to "z"
        console.log(e.target);       // "target" same as that "this"  keyword
    });
}


//              "target" and "currentTarget" both are almost same

