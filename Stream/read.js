const fs = require("fs");
const st = fs.createReadStream("test.txt","utf8");
st.on("data",(chunk)=>{
    console.log(chunk);
})