


function MeTryPromiseAndTimeOut(){
    return new Promise((myResolve, myReject)=>{
        const val = true;   // try by make it "false"
        setTimeout(()=>{
            if(val){
                myResolve();
            }else{
                myReject();
            }
        },1000)
    })
}

MeTryPromiseAndTimeOut().then(()=>{
    console.log("Resolve/Consume!!!")
}).catch(()=>{
    console.log('Reject!!!');
})


// 2:22:55