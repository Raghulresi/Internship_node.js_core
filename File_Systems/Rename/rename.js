const fs = require("fs");
fs.rename("test.txt","new.txt",(err)=>{
    if(err) console.log(err);
    else console.log("File Renamed");
})