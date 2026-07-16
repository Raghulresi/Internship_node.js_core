const mysql = require("mysql");
const con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"1234",
    database:"mydb"
});
console.log("Making the connection");