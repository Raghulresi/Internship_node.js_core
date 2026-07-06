const fs = require("fs");
console.log("non blocking state start");
fs.readFile("text.txt","utf8" ,(error,data)=>{ //does not wait for this  operation , this is not in sync manner
    if (err) throw err;
    console.log("non blocking");
});
console.log("non blocking state ended");