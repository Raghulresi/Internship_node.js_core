const express = require("express");
const app = express();
app.use(express.json());
app.post("/student", (req, res) => {
    console.log(req.body);
    res.send("Student Added");
});
app.listen(3000);
