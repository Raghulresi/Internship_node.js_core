const fs = require("fs").promises;
async function name() {
    try{
        const data = await fs.readFile("test.txt","utf-8");
        console.log(data);
    }
    catch(error)
    {
        console.log(new Error("operation failed"));
    }
}
name();