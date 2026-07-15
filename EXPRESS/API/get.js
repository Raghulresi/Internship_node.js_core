const express = require("express");
const app = express();
app.get("",(req,res)=>{
    res.json({
        message:"rest API: GET!!"
    });
});
app.listen(3030);