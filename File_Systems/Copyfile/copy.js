const fs = require("fs");
fs.copyFile("test.txt","new.txt",(err)=>{
    if(err) console.log(err);
    else console.log("file Copied from test.txt -> new.txt");
})