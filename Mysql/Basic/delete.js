const mysql = require("mysql");
const con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Raghul#123",
    database:"node_db"
});
con.connect((err)=>{
    if(err) console.log(err.message);
    else{
        const del = `delete from node_db_table1 where table1_id =  1`;
        con.query(del,(err)=>{
            if(err) console.log(err.message);
            else console.log("value deleted");
        })
    }
})