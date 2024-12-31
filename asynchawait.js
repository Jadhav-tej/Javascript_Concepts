function api(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("wether data")
        }, 2000);
        resolve(200)
    })
}


async function getdata() {
    await api()
}

getdata()

