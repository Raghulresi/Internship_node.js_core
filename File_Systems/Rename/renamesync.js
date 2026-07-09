const fs = require("fs");
try{
    fs.renameSync("new.txt","new2.txt");
    console.log("file renamed");
}
catch(err)
{
    console.log(err);
}