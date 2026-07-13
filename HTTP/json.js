const http = require("http");
const PORT = 3030;
http.createServer((req,res)=>{
    res.setHeader("Content-Type", "text/json");
    res.end(JSON.stringify({
        name : "Raghul P",
        age : 21
    }));
}).listen(PORT, "localhost", () => {
    console.log(`Port running at http://localhost:${PORT}/`);
});
