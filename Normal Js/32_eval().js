
// The eval() method evaluates or executes an argument.

// If the argument is an expression, eval() evaluates the expression. If the argument is one or more JavaScript statements, 
// eval() executes the statements.

// eval can handdle String expression also.

let x = 10;
let y = 20;
let text = "x * y";
let result = eval(text);
console.log('res ',result);


// --------------------------------- Without "eval()"

let x1 = 10;
let y2 = 20;
let ans = x1 * y1;
console.log('Ans ',ans);


