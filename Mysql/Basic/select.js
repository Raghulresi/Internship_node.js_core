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
        const select = `select * from node_db_table1`;
        con.query(select,(err,result)=>{
            if(err) console.log(err.message);
            else console.log(result);
        })

        const where = `select table1_name from node_db_table1 where table1_id = 1`;
        con.query(where,(err,result)=>{
            if(err) console.log(err.message);
            else console.log(result);
        })
    }
})