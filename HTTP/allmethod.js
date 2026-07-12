const http = require("http");
const PORT = 3030;
const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });

    switch (req.method) {
        case "GET":
            res.end("GET Request - Fetching data");
            break;

        case "POST":
            res.end("POST Request - Creating data");
            break;

        case "PUT":
            res.end("PUT Request - Updating entire data");
            break;

        case "PATCH":
            res.end("PATCH Request - Updating partial data");
            break;

        case "DELETE":
            res.end("DELETE Request - Deleting data");
            break;

        default:
            res.writeHead(405, { "Content-Type": "text/plain" });
            res.end("Method Not Allowed");
    }
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});