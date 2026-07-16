const mysql = require("mysql");
const con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Raghul#123",
    database:"nodedb"
});

con.connect((err)=>{
    if(err) console.log(err.message);
    else console.log("Connection Established");
})