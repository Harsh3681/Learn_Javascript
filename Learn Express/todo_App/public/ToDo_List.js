
const formTODO = document.querySelector(".form-todo");
const inputTextArea = document.querySelector(".form-todo input");
const todolist = document.querySelector(".todolist");

const todoSubmitBtn = document.querySelector(".form-todo .todoSubmitBtn");
console.log(todoSubmitBtn);
// --------
 
const fullData = async () => {
    try {
        const AllTodos = await fetch(`/todos`, {
            method: 'GET',
        });
        console.log('json ',AllTodos);
        
        const ans = await AllTodos.text(); // reads the request body and returns it as a promise that resolves with a "String".
        console.log('Withoutjson ',ans);
        if (ans) {
            const listTodo = JSON.parse(ans);
            listTodo.map((i) => {
                console.log('objId ',i._id);
                const newLi = document.createElement('li');
                newLi.setAttribute('data-id', i._id); // Include the id in the data attribute
                const newLiInnerHTML = `
                    <span class="todotext ">${i.title}</span>
                    <div class="todo-btn ">
                        <button class="but done">Done</button>
                        <button class="but remove">Remove</button>
                    </div>`;
                newLi.innerHTML = newLiInnerHTML;
                todolist.append(newLi);
                console.log('ui ', i.title);
            });
        }
    } catch (error) {
        console.error("Error fetching todos:", error);
    }
}

// Call fullData when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", fullData);


formTODO.addEventListener("submit", async (e) => {
    e.preventDefault();

    const newTodoText = inputTextArea.value;
    inputTextArea.value = "";

    const newTodo = {
        title: newTodoText,
        description: "" // You can modify this based on your requirements
    };

    try {
        const response = await fetch("/todos", { // here we fetch "/todos" route of backend
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newTodo)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const responseData = await response.text(); // convert fetch "response" into String
        // const responseData = await response.json(); // convert fetch "response" into String

        if (responseData) {
            const createdTodo = JSON.parse(responseData); // convert String into json
            const newLi = document.createElement('li');

            newLi.setAttribute('data-id', createdTodo._id); // here we set extra attribute "id" which we define in backend
            
            const newLiInnerHTML = `
                <span class="todotext ">${createdTodo.title}</span>
                <div class="todo-btn ">
                    <button class="but done">Done</button>
                    <button class="but remove">Remove</button>
                </div>`;
            newLi.innerHTML = newLiInnerHTML;
            todolist.append(newLi);

        } else {
            console.log("Empty response from server");
        }
    } catch (error) {
        console.error("Error adding todo:", error);
    }
});



todolist.addEventListener("click", async (e) => {
    e.preventDefault();

// 👉👉  for "done"    
    var check = e.target.classList.contains("done");
    if (check) {  
        const getSpan = e.target.parentNode.previousElementSibling;
        getSpan.style.textDecoration = "line-through";
        check = false;
    }

// 👉👉  for "Remove"   
    if (e.target.classList.contains("remove")) {

        const todoItem = e.target.closest('li');  // Find the nearest 'li' element here we already place our todo,& all buttons in "li"
        const todoId = todoItem.getAttribute('data-id');
       
        console.log('Removing to-do with id:', typeof Number(todoId));

        try {
            const response = await fetch(`/todos/${todoId}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log('Successfully deleted:', data);
            todoItem.remove();
        } catch (error) {
            console.error("Error deleting todo:", error);
        }
            
    }
});