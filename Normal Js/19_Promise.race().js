

"use strict"

/*
following creates 2🤟 promises
one resolves in 1 second👆 and the other resolves in 2 seconds.👇

Because the first promise👆 resolves slower than the second one,👇 
the "Promise.race()" resolves with the value from the second promise:
becz 2nd promise👇 is "faster"

*/ 

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('The first promise has resolved');
        resolve(10);
    }, 2 * 1000);

});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('The second promise has resolved');
        resolve(20);
    }, 1 * 1000);
});


Promise.race([p1, p2]).then(value => console.log(`Resolved: ${value}`)).catch(reason => console.log(`Rejected: ${reason}`));











