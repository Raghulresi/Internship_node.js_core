const express = require("express");
const app = express();
app.get("/:id",(req,res)=>{
    console.log(req.params.id);
    res.send("Student ID received");
})
app.listen(8080);