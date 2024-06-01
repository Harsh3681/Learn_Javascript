// to see the windows object in javascript use "dir"
console.dir(document);

console.log(window);
console.log(this);
console.log(this.window);




// get ele by Id
const mhead= (document.getElementById("main-heading"));
console.log(mhead)
console.log(mhead.textContent)  // we can also see "Hello" here evenif we hide on page
console.log(mhead.innerText)  // "innerText" help us to get only "actual text" show on page



console.log(document.getElementsByClassName("myheader"));

console.log(typeof document.getElementById("main-heading"));


// mhead.textContent = "New List";
// mhead.outerText = "Not Passible"
// mhead.tabIndex = 4;
// mhead.autofocus;
console.log(mhead)


