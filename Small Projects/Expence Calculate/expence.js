
"use strict"
// input field -----------
const pro = document.querySelector("#product");
const amount = document.querySelector("#amount");
const delete_id = document.querySelector("#delete_id");
// -----------

// buttons -----------
const clear = document.querySelector("#clear");
const submit = document.querySelector("#submit");
const Show_Data = document.querySelector("#show_data");
const delete_data_button = document.querySelector("#delete_data");
// -----------

// const showme = document.querySelector(".create-table");
const createTable = document.querySelector(".create-table");
const am_totalRaw_body = document.querySelector(".ambody");

const totalProd = document.getElementById('total-prod').querySelector('b');
const totalAmount = document.getElementById('total-amount').querySelector('b');


// localStorage.clear()

// ----------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', function() { // "DOMContentLoaded" see file

    function toggleButtons() {
        const productValue = pro.value.trim();
        const amountValue = amount.value.trim();
        const isFormValid = productValue && amountValue;

        clear.disabled = !isFormValid;
        submit.disabled = !isFormValid;
        // Show_Data.disabled = !isFormValid;
    }

    pro.addEventListener('input', toggleButtons);
    amount.addEventListener('input', toggleButtons);

    // Initial button state check
    toggleButtons();

    // Handle form submission
    submit.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent the form from submitting

        // Disable all buttons after submit
        clear.disabled = true;
        submit.disabled = true;
        // Show_Data.disabled = true;

        // Clear input fields
        pro.value = '';
        amount.value = '';

        // Re-enable buttons when input fields have values again
        pro.addEventListener('input', toggleButtons);
        amount.addEventListener('input', toggleButtons);
        
    });

    // Handle clear button click
    clear.addEventListener('click', function() {
        pro.value = '';
        amount.value = '';
        toggleButtons();
    });
});

// ----------------------------------------------------------------------
function sumOfAmount(){
    var sum= 0;
    for(let i=0; i<localStorage.length; i++){
        console.log(`key ${localStorage.key(i)} & value ${localStorage.getItem(localStorage.key(i))}`);
        sum+= parseInt(localStorage.getItem(localStorage.key(i)));
    }
    // console.log('sum ',sum);
    return sum;
}

// ----------------------------------------------------------------------
var count = 0;
submit.addEventListener("click",(e)=>{
    e.preventDefault();
    var told = false;
    if(submit){
        createTable.classList.remove('hidden');
        var amountInInteger = parseInt(amount.value);
        
        if(localStorage.getItem(pro.value)){
            told=true;
            const previousProductAmount =localStorage.getItem(pro.value);
            localStorage.setItem(pro.value, parseInt(previousProductAmount) + amountInInteger);
        }
        else{
            localStorage.setItem(pro.value, amount.value);
        }
    }

// -------------------------
// const newLiInnerHTML = `
// <div class="totalCost">Your total expences ${sumOfAmount()}</div>`;
// showme.innerHTML= newLiInnerHTML;
// -------------------------

    const newtr = document.createElement('tr');
    newtr.classList.add("just-tr");
    newtr.classList.add("container");
    const newLiInnerHTML = `
            <td>${(localStorage.length-1)+1}</td>
            <td>${pro.value}</td>
            <td>${amount.value}</td> 
    `;

    newtr.innerHTML= newLiInnerHTML;
    const amTotalTr = document.getElementById('am-total-tr');

// here we need to build the change product value at run time
    if(told==true){
        window.location.reload();   // it help to reload the page
    }else{
        am_totalRaw_body.insertBefore(newtr, amTotalTr);
    }

// ## NOTE ## parentNode.insertBefore(newNode, existingNode); ---> here we try to insert before "existingNode"

// ------
// this below code for add containt at total <b> here inside bold </b>
    totalProd.textContent = localStorage.length;
    totalAmount.textContent = sumOfAmount();
// ------

    count+=1;
})

// ----------------------------------------------------------------------

var co = 0;
var Count_Show_Data =0;

Show_Data.addEventListener("click",(e)=>{
    e.preventDefault();
    if(Show_Data){
        show_data_funct();      // here call that funct
    
// this is to disable Total button
        Count_Show_Data+=1;
        if(Count_Show_Data==1){
            Show_Data.disabled = true;
        }else{
            Show_Data.disabled = false;
        }
// -----------
    }
})

// ----------------------------------------------------------------------

function show_data_funct(){
    if(localStorage.length!=0){
        createTable.classList.remove('hidden');
        for(let i=0; i<localStorage.length; ++i){

            if(localStorage.key(i) && localStorage.getItem(localStorage.key(i))){

                const newtr = document.createElement('tr');
                newtr.classList.add("just-tr");
                newtr.classList.add("container");
                const newLiInnerHTML = `
                        <td>${co+1}</td>
                        <td>${localStorage.key(i)}</td>
                        <td>${localStorage.getItem(localStorage.key(i))}</td> 
                `;

                newtr.innerHTML= newLiInnerHTML;
                const amTotalTr = document.getElementById('am-total-tr');
                am_totalRaw_body.insertBefore(newtr, amTotalTr);
            }
            co+=1;
        }
        // ------
        // this below code for add containt at total <b> here inside bold </b>
            totalProd.textContent = localStorage.length;
            totalAmount.textContent = sumOfAmount();
        // ------
    }else{
        alert("Insert Some value !!!");
    }
}

// ----------------------------------------------------------------------

delete_data_button.addEventListener("click",(e)=>{
    e.preventDefault();
    const id = (delete_id.value)-1;
    if(delete_data_button){
        localStorage.removeItem(localStorage.key(id));
        window.location.reload();   // it help to reload the page
    }else{
        alert("Insert Id !!!");
    }
})

// ----------------------------------------------------------------------
// am_totalRaw_body.addEventListener("click", (e)=>{
    
// })







