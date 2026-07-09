const fs = require("fs");
fs.readFile("test.txt","utf8",(err,data)=>
{
    if(err) console.log(err);
    else console.log(data);
});

//readFile is a asynchronous process so it uses the callback fn like (()=>{})
