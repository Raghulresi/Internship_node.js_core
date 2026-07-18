const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
app.post("/login", (req, res) => {
    const { username, password } = req.body;
    if (username === "raghul" && password === "1234") {

        const accessToken = jwt.sign(
            { username: username },
            "secretKey",
            { expiresIn: "15m" }
        );

        res.json({
            message: "Login Successful",
            accessToken: accessToken
        });

    } else {
        res.status(401).json({
            message: "Invalid Username or Password"
        });
    }
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});