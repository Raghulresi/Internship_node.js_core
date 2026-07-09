const fs = require("fs");
try{
    fs.mkdirSync("folder2")
    console.log("folder created");
}
catch(err)
{
    console.log(err);
}