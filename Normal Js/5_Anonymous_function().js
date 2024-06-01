
"use strict"

// ########### anonymous functions ###########

// An anonymous function is a function without a name

let show = function() {
    console.log('Anonymous function');
};

show();

// ------------------------------------------------------
// Using anonymous functions as arguments

setTimeout(function() {
    console.log('Execute later after 1 second')
}, 1000);

// ------------------------------------------------------





