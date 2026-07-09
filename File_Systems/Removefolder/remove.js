const fs = require("fs");
fs.rm("folder1", { recursive: true },(err)=>{
    if(err) console.log(err);
    else console.log("file removed");
})