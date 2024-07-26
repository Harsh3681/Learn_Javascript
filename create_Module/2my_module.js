

exports.add =  function add(a,b){
    return a+b
}

exports.sub = function sub(a,b){
    return a-b
}

exports.greet = function greet(){
    console.log("Good Morning")
}

module.exports = {          // by using and mentioning all module inside curlly brases we can access that all module in any file
    add : this.add,
    sub : this.sub,
    greet : this.greet,
    name : "Harsh",
    Clg : "PCCOE",
    contact : "9578999334"
}