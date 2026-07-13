const data = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const status = Math.random()>0.5;
        if(status)
        {
            resolve("operation completed successfully");
        }
        else{
            reject(new Error("operation failed"));
        }
    },1000)
});
data
.then(result => console.log(result))
.catch(error => console.log(error.message));