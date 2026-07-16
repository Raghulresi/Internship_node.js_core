const mysql = require("mysql");
const con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Raghul#123",
    database:"node_db"
});

con.connect((err)=>{
    if(err) console.lof(err.message);
    const update = `update node_db_table1 set table1_name = "P Raghul" where table1_id = 1`;
    con.query(update,(err)=>{
        if(err) console.log(err.message);
        else console.log("value updated");
    })
})