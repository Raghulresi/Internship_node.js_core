//if else error handling is for asynchronous
const fs = require("fs");
fs.readFile("test.txt","utf8",(err)=>{
    if(err){
        console.log(err.message);
    }
    else{
        console.log("file is present");
    }
})