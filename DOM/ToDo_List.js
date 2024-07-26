
// to see the windows object in javascript use "dir"
console.dir(document);


//      ** NOTE **      for event listing" like click and other all we must have to use "querySelector"

const formTODO = document.querySelector(".form-todo");
// --------

// const inputTextArea = document.querySelector(".form-todo input[type='text']");
// console.log("Am--> ",inputTextArea);

const inputTextArea = document.querySelector(".form-todo input")
console.log('your--> ',inputTextArea);      // above & this o/t same.
// --------

const todoSubmitBtn = document.querySelector(".form-todo .todoSubmitBtn");
console.log(todoSubmitBtn);
// --------

const todolist = document.querySelector(".todolist");
// --------


formTODO.addEventListener("submit", (e) =>{
    e.preventDefault();                         //   e.preventDefault();  will stop our page from reloading

    console.log("todolist ",todolist.innerHTML);
    
    const newTodoText = (inputTextArea.value);
    inputTextArea.value = "";
    
    const newLi = document.createElement('li')
    // newLi.classList.add("todolist");     // here we add class in "li"
    // newLi.classList.add("container");

    const newLiInnerHTML = `
    <span class="todotext ">${newTodoText}</span>
    <div class="todo-btn ">
        <button class="but done">Done</button>
        <button class="but remove">Remove</button>
    </div>`;

    newLi.innerHTML = newLiInnerHTML;
    
    todolist.append(newLi);

    
})

todolist.addEventListener("click",(e)=>{
    console.log('an ',e.target.classList);
    
    if(e.target.classList.contains("done")){
        const getSpan = e.target.parentNode.previousElementSibling;
        // const getSpan = e.target.parentNode.parentNode;      // also work
        // console.log('target ', e.target);
        // console.log('parent ', e.target.parentNode);
        
        console.log(getSpan);
        getSpan.style.textDecoration = "line-through";
    }

    if(e.target.classList.contains("remove")){
        const getli = e.target.parentNode.previousElementSibling.parentNode;
        // console.log('target ', e.target);
        // console.log('parent ', e.target.parentNode);

        // console.log("Amgetli ",getli);
        getli.remove();     // remove is property of classList i.e we able to use here
    }   
})

// ---------------------------------------------------------------------------------------
// https://www.geeksforgeeks.org/how-to-set-smooth-scroll-after-clicking-the-link-using-javascript/
// This code for smooth scrolling while clicking on the  "home" "login" "singUp" button on top.

let anchorSelector = 'a[href^="#"]';
     
    // Collect all such anchor links
    let anchorList = 
        document.querySelectorAll(anchorSelector);
        
    // Iterate through each of the links
    anchorList.forEach(link => {
        link.onclick = function (e) {

            // Prevent scrolling if the
            // hash value is blank
            e.preventDefault();
        
            // Get the destination to scroll to
            // using the hash property
            let destination = 
                document.querySelector(this.hash);
        
            // Scroll to the destination using
            // scrollIntoView method
            destination.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });

// ---------------------------------------------------------------------------------------

















