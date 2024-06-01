

            // ####  NOTE ####
//  This File run in 18.html see it



const head1 = document.querySelector(".heading1");
console.log(head1);

const head2 = document.querySelector(".heading2");
const head3 = document.querySelector(".heading3");
const head4 = document.querySelector(".heading4");
const head5 = document.querySelector(".heading5");
const head6 = document.querySelector(".heading6");
const head7 = document.querySelector(".heading7");
const head8 = document.querySelector(".heading8");


function myDOMWithPromises(element, txt, clr, time){
    return new Promise((myresolve, myreject)=>{

        setTimeout(()=>{
            if(element){
            element.textContent = txt;
            element.style.color = clr;
            myresolve();
        }else{
            myreject("Element not found !!!");
        }
        },time)
    })
}


//  to consume the promises we do below thing with "then"

myDOMWithPromises(head1,"Blue ","blue",1000)
.then(()=>{     // we can do for "heading 2" with "then" this only posiible because of here the funct "myDOMWithPromises" return an "promise" that's why it's poissible
    return myDOMWithPromises(head2,"Pink ","pink",1000)
})
.then(()=>{     // we can do for "heading 2" with "then" this only posiible because of here the funct "myDOMWithPromises" return an "promise" that's why it's poissible
    return myDOMWithPromises(head3,"Purple","purple",1000)
})
.then(()=>{     // we can do for "heading 2" with "then" this only posiible because of here the funct "myDOMWithPromises" return an "promise" that's why it's poissible
    return myDOMWithPromises(head4,"Wheat","wheat",1000)
})
.then(()=>{     // we can do for "heading 2" with "then" this only posiible because of here the funct "myDOMWithPromises" return an "promise" that's why it's poissible
    return myDOMWithPromises(head5,"Silver","silver",1000)
})
.then(()=>{     // we can do for "heading 2" with "then" this only posiible because of here the funct "myDOMWithPromises" return an "promise" that's why it's poissible
    return myDOMWithPromises(head6,"Yellow","yellow",1000)
})
.then(()=>{     // we can do for "heading 2" with "then" this only posiible because of here the funct "myDOMWithPromises" return an "promise" that's why it's poissible
    return myDOMWithPromises(head7,"Orange","orange",1000)
})
.then(()=>{     // we can do for "heading 2" with "then" this only posiible because of here the funct "myDOMWithPromises" return an "promise" that's why it's poissible
    return myDOMWithPromises(head8,"Brown","brown",1000)
}) 
// below for reverse 😃
.then(()=>{     // we can do for "heading 2" with "then" this only posiible because of here the funct "myDOMWithPromises" return an "promise" that's why it's poissible
    return myDOMWithPromises(head8,"hello","black",1000)
}) 
.then(()=>{     // we can do for "heading 2" with "then" this only posiible because of here the funct "myDOMWithPromises" return an "promise" that's why it's poissible
    return myDOMWithPromises(head7,"hello","black",900)
}) 
.then(()=>{     // we can do for "heading 2" with "then" this only posiible because of here the funct "myDOMWithPromises" return an "promise" that's why it's poissible
    return myDOMWithPromises(head6,"hello","black",800)
}) 
.then(()=>{     // we can do for "heading 2" with "then" this only posiible because of here the funct "myDOMWithPromises" return an "promise" that's why it's poissible
    return myDOMWithPromises(head5,"hello","black",700)
}) 
.then(()=>{     // we can do for "heading 2" with "then" this only posiible because of here the funct "myDOMWithPromises" return an "promise" that's why it's poissible
    return myDOMWithPromises(head4,"hello","black",600)
}) 
.then(()=>{     // we can do for "heading 2" with "then" this only posiible because of here the funct "myDOMWithPromises" return an "promise" that's why it's poissible
    return myDOMWithPromises(head3,"hello","black",500)
}) 
.then(()=>{     // we can do for "heading 2" with "then" this only posiible because of here the funct "myDOMWithPromises" return an "promise" that's why it's poissible
    return myDOMWithPromises(head2,"hello","black",400)
}) 
.then(()=>{     // we can do for "heading 2" with "then" this only posiible because of here the funct "myDOMWithPromises" return an "promise" that's why it's poissible
    return myDOMWithPromises(head1,"hello","black",300)
}) 
.catch((error)=>{
    alert(error)
})



