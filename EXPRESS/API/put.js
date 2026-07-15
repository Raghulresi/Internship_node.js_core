const express = require("express");
const app = express();
const port = 8080;
app.put("/",(req,res)=>{
    res.json({
        message:"rest API PUT!!"
    });
});
app.listen(port,"localhost",()=>{
    console.log(`server running at http://localhost:${port}`);
})