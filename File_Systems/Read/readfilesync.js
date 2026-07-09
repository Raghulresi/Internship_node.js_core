const fs = require("fs");
const data = fs.readFileSync("test.txt", "utf8");
console.log(data);


//readFileSync is a synchronous process so it directly return result

/* wrong

const fs = require("fs");
fs.readFileSync("test.txt","utf8",(err,data)=>
{
    if(err) console.log(err);
    else console.log(data);
});

*/