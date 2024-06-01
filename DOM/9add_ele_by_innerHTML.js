// to see the windows object in javascript use "dir"
console.dir(document);


const todolist = document.querySelector(".todolist")
console.log(todolist.innerHTML);

todolist.innerHTML += `<li class="inner">New Todo</li>`   // here we add new todo along with previous todo and "we can also add "class" along with "element" by this operator --->    ``  "

todolist.innerHTML += "<div class=\"todotext\">Todo1</div>"
console.log(todolist);






