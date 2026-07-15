const express = require("express");
const app = express();
app.get("/",(req,res)=>{
    console.log(req.query.name);
    res.send("Student ID received");
})
app.listen(8080);