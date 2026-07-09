const fs = require("fs");
try{
    fs.unlinkSync("test.txt");
    console.log("file deleted");
}
catch(err)
{
    console.log(err);
}