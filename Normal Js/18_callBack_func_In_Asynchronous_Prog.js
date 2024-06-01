
// to run this file just uncomment the js file in 18.html

//  Callback, 2) Callback Hell 3) Pyramid Of DOM 
// ############### Callback Function in "Asynchronous Programming" ###############


const head1 = document.querySelector(".heading1");
console.log(head1);

const head2 = document.querySelector(".heading2");
const head3 = document.querySelector(".heading3");
const head4 = document.querySelector(".heading4");
const head5 = document.querySelector(".heading5");
const head6 = document.querySelector(".heading6");
const head7 = document.querySelector(".heading7");
const head8 = document.querySelector(".heading8");

// --------------------------------------------------------

//      ###### Below Callback Code ###### Simple but time consumming

// setTimeout(()=>{
//     if(head1){
//         head1.textContent = "Heading 1";
//         head1.style.color = "red";
//     }
// },1000); 

// setTimeout(()=>{
//     head2.textContent = "Heading 2";
//     head2.style.color = "blue";
// },2000);


// -------------------------------------------------------

// Make it easy by creating an "Collback Hell/ pyramid of DOM"
// see Below

setTimeout(()=>{
    head1.textContent = "Heading 1";
    head1.style.color = "blue";
    setTimeout(()=>{
        head2.textContent = "Heading 2";
        head2.style.color = "green";
        setTimeout(()=>{
            head3.textContent = "Heading 3";
            head3.style.color = "yellow";
            setTimeout(()=>{
                head4.textContent = "Heading 4";
                head4.style.color = "orange";
                setTimeout(()=>{
                    head5.textContent = "Heading 5";
                    head5.style.color = "wheat";
                    setTimeout(()=>{
                        head6.textContent = "Heading 6";
                        head6.style.color = "silver";
                        setTimeout(()=>{
                            head7.textContent = "Heading 7";
                            head7.style.color = "gray";
                            setTimeout(()=>{
                                head8.textContent = "Heading 8";
                                head8.style.color = "pink";
                            },1000);
                        },2000);
                    },1000);
                },2000);
            },2000);
        },1000);
    },1000);
},2000);

// ------------------------------------------------------------



