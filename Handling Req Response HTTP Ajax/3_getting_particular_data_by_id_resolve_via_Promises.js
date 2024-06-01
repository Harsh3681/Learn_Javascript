

//  Here we just try to get the specific "data" by just putting it's "Id" to "URL"


const URL = "https://jsonplaceholder.typicode.com/posts";

function MeReuestingData(methos, url){
    return new Promise((myresolve, myreject) => {
        const xhr = new XMLHttpRequest;
        xhr.open(methos, url);

        xhr.onload = (()=>{
            if(xhr.status>=200 && xhr.status<300){
                // const data = JSON.parse(xhr.response);
                // console.log(data);
                myresolve(xhr.response);
            }else{
                myreject(new Error("Something went wrong"));
            }
        })

        xhr.onerror = (()=>{
            myreject(new Error("NET Chalu Kara!!!"));
        })

        xhr.send();
    })
}

//  Here below we do the "Chaining"
//  becz we know the this below funct "MeReuestingData" always return an "pure "resolved" promises"
//  and that promises give us resolve data which we can used with "then" easily 
// And this step perform again an again until the "function" return "promises"  


MeReuestingData("GET",URL)
.then((response)=>{
    const data = JSON.parse(response);
    return data;
}).then((data)=>{
    const ID = data[7].id;
    return ID;
}).then((ID)=>{
    const newURL = `${URL}/${ID}`;
    return MeReuestingData("GET", newURL);
}).then((newResponse)=>{
    const newData = JSON.parse(newResponse);
    console.log(newData);
})
.catch((error)=>{
    console.log(error);
})



