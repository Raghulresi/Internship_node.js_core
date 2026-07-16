const mysql = require("mysql");
const con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Raghul#123",
    database:"nodedb"
});

con.connect((err)=>{
    if(err) console.log(err.message);
    else
    {
        con.query(
        "create database if not exists node_db",
        (err)=>{
            if(err) console.log(err.message);
            else console.log("Database node_db created");
        }
    )}
})