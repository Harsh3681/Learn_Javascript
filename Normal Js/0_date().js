

const d = new Date();
console.log('date ',d.getDate());
console.log('date ',d.getDay());
console.log('date ',d.getFullYear());
console.log('date ',d.getHours());
console.log('date ',d.getMilliseconds());
console.log('date ',d.getTime());
console.log('date ',d.getUTCDate());
console.log('date ',d.getUTCDay());
console.log('date ',d.toDateString());
console.log('date ',d.toISOString());
console.log('date ',d.toJSON());
console.log('date ',d.toLocaleDateString('en-GB')); // it will give the date according that contry
console.log('date ',d.toLocaleDateString('en-US'));
console.log('date ',d.toUTCString());


console.log('');
// --------------------------------------------------
function date(d = today()) {
    console.log(d);
}

function today() {
    return (new Date()).toLocaleDateString("en-US");
}
today();
date();







