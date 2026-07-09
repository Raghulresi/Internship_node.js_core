const fs = require("fs");
try{
    fs.rmSync("folder2",{recursive:true});
    console.log("file removed");
}
catch(err)
{
    console.log(err);
}