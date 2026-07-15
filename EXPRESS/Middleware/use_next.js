const express = require("express");
const app = express();
app.use((req,res,next)=>{
    console.log("Middleware");
    next();
})
app.get("/",(req,res)=>{
    res.send("Hello");
})
app.listen(8080);