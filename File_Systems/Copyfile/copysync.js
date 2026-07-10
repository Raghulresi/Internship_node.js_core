const fs = require("fs");
try{
    fs.copyFileSync("new.txt","test.txt");
    console.log("file copied from new.txt -> test.txt");
}
catch(err){
    console.log(err);
}