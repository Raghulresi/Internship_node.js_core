
const data = new Promise((resolve,reject)=>{
    const status = Math.random()<0.5;
    if(status){
        resolve("opereation successful");
    }
    else{
        reject(new Error("operation failed"));
    }
});
data
.then(result => console.log(result))
.catch(error => console.log(error.message))
.finally(()=> console.log("process end"));