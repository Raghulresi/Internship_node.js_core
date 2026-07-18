const express = require("express");
const multer = require("multer");
const app = express();
const upload = multer({ dest: "uploads/" });
app.post("/upload", upload.single("image"), (req, res) => {
    res.send("File Uploaded");
});
app.listen(3000);