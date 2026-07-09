const fs = require("fs");

fs.appendFile("test.txt","appended!! by appendFile\n",(err)=>
    {
    if(err)
    {
        console.log(err);
        return;
    }

    console.log("Appended Successfully");

    fs.readFile("test.txt","utf8",(err,data)=>
    {
        if(err)
        {
            console.log(err);
            return;
        }
        console.log(data);
    });
});