const fs = require("fs");
try{
    fs.appendFileSync("test.txt","appended!! by appendFileSync\n");
    console.log("file appended!!");
    fs.readFile("test.txt","utf8",(err,data)=>{
        if(err) console.log(err);
        else console.log(data);
    });
}
catch(err)
{
    console.log(err);
}


