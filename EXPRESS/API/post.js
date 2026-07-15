const express = require("express");
const app = express();
const port = 8080;
app.post("/",(req,res)=>{
    res.json({
        message:"rest API POST!!"
    });
});
app.listen(port,"localhost",()=>{
    console.log(`server running at http://localhost:${port}`);
})