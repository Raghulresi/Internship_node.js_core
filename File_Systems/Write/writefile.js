    const fs = require("fs");
 
    //writing a file
    fs.writeFile("test.txt","file is written by writeFile",(err)=>
        {
        console.log("file writed");
    });

    fs.readFile("test.txt","utf8",(err,data)=>
    {
        console.log("After writing a file :" +data);
    })