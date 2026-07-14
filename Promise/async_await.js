async function greet()
{
    console.log("Starting....");
    const res = await operation();
    console.log(`result : ${res}`);
    return res;
}

function operation()
{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("operation completed");
        })
    })
}

greet()
.then(result => console.log(result))
.catch(error => console.log(error.message));