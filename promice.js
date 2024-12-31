const getpromisce=()=>{

    return new Promise((resolve,reject)=>{
        console.log("I am promise")
        resolve("sucess")
    })
}
let promise= getpromisce();
promise.then((res)=>{
    console.log("Promise fulfield",res)
})
promise.catch((err)=>{
    console.log("rejected",err)
})