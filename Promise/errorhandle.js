function fetch(){
    return new Promise((resolve,reject)=>{
        reject(new Error("operation failed"));
    })
}
fetch()
.then(result => console.log(result))
.catch(error => console.log(error.message));