const fs = require("fs");
try{
    const data =  fs.statSync("test.txt");
    console.log(data.size);
}
catch(err)
{
    console.log(err);
}