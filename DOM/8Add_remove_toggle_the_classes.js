

// to see the windows object in javascript use "dir"
console.dir(document);



//  "classList" is one of the IMP.


const selectNow = document.querySelector(".todo-sec")
console.log(selectNow);

console.log(selectNow.classList);

console.log(selectNow.classList.contains("todo-sec")); // show class contain or Not.

// ------------------------------------------------------------------------
// Add Claas &&& Remove Class

// selectNow.classList.remove("container") // see differ on chrome page after uncomment it.

// selectNow.classList.add("just_try_to_change_background"); // here we add our css class runTime
// -------------------------------------------------------------------------


//              toggle <----- it will "add" class if not present "remove" if "present"

selectNow.classList.toggle("just_try_to_change_background")     // here first it "just_try_to_change_background" the class "meh2" becz it was present 

selectNow.classList.toggle("just_try_to_change_background")     // here first it "add" the class "just_try_to_change_background" becz it was not present ``````````````````````````````````````````````````````


// selectNow.classList.value = "harsh"     // here we can change the class name directly to "harsh"
// console.log(selectNow.classList.values());




//  ####### Note #######
// video on js of harshit time stamp 5:22:24