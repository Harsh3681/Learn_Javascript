

const d = new Date();
console.log('date ',d.getDate());
console.log('hr ',d.getHours());
console.log('min ',d.getMinutes());
console.log('Sec ',d.getSeconds());
console.log('MiliSec ',d.getMilliseconds());
console.log('Day of week ',d.getDay());
console.log('Year ',d.getFullYear());
console.log('Total hr outOff 24 ',d.getHours());
console.log('Milliseconds ',d.getMilliseconds());
console.log('stored time value in milliseconds ',d.getTime());
console.log('day-of-the-month ',d.getUTCDate());
console.log('day of the week ',d.getUTCDay());
console.log('date as a string value ',d.toDateString());
console.log('date Along with 24hr time ',d.toISOString());
console.log('Same as above ',d.toJSON());
console.log('dat According India ',d.toLocaleDateString('en-GB')); // it will give the date according that contry
console.log('date According USA  ',d.toLocaleDateString('en-US'));
console.log('day daye month yr time = ',d.toUTCString());


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







