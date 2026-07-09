const console = require("console");
const fs = require("fs");

fs.writeFile("test.txt","Hello by writeFile",(err)=>
{
    console.log("file written");
    
    fs.readFile("test.txt","utf8",(err,data)=>{
        if(err) console.log(err);
        else console.log("After : "+data);
    });

    
});