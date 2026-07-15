const express = require("express");
const app = express();
const port = 8080;
app.patch("/",(req,res)=>{
    res.json({
        message:"rest API PATCH!!"
    });
});
app.listen(port,"localhost",()=>{
    console.log(`server running at http://localhost:${port}`);
})