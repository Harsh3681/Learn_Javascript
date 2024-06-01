


// to see the windows object in javascript use "dir"
console.dir(document);




// but instead of above we have another methods also like 

// document.createElement()
// append
// prepend
// remove
// before
// after


//  #####################

//          Here below we create new "li" element

const todolist = document.querySelector(".todolist")
console.log(todolist);


const newTodoitem = document.createElement("li")    // by using it we can create new attribute , ele, tag so on....
newTodoitem.textContent= "NewTodo";
newTodoitem.classList.add("myLi");      // at the same time here we can also add the "class" ---> "myLi" to the new "li" element

//          append


todolist.append(newTodoitem)        // append add after the previous ele i.e "Todo1"

console.log(todolist);


//          prepend

todolist.prepend(newTodoitem)        // append add before the previous ele i.e "Todo1"

//          remove

const try_to_remove = document.querySelector(".todolist li");
try_to_remove.remove(); // here it will remove the first "li" ele


//         before

todolist.before(newTodoitem);   // it will add "li" item before the "ul" 


//         after

todolist.after(newTodoitem);   // it will add "li" item before the "ul" 




