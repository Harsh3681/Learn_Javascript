





// to see the windows object in javascript use "dir"
console.dir(document);



//  querySelectorAll will give an "Static list"
//  getElementBySomething will give an "Live list" // here something is "class" "id" "tag"


// 1) "Static list"     <-- prefred more

const todoList_li_item = document.querySelectorAll(".todoList li")       // here we select "li" by "querySelectorAll" 
const newitem = document.createElement("li")
newitem.textContent = "TODOLIST5";
const todoList = document.querySelector(".todoList")
todoList.append(newitem);

console.log(todoList_li_item);      // we say it static becz when we add new ele it was still not show any changes in actual list size increase "see in consol" it was showing only "4" evenif we add one li in it.



// 2) "Live list"

// const todoList_li_item = document.querySelector(".todoList")
// const getli = todoList_li_item.getElementsByTagName("li")        // here we select the "li" by tag name
// const newitem = document.createElement("li")
// newitem.textContent = "TODOLIST 5";
// todoList_li_item.append(newitem);

// console.log(getli);      // we say it "Live" becz when we add new ele it was show  changes in actual list size increase "see in consol" it was showing "5"  total "li" evenif we add one li in it.











