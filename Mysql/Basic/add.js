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
        const data = `insert into node_db_table1(table1_id,table1_name) values(1,"Raghul")`;
        con.query(data,(err)=>{
        if(err) console.log(err.message);
        else
        {
            console.log("data added to the table");
        }
    })
    }
})