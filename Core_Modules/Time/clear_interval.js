let count = 0;
let id = setInterval(() => {
    count++;
    console.log(count);
    if(count==3)
    {
        clearInterval(id);
    }
},1000);