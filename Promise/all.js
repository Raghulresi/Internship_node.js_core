const fs = require("fs").promises;
const promise1 = Promise.resolve("first result");
const promise2 = fs.readFile("test.txt","utf8");
const promise3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("promise3");
    },1000)
})
Promise.all([promise1,promise2,promise3])
.then(result => console.log(result))
.catch(error => console.log(error.message));