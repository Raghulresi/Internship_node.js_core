const fs = require("fs");
fs.exists("test.txt",(exist)=>{
    console.log(exist);
})