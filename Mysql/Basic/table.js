const mysql = require("mysql");
const con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Raghul#123",
    database:"node_db"
});

con.connect((err)=>{
    if(err) console.log(err.message);
    else
    {
        console.log("database connected to node_db");
        const createtable = `create table if not exists node_db_table1(
                             table1_id int primary key,
                             table1_name varchar(20))`;
        con.query(createtable,(err)=>
        {
            if(err) console.log(err.message);
            else console.log("Table node_db_table1 is created");
        })
    }
})