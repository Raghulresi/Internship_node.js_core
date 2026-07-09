const fs = require("fs");
try{
    fs.readdirSync(".");
    console.log("folder readed");
}
catch(err)
{
    console.log(err);
}