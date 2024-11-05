
// TWT_TOKEN creatation flow
                                    
/*    

        ----------------------                   --------------------------------                    ----------------------------------------  
        |     User Data      |                   |  JWT m/c which convert user   |                   |              O/t JWT_TOKEN           |
        |  Ex. xyz@gmail.com | =================>|  plain text to "JWT" token    | =================>|  eyJhbGciOiJIUzI1NiJ9.aGFyc2hhb      |
        |____________________|                   |  having "Secrete key" given   |                   |  EBnbWFpbC5jb218MTIzNDU.VXVNmZe8     |
                                                 |  by user.                     |                   |   PNTRlrjopJzcqFl5fwNl2_yf0ACH-KYnCP4|    
                                                 |  Secrete key = "x1y2z3Se[h&7" |                   |______________________________________|  
                                                 |_______________________________|   
                                                  

*/


var jwt = require('jsonwebtoken');

const secret = "mexyz1x2y3z";  // <-- it can be anything u want this was secreate for our "blackbox" which will convert our normal text to "jwt" token 

// -------------------------------------------------------------------
// "sign()" <-- use to generate JWT token

// encrypting the "String" 
let ans1 = jwt.sign("harshal@gmail.com|12345", secret);
console.log('ans1 ',ans1);

// encrypting the "Obj" 
let ans2 = jwt.sign({
        name : "harshal.sonawane21@pccoepune.org",
        password : 12345
}, secret);
console.log('ans2 ',ans2);

// -------------------------------------------------------------------
// "verify()" <-- use to verify JWT token same of origin give String

jwt.verify(ans2, secret, (err, originalString) =>{  // (err, originalString) <--- call back
        console.log('orginal ',originalString); 
})

// -------------------------------------------------------------------

