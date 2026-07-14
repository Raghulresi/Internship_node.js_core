const promise1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promises1");
    },1000)
});
const promise2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("promises2");
    },500)
});

Promise.race([promise1,promise2])
.then(result => console.log(result))
.catch(error => console.log(error.message));