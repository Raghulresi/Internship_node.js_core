const fs = require("fs");
try{
    fs.readFileSync("test.txt","utf8");
    console.log("no error to handle exception");
}
catch(err)
{
    console.log(err.message);
}