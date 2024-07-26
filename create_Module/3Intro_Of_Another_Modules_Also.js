
// types of modules in node js are following
// 1) "build in modules" ---> like "fs" , "os" , "http" , "path" , "events" , "querystring" , "url" , "util" , "stream" , "crypto" , "zlib" , "dns" , "net" , "readline" , "string_decoder" , "timers" , "tty" , "dgram" , "child_process" , "cluster" , "assert" , "buffer" , "console" , "constants" , "domain" , "events" , "http" , "https" , "module" , "os" , "path" , "process" , "punycode" , 

// 2) "file modules"  --> like "file_handling.js" , "file_handling_2.js" , "file_handling_3.js" , sharing the data throught one file to another file 

// 3) "third party module" --> like superheroes like express , lodash , moment , async , request , chalk , yargs , nodemon , validator , etc etc ...


const os = require('os');

console.log(os.hostname())

console.log(os.platform())

console.log(os.cpus())

console.log(os.arch())

console.log(os.type())

console.log(os.tmpdir())


console.log(os.machine())

console.log(os.networkInterfaces())

console.log(os.freemem())
console.log(os.totalmem())

console.log(os.version())

console.log(os.userInfo())


