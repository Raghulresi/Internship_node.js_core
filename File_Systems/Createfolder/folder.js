const fs = require("fs");
fs.mkdir("folder1",(err)=>{
    if(err) console.log(err);
    else console.log("folder created");
})