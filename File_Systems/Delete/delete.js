const fs = require("fs");

fs.unlink("test.txt",(err)=>{
    if(err) console.log(err);
    else console.log("deleted");
})

//test.txt must be present else it will throw  err