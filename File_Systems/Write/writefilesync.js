const fs = require("fs");
fs.writeFileSync("test.txt","file is written by writeFileSync");
fs.readFile("test.txt","utf8",(err,data)=>{
    console.log(data);
})