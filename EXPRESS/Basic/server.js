const express = require("express");
const app = express();
app.get((req,res)=>{
    res.sent("Hello express");
});
app.listen(3030,()=>{
    console.log("server running");
});
