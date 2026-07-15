const express = require("express");
const router = express.Router();
router.use((req,res,next)=>{
   console.log("Router Middleware");
   next();
});
router.get("/",(req,res)=>{
   res.send("Users");
});