
"use strict"

const pro = document.querySelector("#product");
const amount = document.querySelector("#amount");
const clear = document.querySelector("#clear");
const submit = document.querySelector("#submit");
// const getTotal = document.querySelector("#get-total");
// const showme = document.querySelector(".create-table");
const createTable = document.querySelector(".create-table");
const totalRaw = document.querySelector(".ambody");

const totalProd = document.getElementById('total-prod').querySelector('b');
const totalAmount = document.getElementById('total-amount').querySelector('b');

// localStorage.clear()

document.addEventListener('DOMContentLoaded', function() { // "DOMContentLoaded" see file

    function toggleButtons() {
        const productValue = pro.value.trim();
        const amountValue = amount.value.trim();
        const isFormValid = productValue && amountValue;

        clear.disabled = !isFormValid;
        submit.disabled = !isFormValid;
        // getTotal.disabled = !isFormValid;
    }

    pro.addEventListener('input', toggleButtons);
    amount.addEventListener('input', toggleButtons);

    // Initial button state check
    toggleButtons();

    // Handle form submission
    submit.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the form from submitting

        // Disable all buttons after submit
        clear.disabled = true;
        submit.disabled = true;
        // getTotal.disabled = true;

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


function sumOfAmount(){
    var sum= 0;
    for(let i=0; i<localStorage.length; i++){
        // console.log(`key ${localStorage.key(i)} & value ${localStorage.getItem(localStorage.key(i))}`);
        sum+= parseInt(localStorage.getItem(localStorage.key(i)));
    }
    // console.log('sum ',sum);
    return sum;
}


var count = 0;
submit.addEventListener("click",(e)=>{
    e.preventDefault();
    if(submit){
        createTable.classList.remove('hidden');
        var amountInInteger = parseInt(amount.value);

        if(localStorage.getItem(pro.value)){
            const previousProductAmount =localStorage.getItem(pro.value);
            localStorage.setItem(pro.value, parseInt(previousProductAmount) + amountInInteger);
        }
        else{
            localStorage.setItem(pro.value, amount.value);
        }
    }
    // const newLiInnerHTML = `
    // <div class="totalCost">Your total expences ${sumOfAmount()}</div>`;
    // showme.innerHTML= newLiInnerHTML;

    const newtr = document.createElement('tr');
    newtr.classList.add("just-tr");
    const newLiInnerHTML = `
            <td>${count+1}</td>
            <td>${pro.value}</td>
            <td>${amount.value}</td> 
    `;
    newtr.innerHTML= newLiInnerHTML;
    totalRaw.append(newtr);

    totalProd.textContent = localStorage.length;
    totalAmount.textContent = sumOfAmount();

    count+=1;
})

clear.addEventListener("click",(e)=>{
    e.preventDefault();
    if(clear){
        pro.value = '';
        amount.value = '';
    }
})

// getTotal.addEventListener("click",(e)=>{
//     e.preventDefault();
//     if(getTotal){
//         const newtr = document.createElement('tr');
//         const newLiInnerHTML =
//         `
//             <td id="total-id"><b>Total</b></td>
//             <td id="total-prod"><b>${localStorage.length}</b></td>
//             <td id="total-amount"><b>${sumOfAmount()}</b></td>
//         `
//         newtr.innerHTML= newLiInnerHTML;
//         totalRaw.append(newtr);
//     }
// })


totalRaw.addEventListener("click", (e)=>{
    
})







